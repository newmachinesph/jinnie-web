import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cp, mkdir, mkdtemp, readFile, writeFile, readdir, rm, lstat, unlink } from 'node:fs/promises';
import { resolve, relative, isAbsolute, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

test('media publication filters application code, preserves source bytes, locks builds, and rolls back failures', async () => {
  const temporaryRoot = resolve(tmpdir());
  const fixture = await mkdtemp(resolve(temporaryRoot, 'jinnie-media-build-'));
  const course = resolve(fixture, 'learn');
  const output = resolve(fixture, 'public/learn-assets');
  const staging = resolve(course, '.tmp/build');
  const lock = resolve(course, '.tmp/media-build.lock');
  function guard(path) {
    const rel = relative(fixture, resolve(path));
    assert.ok(rel && !isAbsolute(rel) && !rel.split(sep).includes('..'));
    return path;
  }
  async function put(path, data) {
    const destination = resolve(fixture, path);
    await mkdir(resolve(destination, '..'), { recursive: true });
    await writeFile(destination, data);
  }
  async function snapshot(directory) {
    const files = {};
    async function scan(path, prefix = '') {
      for (const entry of await readdir(path, { withFileTypes: true })) {
        const name = prefix + entry.name;
        if (entry.isDirectory()) await scan(resolve(path, entry.name), name + '/');
        else files[name] = createHash('sha256').update(await readFile(resolve(path, entry.name))).digest('hex');
      }
    }
    await scan(directory);
    return files;
  }
  function build(preload) {
    return spawnSync(process.execPath, [...(preload ? ['--import', pathToFileURL(preload).href] : []), resolve(course, 'scripts/build.mjs')], { cwd: fixture, encoding: 'utf8' });
  }
  try {
    await put('learn/content/index.js', 'export const paths = [{ lessons: [{ bites: [{}] }] }];');
    await put('learn/package.json', '{"type":"module"}');
    await put('learn/manifest.webmanifest', JSON.stringify({ start_url: '/', scope: '/', icons: [{ src: '/learn-assets/icon.svg' }] }));
    await put('learn/assets/icon.svg', '<svg xmlns="http://www.w3.org/2000/svg"/>');
    await put('learn/assets/audio/jobs.json', JSON.stringify([{ key: 'clip', lang: 'en' }]));
    await put('learn/assets/audio/manifest.json', JSON.stringify({ clip: { src: 'assets/audio/clip.mp3', lang: 'en', bytes: 1200 } }));
    await put('learn/assets/audio/clip.mp3', Buffer.alloc(1200, 42));
    await put('learn/assets/video/manifest.json', JSON.stringify(Object.fromEntries(Array.from({ length: 12 }, (_, index) => [index, { src: 'assets/video/intro.mp4', captions: 'assets/video/intro.vtt', poster: 'assets/video/intro.jpg', bytes: 1200 }]))));
    await put('learn/assets/video/intro.mp4', Buffer.alloc(1200, 17));
    await put('learn/assets/video/intro.vtt', 'WEBVTT\n');
    await put('learn/assets/video/intro.jpg', 'poster');
    await put('learn/assets/do-not-publish.js', 'throw new Error("not a public app");');
    await put('learn/index.html', '<title>Not the renderer</title>');
    await put('public/learn-content/index.html', 'retired runtime');
    await mkdir(resolve(course, 'scripts'), { recursive: true });
    await mkdir(resolve(fixture, 'scripts'), { recursive: true });
    await cp(new URL('../scripts/build.mjs', import.meta.url), resolve(course, 'scripts/build.mjs'));
    await cp(new URL('../../scripts/check-learn-content.mjs', import.meta.url), resolve(fixture, 'scripts/check-learn-content.mjs'));

    const initial = build();
    assert.equal(initial.status, 0, initial.stderr);
    const published = await snapshot(output);
    assert.ok(!Object.keys(published).some(name => /\.(js|html|css)$/.test(name)));
    assert.ok(!('audio/jobs.json' in published));
    assert.equal(published['audio/clip.mp3'], createHash('sha256').update(Buffer.alloc(1200, 42)).digest('hex'));
    await assert.rejects(lstat(resolve(fixture, 'public/learn-content')), { code: 'ENOENT' });
    const check = spawnSync(process.execPath, [resolve(fixture, 'scripts/check-learn-content.mjs')], { encoding: 'utf8' });
    assert.equal(check.status, 0, check.stderr);

    await put('learn/assets/audio/clip.mp3', 'truncated');
    assert.notEqual(build().status, 0);
    assert.deepEqual(await snapshot(output), published, 'Invalid media must not replace the last good output');
    await put('learn/assets/audio/clip.mp3', Buffer.alloc(1200, 42));

    await mkdir(staging, { recursive: true });
    await writeFile(resolve(staging, 'active-builder.txt'), 'must remain');
    await writeFile(lock, JSON.stringify({ pid: process.pid }));
    const competing = build();
    assert.notEqual(competing.status, 0);
    assert.match(competing.stderr, /Another Learn media build/);
    assert.equal(await readFile(resolve(staging, 'active-builder.txt'), 'utf8'), 'must remain');
    assert.deepEqual(await snapshot(output), published);
    await unlink(guard(lock));

    const preload = resolve(fixture, 'fail-publish.mjs');
    await writeFile(preload, `import fs from 'node:fs/promises'; import { syncBuiltinESMExports } from 'node:module'; const rename = fs.rename; fs.rename = async (from,to) => { if (from === ${JSON.stringify(staging)} && to === ${JSON.stringify(output)}) throw new Error('Injected publication failure'); return rename(from,to); }; syncBuiltinESMExports();`);
    const failed = build(preload);
    assert.notEqual(failed.status, 0);
    assert.match(failed.stderr, /Injected publication failure/);
    assert.deepEqual(await snapshot(output), published, 'A failed publication must restore the previous output');
    await assert.rejects(lstat(lock), { code: 'ENOENT' });
    await assert.rejects(lstat(staging), { code: 'ENOENT' });
  } finally {
    const rel = relative(temporaryRoot, fixture);
    assert.ok(rel.startsWith('jinnie-media-build-') && !rel.includes(sep) && !isAbsolute(rel));
    await rm(fixture, { recursive: true, force: true });
  }
});
