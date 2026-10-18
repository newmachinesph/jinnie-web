// One-off: rewrite Filipino loanwords inside English (`en`) strings as plain English.
// Filipino (`tl`) strings are never touched. Run: node scripts/en-english.mjs [--dry]
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = ['content/kids.js', 'content/teens.js', 'content/first.js', 'content/first2.js', 'content/building.js', 'content/securing.js', 'content/retired.js', 'content/glossary.js', 'content/placement.js', 'content/drills.js', 'content/commitments.js', 'src/i18n.js'];
const dry = process.argv.includes('--dry');

// Whole sentences first: scam messages written in Tagalog, and phrases the word rules would mangle.
const phrases = [
  ['Hi, kasabay kita sa parehong server.', 'Hi, I am on the same server as you.'],
  ['Pa-send ng picture ng likod ng load card niyo, kailangan ko lang tingnan.', 'Send a picture of the back of your load card, I just need to check it.'],
  ['Sagot ka sa loob ng isang minuto o mawawala na ang bonus mo!', 'Reply within one minute or your bonus is gone!'],
  ['Kilala ko yung gumawa ng game na ito, safe lang daw ito.', 'I know the person who made this game, they said it is safe.'],
  ['Anong paborito mong character sa game?', 'What is your favorite character in the game?'],
  ['Hi! Sorry ang tagal kong nireplyan', 'Hi! Sorry it took me so long to reply'],
  ['Pa-send muna ng ₱100 load, kailangan ko lang, ipapadala ko rin sayo agad', 'Send me ₱100 load first, I just need it, I will send it right back'],
  ['Wag mo na lang i-tawagan, walang load, chat na lang tayo dito', 'Don’t call, I have no load, let’s just chat here'],
  ['May extra load ka ba? kailangan ko lang ngayon', 'Do you have extra load? I just need it now'],
  ['GCash number ko na lang ipadala mo, 09XX-XXX-XXXX', 'Just send it to my GCash number, 09XX-XXX-XXXX'],
  ['Pa-send naman ng ₱100 load, need ko lang, babayaran kita sa Sabado.', 'Please send ₱100 load, I just need it, I will pay you back on Saturday.'],
  ['Send the load right away, family naman', 'Send the load right away, it is family'],
  ['“Hindi na kailangan.”', '“No need.”'],
  ['Sir/Ma’am, congratulations sa malapit na ninyong retirement.', 'Sir/Ma’am, congratulations on your upcoming retirement.'],
  ['Guaranteed 5% a month sa investment namin, mas mataas pa sa bangko.', 'Guaranteed 5% a month on our investment, higher than any bank.'],
  ['May libreng seminar sa Sabado, dalhin niyo na rin ang mga kaibigan ninyo.', 'Free seminar on Saturday, bring your friends too.'],
  ['Kailangan lang ng ₱50,000 minimum, at bawal daw itanong sa SEC dahil exclusive pa raw ito.', 'Only ₱50,000 minimum, and do not ask the SEC because this is still exclusive.'],
  ['Sisenta na kayo, dapat mabilis kumita, ngayon na bago mahuli.', 'You are sixty already, you need to earn fast, now before it is too late.'],
  ['Hi Lola, kumusta ka na?', 'Hi Grandma, how are you?'],
  ['Ito na lang ang bagong number ko, nawala ang phone ko.', 'This is my new number, I lost my phone.'],
  ['Sana malapit na akong makabisita.', 'I hope I can visit soon.'],
  ['Kailangan ko ng ₱3,000 ngayon, ipadala mo na lang dito.', 'I need ₱3,000 now, just send it here.'],
  ['Huwag mo na lang sabihin sa mga magulang ko.', 'Please don’t tell my parents.'],
  ['emergency lang, pay you back tomorrow', 'it is an emergency, I will pay you back tomorrow'],
  ['splits padala on purpose', 'splits the money sent home on purpose'],
  ['Padala, the lista, paluwagan, and how to help family', 'Remittances, the store tab, savings circles, and how to help family'],
  ['Tingi math', 'Sachet math'],
  ['Tingi is the price of not having', 'Buying by the sachet is the price of not having'],
  ['One candy sold tingi', 'One candy sold by the piece'],
  ['One tingi candy', 'One single candy'],
  ['tingi price', 'per-piece price'],
  ['small tingi amounts', 'small portions'],
  ['Tingi rice', 'Rice bought by the portion'],
  ['Big pack or tingi', 'Big pack or single pieces'],
  ['on lista', 'on tab'],
  ['new lista', 'new tab entries'],
];

// Order matters: longer phrases first, capitalised forms before lowercase.
const rules = [
  [/\bsari-sari stores\b/g, 'corner stores'], [/\bSari-sari stores\b/g, 'Corner stores'],
  [/\bsari-sari store\b/g, 'corner store'], [/\bSari-sari store\b/g, 'Corner store'],
  [/\bsari-sari\b/g, 'corner store'], [/\bSari-sari\b/g, 'Corner store'],
  [/\bbaon money\b/g, 'allowance'], [/\bBaon money\b/g, 'Allowance'],
  [/\bbaon\b/g, 'allowance'], [/\bBaon\b/g, 'Allowance'],
  [/\bpadala\b/g, 'remittance'], [/\bPadala\b/g, 'Remittance'],
  [/\bpaluwagans\b/g, 'savings circles'], [/\bPaluwagans\b/g, 'Savings circles'],
  [/\bpaluwagan\b/g, 'savings circle'], [/\bPaluwagan\b/g, 'Savings circle'],
  [/\blista\b/g, 'store tab'], [/\bLista\b/g, 'Store tab'],
  [/\balkansya\b/g, 'piggy bank'], [/\bAlkansya\b/g, 'Piggy bank'],
  [/\bsweldo\b/g, 'salary'], [/\bSweldo\b/g, 'Salary'],
  [/\bLola’s\b/g, 'Grandma’s'], [/\bLola\b/g, 'Grandma'], [/\bLolo’s\b/g, 'Grandpa’s'], [/\bLolo\b/g, 'Grandpa'],
  [/\bTita’s\b/g, 'Aunt’s'], [/\bTita\b/g, 'Aunt'], [/\bTito’s\b/g, 'Uncle’s'], [/\bTito\b/g, 'Uncle'],
  [/\bNinong’s\b/g, 'Godfather’s'], [/\bNinong\b/g, 'Godfather'], [/\bNinang\b/g, 'Godmother'],
  [/\btingi\b/g, 'small portions'], [/\bTingi\b/g, 'Small portions'],
  [/\bsangla\b/g, 'pawning'], [/\bSangla\b/g, 'Pawning'],
  [/\bIpon\b/g, 'Savings'], [/\bUtang\b/g, 'Debt'],
  [/\ban piggy bank\b/g, 'a piggy bank'], [/\ban allowance\b/g, 'an allowance'],
];

// `en: '...'` fields, and the first argument of drills.js's `L(en, tl, ...)` helper.
const literal = /\b(en: |L\()(['"])((?:\\.|(?!\2)[^\\])*)\2/g;
let total = 0;
for (const file of files) {
  const path = join(root, file);
  const source = readFileSync(path, 'utf8');
  let count = 0;
  const next = source.replace(literal, (match, lead, quote, text) => {
    let out = text;
    for (const [from, to] of phrases) out = out.replaceAll(from, to);
    for (const [re, to] of rules) out = out.replace(re, to);
    if (out === text) return match;
    count++;
    console.log(`${file}\n  - ${text}\n  + ${out}`);
    return `${lead}${quote}${out}${quote}`;
  });
  total += count;
  if (!dry && next !== source) writeFileSync(path, next);
}
console.log(`\n${total} English strings ${dry ? 'would change' : 'rewritten'}`);
