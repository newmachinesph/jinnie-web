# Content schema and authoring contract

This file is the contract every path file follows. Read it fully before writing a bite.

## The product in one paragraph

Jinnie is an offline-first personal finance app for the Philippines. Its mark is a genie lamp holding 金 (jīn, wealth). Jinnie is a woman genie. She does not grant wishes; she shows you how to grant your own. The course lives in a mini app called `learn`; inside, the course is called **Wishes**. On first open the user names three wishes (have, be rid of, be safe from) which become goals. Every lesson advances a wish. Progress is a lamp filling with light. Gold appears only when a wish is granted with real money.

## Voice (from `docs/BRAND.md` in the Jinnie repo, binding)

- Formal but plain. Short declarative sentences. No exclamation marks. No slang.
- Money words are precise: record, post, settle, commitment, goal.
- Never shame the user about debt or spending. Report; do not judge. Wrong answers get "Here is the number", never "Wrong".
- Say what the product does, not what the user should feel.
- No emoji anywhere. No jokes at the user's expense.
- Jinnie speaks in the first person only in `hook` and `keep` lines, and sparingly: "I will remind you on payday."

## Language

Every user-facing string is an object `{ en, tl }`.

- `en`: plain English only, the way a Filipino reads English. No Filipino words, not even familiar ones: allowance (not baon), salary (not sweldo), savings (not ipon), debt (not utang), store tab (not lista), savings circle (not paluwagan), remittance (not padala), piggy bank (not alkansya), small portions or by the piece (not tingi), Grandma, Aunt, Uncle, Godfather. Proper nouns stay: GCash, PhilHealth, jeepney, OFW. Scam messages in the English course are in English too.
- `tl`: Taglish as spoken in Metro Manila and on Filipino radio. Natural code-switching, Filipino sentence frame with English money terms. Numbers are written with digits and the peso sign; narration speaks every number in English ("five thousand pesos", "two point five percent"), never "limang libong piso". Example: "Ang net pay mo ay ang natitira pagkatapos ng deductions." Not deep Tagalog, not pure English. No slang, no "lodi", no "charot".
- Keep both versions the same length within reason. `tl` is required on `title`, `hook.text`, `show.text`, `show.points`, `keep.text`, every `prompt`, every `why`, and story text. Option labels may be `en` only if they are numbers or proper nouns.

## Numbers and facts

Use the facts sheet at the bottom. If a bite needs a number that is not there, use it but add it to the path's `docs/paths/<path>.md` under "Facts to verify" with the source you used. Prefer round illustrative amounts and say "illustrative" in `why` when the number is not an official figure. Peso sign is `₱`, thousands with commas, no decimals unless the arithmetic needs them.

## File shape

`content/<path>.js` exports one path object:

```js
export default {
  id: 'first',                       // one word, matches file name
  band: '18 to 24',                  // age band label
  title: { en: 'First money', tl: 'Unang sweldo' },
  tagline: { en: 'One sentence on who this is for.', tl: '...' },
  gate: null,                        // 'family' for kids and teens (parent gate), else null
  intro: {                           // path intro screen
    text: { en, tl },
    video: { placeholder: 'Brief for a 30 to 60 second vertical clip, or null' },
    illo: 'lamp',
  },
  lessons: [ /* Lesson objects, in order */ ],
};
```

### Lesson

```js
{
  id: 'first.sweldo',
  title: { en: 'Sweldo', tl: 'Sweldo' },
  summary: { en: 'What a payslip says and what leaves it.', tl: '...' },
  competency: { en: 'Can read a payslip', tl: 'Kayang basahin ang payslip' }, // unlocked when every bite is done
  wish: 'have' | 'rid' | 'safe',     // which of the three wishes this lesson advances
  status: 'authored' | 'outline',
  bites: [ /* Bite objects when authored */ ],
  outline: [ { title: { en, tl }, type: 'choice' }, ... ] // when status is 'outline': 4 to 6 planned bites with interaction types
}
```

### Bite: four beats, one screen each

```js
{
  id: 'first.sweldo.1',
  title: { en: 'What a payslip says', tl: 'Ano ang nasa payslip' },
  minutes: 3,
  hook: {                           // 10 seconds. A situation, not a lecture.
    text: { en, tl },
    illo: 'payslip',                // id from assets/illustrations.js, or 'new:brief' for a placeholder with a brief
  },
  show: {                           // the concept
    text: { en, tl },
    points: [ { en, tl }, ... ],    // 2 to 4 short lines, optional
    illo: 'payslip',
    animate: true,                  // strokes draw themselves in; false for a still
  },
  do: { /* one interaction object, see below */ },
  keep: {                           // one line to remember, plus an optional action in Jinnie
    text: { en, tl },
    action: { kind: 'wish' | 'commitment' | 'open' | 'drill', label: { en, tl }, payload: {...} } | null,
  },
}
```

`keep.action.kind`:
- `wish`: proposes a goal. `payload: { key: 'emergency', title: {en,tl}, amount: 27450 }`.
- `commitment`: starts a commitment. `payload: { id: 'record-7' | 'fund-30' | 'bills-30' | 'debt-30' | 'check-benefits' }`.
- `open`: deep link into a Jinnie app. `payload: { app: 'goals' | 'wallet' | 'bills' | 'debts' | 'credit' | 'remit' | 'circles' | 'accounts' }`.
- `drill`: enrols in the weekly scam drill. `payload: {}`.

## Interactions

Each `do` has a `type` and a `prompt: {en,tl}`. Feedback text lives in `why: {en,tl}` and is shown after the answer, in Jinnie's voice.

1. **choice** – tap one answer.
   `{ type:'choice', prompt, options:[ { text:{en,tl}, correct:true|false, why:{en,tl} } ] }` 3 or 4 options, exactly one correct.
2. **swipe** – sort cards left or right.
   `{ type:'swipe', prompt, left:{en,tl}, right:{en,tl}, cards:[ { text:{en,tl}, side:'left'|'right', why:{en,tl} } ] }` 5 to 8 cards.
3. **predict** – slide a guess, then reveal.
   `{ type:'predict', prompt, min, max, step, format:'peso'|'percent'|'months'|'years'|'number', answer, why }`.
4. **allocate** – split a total into jars with steppers.
   `{ type:'allocate', prompt, total, step:100, jars:[ { key, label:{en,tl}, hint:{en,tl}, guide:[minPct,maxPct] } ], why }` 3 or 4 jars. Feedback compares each jar to its guide range.
5. **spot** – tap the suspicious lines in a fake message.
   `{ type:'spot', prompt, seconds:20, message:{ channel:'sms'|'chat'|'email', from:{en,tl}, lines:[ { text:{en,tl}, suspicious:true|false, why:{en,tl} } ] }, why }` 4 to 6 lines, 2 or 3 suspicious.
6. **order** – put steps in sequence.
   `{ type:'order', prompt, steps:[ {en,tl}, ... ], why }` steps listed in the correct order; the engine shuffles.
7. **number** – type the number.
   `{ type:'number', prompt, answer, tolerance, format:'peso'|'percent'|'number', worked:{en,tl} }` `worked` shows the arithmetic.
8. **compare** – which is cheaper.
   `{ type:'compare', prompt, options:[ { title:{en,tl}, lines:[{en,tl}], effective:{en,tl}, cheaper:true|false } ], why }` exactly 2 options.
9. **story** – branching scenario over a few "months".
   `{ type:'story', start:'n1', nodes:{ n1:{ text:{en,tl}, balance:18300, choices:[ { text:{en,tl}, next:'n2' } ] }, ..., end1:{ text:{en,tl}, balance:..., outcome:'steady'|'costly' } } }` 2 or 3 decision points, 2 choices each, every branch ends in an `outcome` node. `balance` is optional and shows a running peso figure.
10. **rapid** – timed true or false.
    `{ type:'rapid', seconds:90, items:[ { text:{en,tl}, answer:true|false, why:{en,tl} } ] }` 6 to 10 items.
11. **match** – pair terms with meanings.
    `{ type:'match', prompt, pairs:[ { a:{en,tl}, b:{en,tl} } ] }` 4 to 6 pairs.

Mix types. No two consecutive bites in a lesson share a type. Every authored lesson has exactly one `story` bite, usually last.

## Illustrations

Available ids in `assets/illustrations.js`: `lamp`, `payslip`, `jars`, `coins`, `tree`, `bread`, `spiral`, `shield`, `phone`, `calendar`, `alkansya`, `house`, `family`, `ship`, `certificate`, `hourglass`, `cart`, `card`, `scale`, `hand`.
If none fits, write `illo: 'new:one-line brief for the illustrator'`. The engine renders a labelled placeholder and the brief goes into the path doc.

## Kids and teens

Paths `kids` (7 to 12) and `teens` (13 to 17) set `gate: 'family'`. They never ask for real account data, never suggest opening credit, and every `keep.action` is `null` or a parent-facing `open` into Circles. Vocabulary simpler, sentences shorter, amounts in baon scale (₱20 to ₱500). Situations: school canteen, allowance, sari-sari store, load, online games, birthday money, helping at home. Teens add: first account with a parent, part-time work, online selling, scams on Messenger and Telegram, paluwagan among friends.

## Docs file

Each path also produces `docs/paths/<path>.md`:

```
# <Path title> (<band>)
Purpose and audience. Two sentences.

## Lessons
| # | Lesson | Wish | Status | Bites |

## Lesson <n>: <title>
Objectives (2 or 3 lines).
Bites: id, type, one line each.
Voice lines to record: every hook.text, show.text, keep.text in en and tl, listed verbatim with the bite id. (These are read by the browser's speech engine now and replaced by recorded Taglish narration later.)
Illustrations: id or new brief, with the bite id that uses it.
Video: placeholder brief if the path intro has one.
Mock screenshots: any spot interaction, with what the real screenshot should show.
Data hooks: which Jinnie app or SDK grant the Do or Keep beat needs (wallet:read, bills:read, debts:read, goals:write, circles:read).
Facts to verify: any number not on the facts sheet, with the source used.
```

## Facts sheet (verified for this project, September 2026)

Payroll, 2025 to 2026 rules
- SSS contribution 15% of monthly salary credit: employee 5%, employer 10%. Salary credit floor ₱5,000, ceiling ₱35,000. On ₱20,000 the employee pays ₱1,000.
- PhilHealth premium 5% of basic salary, split equally: employee 2.5%. Floor ₱10,000, ceiling ₱100,000. On ₱20,000 the employee pays ₱500.
- Pag-IBIG: employee 2% and employer 2% of salary up to ₱10,000, so ₱200 each at most.
- Income tax: the first ₱250,000 of annual taxable income is tax-free (a bill raising this to ₱350,000 cleared the House committee in August 2026 and is pending). Then 15% to ₱400,000, 20% to ₱800,000, 25% to ₱2,000,000, 30% to ₱8,000,000, 35% above. A ₱20,000 monthly salary pays no income tax.
- 13th month pay: total basic salary earned in the year divided by 12, due by 24 December, tax-free up to ₱90,000 of bonuses.
- Metro Manila minimum wage: Wage Order NCR-27 sets ₱755 a day from 25 July 2026 and ₱780 from 20 January 2027. A Pasig court issued an injunction in August 2026 whose validity is contested because the required ₱10 billion bond was never posted; the case is before the Supreme Court and the increase was still described as suspended in early September 2026.
- Overtime premium 25% on ordinary days; night differential 10% for work between 10 pm and 6 am.

Credit
- Credit card interest cap 3% a month (36% a year) since January 2023 (BSP Circular 1165; the 2020 cap under Circular 1098 was 24% a year). Installment add-on cap 1% a month. Cash advance fee cap ₱200 since 2020. Reviewed every six months; unchanged since August 2023.
- Small loans of ₱10,000 or less with tenor up to four months: nominal interest cap 6% a month, effective interest cap 15% a month including fees, penalty cap 5% a month, total cost never above 100% of the principal (BSP Circular 1133, in force since March 2022).
- Typical 5-6: borrow ₱5,000, repay ₱6,000 over about 40 days; that is 20% per cycle, over 180% a year before compounding.
- Typical pawnshop: about ₱4 per ₱100 a month (4% a month, about 48% a year), 90-day term with a grace period.
- Consumer complaints to BSP passed 120,000 in 2025, up 72.6%. Abusive collection by online lenders was the largest category.
- Credit Information Corporation reports are available through accredited bureaus; errors can be disputed.

Saving and protection
- Pag-IBIG housing loan: up to ₱10,000,000 since 26 May 2026 (previously ₱6,000,000), terms up to 30 years, rates by fixing period.
- PDIC insures deposits up to ₱1,000,000 per depositor per bank (raised from ₱500,000 on 15 March 2025).
- Pag-IBIG MP2: five-year term, minimum ₱500 a month, dividend 7.12% for 2025 (varies each year, tax-free).
- Retail Treasury Bond 31 (August 2025): 6% a year, five years, minimum ₱5,000, sold through banks and e-wallets.
- SSS Pension Booster (formerly WISP Plus): voluntary, minimum ₱500, opened to more members in 2024.
- PERA: voluntary retirement account, 5% of contributions returned as a tax credit, investment income tax-free; annual cap ₱200,000 (₱400,000 for OFWs), doubled from the original ₱100,000/₱200,000 by RA 12214 (CMEPA) effective 1 July 2025. Employers get an additional 50% deduction, so 150% in total, for contributions from July 2025.
- Average SSS retirement pension was ₱5,120 a month in June 2025 (minimum ₱2,200, highest ₱22,137), and the Pension Reform Program adds 10% in September 2025, 2026 and 2027, so about ₱6,000 by late 2026. Minimum pension floor ₱1,200 for 10 to 19 credited years, ₱2,400 for 20 or more, plus a ₱1,000 across-the-board add-on since 2017. GSIS averages under ₱14,000.
- PhilHealth support value: 55.8% of an average bill in 2018 to 2021 data (PIDS 2022-42), falling to 52.3% in 2023 (PIDS 2025-27) because case rates have not moved since 2013 while charges rose. Say "about half, and falling". All senior citizens are PhilHealth members (RA 10645).
- SSS retirement: optional at 60 if no longer working, compulsory at 65; a monthly pension needs at least 120 monthly contributions, otherwise a lump sum. SSS pays a 13th month pension every December. GSIS pays a Christmas cash gift instead, one month's pension or ₱10,000, whichever is lower. Annual Confirmation of Pensioners applies to pensioners 80 and over in the Philippines, all pensioners abroad, disability and survivor pensioners; a missed year suspends the pension, two years cancels it; facial verification in the app has been accepted since March 2026.
- Senior citizen discount: 20% plus VAT exemption on medicines, medical and dental services, transport fares, hotels and restaurants, recreation, funerals (RA 9994); 5% on electricity up to 100 kWh and water up to 30 cubic metres a month when the meter is in the senior's name, one per household. Basic necessities and prime commodities get a separate 5% discount with no VAT exemption, capped at ₱1,300 of purchases a week (RA 7581 as amended).
- Estate tax: flat 6% of the net estate (TRAIN law).

Fraud
- Anti-Financial Account Scamming Act (RA 12010, signed 20 July 2024): banks may hold disputed funds for up to 5 days, extendable to 30 days in total without a court order (BSP Circular 1215, 2025); money mules and account sellers are criminally liable; report to your bank first, then to PNP Anti-Cybercrime Group or BSP.
- Banks were told to retire SMS and email one-time passwords for high-risk transactions by 30 June 2026 (BSP Circular 1213). The deadline held; most banks and wallets switched to in-app approval, passkeys or biometrics at or shortly after it.
- 72% of Filipino consumers were targeted by digital fraud in late 2025; 38% lost money, median loss near ₱50,000 (TransUnion).
- Check an investment offer on the SEC Check App or the SEC advisories page; check a lender's licence on the SEC list; check a bank or e-money issuer on the BSP list.

Behaviour, BSP 2025 Consumer Finance and Inclusion Survey
- 50% of adults own a formal account; e-money 36%, bank 23%.
- 30% say their savings would last through an emergency.
- 74% answered at least half of six literacy questions; in 2021 only 2% answered all six.
- 25% borrowed in the year; 16% from formal lenders, 10% from informal ones.

Minors
- GCash Jr serves ages 7 to 17 under a parent's account. Banks open minors' savings accounts with a parent or guardian. Contracts require age 18.

Inflation and prices
- Inflation averaged 1.7% in 2025 and 5.2% for January to August 2026 (6.1% in August, 6.2% in July, 6.4% in June).
