import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('', { url: 'https://learn.jinnie.test/', pretendToBeVisual: true });
Object.assign(globalThis, { window: dom.window, document: dom.window.document, localStorage: dom.window.localStorage, CustomEvent: dom.window.CustomEvent });
const utterances = [];
const voices = [{ lang: 'en-PH' }, { lang: 'fil-PH' }];
window.speechSynthesis = {
  getVoices: () => voices, addEventListener() {}, cancel() {},
  speak: utterance => utterances.push(utterance),
};
globalThis.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };
const index = {};
globalThis.fetch = async () => ({ ok: true, json: async () => index });
const { set } = await import('../src/store.js');
const { speak, narrationKey, stop } = await import('../src/speech.js');

test('missing bundled narration uses normalized speech and Philippine language voices', async () => {
  for (const [lang, expected, voice] of [
    ['en', 'Save 1,000 pesos.', 'en-PH'],
    ['tl', 'Save one thousand pesos.', 'fil-PH'],
  ]) {
    set({ lang });
    await speak('Save ₱1,000.');
    assert.equal(utterances.at(-1).text, expected);
    assert.equal(utterances.at(-1).lang, voice);
  }
});

test('bundle lookup retains the authored-text key and playback failure normalizes fallback speech', async () => {
  set({ lang: 'en' });
  const text = 'Keep ₱1.50.';
  const originalKey = await narrationKey(text, 'en');
  assert.notEqual(originalKey, await narrationKey('Keep 1 peso and 50 centavos.', 'en'));
  index[originalKey] = { src: `assets/audio/kids/${originalKey}.mp3` };
  let requestedUrl;
  globalThis.Audio = class {
    constructor(url) { requestedUrl = String(url); }
    async play() { throw new Error('Offline media unavailable'); }
    pause() {} removeAttribute() {} load() {}
  };
  await speak(text);
  assert.equal(requestedUrl, '/learn-assets/' + index[originalKey].src.replace(/^assets\//, ''));
  assert.equal(utterances.at(-1).text, 'Keep 1 peso and 50 centavos.');
  stop();
});

test('a hidden native Learn tab cannot start bundled audio or device speech', async () => {
  const before = utterances.length;
  let created = 0;
  const previous = globalThis.Audio;
  globalThis.Audio = class { constructor() { created++; } };
  window.__JINNIE_LEARN_HIDDEN__ = true;
  try {
    await speak('Read this only when visible.');
    assert.equal(created, 0);
    assert.equal(utterances.length, before);
  } finally {
    window.__JINNIE_LEARN_HIDDEN__ = false;
    globalThis.Audio = previous;
  }
});

test('hiding Learn during a pending manifest request prevents delayed playback and fallback', async () => {
  const previous = { fetch: globalThis.fetch, Audio: globalThis.Audio };
  const before = utterances.length;
  let release, created = 0;
  globalThis.fetch = () => new Promise(resolve => { release = resolve; });
  globalThis.Audio = class { constructor() { created++; } };
  const fresh = await import('../src/speech.js?hidden-pending');
  try {
    const text = 'Waiting for narration.';
    const key = await fresh.narrationKey(text, 'en');
    const playing = fresh.speak(text);
    assert.equal(typeof release, 'function');
    window.__JINNIE_LEARN_HIDDEN__ = true;
    release({ ok: true, json: async () => ({ [key]: { src: 'assets/audio/kids/example.mp3' } }) });
    await playing;
    assert.equal(created, 0);
    assert.equal(utterances.length, before);
  } finally {
    window.__JINNIE_LEARN_HIDDEN__ = false;
    globalThis.fetch = previous.fetch;
    globalThis.Audio = previous.Audio;
    fresh.stop();
  }
});

test.after(() => dom.window.close());
