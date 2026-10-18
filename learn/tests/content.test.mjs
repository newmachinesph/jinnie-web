import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { drills } from '../content/drills.js';
import { glossary } from '../content/glossary.js';

test('content passes the schema linter', () => {
  const r = spawnSync(process.execPath, ['scripts/lint-content.mjs'], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stdout + r.stderr);
});

test('every drill has suspicious lines with reasons and one clean line', () => {
  for (const d of drills) {
    const lines = d.do.message.lines;
    assert.ok(lines.filter(l => l.suspicious).length >= 2, d.id);
    assert.ok(lines.some(l => !l.suspicious), d.id);
    for (const l of lines.filter(l => l.suspicious)) assert.ok(l.why.en && l.why.tl, d.id);
  }
});

test('glossary terms are unique and bilingual', () => {
  const terms = glossary.map(g => g.term.toLowerCase());
  assert.equal(new Set(terms).size, terms.length);
  for (const g of glossary) assert.ok(g.en.length > 10 && g.tl.length > 10, g.term);
});
