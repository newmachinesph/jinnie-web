// Authored data is bundled by Next.js; a missing course now fails the build.
import kids from './kids.js';
import teens from './teens.js';
import first from './first.js';
import building from './building.js';
import securing from './securing.js';
import retired from './retired.js';
export const paths = [kids, teens, first, building, securing, retired];
export const loadErrors = [];

export function findPath(id) { return paths.find(p => p.id === id); }

export function findLesson(id) {
  for (const p of paths) for (const l of p.lessons) if (l.id === id) return { path: p, lesson: l };
  return null;
}

export function findBite(id) {
  for (const p of paths) for (const l of p.lessons) for (const b of (l.bites || [])) if (b.id === id) return { path: p, lesson: l, bite: b };
  return null;
}

export function allBites() {
  const out = [];
  for (const p of paths) for (const l of p.lessons) for (const b of (l.bites || [])) out.push({ path: p, lesson: l, bite: b });
  return out;
}

export function pathProgress(path, state) {
  const bites = path.lessons.flatMap(l => l.bites || []);
  if (!bites.length) return 0;
  return bites.filter(b => state.bites[b.id]?.done).length / bites.length;
}

export function lessonProgress(lesson, state) {
  const bites = lesson.bites || [];
  if (!bites.length) return 0;
  return bites.filter(b => state.bites[b.id]?.done).length / bites.length;
}

export function nextBite(state) {
  const preferred = state.placed?.path || state.band;
  const ordered = [...paths].sort((a, b) => Number(b.id === preferred) - Number(a.id === preferred));
  for (const p of ordered) {
    if (p.gate === 'family' && !state.family) continue;
    const startAt = p.id === preferred ? Math.max(0, (state.placed?.startAt || 1) - 1) : 0;
    const lessons = [...p.lessons.slice(startAt), ...p.lessons.slice(0, startAt)];
    for (const l of lessons) for (const b of (l.bites || [])) if (!state.bites[b.id]?.done) return { path: p, lesson: l, bite: b };
  }
  return null;
}
