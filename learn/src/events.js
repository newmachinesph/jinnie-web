// Event log. Aggregates only; nothing here identifies a person. Kept on the device in the store,
// exported as counts from Me. In Jinnie this feeds the SDK's analytics with the same names.
import { get, set } from './store.js';

const MAX = 2000;

export function track(name, data = {}) {
  set(s => {
    const events = [...(s.events || []), { name, at: Date.now(), ...data }];
    return { ...s, events: events.length > MAX ? events.slice(events.length - MAX) : events };
  });
}

// Counts by event name, plus a few derived numbers, for the Me screen and for export.
export function summary() {
  const events = get().events || [];
  const byName = {};
  for (const e of events) byName[e.name] = (byName[e.name] || 0) + 1;
  const scores = events.filter(e => e.name === 'bite_complete' && typeof e.score === 'number');
  const byType = {};
  for (const e of scores) { const t = byType[e.type] || { n: 0, sum: 0 }; t.n++; t.sum += e.score; byType[e.type] = t; }
  return {
    total: events.length,
    byName,
    avgScoreByType: Object.fromEntries(Object.entries(byType).map(([k, v]) => [k, +(v.sum / v.n).toFixed(2)])),
    firstAt: events[0]?.at || null,
    lastAt: events[events.length - 1]?.at || null,
  };
}
