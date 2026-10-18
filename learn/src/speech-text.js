// Narration only. Authored text and narration keys stay unchanged so the screen,
// captions, and existing media references stay stable.
//
// Amounts are read as pesos in both languages. Filipino narration spells every
// number out in English words: the Filipino voice would otherwise count in
// Tagalog ("limang libong piso"), and Taglish speakers say "five thousand pesos".
const number = String.raw`\d(?:[\d,]*\d)?(?:\.\d+)?`;
const scale = String.raw`thousand|million|billion|trillion|libo|milyon|bilyon|trilyon`;
const prefix = new RegExp(String.raw`(?:(?<![\p{L}\p{N}_])([+−-])\s*)?(?:₱|\bPHP(?![\p{L}_]))\s*([+−-])?\s*(${number})(?![\p{L}\p{N}_]|[.,]\d)(?:\s+(${scale})\b)?`, 'giu');
const suffix = new RegExp(String.raw`(?<![\p{L}\p{N}_.])([+−-])?(${number})\s*(?:₱|PHP\b)`, 'giu');
const grouped = /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
const SCALE_EN = { libo: 'thousand', milyon: 'million', bilyon: 'billion', trilyon: 'trillion' };

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const GROUPS = ['', ' thousand', ' million', ' billion', ' trillion'];
const ORDINAL = { one: 'first', two: 'second', three: 'third', five: 'fifth', eight: 'eighth', nine: 'ninth', twelve: 'twelfth' };

function hundreds(n) {
  const out = [];
  if (n >= 100) out.push(`${ONES[Math.floor(n / 100)]} hundred`);
  const rest = n % 100;
  if (rest) out.push(rest < 20 ? ONES[rest] : `${TENS[Math.floor(rest / 10)]}${rest % 10 ? `-${ONES[rest % 10]}` : ''}`);
  return out.join(' ');
}

/** "1,234" → "one thousand two hundred thirty-four". Anything that is not a safe integer is returned as written. */
export function integerWords(digits) {
  const n = Number(digits.replaceAll(',', ''));
  if (!Number.isSafeInteger(n) || n < 0) return digits;
  if (n === 0) return 'zero';
  const parts = [];
  for (let rest = n, group = 0; rest > 0; rest = Math.floor(rest / 1000), group += 1) {
    const chunk = rest % 1000;
    if (chunk) parts.unshift(hundreds(chunk) + (GROUPS[group] ?? ''));
  }
  return parts.join(' ');
}

/** "2.5" → "two point five"; "1,234" → "one thousand two hundred thirty-four". */
export function numberWords(text) {
  if (!grouped.test(text)) return text;
  const [whole, fraction] = text.split('.');
  const words = integerWords(whole);
  return fraction ? `${words} point ${[...fraction].map(d => ONES[Number(d)]).join(' ')}` : words;
}

function ordinalWords(digits) {
  const words = integerWords(digits);
  const last = words.split(/[\s-]/).pop();
  const ordinal = ORDINAL[last] ?? (last.endsWith('y') ? `${last.slice(0, -1)}ieth` : `${last}th`);
  return words.slice(0, words.length - last.length) + ordinal;
}

function amountText(amount, sign, lang, scaleWord) {
  // Reject malformed grouping instead of silently changing a number's value.
  if (!grouped.test(amount)) return null;
  const [whole, fraction = ''] = amount.split('.');
  const integer = whole.replaceAll(',', '').replace(/^0+(?=\d)/, '');
  const tl = lang === 'tl';
  const say = value => (tl ? numberWords(value) : value);
  const unit = count => (count === '1' ? 'peso' : 'pesos');
  let result;
  if (scaleWord) {
    const scaled = tl ? (SCALE_EN[scaleWord.toLowerCase()] ?? scaleWord.toLowerCase()) : scaleWord;
    result = `${say(amount)} ${scaled} pesos`;
  } else if (fraction.length > 2 && /[1-9]/.test(fraction)) {
    // Do not round fractional centavos or lose precision.
    result = `${say(amount)} pesos`;
  } else {
    result = `${say(whole)} ${unit(integer)}`;
    if (fraction && /[1-9]/.test(fraction)) {
      const cents = Number(fraction.padEnd(2, '0'));
      result += `${tl ? ' and ' : ' and '}${say(String(cents))} centavo${cents === 1 ? '' : 's'}`;
    }
  }
  return `${sign ? (sign === '+' ? 'plus ' : 'minus ') : ''}${result}`;
}

/** A well-formed numeral: plain digits or thousands groups, with an optional decimal part. */
const numeral = String.raw`\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?`;
const percent = new RegExp(String.raw`(?<![\p{L}\p{N}_])(${numeral})\s*%`, 'gu');
const ordinal = /(?<![\p{L}\p{N}_])(\d+)(?:st|nd|rd|th)(?![\p{L}\p{N}_])/gu;
const plain = new RegExp(String.raw`(?<![\p{L}\p{N}_.,])(${numeral})(?![\p{L}\p{N}_]|[.,]\d)`, 'gu');
const clock = /(?<![\p{L}\p{N}_])(\d{1,2})(am|pm)(?![\p{L}\p{N}_])/giu;

/** Every numeral left in Filipino narration, spoken the Taglish way: in English. */
function filipinoNumerals(text) {
  return text
    .replace(percent, (match, value) => `${numberWords(value)} percent`)
    .replace(ordinal, (match, value) => ordinalWords(value))
    .replace(clock, (match, value, meridiem) => `${numberWords(value)} ${meridiem}`)
    .replace(plain, (match, value) => numberWords(value));
}

export function spokenText(text, lang = 'en') {
  const spoken = text.replace(prefix, (match, before, after, amount, scaleWord) => {
    if (before && after) return match;
    return amountText(amount, before || after, lang, scaleWord) ?? match;
  }).replace(suffix, (match, sign, amount) => amountText(amount, sign, lang) ?? match);
  return lang === 'tl' ? filipinoNumerals(spoken) : spoken;
}
