import { get, set } from './store.js';
import { h } from './ui.js';
import { t } from './i18n.js';
import { downloadBlob } from './certificate.js';
import { manage } from './lifecycle.js';

const object = value => value && typeof value === 'object' && !Array.isArray(value);
const finite = value => Number.isFinite(value) && value >= 0;
export function parseBackup(text) {
  if (text.length > 4_000_000) throw new Error('Backup too large');
  const backup = JSON.parse(text);
  if (backup.app !== 'jinnie-learn' || backup.version !== 1 || !object(backup.state)) throw new Error('Invalid backup');
  const s = backup.state;
  if (!['en', 'tl'].includes(s.lang) || ![null, 'kids', 'teens', 'first', 'building', 'securing', 'retired'].includes(s.band)) throw new Error('Invalid profile');
  for (const key of ['voice', 'family', 'onboarded']) if (typeof s[key] !== 'boolean') throw new Error('Invalid preference');
  if (!['base', 'large'].includes(s.textSize)) throw new Error('Invalid text size');
  if (s.placed !== null && (!object(s.placed) || (!s.placed.skipped && (!['kids', 'teens', 'first', 'building', 'securing', 'retired'].includes(s.placed.path) || !Number.isInteger(s.placed.startAt) || s.placed.startAt < 1)))) throw new Error('Invalid placement');
  for (const key of ['wishes', 'drills', 'events']) if (!Array.isArray(s[key])) throw new Error('Invalid records');
  for (const key of ['bites', 'review', 'commitments', 'checks', 'seen']) if (!object(s[key])) throw new Error('Invalid progress');
  for (const r of Object.values(s.review)) if (!object(r) || !finite(r.due) || !Number.isInteger(r.interval) || r.interval < 1) throw new Error('Invalid review');
  for (const d of s.drills) if (!object(d) || typeof d.id !== 'string' || !finite(d.at) || !finite(d.hit) || !finite(d.of)) throw new Error('Invalid drill');
  for (const e of s.events) if (!object(e) || typeof e.name !== 'string' || !finite(e.at)) throw new Error('Invalid event');
  if (!Object.values(s.seen).every(v => typeof v === 'boolean')) throw new Error('Invalid introduction');
  for (const w of s.wishes) if (!object(w) || typeof w.key !== 'string' || !object(w.title) || typeof w.title.en !== 'string' || typeof w.title.tl !== 'string' || !finite(w.amount) || w.amount === 0 || !finite(w.saved) || w.saved > w.amount || !['have', 'rid', 'safe'].includes(w.kind)) throw new Error('Invalid wish');
  for (const c of Object.values(s.commitments)) if (!object(c) || !Array.isArray(c.marks) || !c.marks.every(x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x)) || !Number.isInteger(c.days) || c.days < 1) throw new Error('Invalid commitment');
  for (const b of Object.values(s.bites)) if (!object(b) || typeof b.done !== 'boolean' || !finite(b.score) || b.score > 1) throw new Error('Invalid lesson');
  for (const c of Object.values(s.checks)) if (!object(c) || !finite(c.at) || !finite(c.correct) || !finite(c.of) || typeof c.passed !== 'boolean') throw new Error('Invalid certificate');
  const safe = {};
  for (const key of Object.keys(get())) if (Object.hasOwn(s, key)) safe[key] = s[key];
  return safe;
}

export function backupControls(onRestore) {
  const root = h('div', { class: 'card mt-3 px-4 py-3' });
  let active = true, selection = 0;
  manage(root, () => { active = false; selection++; });
  const status = h('p', { class: 'small mt-2', role: 'status' });
  const input = h('input', { type: 'file', accept: '.json,application/json', hidden: true, onchange: async () => {
    const file = input.files?.[0]; if (!active || !file) return;
    const current = ++selection;
    try {
      if (file.size > 4_000_000) throw new Error('Too large');
      const text = await file.text();
      if (!active || current !== selection) return;
      const state = parseBackup(text);
      if (!confirm(t({ en: 'Replace this device’s progress with this backup?', tl: 'Palitan ang progreso sa device na ito ng backup?' }))) return;
      if (!active || current !== selection) return;
      set(state);
      if (active) onRestore();
    } catch { if (active && current === selection) status.textContent = t({ en: 'This file is not a valid Jinnie backup. Your progress has not changed.', tl: 'Hindi wastong Jinnie backup ang file na ito. Hindi nagbago ang progreso mo.' }); }
    finally { if (active && current === selection) input.value = ''; }
  } });
  root.append(
    h('button', { class: 'btn-ghost w-full', onclick: () => downloadBlob(new Blob([JSON.stringify({ app: 'jinnie-learn', version: 1, savedAt: new Date().toISOString(), state: get() }, null, 2)], { type: 'application/json' }), 'jinnie-learn-backup.json') }, t({ en: 'Save progress backup', tl: 'I-save ang backup ng progreso' })),
    h('button', { class: 'btn-ghost mt-2 w-full', onclick: () => input.click() }, t({ en: 'Restore progress backup', tl: 'Ibalik ang backup ng progreso' })), input, status);
  return root;
}
