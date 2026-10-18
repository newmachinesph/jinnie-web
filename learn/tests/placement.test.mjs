import { test } from 'node:test';
import assert from 'node:assert/strict';
import { questionsFor, suggest, modeOf, bands } from '../content/placement.js';

test('each band gets its own question set', () => {
  assert.equal(questionsFor('kids').length, 5);
  assert.equal(questionsFor('teens').length, 6);
  assert.equal(questionsFor('first').length, 8);
  assert.equal(questionsFor('retired').length, 8);
  assert.equal(modeOf('kids'), 'kids');
  assert.equal(modeOf('securing'), 'adult');
  assert.equal(bands.length, 6);
});

test('every placement question has exactly one correct option in both languages', () => {
  for (const b of ['kids', 'teens', 'first']) for (const q of questionsFor(b)) {
    assert.equal(q.options.filter(o => o.correct).length, 1, q.prompt.en);
    assert.ok(q.prompt.tl && q.options.every(o => o.why.tl));
  }
});

test('suggested starting lesson follows the score ratio', () => {
  assert.equal(suggest('first', 8, 8).startAt, 3);
  assert.equal(suggest('first', 5, 8).startAt, 2);
  assert.equal(suggest('first', 2, 8).startAt, 1);
  assert.equal(suggest('kids', 4, 5).startAt, 3);
});
