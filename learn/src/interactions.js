// The eleven interactions. mount(container, spec) renders one and resolves { score } (0..1) when the user continues.
// Feedback is always in Jinnie's voice: "Here is the number", never "Wrong".
import { h, shuffle, icons } from './ui.js';
import { t, u, fmt, peso } from './i18n.js';
import { manage, dispose } from './lifecycle.js';
import { updateNumericInput } from './numeric-input.js';

const renderers = {
  choice, swipe, predict, allocate, spot, order, number, compare, story, rapid, match,
};

export function mount(container, spec) {
  dispose(container);
  container.innerHTML = '';
  const fn = renderers[spec.type];
  if (!fn) {
    container.append(h('p', { class: 'body' }, `Unknown interaction: ${spec.type}`));
    return Promise.resolve({ score: 0 });
  }
  let active = true;
  manage(container, () => { active = false; });
  return new Promise(resolve => fn(container, spec, score => {
    if (!active) return;
    dispose(container);
    resolve({ score: clamp(score) });
  }));
}

const clamp = n => Math.max(0, Math.min(1, Number.isFinite(n) ? n : 0));
let promptId = 0;

function prompt(spec) {
  return h('p', { id: `interaction-prompt-${++promptId}`, class: 'lede mb-4' }, t(spec.prompt));
}

function why(text, ok) {
  return h('div', { class: 'why', role: 'status' },
    h('span', { class: 'eyebrow block mb-1 ' + (ok ? 'text-positive' : '') }, ok ? u('correct') : u('hereIsTheNumber')),
    t(text));
}

function continueBtn(done, score) {
  return h('div', { class: 'mt-5' }, h('button', { class: 'btn-primary w-full', onclick: () => done(score) }, u('continue'), h('span', { html: icons.arrow })));
}

function scoreLine(right, total) {
  return h('p', { class: 'small mt-3' }, `${u('score')}: ${right} / ${total}`);
}

/* 1. choice */
function choice(c, spec, done) {
  c.append(prompt(spec));
  const list = h('div', { class: 'flex flex-col gap-2' });
  const buttons = spec.options.map(opt => h('button', { class: 'option', onclick: () => pick(opt) }, t(opt.text)));
  buttons.forEach(b => list.append(b));
  c.append(list);
  function pick(opt) {
    buttons.forEach((b, i) => {
      const o = spec.options[i];
      b.disabled = true;
      b.dataset.state = o === opt ? (o.correct ? 'right' : 'picked') : (o.correct ? 'right' : 'wrong');
    });
    c.append(why(opt.why, opt.correct));
    if (!opt.correct) {
      const right = spec.options.find(o => o.correct);
      c.append(h('div', { class: 'why border-positive' }, h('span', { class: 'eyebrow block mb-1 text-positive' }, u('answer')), t(right.text), ' ', t(right.why)));
    }
    c.append(continueBtn(done, opt.correct ? 1 : 0));
  }
}

/* 2. swipe */
function swipe(c, spec, done) {
  c.append(prompt(spec));
  let i = 0, right = 0, locked = false;
  const stage = h('div', { class: 'relative' });
  const counter = h('p', { class: 'small mb-2 tnum' });
  c.append(counter, stage);
  const labels = h('div', { class: 'mt-3 grid grid-cols-2 gap-3' });
  const leftBtn = h('button', { class: 'btn-ghost', onclick: () => answer('left') }, icons.back && h('span', { html: icons.back }), t(spec.left));
  const rightBtn = h('button', { class: 'btn-ghost', onclick: () => answer('right') }, t(spec.right), h('span', { html: icons.arrow }));
  labels.append(leftBtn, rightBtn);
  c.append(labels);
  let card;
  function show() {
    locked = false;
    counter.textContent = `${i + 1} / ${spec.cards.length}`;
    stage.innerHTML = '';
    card = h('div', { class: 'swipe-card card relative flex min-h-36 items-center justify-center px-5 py-6 text-center text-[1.0625rem] font-semibold leading-snug' }, t(spec.cards[i].text),
      h('span', { class: 'hint-l chip absolute left-2 top-2 border-primary text-primary opacity-0' }, t(spec.left)),
      h('span', { class: 'hint-r chip absolute right-2 top-2 border-primary text-primary opacity-0' }, t(spec.right)));
    stage.append(card);
    drag(card);
  }
  function drag(el) {
    let x0 = null, dx = 0;
    el.addEventListener('pointerdown', e => { x0 = e.clientX; el.setPointerCapture(e.pointerId); el.style.transition = 'none'; });
    el.addEventListener('pointermove', e => {
      if (x0 == null) return;
      dx = e.clientX - x0;
      el.style.transform = `translateX(${dx}px) rotate(${dx / 20}deg)`;
      el.querySelector('.hint-l').style.opacity = Math.min(1, Math.max(0, -dx / 70));
      el.querySelector('.hint-r').style.opacity = Math.min(1, Math.max(0, dx / 70));
    });
    const up = () => {
      if (x0 == null) return;
      el.style.transition = 'transform .2s ease';
      if (Math.abs(dx) > 70) answer(dx < 0 ? 'left' : 'right');
      else el.style.transform = '';
      x0 = null; dx = 0;
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
  }
  function answer(side) {
    if (locked) return;
    locked = true;
    const item = spec.cards[i];
    const ok = item.side === side;
    if (ok) right++;
    leftBtn.disabled = rightBtn.disabled = true;
    card.style.transform = `translateX(${side === 'left' ? -40 : 40}px)`;
    card.classList.add(ok ? 'border-positive' : 'border-accent');
    const fb = h('div', { class: 'mt-3' },
      why(item.why, ok),
      ok ? null : h('p', { class: 'small mt-1' }, `${u('answer')}: ${t(item.side === 'left' ? spec.left : spec.right)}`),
      h('button', { class: 'btn-ghost mt-3 w-full', onclick: () => { i++; fb.remove(); leftBtn.disabled = rightBtn.disabled = false; i < spec.cards.length ? show() : finish(); } }, u('next')));
    stage.append(fb);
  }
  function finish() {
    stage.innerHTML = '';
    labels.remove();
    counter.remove();
    c.append(scoreLine(right, spec.cards.length), continueBtn(done, right / spec.cards.length));
  }
  show();
}

/* 3. predict */
function predict(c, spec, done) {
  const question = prompt(spec);
  c.append(question);
  const mid = Math.round((spec.min + spec.max) / 2 / spec.step) * spec.step;
  const val = h('div', { class: 'money text-[1.75rem] text-primary-deep' }, fmt(mid, spec.format));
  const range = h('input', { type: 'range', min: spec.min, max: spec.max, step: spec.step, value: mid, class: 'w-full accent-[var(--c-primary)]', 'aria-labelledby': question.id, 'aria-valuetext': fmt(mid, spec.format), oninput: e => {
    val.textContent = fmt(Number(e.target.value), spec.format);
    range.setAttribute('aria-valuetext', val.textContent);
  } });
  c.append(h('p', { class: 'eyebrow mb-1' }, u('yourGuess')), val, range,
    h('div', { class: 'small mt-1 flex justify-between tnum' }, h('span', {}, fmt(spec.min, spec.format)), h('span', {}, fmt(spec.max, spec.format))));
  const btn = h('button', { class: 'btn-primary mt-4 w-full', onclick: reveal }, u('reveal'));
  c.append(btn);
  function reveal() {
    const guess = Number(range.value);
    range.disabled = true; btn.remove();
    const span = spec.max - spec.min || 1;
    const err = Math.abs(guess - spec.answer) / span;
    const score = err <= 0.1 ? 1 : err <= 0.25 ? 0.7 : 0.4;
    const pct = n => `${((n - spec.min) / span) * 100}%`;
    c.append(
      h('p', { class: 'eyebrow mt-4 mb-1' }, u('answer')),
      h('div', { class: 'money text-[1.75rem] text-primary-deep' }, fmt(spec.answer, spec.format)),
      h('div', { class: 'relative mt-3 h-8' },
        h('div', { class: 'absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-brand bg-line' }),
        h('div', { class: 'absolute top-1/2 h-4 w-1 -translate-y-1/2 rounded-brand bg-muted', style: { left: pct(guess) }, title: 'guess' }),
        h('div', { class: 'absolute top-1/2 h-6 w-1.5 -translate-y-1/2 rounded-brand bg-primary', style: { left: pct(spec.answer) }, title: 'answer' })),
      h('div', { class: 'small flex justify-between' }, h('span', {}, `${u('yourGuess')}: ${fmt(guess, spec.format)}`), h('span', {}, `${u('answer')}: ${fmt(spec.answer, spec.format)}`)),
      why(spec.why, score === 1),
      continueBtn(done, score));
  }
}

/* 4. allocate */
function allocate(c, spec, done) {
  c.append(prompt(spec));
  const step = spec.step || 100;
  const values = Object.fromEntries(spec.jars.map(j => [j.key, 0]));
  const remain = h('div', { class: 'money text-[1.375rem] text-primary-deep' });
  const rows = spec.jars.map(j => {
    const v = h('div', { class: 'money w-24 text-right text-[1rem]' });
    const set = n => { values[j.key] = Math.max(0, Math.min(spec.total, n)); update(); };
    const row = h('div', { class: 'card px-3 py-2' },
      h('div', { class: 'flex items-baseline justify-between' }, h('div', {}, h('div', { class: 'font-semibold' }, t(j.label)), h('div', { class: 'small' }, t(j.hint))), v),
      h('div', { class: 'mt-2 grid grid-cols-4 gap-1' },
        h('button', { class: 'btn-ghost py-2 text-[0.8125rem]', onclick: () => set(values[j.key] - step * 10) }, `−${step * 10 / 1000}k`),
        h('button', { class: 'btn-ghost py-2 text-[0.8125rem]', onclick: () => set(values[j.key] - step) }, `−${step}`),
        h('button', { class: 'btn-ghost py-2 text-[0.8125rem]', onclick: () => set(values[j.key] + step) }, `+${step}`),
        h('button', { class: 'btn-ghost py-2 text-[0.8125rem]', onclick: () => set(values[j.key] + step * 10) }, `+${step * 10 / 1000}k`)));
    row._val = v;
    return row;
  });
  const check = h('button', { class: 'btn-primary mt-4 w-full', disabled: true, onclick: finish }, u('check'));
  c.append(h('div', { class: 'card mb-3 flex items-center justify-between px-3 py-2' }, h('span', { class: 'eyebrow' }, u('remaining')), remain),
    h('div', { class: 'flex flex-col gap-2' }, rows), check);
  function update() {
    const sum = Object.values(values).reduce((a, b) => a + b, 0);
    remain.textContent = peso(spec.total - sum);
    remain.classList.toggle('text-negative', sum > spec.total);
    rows.forEach((r, i) => { r._val.textContent = peso(values[spec.jars[i].key]); });
    check.disabled = sum !== spec.total;
  }
  function finish() {
    check.remove();
    let ok = 0;
    rows.forEach((r, i) => {
      const j = spec.jars[i];
      const pct = (values[j.key] / spec.total) * 100;
      const inRange = pct >= j.guide[0] && pct <= j.guide[1];
      if (inRange) ok++;
      r.classList.add(inRange ? 'border-positive' : 'border-accent');
      r.append(h('p', { class: 'small mt-1 tnum' }, `${Math.round(pct)}% · guide ${j.guide[0]} to ${j.guide[1]}%`));
      r.querySelectorAll('button').forEach(b => b.disabled = true);
    });
    c.append(why(spec.why, ok === rows.length), continueBtn(done, ok / rows.length));
  }
  update();
}

/* 5. spot */
function spot(c, spec, done) {
  c.append(prompt(spec), h('p', { class: 'small mb-3' }, u('tapToFlag')));
  const picked = new Set();
  let left = spec.seconds || 20;
  const timer = h('div', { class: 'small mb-2 tnum flex items-center gap-1', html: icons.clock }, h('span', {}, ` ${left} ${u('seconds')}`));
  const bubble = h('div', { class: 'message-preview card overflow-hidden' },
    h('div', { class: 'message-heading border-b border-line bg-surface px-3 py-2 text-[0.75rem] font-semibold uppercase tracking-wide text-muted' }, h('span', { html: icons.person }), h('span', {}, `${spec.message.channel || 'sms'} · ${t(spec.message.from)}`)));
  const lines = spec.message.lines.map((ln, i) => {
    const el = h('button', { class: 'msg m-2 block w-[calc(100%-1rem)] text-left', 'aria-pressed': 'false', onclick: () => {
      if (finished) return;
      picked.has(i) ? picked.delete(i) : picked.add(i);
      el.dataset.picked = picked.has(i);
      el.setAttribute('aria-pressed', String(picked.has(i)));
    } }, t(ln.text));
    bubble.append(el);
    return el;
  });
  const check = h('button', { class: 'btn-primary mt-4 w-full', onclick: finish }, u('check'));
  c.append(h('div', { class: 'mb-2' }, h('span', { class: 'chip border-accent text-accent' }, u('simulated'))), timer, bubble, check);
  let finished = false;
  const iv = setInterval(() => { left--; timer.lastChild.textContent = ` ${left} ${u('seconds')}`; if (left <= 0) finish(); }, 1000);
  manage(c, () => clearInterval(iv));
  function finish() {
    if (finished) return;
    finished = true; clearInterval(iv); check.remove(); timer.remove();
    let hits = 0, falseAlarms = 0;
    const sus = spec.message.lines.filter(l => l.suspicious).length;
    spec.message.lines.forEach((ln, i) => {
      const el = lines[i];
      el.disabled = true;
      if (ln.suspicious && picked.has(i)) { hits++; el.dataset.result = 'hit'; }
      else if (ln.suspicious) { el.dataset.result = 'miss'; }
      else if (picked.has(i)) { falseAlarms++; }
      if (ln.suspicious) el.append(h('div', { class: 'small mt-1 text-ink' }, t(ln.why)));
    });
    const score = Math.max(0, hits / sus - falseAlarms * 0.15);
    c.append(h('p', { class: 'small mt-3 tnum' }, `${hits} / ${sus} ${u('ofFlagged')}`), why(spec.why, hits === sus && falseAlarms === 0), continueBtn(done, score));
  }
}

/* 6. order */
function order(c, spec, done) {
  c.append(prompt(spec), h('p', { class: 'small mb-3' }, u('tapInOrder')));
  const pool = shuffle(spec.steps.map((s, i) => ({ s, i })));
  const chosen = [];
  const poolEl = h('div', { class: 'flex flex-col gap-2' });
  const chosenEl = h('ol', { class: 'mb-3 flex flex-col gap-2' });
  const clear = h('button', { class: 'btn-ghost mt-3 w-full', onclick: () => { chosen.length = 0; render(true); } }, u('clear'));
  c.append(chosenEl, poolEl, clear);
  function render(moveFocus = false) {
    chosenEl.innerHTML = ''; poolEl.innerHTML = '';
    chosen.forEach((it, n) => chosenEl.append(h('li', { class: 'option flex gap-3 border-primary' }, h('span', { class: 'money w-5 text-primary' }, n + 1), t(it.s))));
    pool.filter(it => !chosen.includes(it)).forEach(it => poolEl.append(h('button', { class: 'option', onclick: () => { chosen.push(it); chosen.length === spec.steps.length ? finish() : render(true); } }, t(it.s))));
    if (moveFocus) poolEl.querySelector('button')?.focus();
  }
  function finish() {
    render(); poolEl.remove(); clear.remove();
    let ok = 0;
    [...chosenEl.children].forEach((li, n) => {
      const right = chosen[n].i === n;
      if (right) ok++;
      li.classList.remove('border-primary');
      li.classList.add(right ? 'border-positive' : 'border-accent');
      if (!right) li.append(h('span', { class: 'small ml-auto tnum' }, `→ ${chosen[n].i + 1}`));
    });
    const next = continueBtn(done, ok / spec.steps.length);
    c.append(why(spec.why, ok === spec.steps.length), next);
    next.querySelector('button').focus();
  }
  render();
}

/* 7. number */
function numericAnswer(value, format) {
  // Accept optional local currency and proper thousands grouping without
  // silently turning malformed text ("abc", "1e3", "1,2") into an answer.
  let text = String(value).trim().replace(/\u2212/g, '-');
  if (format === 'peso') text = text.replace(/^([+-]?)\s*(?:₱|PHP)\s*/i, '$1');
  if (format === 'percent') text = text.replace(/\s*%$/, '');
  if (!/^[+-]?(?:(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?|\.\d+)$/.test(text)) return NaN;
  return Number(text.replace(/,/g, ''));
}

function number(c, spec, done) {
  const question = prompt(spec);
  c.append(question);
  const prefix = spec.format === 'peso' ? '₱' : '';
  const suffix = spec.format === 'percent' ? '%' : '';
  const input = h('input', { type: 'text', inputmode: 'decimal', autocomplete: 'off', class: 'money w-full rounded-brand border border-line bg-card px-3 py-3 text-[1.375rem] text-ink', placeholder: '0', 'aria-labelledby': question.id });
  const wrap = h('div', { class: 'flex items-center gap-2' }, prefix && h('span', { class: 'money text-[1.375rem] text-muted' }, prefix), input, suffix && h('span', { class: 'money text-[1.375rem] text-muted' }, suffix));
  const check = h('button', { class: 'btn-primary mt-4 w-full', onclick: finish }, u('check'));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') finish(); });
  const error = h('p', { class: 'small text-negative mt-2', role: 'alert' });
  input.maxLength = 24;
  input.addEventListener('input', () => { error.textContent = updateNumericInput(input, { signed: true }); });
  c.append(wrap, error, check);
  const focusTimer = setTimeout(() => { if (input.isConnected) input.focus(); }, 50);
  manage(c, () => clearTimeout(focusTimer));
  function finish() {
    if (input.disabled) return;
    const v = numericAnswer(input.value, spec.format);
    if (!Number.isFinite(v) || Math.abs(v) >= 1e12) {
      error.textContent = t({en: 'Enter a valid number below 1 trillion. Use a dot for decimals.', tl: 'Maglagay ng wastong numero na mas mababa sa 1 trilyon. Gumamit ng tuldok para sa decimal.'});
      input.setCustomValidity(error.textContent);
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      input.reportValidity();
      return;
    }
    input.setCustomValidity('');
    error.textContent = '';
    input.removeAttribute('aria-invalid');
    input.disabled = true; check.remove();
    const ok = Math.abs(v - spec.answer) <= (spec.tolerance || 0);
    c.append(
      h('div', { class: 'mt-4 flex items-baseline justify-between' }, h('span', { class: 'eyebrow' }, u('answer')), h('span', { class: 'money text-[1.375rem] text-primary-deep' }, fmt(spec.answer, spec.format))),
      why(spec.worked, ok),
      continueBtn(done, ok ? 1 : 0));
  }
}

/* 8. compare */
function compare(c, spec, done) {
  c.append(prompt(spec));
  const grid = h('div', { class: 'grid grid-cols-2 gap-3' });
  const cards = spec.options.map(o => h('button', { class: 'option flex h-full flex-col gap-1 px-3 py-3', onclick: () => pick(o) },
    h('span', { class: 'font-semibold' }, t(o.title)),
    ...o.lines.map(l => h('span', { class: 'small text-ink' }, t(l))),
    h('span', { class: 'eff small mt-2 hidden font-semibold text-primary-deep' }, t(o.effective))));
  cards.forEach(el => grid.append(el));
  c.append(grid);
  function pick(o) {
    cards.forEach((el, i) => {
      const opt = spec.options[i];
      el.disabled = true;
      el.querySelector('.eff').classList.remove('hidden');
      el.dataset.state = opt.cheaper ? 'right' : (opt === o ? 'picked' : 'wrong');
      if (opt.cheaper) el.prepend(h('span', { class: 'chip border-positive text-positive' }, u('cheaper')));
    });
    c.append(why(spec.why, o.cheaper), continueBtn(done, o.cheaper ? 1 : 0.5));
  }
}

/* 9. story */
function story(c, spec, done) {
  let node = spec.nodes[spec.start];
  let steps = 0, firstScore = null;
  const box = h('div', {});
  c.append(box);
  function render(moveFocus = false) {
    box.innerHTML = '';
    if (node.balance != null) box.append(h('div', { class: 'mb-3 flex items-center justify-between' }, h('span', { class: 'eyebrow' }, u('balance')), h('span', { class: 'money text-[1.25rem] ' + (node.balance < 0 ? 'text-negative' : 'text-primary-deep') }, peso(node.balance))));
    const question = h('p', { class: 'lede mb-4', tabindex: '-1' }, t(node.text));
    box.append(question);
    if (node.outcome) {
      const steady = node.outcome === 'steady';
      if (firstScore == null) firstScore = steady ? 1 : 0.6;
      box.append(h('span', { class: 'chip ' + (steady ? 'border-positive text-positive' : 'border-accent text-accent') }, u(node.outcome)));
      box.append(h('button', { class: 'btn-ghost mt-4 w-full', onclick: () => { node = spec.nodes[spec.start]; render(true); } }, u('tryAnother')));
      box.append(continueBtn(done, firstScore));
      if (moveFocus) question.focus();
      return;
    }
    const list = h('div', { class: 'flex flex-col gap-2' });
    (node.choices || []).forEach(ch => list.append(h('button', { class: 'option', onclick: () => { node = spec.nodes[ch.next]; steps++; render(true); } }, t(ch.text))));
    box.append(list);
    if (moveFocus) question.focus();
  }
  render();
}

/* 10. rapid */
function rapid(c, spec, done) {
  let i = 0, right = 0, left = spec.seconds || 90;
  const misses = [];
  const bar = h('div', { class: 'bar mb-3' }, h('span', { style: { width: '100%' } }));
  const timer = h('p', { class: 'small mb-2 tnum' }, `${left} ${u('seconds')}`);
  const text = h('div', { class: 'card flex min-h-32 items-center px-5 py-6 text-[1.0625rem] font-semibold leading-snug' });
  const fb = h('div', { class: 'mt-2 min-h-6 small' });
  const btns = h('div', { class: 'mt-3 grid grid-cols-2 gap-3' },
    h('button', { class: 'btn-ghost', onclick: () => answer(true) }, u('true')),
    h('button', { class: 'btn-ghost', onclick: () => answer(false) }, u('false')));
  c.append(timer, bar, text, fb, btns);
  const total = spec.seconds || 90;
  const iv = setInterval(() => { left--; timer.textContent = `${left} ${u('seconds')}`; bar.firstChild.style.width = `${(left / total) * 100}%`; if (left <= 0) finish(); }, 1000);
  let advance;
  manage(c, () => { clearInterval(iv); clearTimeout(advance); finished = true; });
  let lock = false;
  function show() { text.textContent = t(spec.items[i].text); fb.textContent = ''; }
  function answer(v) {
    if (lock || finished) return; lock = true;
    const item = spec.items[i];
    const ok = item.answer === v;
    if (ok) right++; else misses.push(item);
    fb.textContent = (ok ? u('correct') : u('hereIsTheNumber')) + ' ' + t(item.why);
    advance = setTimeout(() => { if (finished) return; i++; lock = false; i < spec.items.length ? show() : finish(); }, ok ? 700 : 1400);
  }
  let finished = false;
  function finish() {
    if (finished) return; finished = true; clearInterval(iv); clearTimeout(advance);
    btns.remove(); text.remove(); fb.remove(); timer.remove(); bar.remove();
    c.append(scoreLine(right, spec.items.length));
    if (misses.length) c.append(h('div', { class: 'mt-2 flex flex-col gap-2' }, misses.map(m => h('div', { class: 'why' }, h('span', { class: 'font-semibold block' }, t(m.text)), `${m.answer ? u('true') : u('false')}. ${t(m.why)}`))));
    c.append(continueBtn(done, right / spec.items.length));
  }
  show();
}

/* 11. match */
function match(c, spec, done) {
  c.append(prompt(spec));
  const left = spec.pairs.map((p, i) => ({ i, text: p.a }));
  const right = shuffle(spec.pairs.map((p, i) => ({ i, text: p.b })));
  let selA = null, wrong = 0, matched = 0;
  const colA = h('div', { class: 'flex flex-col gap-2' });
  const colB = h('div', { class: 'flex flex-col gap-2' });
  const note = h('p', { class: 'small mt-3 min-h-5', role: 'status' });
  const aBtns = left.map(x => h('button', { class: 'option py-2 text-[0.875rem]', 'aria-pressed': 'false', onclick: () => {
    if (aBtns[x.i].disabled) return;
    selA = x.i;
    aBtns.forEach(b => {
      if (!b.disabled) b.dataset.state = '';
      b.setAttribute('aria-pressed', 'false');
    });
    aBtns[x.i].dataset.state = 'picked';
    aBtns[x.i].setAttribute('aria-pressed', 'true');
    note.textContent = '';
  } }, t(x.text)));
  const bBtns = right.map(x => h('button', { class: 'option py-2 text-[0.875rem]', onclick: () => pickB(x) }, t(x.text)));
  aBtns.forEach(b => colA.append(b)); bBtns.forEach(b => colB.append(b));
  c.append(h('div', { class: 'grid grid-cols-2 gap-3' }, colA, colB), note);
  function pickB(x) {
    if (selA == null) { note.textContent = t({ en: 'Pick a term on the left first.', tl: 'Pumili muna ng term sa kaliwa.' }); return; }
    const bEl = bBtns[right.indexOf(x)];
    if (bEl.disabled) return;
    // Identical visible answers are interchangeable (e.g. three purchases with
    // the same senior discount); learners cannot distinguish hidden pair IDs.
    if (x.i === selA || t(x.text) === t(spec.pairs[selA].b)) {
      aBtns[selA].dataset.state = 'right'; aBtns[selA].disabled = true;
      aBtns[selA].setAttribute('aria-pressed', 'false');
      bEl.dataset.state = 'right'; bEl.disabled = true;
      matched++; selA = null;
      if (matched === spec.pairs.length) {
        const score = Math.max(0.3, 1 - (wrong / spec.pairs.length) * 0.5);
        c.append(h('p', { class: 'small mt-3' }, wrong ? t({ en: `All matched, with ${wrong} retried.`, tl: `Lahat na-match, ${wrong} ang inulit.` }) : u('correct')), continueBtn(done, score));
      }
    } else {
      wrong++;
      note.textContent = u('hereIsTheNumber') + ' ' + t({ en: 'Not that one. Try another.', tl: 'Hindi iyan. Subukan ang iba.' });
      bEl.dataset.state = 'wrong'; setTimeout(() => { if (!bEl.disabled) bEl.dataset.state = ''; }, 500);
    }
  }
}
