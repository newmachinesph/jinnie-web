import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import vm from 'node:vm';
const source = await readFile(new URL('../sw-next.js', import.meta.url), 'utf8');
function worker(overrides = {}) {
  const handlers = {};
  const context = {
    URL, Response, Request, Headers,
    self: { registration: { scope: 'https://example.test/learn' }, location: { origin: 'https://example.test' },
      addEventListener(type, callback) { handlers[type] = callback; }, clients: { claim: async () => {} } },
    ...overrides,
  };
  return { handlers, ...vm.runInNewContext(source + '\n({ranged, ESSENTIAL, isCourse, SHELL, MEDIA})', context) };
}
test('cached videos support normal, open-ended, suffix and invalid byte ranges', async () => {
  const { ranged } = worker();
  const response = () => new Response(new Uint8Array([0,1,2,3,4,5]), { headers: { 'Content-Type': 'video/mp4' } });
  for (const [range, expected] of [['bytes=1-3',[1,2,3]], ['bytes=3-',[3,4,5]], ['bytes=-2',[4,5]]]) {
    const result = await ranged(response(), range);
    assert.equal(result.status, 206);
    assert.deepEqual([...new Uint8Array(await result.arrayBuffer())], expected);
    assert.equal(result.headers.get('Content-Type'), 'video/mp4');
  }
  for (const range of ['bytes=99-100','bytes=4-1','bytes=-','bytes=0-1,3-4','bytes=-0']) assert.equal((await ranged(response(),range)).status,416);
});
test('essential media assets exist; Next owns the document and compiled UI', async () => {
  for (const file of worker().ESSENTIAL.filter(file => file.startsWith('/learn-assets/'))) {
    assert.ok((await stat(new URL('../assets/' + file.slice('/learn-assets/'.length), import.meta.url))).isFile(), file);
  }
  assert.ok(worker().isCourse('/learn/bite/example'));
  assert.ok(!worker().isCourse('/learning'));
  assert.ok(!worker().isCourse('/apps'));
  assert.doesNotMatch(source, /src\/app\.js|index\.html/);
});
test('migration retires only legacy course caches and keeps corrected Next media', async () => {
  const removed = [];
  const nextMedia = worker().MEDIA;
  const instance = worker({ caches: {
    keys: async () => ['jinnie-shell-/learn/-old', 'jinnie-media-/learn/:php-peso-v1', 'jinnie-media-/learn-content/', 'jinnie-media-/other/', nextMedia, 'unrelated-cache'],
    delete: async key => { removed.push(key); return true; },
  } });
  let completion;
  instance.handlers.activate({ waitUntil(promise) { completion = promise; } });
  await completion;
  assert.deepEqual(removed, ['jinnie-shell-/learn/-old', 'jinnie-media-/learn/:php-peso-v1', 'jinnie-media-/learn-content/']);
});
test('offline documents fall back to Next shell, Flight and unrelated requests do not', async () => {
  const instance = worker({
    fetch: async () => { throw new Error('offline'); },
    caches: { open: async () => ({ match: async key => key === '/learn' ? new Response('<html>Next shell</html>', { headers: { 'Content-Type': 'text/html' } }) : undefined }) },
  });
  let answer;
  instance.handlers.fetch({ request: { url: 'https://example.test/learn/bite/new?embed=native', method: 'GET', mode: 'navigate' }, respondWith(promise) { answer = promise; } });
  assert.equal(await (await answer).text(), '<html>Next shell</html>');
  for (const url of ['https://example.test/learn/paths?_rsc=unique', 'https://example.test/api/data', 'https://other.test/learn-assets/icon.svg']) {
    let intercepted = false;
    instance.handlers.fetch({ request: { url, method: 'GET', mode: 'cors' }, respondWith() { intercepted = true; } });
    assert.equal(intercepted, false, url);
  }
});
