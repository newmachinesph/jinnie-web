import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html lang="en"><body></body></html>', { url: 'https://learn.jinnie.ph/' });
for (const key of ['window', 'document', 'localStorage', 'CustomEvent', 'Node']) globalThis[key] = key === 'window' ? dom.window : dom.window[key];
const { backupControls } = await import('../src/backup.js');
const { dispose } = await import('../src/lifecycle.js');
const store = await import('../src/store.js');
const tick = () => new Promise(resolve => setImmediate(resolve));
const backup = band => JSON.stringify({ app: 'jinnie-learn', version: 1, state: { ...store.get(), band, onboarded: true } });
function select(root, read) {
  const input = root.querySelector('input');
  Object.defineProperty(input, 'files', { configurable: true, value: [{ size: 1000, text: read }] });
  input.dispatchEvent(new window.Event('change'));
}

test.beforeEach(() => { store.reset(); document.body.replaceChildren(); });
test.after(() => dom.window.close());

test('leaving the profile before a backup read finishes prevents a late prompt, restore, and navigation', async () => {
  let resolveRead, prompts = 0, restores = 0;
  globalThis.confirm = () => { prompts++; return true; };
  const root = backupControls(() => { restores++; });
  document.body.append(root);
  const raw = backup('building');
  select(root, () => new Promise(resolve => { resolveRead = resolve; }));
  dispose(root);
  root.remove();
  resolveRead(raw);
  await tick();
  assert.equal(prompts, 0);
  assert.equal(restores, 0);
  assert.equal(store.get().band, null);
});

test('a live backup control still restores a confirmed valid file', async () => {
  let prompts = 0, restores = 0;
  globalThis.confirm = () => { prompts++; return true; };
  const root = backupControls(() => { restores++; });
  document.body.append(root);
  select(root, async () => backup('building'));
  await tick();
  assert.equal(prompts, 1);
  assert.equal(restores, 1);
  assert.equal(store.get().band, 'building');
  dispose(root);
});

test('a superseded file read cannot restore an older selection', async () => {
  let resolveFirst, resolveSecond, prompts = 0;
  globalThis.confirm = () => { prompts++; return true; };
  const root = backupControls(() => {});
  document.body.append(root);
  select(root, () => new Promise(resolve => { resolveFirst = resolve; }));
  select(root, () => new Promise(resolve => { resolveSecond = resolve; }));
  resolveFirst(backup('first'));
  await tick();
  assert.equal(prompts, 0);
  assert.equal(store.get().band, null);
  resolveSecond(backup('securing'));
  await tick();
  assert.equal(prompts, 1);
  assert.equal(store.get().band, 'securing');
  dispose(root);
});
