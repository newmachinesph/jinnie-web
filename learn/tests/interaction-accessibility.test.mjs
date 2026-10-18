import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<body></body>', { url: 'https://jinnie.test/' });
Object.assign(globalThis, {
  window: dom.window, document: dom.window.document, Node: dom.window.Node,
  CustomEvent: dom.window.CustomEvent, localStorage: dom.window.localStorage,
});
const { mount } = await import('../src/interactions.js');
const { dispose } = await import('../src/lifecycle.js');
const { fmt, u } = await import('../src/i18n.js');

const text = value => ({ en: value, tl: value });
const numberSpec = (answer = 0, format = 'peso') => ({ type: 'number', prompt: text('How much?'), answer, format, worked: text('Here is the amount.') });
function root(context) {
  const el = document.createElement('div'); document.body.append(el);
  context.after(() => { dispose(el); el.remove(); });
  return el;
}
function button(el, label) {
  const result = [...el.querySelectorAll('button')].find(b => b.textContent.trim() === label && !b.disabled);
  assert.ok(result, `Enabled button missing: ${label}`);
  return result;
}

test('malformed numeric answers cannot count as zero, and editing clears validation', async context => {
  for (const value of ['', '   ', 'abc', '1e3', '10+10', '1,2', 'NaN', '₱', '1.2.3', '--2']) {
    const el = root(context);
    const result = mount(el, numberSpec());
    const input = el.querySelector('input'); input.value = value;
    button(el, u('check')).click();
    assert.equal(input.disabled, false, value);
    assert.equal(input.getAttribute('aria-invalid'), 'true', value);
    assert.equal(input.validity.customError, true, value);
    assert.equal(document.activeElement, input, value);
    assert.equal(el.querySelector('[role="status"]'), null, value);
    input.value = '0'; input.dispatchEvent(new window.Event('input'));
    assert.equal(input.hasAttribute('aria-invalid'), false);
    assert.equal(input.validity.valid, true);
    button(el, u('check')).click(); button(el, u('continue')).click();
    assert.equal((await result).score, 1);
  }
});

test('numeric answers accept signed values, grouped pesos and decimal percentages', async context => {
  for (const [value, answer, format] of [
    ['-1200', -1200, 'peso'], ['-₱1,234.50', -1234.5, 'peso'],
    ['₱-1,234.50', -1234.5, 'peso'], ['PHP 1,234.50', 1234.5, 'peso'],
    ['1,234.50', 1234.5, 'peso'], ['−25', -25, 'peso'],
    ['12.5%', 12.5, 'percent'], ['.5', 0.5, 'number'],
  ]) {
    const el = root(context);
    const result = mount(el, numberSpec(answer, format));
    const input = el.querySelector('input'); input.value = value;
    input.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    assert.equal(input.disabled, true, value);
    button(el, u('continue')).click();
    assert.equal((await result).score, 1, value);
  }
});

test('numeric and range inputs reference their question and expose formatted range values', context => {
  const numeric = root(context), prediction = root(context);
  mount(numeric, numberSpec());
  mount(prediction, { type: 'predict', prompt: text('Predict the amount.'), min: 0, max: 1000, step: 10, answer: 600, format: 'peso', why: text('Here is the amount.') });
  const ids = [];
  for (const el of [numeric, prediction]) {
    const input = el.querySelector('input');
    const id = input.getAttribute('aria-labelledby'); ids.push(id);
    assert.ok(id);
    assert.equal(document.getElementById(id), el.querySelector('.lede'));
  }
  assert.notEqual(ids[0], ids[1]);
  const range = prediction.querySelector('input');
  assert.equal(range.getAttribute('aria-valuetext'), fmt(500, 'peso'));
  range.value = '700'; range.dispatchEvent(new window.Event('input'));
  assert.equal(range.getAttribute('aria-valuetext'), fmt(700, 'peso'));
});

test('ordering preserves keyboard progression after choosing, clearing and finishing', async context => {
  const el = root(context);
  const result = mount(el, { type: 'order', prompt: text('Put these in order.'), steps: [text('First'), text('Second')], why: text('Done.') });
  button(el, 'First').focus(); button(el, 'First').click();
  assert.equal(document.activeElement, button(el, 'Second'));
  button(el, u('clear')).focus(); button(el, u('clear')).click();
  assert.equal(document.activeElement.tagName, 'BUTTON');
  assert.equal(document.activeElement.className, 'option');
  button(el, 'First').click(); button(el, 'Second').click();
  assert.equal(document.activeElement, button(el, u('continue')));
  document.activeElement.click();
  assert.equal((await result).score, 1);
});

test('story transitions focus the new text, including outcomes and restart', context => {
  const el = root(context);
  mount(el, { type: 'story', start: 'start', nodes: {
    start: { text: text('The first question.'), choices: [{ text: text('Choose first.'), next: 'next' }] },
    next: { text: text('The next question.'), choices: [{ text: text('Choose next.'), next: 'end' }] },
    end: { text: text('The outcome.'), outcome: 'steady' },
  } });
  button(el, 'Choose first.').focus(); button(el, 'Choose first.').click();
  assert.equal(document.activeElement.textContent, 'The next question.');
  assert.equal(document.activeElement.getAttribute('tabindex'), '-1');
  button(el, 'Choose next.').click();
  assert.equal(document.activeElement.textContent, 'The outcome.');
  button(el, u('tryAnother')).click();
  assert.equal(document.activeElement.textContent, 'The first question.');
});

test('scam flag and matching selection expose current state to assistive technology', context => {
  const el = root(context);
  mount(el, { type: 'spot', prompt: text('Flag the suspicious line.'), message: {
    from: text('Sender'), lines: [{ text: text('Suspicious message.'), suspicious: true, why: text('A warning sign.') }],
  }, why: text('A warning sign.') });
  const flag = el.querySelector('.msg');
  assert.equal(flag.getAttribute('aria-pressed'), 'false');
  flag.click(); assert.equal(flag.getAttribute('aria-pressed'), 'true');
  flag.click(); assert.equal(flag.getAttribute('aria-pressed'), 'false');
  mount(el, { type: 'match', prompt: text('Match these.'), pairs: [
    { a: text('Term A'), b: text('Answer A') }, { a: text('Term B'), b: text('Answer B') },
  ] });
  button(el, 'Answer A').click();
  assert.ok(el.querySelector('[role="status"]').textContent.length > 0);
  const a = button(el, 'Term A'), b = button(el, 'Term B');
  assert.equal(a.getAttribute('aria-pressed'), 'false');
  a.click(); assert.equal(a.getAttribute('aria-pressed'), 'true');
  b.click(); assert.equal(a.getAttribute('aria-pressed'), 'false');
  assert.equal(b.getAttribute('aria-pressed'), 'true');
  a.click(); button(el, 'Answer A').click();
  assert.equal(a.disabled, true); assert.equal(a.getAttribute('aria-pressed'), 'false');
  b.click(); assert.equal(a.dataset.state, 'right');
});
