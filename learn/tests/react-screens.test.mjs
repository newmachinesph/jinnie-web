// Exercise real React screens against the canonical store/content/activity engine.
// Next navigation, artwork, and screens outside each test are replaced; no server is needed.
import { test, after, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { registerHooks, createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import ts from 'typescript';

const require = createRequire(new URL('../../package.json', import.meta.url));
const reactModules = Object.fromEntries(['react', 'react/jsx-runtime'].map(name => [name, pathToFileURL(require.resolve(name)).href]));
const sourceURL = path => new URL('../' + path, import.meta.url).href;
const mocks = {
  'learn-test:provider': `import { useSyncExternalStore } from 'react'; import { get, subscribe } from ${JSON.stringify(sourceURL('src/store.js'))}; export const LearnProvider=({children})=>children; export function useLearn() { return { state: useSyncExternalStore(subscribe,get,get), ready:globalThis.learnTestReady, online:globalThis.learnTestOnline, embedded:false, navigate:route=>globalThis.learnTestNavigation.push(route), href:route=>'/learn/'+route }; }`,
  'learn-test:ui': `import { createElement as h } from 'react'; export const Icon=({name})=>h('span',{'aria-hidden':true,'data-icon':name}); export const Illustration=({id})=>h('div',{'data-illustration':id}); export const Progress=({value})=>h('div',{role:'progressbar','aria-valuenow':Math.round(value*100)});`,
  'learn-test:navigation': `export const usePathname=()=>globalThis.learnTestPathname;`,
  'learn-test:link': `import { createElement as h } from 'react'; export default function Link({children,...props}) { return h('a',props,children); }`,
  'learn-test:unrelated-screens': `export default function Screen(){return null;} export const Placement=Screen, PathsScreen=Screen, PathScreen=Screen, LessonScreen=Screen, MissingScreen=Screen;`,
};
const hooks = registerHooks({
  resolve(specifier, context, next) {
    if (reactModules[specifier]) return { url: reactModules[specifier], shortCircuit: true };
    if (specifier === './LearnProvider') return { url: 'learn-test:provider', shortCircuit: true };
    if (specifier === './LearnUI') return { url: 'learn-test:ui', shortCircuit: true };
    if (specifier === 'next/navigation') return { url: 'learn-test:navigation', shortCircuit: true };
    if (specifier === 'next/link') return { url: 'learn-test:link', shortCircuit: true };
    if (context.parentURL?.endsWith('/LearnApp.tsx') && ['./Dashboard', './Onboarding', './PathScreens', './ProfileScreen'].includes(specifier)) return { url: 'learn-test:unrelated-screens', shortCircuit: true };
    if (specifier.startsWith('@learn/')) return { url: sourceURL(specifier.slice(7)), shortCircuit: true };
    if (specifier.startsWith('.') && context.parentURL?.endsWith('.tsx')) {
      const path = fileURLToPath(new URL(specifier, context.parentURL));
      for (const extension of ['.tsx', '.ts']) if (existsSync(path + extension)) return { url: pathToFileURL(path + extension).href, shortCircuit: true };
    }
    return next(specifier, context);
  },
  load(url, context, next) {
    if (mocks[url]) return { format: 'module', source: mocks[url], shortCircuit: true };
    if (url.endsWith('.tsx') || url.endsWith('.ts')) return {
      format: 'module', shortCircuit: true,
      source: ts.transpileModule(readFileSync(fileURLToPath(url), 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, jsx: ts.JsxEmit.ReactJSX } }).outputText,
    };
    return next(url, context);
  },
});
const dom = new JSDOM('<main id="root"></main>', { url: 'https://learn.jinnie.test/', pretendToBeVisual: true });
Object.assign(globalThis, {
  window: dom.window, document: dom.window.document, location: dom.window.location,
  Node: dom.window.Node, HTMLElement: dom.window.HTMLElement, CustomEvent: dom.window.CustomEvent,
  localStorage: dom.window.localStorage, IS_REACT_ACT_ENVIRONMENT: true, learnTestNavigation: [],
  learnTestReady: true, learnTestOnline: true, learnTestPathname: '/learn',
});
window.matchMedia = () => ({ matches: false });
window.scrollTo = () => {};
window.HTMLElement.prototype.scrollTo = () => {};
window.HTMLElement.prototype.scrollIntoView = () => {};
window.HTMLMediaElement.prototype.pause = () => {};
window.HTMLMediaElement.prototype.load = () => {};
const { get, set, reset } = await import('../src/store.js');
const { allBites, findPath } = await import('../content/index.js');
const { drills } = await import('../content/drills.js');
const { t, u } = await import('../src/i18n.js');
const { default: LessonReader } = await import('../../src/components/learn/LessonReader.tsx');
const { default: PracticeScreen, PathCheck } = await import('../../src/components/learn/PracticeScreen.tsx');
const { Interaction } = await import('../../src/components/learn/Interaction.tsx');
const { default: LearnApp } = await import('../../src/components/learn/LearnApp.tsx');
const host = document.getElementById('root');
let root;
const flush = async () => act(async () => { await new Promise(resolve => setTimeout(resolve, 10)); });
async function render(component) { await act(async () => root.render(component)); await flush(); }
function button(text, scope = host) {
  const found = [...scope.querySelectorAll('button')].find(item => !item.disabled && item.textContent.trim() === text);
  assert.ok(found, `Missing enabled button: ${text}`);
  return found;
}
async function click(text, scope = host) { await act(async () => button(text, scope).click()); await flush(); }
async function answerChoice(spec) {
  const exercise = host.querySelector('.learn-interaction');
  await click(t(spec.options.find(option => option.correct).text), exercise);
  await click(u('continue'), exercise);
}
beforeEach(async () => {
  root = createRoot(host);
  dom.reconfigure({ url: 'https://learn.jinnie.test/learn' });
  globalThis.learnTestReady = true;
  globalThis.learnTestOnline = true;
  globalThis.learnTestPathname = '/learn';
  globalThis.learnTestNavigation.length = 0;
  await act(async () => { reset(); set({ onboarded: true, family: true, band: 'kids', voice: false }); });
});
afterEach(async () => { await act(async () => root.unmount()); });
after(() => { hooks.deregister(); dom.window.close(); });

test('Learn shell follows the Next pathname before browser history commits a bite transition', async () => {
  const [first, second] = findPath('kids').lessons[0].bites;
  const previousURL = '/learn/bite/' + first.id;
  dom.reconfigure({ url: 'https://learn.jinnie.test' + previousURL });
  globalThis.learnTestPathname = previousURL;
  await render(React.createElement(LearnApp, { segments: ['bite', first.id] }));
  assert.equal(host.querySelector('.reader-title').textContent, t(first.title));
  await click(u('continue'));
  assert.equal(host.querySelector('[aria-current="step"] .reader-step-label').textContent, u('show'));

  // React observes the next router state while window.location still has bite 1.
  globalThis.learnTestPathname = '/learn/bite/' + second.id;
  await render(React.createElement(LearnApp, { segments: ['bite', second.id] }));
  assert.equal(window.location.pathname, previousURL, 'The test must retain the old committed browser URL');
  assert.equal(host.querySelector('.reader-title').textContent, t(second.title));
  assert.equal(host.querySelector('[aria-current="step"] .reader-step-label').textContent, u('hook'), 'The next bite starts a fresh reader session');
  assert.ok(host.querySelector('.reader-body').textContent.includes(t(second.hook.text)));
  assert.equal(get().bites[second.id], undefined, 'Navigation alone must not mark the next bite complete');
});

test('a new visitor keeps the loading screen until the onboarding redirect commits', async () => {
  for (const [origin, base] of [['https://learn.jinnie.test', '/learn'], ['https://learn.jinnie.ph', '']]) {
    dom.reconfigure({ url: origin + (base || '/') });
    globalThis.learnTestPathname = base || '/';
    await act(async () => reset());
    globalThis.learnTestReady = false;
    await render(React.createElement(LearnApp, { segments: [] }));
    assert.ok(host.querySelector('.learn-loading'));
    assert.equal(host.querySelector('.learn-navigation'), null);

    globalThis.learnTestReady = true;
    await render(React.createElement(LearnApp, { segments: [] }));
    assert.equal(globalThis.learnTestNavigation.at(-1), 'onboard');
    assert.ok(host.querySelector('.learn-loading'), 'Keep loading while the router fetches onboarding');
    assert.equal(host.querySelector('.learn-app'), null, 'Do not paint an empty shell between hydration and onboarding');

    globalThis.learnTestPathname = base + '/onboard';
    await render(React.createElement(LearnApp, { segments: ['onboard'] }));
    assert.equal(host.querySelector('.learn-loading'), null);
    assert.ok(host.querySelector('.learn-onboarding'));
    assert.equal(host.querySelector('.learn-navigation'), null);

    await act(async () => set({ onboarded: true }));
    globalThis.learnTestPathname = base + '/paths';
    await render(React.createElement(LearnApp, { segments: ['paths'] }));
    assert.equal(host.querySelector('.learn-loading'), null);
    assert.ok(host.querySelector('.learn-navigation'), 'Returning learners can still reach the regular shell');
  }
});

test('an offline cached shell opens the requested bite after hydration, overriding cached route props', async () => {
  const bite = findPath('kids').lessons[0].bites[1];
  for (const [origin, base] of [['https://learn.jinnie.test', '/learn'], ['https://learn.jinnie.ph', '']]) {
    dom.reconfigure({ url: origin + base + '/bite/' + bite.id });
    globalThis.learnTestPathname = base + '/bite/' + bite.id;
    globalThis.learnTestOnline = false;
    globalThis.learnTestReady = false;
    await render(React.createElement(LearnApp, { segments: ['paths'] }));
    assert.ok(host.querySelector('.learn-loading'));
    assert.equal(host.querySelector('.reader-title'), null);
    globalThis.learnTestReady = true;
    await render(React.createElement(LearnApp, { segments: ['paths'] }));
    assert.equal(host.querySelector('.reader-title').textContent, t(bite.title));
    assert.ok(host.querySelector('.learn-offline-status'));
  }
});

for (const lang of ['en', 'tl']) test(`React reader completes four beats and persists progress in ${lang}`, async () => {
  const found = allBites().find(item => item.bite.do.type === 'choice' && item.lesson.bites.indexOf(item.bite) < item.lesson.bites.length - 1);
  set({ lang });
  await render(React.createElement(LessonReader, { id: found.bite.id }));
  assert.equal(host.querySelector('[aria-current="step"] .reader-step-label').textContent, u('hook'));
  assert.ok(host.textContent.includes(t(found.bite.hook.text)));
  const staleContinue = button(u('continue'));
  await act(async () => { staleContinue.click(); staleContinue.click(); });
  assert.equal(host.querySelector('[aria-current="step"] .reader-step-label').textContent, u('show'), 'A double press cannot skip a beat');
  await click(u('continue'));
  await answerChoice(found.bite.do);
  assert.equal(host.querySelector('[aria-current="step"] .reader-step-label').textContent, u('keep'));
  assert.equal(document.activeElement, host.querySelector('.reader-beat-heading'));
  await click(u('done'));
  assert.equal(get().bites[found.bite.id].done, true);
  assert.equal(get().bites[found.bite.id].score, 1);
  assert.ok(get().review[found.bite.id].due > Date.now());
  assert.equal(globalThis.learnTestNavigation.at(-1), 'bite/' + found.lesson.bites[found.lesson.bites.indexOf(found.bite) + 1].id);
});

test('React practice exposes all drills and words and saves completed drills only', async () => {
  await render(React.createElement(PracticeScreen));
  assert.equal(host.querySelectorAll('.practice-library .learn-drill-card').length, 16);
  assert.equal(host.querySelectorAll('#learn-glossary-results dt').length, 12);
  await click('See all 63 words');
  assert.equal(host.querySelectorAll('#learn-glossary-results dt').length, 63);
  const drill = drills[0];
  async function startDrill() {
    const card = [...host.querySelectorAll('.learn-drill-card')].find(item => item.textContent.includes(t(drill.title)));
    await act(async () => card.click()); await flush();
  }
  await startDrill();
  const exercise = host.querySelector('.learn-interaction');
  const messages = exercise.querySelectorAll('.msg');
  await act(async () => {
    drill.do.message.lines.forEach((line, index) => { if (line.suspicious) messages[index].click(); });
    exercise.querySelector('.btn-primary').click();
  });
  await click(u('continue'), exercise);
  assert.equal(get().drills[0].id, drill.id);
  assert.equal(get().drills[0].hit, get().drills[0].of);
  const previous = get().drills[0];
  await startDrill(); await click('Exit practice');
  assert.equal(host.querySelector('.learn-session'), null);
  assert.deepEqual(get().drills[0], previous);
});

test('React review keeps its queue stable while scheduling the next review', async () => {
  const items = allBites().filter(item => item.bite.do.type === 'choice').slice(0, 2);
  set({ bites: Object.fromEntries(items.map(item => [item.bite.id, { done: true, score: 1, at: 1 }])), review: Object.fromEntries(items.map(item => [item.bite.id, { due: 1, interval: 3 }])) });
  await render(React.createElement(PracticeScreen));
  await click(u('start'));
  for (const item of items) await answerChoice(item.bite.do);
  assert.equal(host.querySelector('.learn-session'), null);
  assert.ok(host.textContent.includes('Review complete'));
  for (const item of items) assert.equal(get().review[item.bite.id].interval, 6);
});

test('React commitment check-ins count once, and path checks enforce completion', async () => {
  set({ commitments: { 'record-7': { startedAt: 1, days: 7, marks: [], done: false } } });
  await render(React.createElement(PracticeScreen));
  await click(u('markToday'));
  assert.equal(get().commitments['record-7'].marks.length, 1);
  assert.ok([...host.querySelectorAll('button')].some(item => item.disabled && item.textContent.includes(u('marked'))));
  const path = findPath('kids');
  await render(React.createElement(PathCheck, { path }));
  assert.equal(host.textContent, '');
  await act(async () => set({ bites: Object.fromEntries(path.lessons.flatMap(lesson => lesson.bites).map(bite => [bite.id, { done: true, score: 1, at: 1 }])) }));
  await click(u('start'));
  assert.ok(host.textContent.includes('1 / 8'));
  await click('Exit check');
  assert.equal(get().checks[path.id], undefined);
});

test('an unavailable interaction never creates a completion result and can be retried', async () => {
  let completed = 0;
  await render(React.createElement(Interaction, { spec: { type: 'missing' }, onComplete: () => completed++ }));
  assert.ok(host.querySelector('[role="alert"]'));
  await click('Try again');
  assert.ok(host.querySelector('[role="alert"]'));
  assert.equal(completed, 0);
});
