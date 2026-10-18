// Every user-facing string in content is { en, tl }. t() picks the active language and falls back to English.
import { get } from './store.js';

export function t(s) {
  if (s == null) return '';
  if (typeof s === 'string') return s;
  const lang = get().lang;
  return s[lang] || s.en || '';
}

export const peso = n => '₱' + Math.round(n).toLocaleString('en-PH');

export function fmt(n, format) {
  switch (format) {
    case 'peso': return peso(n);
    case 'percent': return `${n}%`;
    case 'months': return `${n} ${n === 1 ? 'month' : 'months'}`;
    case 'years': return `${n} ${n === 1 ? 'year' : 'years'}`;
    default: return String(n);
  }
}

// Interface strings, kept here so content files stay pure. A key may carry `kids` and `teens` variants;
// u() picks the variant for the learner's age band, so a seven-year-old is never asked what to be "rid of".
const ui = {
  askAge: { en: 'How old are you?', tl: 'Ilang taon ka na?' },
  askAgeWhy: { en: 'Jinnie changes her words, her questions and her examples to fit. You can change this later.', tl: 'Binabago ni Jinnie ang mga salita, tanong at halimbawa para bumagay. Puwede itong baguhin mamaya.' },
  withParent: { en: 'Ask a parent or an older family member to sit with you.', tl: 'Tawagin ang magulang o nakatatandang kamag-anak para samahan ka.' },
  onboardTitle: { en: 'A genie grants three wishes.', tl: 'Tatlong wish ang ibinibigay ng genie.', kids: { en: 'Jinnie is a genie.', tl: 'Genie si Jinnie.' }, teens: { en: 'A genie grants three wishes.', tl: 'Tatlong wish ang ibinibigay ng genie.' } },
  onboardLede: {
    en: 'Jinnie asks for yours, then shows you how to grant them yourself. Name them now or later. Every lesson advances one.',
    tl: 'Hihingin ni Jinnie ang sa iyo, tapos ipapakita kung paano mo ito tutuparin. Pangalanan ngayon o mamaya. Bawat aralin ay nagpapasulong ng isa.',
    kids: { en: 'She does not give you money. She shows you how to get the things you wish for. Tell her three wishes, now or later.', tl: 'Hindi siya nagbibigay ng pera. Ipinapakita niya kung paano makukuha ang mga wish mo. Sabihin sa kanya ang tatlong wish, ngayon o mamaya.' },
    teens: { en: 'She does not grant them. She shows you how to get there with the money you have. Name three, now or later.', tl: 'Hindi niya ito tinutupad. Ipinapakita niya kung paano makakarating doon gamit ang pera mo. Pangalanan ang tatlo, ngayon o mamaya.' },
  },
  age: { en: 'Age', tl: 'Edad' },
  changeAge: { en: 'Change age', tl: 'Baguhin ang edad' },
  continue: { en: 'Continue', tl: 'Magpatuloy' },
  check: { en: 'Check', tl: 'Tingnan' },
  next: { en: 'Next', tl: 'Susunod' },
  done: { en: 'Done', tl: 'Tapos' },
  back: { en: 'Back', tl: 'Bumalik' },
  reveal: { en: 'Reveal', tl: 'Ipakita' },
  start: { en: 'Start', tl: 'Simulan' },
  resume: { en: 'Resume', tl: 'Ituloy' },
  hook: { en: 'Situation', tl: 'Sitwasyon' },
  show: { en: 'The idea', tl: 'Ang ideya' },
  do: { en: 'Your turn', tl: 'Ikaw naman' },
  keep: { en: 'Keep this', tl: 'Tandaan' },
  yourGuess: { en: 'Your guess', tl: 'Hula mo' },
  answer: { en: 'The number', tl: 'Ang numero' },
  hereIsTheNumber: { en: 'Here is the number.', tl: 'Narito ang numero.' },
  correct: { en: 'That is the number.', tl: 'Iyan ang numero.' },
  remaining: { en: 'Left to place', tl: 'Natitira' },
  seconds: { en: 'seconds', tl: 'segundo' },
  true: { en: 'True', tl: 'Totoo' },
  false: { en: 'False', tl: 'Mali' },
  tapToFlag: { en: 'Tap every line that looks wrong, then check.', tl: 'I-tap ang bawat linyang mukhang mali, tapos tingnan.' },
  tapInOrder: { en: 'Tap the steps in order.', tl: 'I-tap ang mga hakbang sa tamang pagkakasunod.' },
  clear: { en: 'Clear', tl: 'Burahin' },
  cheaper: { en: 'Cheaper', tl: 'Mas mura' },
  steady: { en: 'Steady', tl: 'Matatag' },
  costly: { en: 'Costly', tl: 'Magastos' },
  balance: { en: 'Balance', tl: 'Balance' },
  score: { en: 'Score', tl: 'Score' },
  minutes: { en: 'min', tl: 'min' },
  lesson: { en: 'Lesson', tl: 'Aralin' },
  bites: { en: 'bites', tl: 'bites' },
  authored: { en: 'Ready', tl: 'Handa' },
  outline: { en: 'In preparation', tl: 'Inihahanda' },
  wishes: { en: 'Wishes', tl: 'Wishes' },
  paths: { en: 'Paths', tl: 'Paths' },
  practice: { en: 'Practice', tl: 'Practice' },
  me: { en: 'Me', tl: 'Ako' },
  have: { en: 'Something to have', tl: 'Gusto kong magkaroon', kids: { en: 'Something I want to buy', tl: 'Gusto kong bilhin' }, teens: { en: 'Something to save for', tl: 'Gusto kong ipunan' } },
  rid: { en: 'Something to be rid of', tl: 'Gusto kong matapos', kids: { en: 'Something I want to stop buying', tl: 'Gusto kong itigil na bilhin' }, teens: { en: 'A spending habit to stop', tl: 'Gastos na gusto kong itigil' } },
  safe: { en: 'Something to be safe from', tl: 'Gusto kong maging ligtas', kids: { en: 'Something I want to keep safe', tl: 'Gusto kong ingatan' }, teens: { en: 'Something to protect', tl: 'Gusto kong protektahan' } },
  haveHint: { en: 'A laptop, a trip, a first ₱50,000', tl: 'Laptop, biyahe, unang ₱50,000', kids: { en: 'A jump rope, a book, a toy', tl: 'Lubid, libro, laruan' }, teens: { en: 'A phone, a school trip', tl: 'Phone, school trip' } },
  ridHint: { en: 'The card balance, the installment', tl: 'Ang card balance, ang installment', kids: { en: 'Chips every day', tl: 'Chichirya araw-araw' }, teens: { en: 'Daily milk tea, game top-ups', tl: 'Milk tea araw-araw, game top-ups' } },
  safeHint: { en: 'Three months of needs set aside', tl: 'Tatlong buwan ng needs na nakatabi', kids: { en: 'My piggy bank money', tl: 'Pera sa alkansya ko' }, teens: { en: 'My allowance, my account', tl: 'Baon ko, account ko' } },
  granted: { en: 'Granted', tl: 'Natupad' },
  record: { en: 'Record', tl: 'I-record' },
  sample: { en: 'Sample data. In Jinnie this comes from Wallet and Goals.', tl: 'Sample data. Sa Jinnie, galing ito sa Wallet at Goals.', kids: { en: 'Pretend money for now. Write what you really saved.', tl: 'Pretend na pera muna. Isulat ang talagang naipon mo.' }, teens: { en: 'Sample for now. Record what you actually set aside.', tl: 'Sample muna. I-record ang talagang naitabi mo.' } },
  markToday: { en: 'Mark today', tl: 'Markahan ngayong araw' },
  marked: { en: 'Marked today', tl: 'Namarkahan na' },
  days: { en: 'days', tl: 'araw' },
  language: { en: 'Language', tl: 'Wika' },
  readAloud: { en: 'Read aloud', tl: 'Basahin nang malakas' },
  textSize: { en: 'Larger text', tl: 'Mas malaking teksto' },
  resetAll: { en: 'Reset everything', tl: 'I-reset lahat' },
  competencies: { en: 'What you can do now', tl: 'Ano ang kaya mo na' },
  nothingYet: { en: 'Nothing yet. Finish a lesson.', tl: 'Wala pa. Tapusin ang isang aralin.' },
  placement: { en: 'Placement', tl: 'Placement' },
  placementIntro: { en: 'A few questions, no score shown until the end. Jinnie uses this to suggest where to begin.', tl: 'Ilang tanong, walang score hanggang sa dulo. Ginagamit ito ni Jinnie para imungkahi kung saan magsisimula.', kids: { en: 'Five short questions. There is no passing or failing. Jinnie just wants to know where to start.', tl: 'Limang maikling tanong. Walang pasado o bagsak. Gusto lang malaman ni Jinnie kung saan magsisimula.' }, teens: { en: 'Six quick questions. No grade. Jinnie uses them to pick where you start.', tl: 'Anim na mabilis na tanong. Walang grade. Ginagamit ito ni Jinnie para piliin kung saan ka magsisimula.' } },
  skip: { en: 'Skip for now', tl: 'Laktawan muna' },
  suggested: { en: 'Suggested start', tl: 'Mungkahing simula' },
  drill: { en: 'Scam drill', tl: 'Scam drill' },
  review: { en: 'Review', tl: 'Review' },
  dueNow: { en: 'due now', tl: 'due ngayon' },
  noReview: { en: 'Nothing due. Finish more bites and come back tomorrow.', tl: 'Walang due. Tapusin pa ang ilang bites at bumalik bukas.' },
  familyGate: { en: 'This path is for a child, read with a parent. Continue as the parent.', tl: 'Para sa bata ang path na ito, kasama ang magulang. Magpatuloy bilang magulang.' },
  iAmParent: { en: 'I am the parent', tl: 'Ako ang magulang' },
  openIn: { en: 'Open in Jinnie', tl: 'Buksan sa Jinnie' },
  placeholder: { en: 'Placeholder', tl: 'Placeholder' },
  flag: { en: 'Flag as scam', tl: 'I-flag bilang scam' },
  trust: { en: 'Looks fine', tl: 'Mukhang okay' },
  ofFlagged: { en: 'flagged', tl: 'na-flag' },
  addWish: { en: 'Add to wishes', tl: 'Idagdag sa wishes' },
  added: { en: 'Added', tl: 'Naidagdag' },
  started: { en: 'Started', tl: 'Nagsimula' },
  enrolled: { en: 'Enrolled', tl: 'Naka-enrol' },
  lessonDone: { en: 'Lesson complete', tl: 'Tapos ang aralin' },
  youCanNow: { en: 'You can now', tl: 'Kaya mo na' },
  pathDone: { en: 'Path complete', tl: 'Tapos ang path' },
  certificate: { en: 'Certificate', tl: 'Sertipiko' },
  certificates: { en: 'Certificates', tl: 'Mga sertipiko' },
  certificateNote: { en: 'Placeholder design. Competencies map to the OECD/INFE framework; a shareable version with a verification code replaces this.', tl: 'Placeholder na disenyo. Nakamapa ang competencies sa OECD/INFE framework; papalitan ito ng shareable na bersyon na may verification code.' },
  simulated: { en: 'Simulated message', tl: 'Simulated na mensahe' },
  tryAnother: { en: 'Try another path', tl: 'Subukan ang ibang landas' },
  drillLibrary: { en: 'Drill library', tl: 'Drill library' },
  thisWeek: { en: 'This week', tl: 'Ngayong linggo' },
  glossary: { en: 'Money words', tl: 'Mga salita ng pera' },
  search: { en: 'Search a word', tl: 'Maghanap ng salita' },
  terms: { en: 'terms. Type to search.', tl: 'salita. Mag-type para maghanap.' },
  pathCheck: { en: 'Path check', tl: 'Path check' },
  pathCheckIntro: { en: 'Eight questions drawn from this path. Seventy per cent unlocks the certificate. Retake any time.', tl: 'Walong tanong mula sa path na ito. Pitumpung porsyento ang nagbubukas ng sertipiko. Ulitin anumang oras.' },
  passed: { en: 'Passed. The certificate is in Me.', tl: 'Pasado. Nasa Me ang sertipiko.' },
  notYet: { en: 'Not yet. Review the lessons that felt uncertain and retake.', tl: 'Hindi pa. Balikan ang mga aralin na hindi sigurado at ulitin.' },
  retake: { en: 'Retake', tl: 'Ulitin' },
  advances: { en: 'This lesson advances', tl: 'Isinusulong ng aralin na ito' },
  activity: { en: 'Activity', tl: 'Aktibidad' },
  events: { en: 'events recorded on this device', tl: 'events na naka-record sa device na ito' },
  disclaimer: { en: 'Jinnie Learn is financial education, not personal financial advice. Figures marked illustrative are examples, not quotes. Check any product with the BSP, SEC or Insurance Commission before you pay.', tl: 'Ang Jinnie Learn ay financial education, hindi personal na financial advice. Ang mga halagang illustrative ay halimbawa, hindi quote. Tingnan ang anumang produkto sa BSP, SEC o Insurance Commission bago magbayad.' },
  onDevice: { en: 'Everything you do here stays on this device. Nothing is sent anywhere.', tl: 'Lahat ng ginagawa mo rito ay nananatili sa device na ito. Walang ipinapadala kahit saan.' },
};

const modeOfBand = band => band === 'kids' ? 'kids' : band === 'teens' ? 'teens' : 'adult';

export function u(key) {
  const s = ui[key];
  if (!s) return key;
  const mode = modeOfBand(get().band);
  return t((mode !== 'adult' && s[mode]) || s);
}

export const mode = () => modeOfBand(get().band);
