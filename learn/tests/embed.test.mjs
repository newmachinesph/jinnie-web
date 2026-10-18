import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html lang="en"></html>', { url: 'https://learn.jinnie.ph/?embed=native' });
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.localStorage = dom.window.localStorage;
globalThis.CustomEvent = dom.window.CustomEvent;
const requests = [];
let autoSave = true;
let readyResponse = { value: null, ok: false };
const restored = { lang: 'tl', onboarded: true, band: 'building', bites: { 'saved-bite': { done: true, score: 1 } } };
function reply(request, value = null, ok = true) {
  window.dispatchEvent(new window.CustomEvent('jinnie-learn-response', { detail: { id: request.id, ok, value, error: ok ? undefined : 'Rejected request' } }));
}
window.ReactNativeWebView = { postMessage(raw) {
  const request = JSON.parse(raw); requests.push(request);
  if (request.type === 'ready') queueMicrotask(() => reply(request, readyResponse.value, readyResponse.ok));
  else if (request.type !== 'saveState' || autoSave) queueMicrotask(() => reply(request));
} };
const embed = await import('../src/embed.js');
localStorage.setItem('jinnie.learn.v1', JSON.stringify({ lang: 'en', band: 'teens' }));
const store = await import('../src/store.js');

test('failed native hydration stays blocked and can retry without loading a stale mirror', async () => {
  const first = store.hydrateStore();
  assert.equal(store.hydrateStore(), first, 'concurrent hydration should share one request');
  await assert.rejects(first, /Rejected request/);
  assert.equal(store.get().band, null);
  assert.equal(store.get().onboarded, false);
  assert.equal(JSON.parse(localStorage.getItem('jinnie.learn.v1')).band, 'teens');
  embed.persistNativeState({ band: 'first' });
  assert.deepEqual(requests.map(request => request.type), ['ready'], 'a failed load must never overwrite host progress');

  readyResponse = { value: JSON.stringify(restored), ok: true };
  const retry = store.hydrateStore();
  assert.notEqual(retry, first);
  await retry;
  assert.equal(requests.filter(request => request.type === 'ready').length, 2);
  assert.equal(store.get().band, 'building');
});

test('native progress hydrates before the store and takes precedence over the browser mirror', () => {
  assert.equal(store.get().lang, 'tl');
  assert.equal(store.get().band, 'building');
  assert.equal(store.get().bites['saved-bite'].done, true);
  assert.equal(requests[0].source, 'jinnie-learn');
  assert.equal(requests[0].type, 'ready');
  assert.deepEqual(JSON.parse(localStorage.getItem('jinnie.learn.v1')), restored);
});

test('native saves are serialized and coalesced; app navigation waits for the latest state', async () => {
  autoSave = false;
  const start = requests.length;
  store.set({ lang: 'en' });
  store.set({ band: 'first' });
  store.set({ band: 'securing' });
  assert.equal(requests.length, start + 1);
  const navigation = window.JinnieLearnHost.openApp('goals');
  assert.equal(requests.at(-1).type, 'saveState');
  reply(requests.at(-1));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(requests.length, start + 2);
  assert.equal(JSON.parse(requests.at(-1).payload.state).band, 'securing');
  reply(requests.at(-1));
  await navigation;
  assert.deepEqual(requests.at(-1).payload, { app: 'goals' });
  assert.equal(requests.at(-1).type, 'openApp');
  assert.equal(JSON.parse(localStorage.getItem('jinnie.learn.v1')).band, 'securing');
  autoSave = true;
});

test('native file export preserves UTF-8 content and uses the native share bridge', async () => {
  const content = '<svg><text>金 · Jinnie</text></svg>';
  assert.equal(await embed.saveNativeFile(new Blob([content], { type: 'image/svg+xml;charset=utf-8' }), 'certificate.svg'), true);
  assert.equal(requests.at(-1).type, 'saveFile');
  assert.equal(requests.at(-1).payload.mime, 'image/svg+xml');
  assert.equal(Buffer.from(requests.at(-1).payload.base64, 'base64').toString('utf8'), content);
});

test('a failed native save retains the latest state, blocks navigation, and retries only on request', async () => {
  autoSave = false;
  const statuses = [];
  const status = event => statuses.push(event.detail.saved);
  window.addEventListener('jinnie-learn-save-status', status);
  const start = requests.length;
  store.set({ band: 'first' });
  store.set({ band: 'building' });
  const pending = embed.flushNativeState();
  reply(requests.at(-1), null, false);
  assert.equal(await pending, false);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(requests.length, start + 1, 'failed saves must not create an automatic retry loop');
  assert.deepEqual(statuses, [false]);
  await assert.rejects(window.JinnieLearnHost.openApp('wallet'), /could not be saved/);
  assert.equal(requests.length, start + 1, 'an unsaved snapshot must prevent the openApp request');

  const retry = embed.retryNativeSave();
  assert.equal(requests.length, start + 2);
  assert.equal(requests.at(-1).type, 'saveState');
  assert.equal(JSON.parse(requests.at(-1).payload.state).band, 'building');
  reply(requests.at(-1));
  assert.equal(await retry, true);
  assert.deepEqual(statuses, [false, true]);
  window.removeEventListener('jinnie-learn-save-status', status);
  autoSave = true;
});

test('a new mutation retries a retained failed save using the newest snapshot', async () => {
  autoSave = false;
  store.set({ band: 'first' });
  const pending = embed.flushNativeState();
  reply(requests.at(-1), null, false);
  assert.equal(await pending, false);
  const count = requests.length;
  store.set({ band: 'securing' });
  assert.equal(requests.length, count + 1);
  assert.equal(JSON.parse(requests.at(-1).payload.state).band, 'securing');
  reply(requests.at(-1));
  assert.equal(await embed.flushNativeState(), true);
  autoSave = true;
});

test('native reset replaces saved host progress with defaults', async () => {
  store.reset();
  assert.equal(await embed.flushNativeState(), true);
  assert.equal(JSON.parse(requests.at(-1).payload.state).onboarded, false);
  assert.deepEqual(JSON.parse(requests.at(-1).payload.state).bites, {});
});

test('authoritative native empty progress removes a stale browser mirror', async () => {
  readyResponse = { value: null, ok: true };
  localStorage.setItem('jinnie.learn.v1', JSON.stringify(restored));
  const freshStore = await import('../src/store.js?empty-native-profile');
  await freshStore.hydrateStore();
  assert.equal(freshStore.get().onboarded, false);
  assert.deepEqual(freshStore.get().bites, {});
  assert.equal(localStorage.getItem('jinnie.learn.v1'), null);
});

test('ordinary browser hydration keeps its local progress without a native bridge', () => {
  const storeUrl = new URL('../src/store.js', import.meta.url).href;
  // A fresh JS realm models a normal browser tab, with no native module singleton.
  execFileSync(process.execPath, ['--input-type=module', '-e', `
    import assert from 'node:assert/strict';
    const raw = JSON.stringify({ band: 'teens', onboarded: true });
    globalThis.localStorage = { getItem: () => raw, setItem() { throw new Error('must not rewrite browser progress during hydration'); } };
    const store = await import(${JSON.stringify(storeUrl)});
    await store.hydrateStore();
    assert.equal(store.get().band, 'teens');
    assert.equal(store.get().onboarded, true);
  `]);
});

test('bridge requires the explicit native mode and matches response IDs', async () => {
  assert.equal(embed.createNativeBridge(null), null);
  assert.equal(embed.createNativeBridge({ location: { search: '?embed=web' }, ReactNativeWebView: window.ReactNativeWebView }), null);
  const isolated = new JSDOM('', { url: 'https://example.test/?embed=native' }).window;
  let outgoing;
  isolated.ReactNativeWebView = { postMessage(raw) { outgoing = JSON.parse(raw); } };
  const bridge = embed.createNativeBridge(isolated);
  const request = bridge.request('ready');
  isolated.dispatchEvent(new isolated.CustomEvent('jinnie-learn-response', { detail: { id: 'wrong', ok: true, value: 'wrong' } }));
  isolated.dispatchEvent(new isolated.CustomEvent('jinnie-learn-response', { detail: { id: outgoing.id, ok: true, value: 'right' } }));
  assert.equal(await request, 'right');
  const rejected = bridge.request('ready');
  const rejection = assert.rejects(rejected, /Jinnie view closed/);
  bridge.dispose();
  await rejection;
  isolated.close();
});

test.after(() => dom.window.close());
