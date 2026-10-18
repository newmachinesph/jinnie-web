// Tiny DOM helpers and the stroke icon set (24 grid, 1.75 stroke, round caps, single colour).
import { speak, canSpeak } from './speech.js';

export function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v === true) el.setAttribute(k, '');
    else el.setAttribute(k, v);
  }
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const svg = d => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

export const icons = {
  back: svg('<path d="M15 18l-6-6 6-6"/>'),
  close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  speaker: svg('<path d="M4 10v4h4l5 4V6L8 10H4z"/><path d="M16 9a4 4 0 0 1 0 6"/>'),
  check: svg('<path d="M5 12l5 5 9-11"/>'),
  lamp: svg('<path d="M5 13h12l4-3-1 5-3 1c-1 3-3 4-6 4s-5-2-6-7ZM5 14c-5 0-4-6-1-5M7 13c0-4 8-4 9 0M10 9V8h3v1M9 22h5M11 5c-2-2 2-2 1-4"/><path d="m8.5 15.5 3-2 3 2M10 15.8h3m-3.5 1.4h4M11.5 16v3m-2-1.2.5.6m3-.6-.5.6M9 19.5h5" stroke-width=".65" stroke="var(--c-gold, #D4AF37)"/>'),
  jinnie: svg('<path d="M5 15c-2-5-1-11 5-12 1-3 6-2 7 1 4 2 4 7 3 11M7 8c4 0 6-2 7-3 0 3 2 4 3 4M7 8v3a5 5 0 0 0 10 0V9M9 11h.1m5.8 0h.1M10 14c1 1 3 1 4 0M8 17l4 3 4-3M8 17c-3 0-5 2-5 5m13-5c3 0 5 2 5 5"/><path d="m10 3 2-1 2 1" stroke="var(--c-gold, #D4AF37)"/>'),
  route: svg('<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h6a4 4 0 0 1 0 8h-4a4 4 0 0 0 0 8h6"/>'),
  target: svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
  person: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>'),
  minus: svg('<path d="M5 12h14"/>'),
  plus: svg('<path d="M12 5v14M5 12h14"/>'),
  shield: svg('<path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z"/><path d="M9 12l2 2 4-5"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
};

export function speakButton(text, label = 'Read aloud') {
  if (!canSpeak()) return null;
  return h('button', { class: 'inline-flex h-9 w-9 items-center justify-center rounded-brand border border-line bg-card text-muted', 'aria-label': label, onclick: () => speak(text), html: icons.speaker });
}

export function progressBar(pct) {
  const v = Math.round(Math.max(0, Math.min(1, pct)) * 100);
  return h('div', { class: 'bar', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(v) }, h('span', { style: { width: `${v}%` } }));
}
