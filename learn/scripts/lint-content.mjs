// Content linter. Enforces content/schema.md across every path. Run: node scripts/lint-content.mjs
const files = ['kids', 'teens', 'first', 'building', 'securing', 'retired'];
const TYPES = ['choice', 'swipe', 'predict', 'allocate', 'spot', 'order', 'number', 'compare', 'story', 'rapid', 'match'];
const KINDS = ['wish', 'commitment', 'open', 'drill'];
const WISHES = ['have', 'rid', 'safe'];
let problems = 0, bites = 0, lessons = 0;

const bad = (id, msg) => { problems++; console.log(`  ${id}: ${msg}`); };
const isStr = (id, s, name, tlRequired = true) => {
  if (!s || typeof s !== 'object') return bad(id, `${name} missing`);
  if (!s.en) bad(id, `${name}.en missing`);
  if (tlRequired && !s.tl) bad(id, `${name}.tl missing`);
  for (const [lang, v] of Object.entries(s)) {
    if (typeof v !== 'string') continue;
    const own = v.replace(/"[^"]*"/g, ''); // quoted speech (a scammer, a friend) may shout; Jinnie does not
    if (/!/.test(own)) bad(id, `${name}.${lang} has an exclamation mark`);
    if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(own)) bad(id, `${name}.${lang} has an emoji`);
    if (/\b(lodi|charot|petmalu|sana all|omg)\b/i.test(v)) bad(id, `${name}.${lang} has slang`);
  }
};

for (const f of files) {
  let p;
  try { p = (await import(`../content/${f}.js`)).default; } catch (e) { console.log(`${f}: not loaded (${e.message})`); continue; }
  console.log(`${p.id} (${p.band}): ${p.lessons.length} lessons`);
  if (p.id !== f) bad(p.id, `id should be ${f}`);
  isStr(p.id, p.title, 'title'); isStr(p.id, p.tagline, 'tagline');
  if (!p.intro || !p.intro.text) bad(p.id, 'intro.text missing');
  if ((f === 'kids' || f === 'teens') && p.gate !== 'family') bad(p.id, 'gate should be family');
  const ids = new Set();
  for (const l of p.lessons) {
    lessons++;
    if (!l.id || !l.id.startsWith(p.id + '.')) bad(l.id || '?', 'lesson id must start with the path id');
    isStr(l.id, l.title, 'title'); isStr(l.id, l.summary, 'summary'); isStr(l.id, l.competency, 'competency');
    if (!WISHES.includes(l.wish)) bad(l.id, `wish must be one of ${WISHES.join(', ')}`);
    if (l.status === 'authored') {
      if (!Array.isArray(l.bites) || l.bites.length < 4 || l.bites.length > 7) bad(l.id, `authored lesson needs 4 to 7 bites, has ${l.bites?.length ?? 0}`);
      let prev = null, stories = 0;
      for (const b of l.bites || []) {
        bites++;
        if (ids.has(b.id)) bad(b.id, 'duplicate bite id'); ids.add(b.id);
        if (!b.id.startsWith(l.id + '.')) bad(b.id, 'bite id must start with the lesson id');
        isStr(b.id, b.title, 'title');
        if (!b.minutes) bad(b.id, 'minutes missing');
        isStr(b.id, b.hook?.text, 'hook.text'); isStr(b.id, b.show?.text, 'show.text'); isStr(b.id, b.keep?.text, 'keep.text');
        (b.show?.points || []).forEach((pt, i) => isStr(b.id, pt, `show.points[${i}]`));
        if (!b.hook?.illo) bad(b.id, 'hook.illo missing'); if (!b.show?.illo) bad(b.id, 'show.illo missing');
        const d = b.do || {};
        if (!TYPES.includes(d.type)) bad(b.id, `unknown do.type ${d.type}`);
        if (d.type === prev) bad(b.id, `same type as previous bite (${d.type})`);
        prev = d.type;
        if (d.type !== 'rapid' && d.type !== 'story') isStr(b.id, d.prompt, 'do.prompt');
        switch (d.type) {
          case 'choice': if (!d.options || d.options.filter(o => o.correct).length !== 1) bad(b.id, 'choice needs exactly one correct option'); (d.options || []).forEach((o, i) => { isStr(b.id, o.text, `option[${i}].text`, false); isStr(b.id, o.why, `option[${i}].why`); }); break;
          case 'swipe': if (!d.cards || d.cards.length < 4) bad(b.id, 'swipe needs 4 or more cards'); (d.cards || []).forEach((c, i) => { if (!['left', 'right'].includes(c.side)) bad(b.id, `card[${i}].side`); isStr(b.id, c.why, `card[${i}].why`); }); isStr(b.id, d.left, 'left'); isStr(b.id, d.right, 'right'); break;
          case 'predict': if (![d.min, d.max, d.step, d.answer].every(n => typeof n === 'number')) bad(b.id, 'predict needs numeric min, max, step, answer'); if (d.answer < d.min || d.answer > d.max) bad(b.id, 'predict answer outside range'); isStr(b.id, d.why, 'why'); break;
          case 'allocate': if (!d.total || !d.jars || d.jars.length < 3) bad(b.id, 'allocate needs total and 3 or more jars'); (d.jars || []).forEach((j, i) => { if (!Array.isArray(j.guide) || j.guide.length !== 2) bad(b.id, `jar[${i}].guide`); isStr(b.id, j.label, `jar[${i}].label`); }); isStr(b.id, d.why, 'why'); break;
          case 'spot': { const lines = d.message?.lines || []; if (lines.length < 3) bad(b.id, 'spot needs 3 or more lines'); if (!lines.some(x => x.suspicious)) bad(b.id, 'spot needs a suspicious line'); lines.forEach((x, i) => { if (!x.text?.en || !x.text?.tl) bad(b.id, `line[${i}].text needs en and tl`); /* scam lines are the scammer's voice: exclamation marks allowed */ if (x.suspicious) isStr(b.id, x.why, `line[${i}].why`); }); isStr(b.id, d.why, 'why'); break; }
          case 'order': if (!d.steps || d.steps.length < 3) bad(b.id, 'order needs 3 or more steps'); (d.steps || []).forEach((s, i) => isStr(b.id, s, `step[${i}]`)); isStr(b.id, d.why, 'why'); break;
          case 'number': if (typeof d.answer !== 'number') bad(b.id, 'number needs a numeric answer'); isStr(b.id, d.worked, 'worked'); break;
          case 'compare': if (!d.options || d.options.length !== 2 || d.options.filter(o => o.cheaper).length !== 1) bad(b.id, 'compare needs 2 options with one cheaper'); (d.options || []).forEach((o, i) => { isStr(b.id, o.title, `option[${i}].title`); isStr(b.id, o.effective, `option[${i}].effective`); }); isStr(b.id, d.why, 'why'); break;
          case 'story': { stories++; const nodes = d.nodes || {}; if (!nodes[d.start]) bad(b.id, 'story start node missing'); for (const [k, n] of Object.entries(nodes)) { isStr(b.id, n.text, `node ${k}.text`); if (!n.outcome && !(n.choices || []).length) bad(b.id, `node ${k} has no choices and no outcome`); if (n.outcome && !['steady', 'costly'].includes(n.outcome)) bad(b.id, `node ${k}.outcome`); (n.choices || []).forEach(c => { if (!nodes[c.next]) bad(b.id, `node ${k} points to missing ${c.next}`); }); } break; }
          case 'rapid': if (!d.items || d.items.length < 5) bad(b.id, 'rapid needs 5 or more items'); (d.items || []).forEach((x, i) => { isStr(b.id, x.text, `item[${i}].text`); if (typeof x.answer !== 'boolean') bad(b.id, `item[${i}].answer`); isStr(b.id, x.why, `item[${i}].why`); }); break;
          case 'match': if (!d.pairs || d.pairs.length < 3) bad(b.id, 'match needs 3 or more pairs'); (d.pairs || []).forEach((x, i) => { isStr(b.id, x.a, `pair[${i}].a`); isStr(b.id, x.b, `pair[${i}].b`); }); break;
        }
        const a = b.keep?.action;
        if (a) {
          if (!KINDS.includes(a.kind)) bad(b.id, `action.kind ${a.kind}`);
          isStr(b.id, a.label, 'action.label');
          if (p.gate === 'family' && !(a.kind === 'open' && a.payload?.app === 'circles')) bad(b.id, 'family paths allow only open:circles actions');
          if (a.kind === 'wish' && !(a.payload?.key && a.payload?.title && a.payload?.amount)) bad(b.id, 'wish action needs key, title, amount');
          if (a.kind === 'commitment' && !a.payload?.id) bad(b.id, 'commitment action needs id');
        }
      }
      if (stories !== 1) bad(l.id, `authored lesson should have exactly one story, has ${stories}`);
    } else if (l.status === 'outline') {
      if (!Array.isArray(l.outline) || l.outline.length < 3) bad(l.id, 'outline needs 3 or more planned bites');
      (l.outline || []).forEach((o, i) => { isStr(l.id, o.title, `outline[${i}].title`); if (!TYPES.includes(o.type)) bad(l.id, `outline[${i}].type ${o.type}`); });
    } else bad(l.id, `status must be authored or outline`);
  }
}
console.log(`\n${lessons} lessons, ${bites} authored bites, ${problems} problem${problems === 1 ? '' : 's'}`);
process.exit(problems ? 1 : 0);
