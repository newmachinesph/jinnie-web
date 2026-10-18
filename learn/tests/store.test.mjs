import { test } from 'node:test';
import assert from 'node:assert/strict';
const store = await import('../src/store.js');

test('completing a bite schedules review on a doubling interval', () => {
  store.reset();
  store.completeBite('x.1', 1);
  assert.equal(store.get().review['x.1'].interval, 3);
  store.reviewResult('x.1', true);
  assert.equal(store.get().review['x.1'].interval, 6);
  store.reviewResult('x.1', false);
  assert.equal(store.get().review['x.1'].interval, 1);
});

test('a wish is granted exactly when saved reaches the amount, never above it', () => {
  store.reset();
  store.addWish({ key: 'w', kind: 'have', title: { en: 'Laptop', tl: 'Laptop' }, amount: 1000 });
  store.fundWish('w', 400);
  assert.equal(store.get().wishes[0].grantedAt, null);
  store.fundWish('w', 900);
  const w = store.get().wishes[0];
  assert.equal(w.saved, 1000);
  assert.ok(w.grantedAt);
});

test('commitments count one mark per day and finish at the day target', () => {
  store.reset();
  store.startCommitment('record-7', 1);
  store.markCommitment('record-7');
  store.markCommitment('record-7');
  const c = store.get().commitments['record-7'];
  assert.equal(c.marks.length, 1);
  assert.equal(c.done, true);
});
