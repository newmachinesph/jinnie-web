import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { numberWords, spokenText } from '../src/speech-text.js';

test('peso signs and PHP spellings are read as pesos in English', () => {
  assert.equal(spokenText('Save ₱1, PHP 2, and PhP1,000.'), 'Save 1 peso, 2 pesos, and 1,000 pesos.');
  assert.equal(spokenText('Paid 500 PHP; balance 0₱.'), 'Paid 500 pesos; balance 0 pesos.');
});

test('Filipino narration says amounts the Taglish way, in English words', () => {
  assert.equal(spokenText('May ₱1, ₱500 at PhP 2.50.', 'tl'), 'May one peso, five hundred pesos at two pesos and fifty centavos.');
  assert.equal(spokenText('₱0.01', 'tl'), 'zero pesos and one centavo');
  assert.equal(spokenText('₱5,000 ang baon mo.', 'tl'), 'five thousand pesos ang baon mo.');
});

test('every other numeral in Filipino narration is spoken in English too', () => {
  assert.equal(spokenText('13th month pay na 2.5%, sa 25 July 2026, 10 pm.', 'tl'), 'thirteenth month pay na two point five percent, sa twenty-five July two thousand twenty-six, ten pm.');
  assert.equal(spokenText('1,234,567 tao at 5-6 lending.', 'tl'), 'one million two hundred thirty-four thousand five hundred sixty-seven tao at five-six lending.');
  assert.equal(spokenText('Ang 21st at ang 42nd.', 'tl'), 'Ang twenty-first at ang forty-second.');
  assert.equal(numberWords('100'), 'one hundred');
  assert.equal(numberWords('1,000,000'), 'one million');
  assert.equal(numberWords('0.5'), 'zero point five');
});

test('signs, grouped amounts, decimal precision and English plurals retain their value', () => {
  const cases = [
    ['-₱1', 'minus 1 peso'],
    ['₱−1.01', 'minus 1 peso and 1 centavo'],
    ['+ PhP 1,234.50', 'plus 1,234 pesos and 50 centavos'],
    ['₱2.5', '2 pesos and 50 centavos'],
    ['₱1.00', '1 peso'],
    ['₱0', '0 pesos'],
    ['₱1.005', '1.005 pesos'],
    ['₱1,000–₱2,000', '1,000 pesos–2,000 pesos'],
    ['₱8,432.15.', '8,432 pesos and 15 centavos.'],
  ];
  for (const [input, expected] of cases) assert.equal(spokenText(input), expected, input);
  assert.equal(spokenText('₱1,000–₱2,000', 'tl'), 'one thousand pesos–two thousand pesos');
  assert.equal(spokenText('₱1.005', 'tl'), 'one point zero zero five pesos');
});

test('non-currency text and malformed or unsupported amounts are not reinterpreted', () => {
  for (const text of ['Earn 10%, save $100 or €20.', 'Learn PHP programming.', 'myPHP100', '₱1,23', '₱1,23k', '₱20k', 'Nothing changes.']) {
    assert.equal(spokenText(text), text);
  }
  for (const text of ['₱1,23', 'myPHP100', 'RA12010', 'Nothing changes.']) assert.equal(spokenText(text, 'tl'), text);
});

test('scaled amounts and Filipino hyphen prefixes keep their meaning', () => {
  assert.equal(spokenText('₱30 billion and ₱1.5 million.'), '30 billion pesos and 1.5 million pesos.');
  assert.equal(spokenText('₱354 bilyon at tig-₱100.', 'tl'), 'three hundred fifty-four billion pesos at tig-one hundred pesos.');
  assert.equal(spokenText('₱35,000-a-month'), '35,000 pesos-a-month');
});

test('prepared narration keeps original text keys and filenames while normalizing every spoken job', async () => {
  const jobs = JSON.parse(await readFile(new URL('../assets/audio/jobs.json', import.meta.url), 'utf8'));
  assert.equal(jobs.length, 1914);
  const changed = { en: 0, tl: 0 };
  for (const job of jobs) {
    const key = createHash('sha256').update(job.lang + '\0' + job.text).digest('hex').slice(0, 24);
    assert.equal(job.key, key);
    assert.equal(job.file, `assets/audio/${job.path}/${key}.mp3`);
    assert.equal(job.spokenText, spokenText(job.text, job.lang));
    assert.doesNotMatch(job.spokenText, /₱|\bPHP\s*\d/i);
    assert.doesNotMatch(job.spokenText, /pesos (?:billion|million)|tig-minus/);
    // Product names such as MP2 keep their digits; every other numeral is spoken in English.
    if (job.lang === 'tl') assert.doesNotMatch(job.spokenText, /(?<![A-Z])\d/, job.key);
    if (job.text !== job.spokenText) changed[job.lang]++;
  }
  assert.deepEqual(changed, { en: 272, tl: 341 });
});
