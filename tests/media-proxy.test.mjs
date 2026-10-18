import assert from 'node:assert/strict';
import test from 'node:test';
import {GET, HEAD} from '../src/app/api/media/[...path]/route.ts';

const context = path => ({params: Promise.resolve({path})});
test('media keeps byte ranges and 206 without caching partial files as whole files', async t => {
  const previous = process.env.JINNIE_ASSET_ORIGIN;
  process.env.JINNIE_ASSET_ORIGIN = 'https://cdn.jinnie.ph';
  t.after(() => { if (previous === undefined) delete process.env.JINNIE_ASSET_ORIGIN; else process.env.JINNIE_ASSET_ORIGIN = previous; });
  const upstream = t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://cdn.jinnie.ph/learn-assets/audio/en/clip.mp3');
    assert.equal(options.headers.get('Range'), 'bytes=2-4');
    assert.equal(options.headers.get('Cookie'), null);
    assert.equal(options.cache, 'no-store');
    return new Response('abc', {status: 206, headers: {'Content-Range': 'bytes 2-4/10', 'Content-Length': '3', 'Content-Type': 'audio/mpeg'}});
  });
  const response = await GET(new Request('https://learn.jinnie.ph/learn-assets/audio/en/clip.mp3', {headers: {Range: 'bytes=2-4', Cookie: 'private=yes'}}), context(['audio', 'en', 'clip.mp3']));
  assert.equal(response.status, 206);
  assert.equal(response.headers.get('Content-Range'), 'bytes 2-4/10');
  assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
  assert.equal(await response.text(), 'abc');
  assert.equal(upstream.mock.callCount(), 1);
});

test('HEAD preserves file metadata without a response body', async t => {
  const previous = process.env.JINNIE_ASSET_ORIGIN;
  process.env.JINNIE_ASSET_ORIGIN = 'https://cdn.jinnie.ph';
  t.after(() => { if (previous === undefined) delete process.env.JINNIE_ASSET_ORIGIN; else process.env.JINNIE_ASSET_ORIGIN = previous; });
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    assert.equal(options.method, 'HEAD');
    return new Response(null, {headers: {'Content-Length': '4000', 'Content-Type': 'video/mp4'}});
  });
  const response = await HEAD(new Request('https://jinnie.ph/api/media/video/movie.mp4', {method: 'HEAD'}), context(['video', 'movie.mp4']));
  assert.equal(response.headers.get('Content-Length'), '4000');
  assert.equal(await response.text(), '');
});

test('the proxy cannot fetch paths outside the published audio/video folders', async t => {
  const previous = process.env.JINNIE_ASSET_ORIGIN;
  process.env.JINNIE_ASSET_ORIGIN = 'https://cdn.jinnie.ph';
  t.after(() => { if (previous === undefined) delete process.env.JINNIE_ASSET_ORIGIN; else process.env.JINNIE_ASSET_ORIGIN = previous; });
  const fetchMock = t.mock.method(globalThis, 'fetch', () => { throw new Error('must not fetch'); });
  for (const path of [['screens', 'home.png'], ['audio', '..', 'private'], ['video', 'https://example.com']]) {
    assert.equal((await GET(new Request('https://jinnie.ph/api/media/x'), context(path))).status, 404);
  }
  assert.equal(fetchMock.mock.callCount(), 0);
});
