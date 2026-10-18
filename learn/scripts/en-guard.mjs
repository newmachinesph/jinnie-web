// Guards the English copy while the Taglish is edited.
//   node scripts/en-guard.mjs snapshot   writes .tmp/en-snapshot.json from every {en,tl} string in content
//   node scripts/en-guard.mjs check      reports any en string that differs from the snapshot (exit 1 if any)
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = ['kids', 'teens', 'first', 'building', 'securing', 'retired'];
const mode = process.argv[2] || 'check';
const file = join(root, '.tmp', 'en-snapshot.json');

async function collect() {
  const out = {};
  for (const f of files) {
    const p = (await import(`../content/${f}.js`)).default;
    const list = [];
    const walk = (o, path) => {
      if (!o || typeof o !== 'object') return;
      if (typeof o.en === 'string' && 'tl' in o) { list.push({ path, en: o.en, tl: o.tl }); return; }
      for (const [k, v] of Object.entries(o)) walk(v, path + '.' + k);
    };
    p.lessons.forEach(l => walk(l, l.id));
    out[f] = list;
  }
  return out;
}

const now = await collect();
if (mode === 'snapshot') {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(now));
  console.log('snapshot:', Object.values(now).reduce((a, l) => a + l.length, 0), 'strings');
} else {
  if (!existsSync(file)) { console.log('no snapshot'); process.exit(2); }
  const then = JSON.parse(readFileSync(file, 'utf8'));
  let changed = 0, missing = 0, tlChanged = 0, identical = 0;
  for (const f of files) {
    const before = new Map((then[f] || []).map(x => [x.path, x]));
    for (const x of now[f] || []) {
      const b = before.get(x.path);
      if (!b) { missing++; continue; }
      if (b.en !== x.en) { changed++; console.log(`  en changed: ${x.path}`); }
      if (b.tl !== x.tl) tlChanged++;
      if (x.tl.trim() === x.en.trim() && /[a-z]{4,}/i.test(x.en) && !/^[A-Z₱\d ,.%:\-]+$/.test(x.en.trim())) identical++;
    }
  }
  console.log(`en changed: ${changed}, tl edited: ${tlChanged}, strings added since snapshot: ${missing}, tl still identical to en (excluding names and amounts): ${identical}`);
  process.exit(changed ? 1 : 0);
}
