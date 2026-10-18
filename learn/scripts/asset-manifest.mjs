// Generates docs/manifest/<path>.md from the content files: every voice line to record, every illustration
// and brief, every mock screenshot, every data hook. Run: node scripts/asset-manifest.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = ['kids', 'teens', 'first', 'building', 'securing', 'retired'];
mkdirSync(join(root, 'docs', 'manifest'), { recursive: true });

const totals = [];
for (const f of files) {
  let path;
  try { path = (await import(`../content/${f}.js`)).default; } catch (e) { console.log(`skip ${f}: ${e.message}`); continue; }
  const out = [];
  const voice = [], illos = new Map(), briefs = [], shots = [], hooks = [];
  let bites = 0;
  out.push(`# Asset manifest: ${path.title.en} (${path.band})`, '', 'Generated from the content file. Do not edit by hand; run `node scripts/asset-manifest.mjs`.', '');
  if (path.intro?.video?.placeholder) out.push('## Video', '', `Path intro, 9:16, 45 to 60 seconds, captions in en and tl.`, '', `> ${path.intro.video.placeholder}`, '');
  for (const l of path.lessons) {
    if (l.status !== 'authored') continue;
    for (const b of l.bites) {
      bites++;
      const add = (beat, s) => { if (s && s.en) voice.push({ id: b.id, beat, en: s.en, tl: s.tl || '' }); };
      add('hook', b.hook.text); add('show', b.show.text); (b.show.points || []).forEach((p, i) => add(`show.point${i + 1}`, p)); add('do.prompt', b.do.prompt); add('keep', b.keep.text);
      for (const id of [b.hook.illo, b.show.illo]) {
        if (!id) continue;
        if (id.startsWith('new:')) briefs.push({ id: b.id, brief: id.slice(4) });
        else illos.set(id, [...(illos.get(id) || []), b.id]);
      }
      if (b.do.type === 'spot') shots.push({ id: b.id, channel: b.do.message.channel, from: b.do.message.from.en, lines: b.do.message.lines.map(x => x.text.en) });
      if (b.keep.action) hooks.push({ id: b.id, kind: b.keep.action.kind, payload: JSON.stringify(b.keep.action.payload) });
    }
  }
  out.push('## Voice lines to record', '', `${voice.length} lines. File name: \`audio/${path.id}/<bite id>.<beat>.<lang>.m4a\`. One calm female Taglish voice, no music.`, '');
  out.push('| Bite | Beat | EN | TL |', '|---|---|---|---|');
  voice.forEach(v => out.push(`| ${v.id} | ${v.beat} | ${cell(v.en)} | ${cell(v.tl)} |`));
  out.push('', '## Illustrations', '', 'Existing ids in `assets/illustrations.js` to redraw in final art (120 grid, 2.5 stroke, single colour, no fills):', '');
  [...illos.entries()].forEach(([id, uses]) => out.push(`- \`${id}\` used by ${uses.length} bite${uses.length === 1 ? '' : 's'}: ${uses.join(', ')}`));
  if (briefs.length) { out.push('', 'New illustrations requested:', ''); briefs.forEach(b => out.push(`- ${b.id}: ${b.brief}`)); }
  if (shots.length) {
    out.push('', '## Mock screenshots for spot interactions', '', 'Rendered as HTML bubbles now. Replace with realistic captures (blur real numbers, keep the tells).', '');
    shots.forEach(s => { out.push(`- ${s.id} (${s.channel}, from "${s.from}")`); s.lines.forEach(t => out.push(`  - ${t}`)); });
  }
  out.push('', '## Data hooks', '', hooks.length ? '| Bite | Action | Payload |' : 'None. Family mode.', hooks.length ? '|---|---|---|' : '');
  hooks.forEach(k => out.push(`| ${k.id} | ${k.kind} | \`${k.payload}\` |`));
  writeFileSync(join(root, 'docs', 'manifest', `${path.id}.md`), out.join('\n') + '\n');
  totals.push({ id: path.id, title: path.title.en, bites, voice: voice.length, illos: illos.size, briefs: briefs.length, shots: shots.length, hooks: hooks.length });
  console.log(`wrote docs/manifest/${path.id}.md (${bites} bites, ${voice.length} voice lines)`);
}

const idx = ['# Asset manifests', '', 'One file per path, generated from content. Totals:', '', '| Path | Bites | Voice lines | Illustration ids | New briefs | Mock screenshots | Data hooks |', '|---|---|---|---|---|---|---|'];
totals.forEach(t => idx.push(`| [${t.title}](${t.id}.md) | ${t.bites} | ${t.voice} | ${t.illos} | ${t.briefs} | ${t.shots} | ${t.hooks} |`));
const sum = k => totals.reduce((a, t) => a + t[k], 0);
idx.push(`| **Total** | ${sum('bites')} | ${sum('voice')} | | ${sum('briefs')} | ${sum('shots')} | ${sum('hooks')} |`, '');
writeFileSync(join(root, 'docs', 'manifest', 'README.md'), idx.join('\n'));

function cell(s) { return String(s).replace(/\|/g, '\\|').replace(/\n/g, ' '); }
