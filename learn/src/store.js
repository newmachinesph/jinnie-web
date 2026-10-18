// Browser progress is mirrored into Learn-scoped SDK storage inside Jinnie.
import { initialNativeState, persistNativeState } from './embed.js';
const KEY = 'jinnie.learn.v1';

const defaults = () => ({
  lang: 'en',                 // 'en' | 'tl'
  voice: false,               // read every beat aloud
  textSize: 'base',           // 'base' | 'large'
  family: false,              // parent gate acknowledged
  band: null,                 // 'kids' | 'teens' | 'first' | 'building' | 'securing' | 'retired'; asked first, before anything else
  onboarded: false,
  placed: null,               // { path, startAt, correct, of, at } or { skipped: true }
  wishes: [],                 // [{ key, kind:'have'|'rid'|'safe', title:{en,tl}, amount, saved, grantedAt }]
  bites: {},                  // biteId -> { done, score, at }
  review: {},                 // biteId -> { due, interval }
  commitments: {},            // id -> { startedAt, days, marks:[isoDate], done }
  drills: [],                 // [{ id, at, hit, of }]
  seen: {},                   // pathId -> true (intro seen)
  checks: {},                 // pathId -> { correct, of, passed, at }
  events: [],                 // aggregate-only event log, see events.js
});

let state = defaults();
let hydration;
const listeners = new Set();
export const subscribe = listener => { listeners.add(listener); return () => listeners.delete(listener); };
const emit = () => {
  for (const listener of listeners) listener();
  if (typeof document !== 'undefined') document.dispatchEvent(new CustomEvent('state'));
};
// Called by the client provider, never during Next.js server rendering.
export function hydrateStore() {
  if (!hydration) hydration = initialNativeState().then(nativeRaw => {
    state = load(nativeRaw);
    if (nativeRaw !== undefined) {
      // Main-app reset/restore is authoritative, including an empty profile.
      try {
        if (nativeRaw === null) localStorage.removeItem(KEY);
        else localStorage.setItem(KEY, nativeRaw);
      } catch { /* the native copy remains authoritative if browser storage is unavailable */ }
    }
    emit();
    return state;
  }).catch(error => {
    hydration = undefined;
    throw error;
  });
  return hydration;
}

function load(nativeRaw) {
  try {
    const raw = nativeRaw === undefined ? localStorage.getItem(KEY) : nativeRaw;
    if (raw) {
      const value = JSON.parse(raw);
      if (!value || typeof value !== 'object' || Array.isArray(value)) return defaults();
      const state = { ...defaults(), ...value };
      for (const key of ['wishes', 'drills', 'events']) if (!Array.isArray(state[key])) state[key] = [];
      for (const key of ['bites', 'review', 'commitments', 'seen', 'checks']) if (!state[key] || typeof state[key] !== 'object' || Array.isArray(state[key])) state[key] = {};
      if (!['en', 'tl'].includes(state.lang)) state.lang = 'en';
      return state;
    }
  } catch { /* storage unavailable or corrupt: start clean */ }
  return defaults();
}

export function get() { return state; }

export function set(patch) {
  state = typeof patch === 'function' ? patch(state) : { ...state, ...patch };
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
  persistNativeState(state);
  emit();
  return state;
}

export function reset() {
  state = defaults();
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
  persistNativeState(state);
  emit();
}

// Bite completion and spaced review scheduling (a small SM-2: interval doubles on success).
export function completeBite(biteId, score) {
  const now = Date.now();
  set(s => {
    const prev = s.review[biteId];
    const ok = score >= 0.7;
    const interval = prev ? (ok ? Math.min(prev.interval * 2, 60) : 1) : (ok ? 3 : 1);
    return {
      ...s,
      bites: { ...s.bites, [biteId]: { done: true, score, at: now } },
      review: { ...s.review, [biteId]: { due: now + interval * 864e5, interval } },
    };
  });
}

export function reviewResult(biteId, ok) {
  const now = Date.now();
  set(s => {
    const prev = s.review[biteId] || { interval: 1 };
    const interval = ok ? Math.min(prev.interval * 2, 60) : 1;
    return { ...s, review: { ...s.review, [biteId]: { due: now + interval * 864e5, interval } } };
  });
}

export function addWish(w) {
  if (!w || !Number.isFinite(w.amount) || w.amount <= 0 || !w.key) return;
  set(s => {
    if (s.wishes.some(x => x.key === w.key)) return s;
    return { ...s, wishes: [...s.wishes, { saved: 0, grantedAt: null, ...w }] };
  });
}

export function fundWish(key, amount) {
  if (!Number.isFinite(amount) || amount <= 0) return;
  set(s => ({
    ...s,
    wishes: s.wishes.map(w => {
      if (w.key !== key) return w;
      const saved = Math.min(w.amount, w.saved + amount);
      const grantedAt = w.grantedAt || (saved >= w.amount ? Date.now() : null);
      return { ...w, saved, grantedAt };
    }),
  }));
}

export function startCommitment(id, days) {
  if (!id || !Number.isInteger(days) || days < 1) return;
  set(s => s.commitments[id] && !s.commitments[id].done
    ? s
    : { ...s, commitments: { ...s.commitments, [id]: { startedAt: Date.now(), days, marks: [], done: false } } });
}

export function markCommitment(id) {
  const today = localDay();
  set(s => {
    const c = s.commitments[id];
    if (!c || c.marks.includes(today)) return s;
    const marks = [...c.marks, today];
    return { ...s, commitments: { ...s.commitments, [id]: { ...c, marks, done: marks.length >= c.days } } };
  });
}

export function localDay(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
