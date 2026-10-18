import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
const dom = new JSDOM('<body><main></main></body>', { url: 'https://learn.jinnie.test/', pretendToBeVisual: true });
Object.assign(globalThis, { window: dom.window, document: dom.window.document, Node: dom.window.Node, CustomEvent: dom.window.CustomEvent, localStorage: dom.window.localStorage });
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: dom.window.navigator });
const { introVideo } = await import('../src/media.js');
const { dispose } = await import('../src/lifecycle.js');
const { set } = await import('../src/store.js');
const { paths } = await import('../content/index.js');
const { t } = await import('../src/i18n.js');

test('intro teaser waits for disclosure, preserves captions and offline files, and stops on close/navigation', async () => {
  set({ lang: 'tl', voice: false });
  let played = 0, paused = 0, unloaded = 0;
  const prototype = dom.window.HTMLMediaElement.prototype;
  const previous = { play: prototype.play, pause: prototype.pause, load: prototype.load, caches: globalThis.caches };
  prototype.play = function () { played++; return Promise.resolve(); };
  prototype.pause = function () { paused++; };
  prototype.load = function () { unloaded++; };
  let saved;
  globalThis.caches = { open: async () => ({ addAll: async urls => { saved = urls; } }) };
  try {
    const path = paths[0], root = introVideo(path);
    document.querySelector('main').append(root);
    const video = root.querySelector('video');
    assert.equal(root.tagName, 'DETAILS');
    assert.equal(root.open, false);
    assert.equal(played, 0);
    assert.equal(video.preload, 'none');
    assert.equal(root.querySelector('.intro-teaser-title').textContent, t(path.title));
    assert.equal(video.querySelector('track').getAttribute('srclang'), 'fil');
    assert.equal(video.querySelector('track').hasAttribute('default'), true);
    root.open = true;
    root.dispatchEvent(new dom.window.Event('toggle'));
    assert.equal(played, 1);
    Object.defineProperty(video, 'duration', { value: 62.5 });
    video.dispatchEvent(new dom.window.Event('loadedmetadata'));
    assert.equal(root.querySelector('.intro-teaser-duration').textContent, '1:03');
    root.querySelector('button').click();
    await Promise.resolve();
    await Promise.resolve();
    assert.deepEqual(saved, [`/learn-assets/video/${path.id}.tl.mp4`, `/learn-assets/video/${path.id}.tl.vtt`, `/learn-assets/video/${path.id}.tl.poster.jpg`]);
    assert.match(root.querySelector('[role="status"]').textContent, /Na-save/);
    root.open = false;
    root.dispatchEvent(new dom.window.Event('toggle'));
    assert.equal(paused, 1);
    dispose(root);
    assert.equal(paused, 2);
    assert.equal(unloaded, 1);
    assert.equal(video.querySelector('source').hasAttribute('src'), false);
    root.open = true;
    root.dispatchEvent(new dom.window.Event('toggle'));
    assert.equal(played, 1);
    root.remove();
  } finally {
    Object.assign(prototype, { play: previous.play, pause: previous.pause, load: previous.load });
    globalThis.caches = previous.caches;
  }
});


test('canonical narration and localized videos remain complete with original source references', async () => {
  const base = new URL('../', import.meta.url);
  const jobs = JSON.parse(await readFile(new URL('assets/audio/jobs.json', base), 'utf8'));
  const manifest = JSON.parse(await readFile(new URL('assets/audio/manifest.json', base), 'utf8'));
  assert.equal(jobs.length, 1914);
  assert.equal(Object.keys(manifest).length, jobs.length);
  for (const job of jobs) {
    const clip = manifest[job.key];
    assert.ok(clip, job.key);
    assert.equal(clip.lang, job.lang);
    assert.equal(clip.voice, job.lang === 'tl' ? 'fil-PH-BlessicaNeural' : 'en-PH-RosaNeural');
    assert.equal((await stat(new URL(clip.src, base))).size, clip.bytes);
    assert.ok(clip.bytes > 1000);
  }
  const videos = JSON.parse(await readFile(new URL('assets/video/manifest.json', base), 'utf8'));
  assert.equal(Object.keys(videos).length, 12);
  for (const video of Object.values(videos)) {
    assert.ok(video.duration >= 44 && video.duration <= 61);
    assert.equal((await stat(new URL(video.src, base))).size, video.bytes);
    assert.match(await readFile(new URL(video.captions, base), 'utf8'), /^WEBVTT/);
    assert.ok((await stat(new URL(video.poster, base))).size > 0);
  }
});
