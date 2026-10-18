# Building (25 to 39)

For people in their peak borrowing years: cards, a first loan, a family forming, sometimes an OFW household sending money home. The path opens with getting out of debt on the cheapest path, then works through credit, insurance, investing, housing, family money, OFW planning, business, and tax for this age band.

## Lessons
| # | Lesson | Wish | Status | Bites |
|---|---|---|---|---|
| 1 | building.payoff — Paying down debt | rid | authored | 6 |
| 2 | building.report — Your credit report and score | rid | authored | 5 |
| 3 | building.cover — Insurance beyond PhilHealth | safe | authored | 5 |
| 4 | building.invest — Investing II | have | authored | 5 |
| 5 | building.housing — Housing | have | authored | 5 |
| 6 | building.family — Family money | have | authored | 5 |
| 7 | building.ofw — The OFW household | safe | authored | 5 |
| 8 | building.business — Business basics | have | authored | 5 |
| 9 | building.tax — Taxes | rid | authored | 5 |

Total authored bites: 46.

Voice lines and illustration lists are generated verbatim in `docs/manifest/building.md`; this file does not repeat them.

## Video
Path intro placeholder brief: "Forty-five second vertical clip. A couple in their early thirties at a kitchen table with a credit card statement and a toy or crib visible nearby, Jinnie's lamp in frame. Voice: 'The card, the loan, and the family plan can hold together, in one order.' No music stings, no exclamation."
Illustration: `house`.

## Lesson 1: building.payoff — Paying down debt
Objectives: List every debt with balance, minimum payment, and interest rate, then choose avalanche (highest rate first) or snowball (smallest balance first) with the real interest trade-off in pesos. Compute the 3% card cap in pesos, judge when a consolidation offer actually lowers cost, and see why a lending app that charges more than the debt it replaces is not a way out.

Bites:
- `building.payoff.1` order — Steps to build a debt list.
- `building.payoff.2` compare — Avalanche vs snowball on a ₱25,000 card and ₱10,000 appliance loan.
- `building.payoff.3` number — 3% monthly cap computed on a ₱25,000 balance.
- `building.payoff.4` choice — When a consolidation offer is worth taking.
- `building.payoff.5` rapid — True/false on debt payoff habits and myths.
- `building.payoff.6` story — A lending app's payoff offer vs an extra ₱2,000 a month on the card.

Data hooks: `building.payoff.1` keep.action (commitment `debt-30`) needs a debts write grant to start the commitment. `building.payoff.6` keep.action (wish `card-payoff`) needs a goals write grant.

Facts to verify: the ₱4,700 / ₱5,900 avalanche-vs-snowball totals in `.2` and the ₱4,500 / ₱3,600 / ₱2,500 figures in the `.6` story are illustrative round-number estimates, not a full amortization; the 1.5%-a-month cooperative loan rate used in `.4` is an illustrative assumption, not a quoted product rate. The 3% card cap, ₱200 cash advance cap, and the 5-6 loan's roughly 20%-a-cycle cost are from the facts sheet.

## Lesson 2: building.report — Your credit report and score
Objectives: Explain what a credit report actually shows (accounts, balances, payment history) versus what it does not (income, reasons), and name the roles of the Credit Information Corporation and an accredited bureau. Walk the steps to dispute a reporting error, and trace how a single missed installment does or does not become a lasting mark depending on what happens right after it.

Bites:
- `building.report.1` choice — What a lender actually checks in a credit report.
- `building.report.2` match — Credit Information Corporation, bureau, report, and dispute, matched to definitions.
- `building.report.3` order — Steps to dispute a reporting error.
- `building.report.4` swipe — Sort habits by whether they help or hurt a report.
- `building.report.5` story — A missed installment, with and without a call to the lender.

Data hooks: `building.report.3` keep.action (open `credit`) needs a credit read grant to deep-link into the Credit app.

Facts to verify: the facts sheet confirms CIC reports are available through accredited bureaus and errors can be disputed, but does not name specific accredited bureaus, any fee for a self-requested report, or the exact timeframe before a missed installment is reported as delinquent; the lesson stays generic on these points pending confirmation.

## Lesson 3: building.cover — Insurance beyond PhilHealth
Objectives: Size term life cover with the ten-times-annual-income rule and tell it apart from a VUL’s bundled cover-plus-investment. Explain how an HMO’s yearly limit interacts with a critical illness lump sum, and identify insurance add-ons that cost more than the gap they close.

Bites:
- `building.cover.1` number — Term life cover computed at ten times annual income on a ₱35,000 salary.
- `building.cover.2` compare — HMO alone vs HMO plus a critical illness payout against a ₱600,000 stroke bill.
- `building.cover.3` match — Term life, VUL, HMO, and critical illness matched to what each does.
- `building.cover.4` swipe — Insurance items sorted as worth keeping or worth skipping.
- `building.cover.5` story — A breadwinner who buys, or skips, a term policy, tested by an accident.

Data hooks: `building.cover.5` keep.action (wish `term-life-premium`) needs a goals write grant.

Facts to verify: the ₱4,200,000 cover figure follows the facts sheet’s ten-times-income rule of thumb on a ₱420,000 annual income; the ₱300,000 HMO yearly limit and ₱500,000 critical illness payout in `.2`, and the ₱8,000 annual term premium in `.5`, are illustrative round numbers, not quoted product rates.

## Lesson 4: building.invest — Investing II
Objectives: Build an MP2 ladder that matures one account a year after year five, and compare a Retail Treasury Bond’s fixed rate against a UITF’s market-linked return. Size crypto as a small, bounded share of a portfolio rather than a bet on the whole thing.

Bites:
- `building.invest.1` order — Steps to open and maintain an MP2 ladder.
- `building.invest.2` compare — RTB 31 at 6% vs a UITF equity fund over five years.
- `building.invest.3` choice — A single stock vs an index fund for steadier growth.
- `building.invest.4` allocate — Splitting ₱50,000 across an emergency fund, a UITF, and crypto.
- `building.invest.5` story — A relative who moves a house fund into crypto, all-in vs a small position.

Data hooks: `building.invest.5` keep.action (open `goals`) needs a goals read grant to deep-link.

Facts to verify: the ₱12,000 illustrative RTB interest total in `.2` is a rough five-year estimate that ignores compounding nuance; the coin’s triple-then-crash path and every peso outcome in `.5` are illustrative, not a real asset’s price history.

## Lesson 5: building.housing — Housing
Objectives: Read a Pag-IBIG amortization schedule and compute total interest over a loan’s term. Compare renting to buying over ten years, and list every cost a condo carries beyond its sticker price.

Bites:
- `building.housing.1` number — Total interest on a ₱2,000,000 loan at 6.5% over 20 years.
- `building.housing.2` compare — Renting at ₱15,000 a month vs buying at a ₱14,900 amortization.
- `building.housing.3` order — Condo costs from the loan principal to ongoing ownership.
- `building.housing.4` match — Association dues, real property tax, parking, and amortization matched to what they mean.
- `building.housing.5` story — A condo buyer who budgets for the amortization alone vs planning for the extra costs too.

Data hooks: `building.housing.5` keep.action (open `budget`) needs a budget read grant.

Facts to verify: the ₱14,900 monthly amortization and ₱1,580,000 total interest for a ₱2,000,000 loan at 6.5% over 20 years follow the facts sheet directly; the ₱15,000 Metro Manila rental comparison and the ₱2,200 dues / ₱500 parking figures in `.3` through `.5` are illustrative.

## Lesson 6: building.family — Family money
Objectives: Size an education fund started at birth against one started later, and tell an education plan’s contract terms apart from a self-funded fund. Run two incomes as one budget in the order emergency fund, insurance, then education savings, with parent support as a fixed jar.

Bites:
- `building.family.1` number — Monthly saving needed for a ₱1,800,000 college target over 15 years.
- `building.family.2` match — Education plan, self-funded fund, payout schedule, and pre-need matched to meaning.
- `building.family.3` allocate — Splitting a combined ₱45,000 household income across emergency fund, insurance, education, and household expenses.
- `building.family.4` choice — Sizing parent support as a fixed jar vs a leftover.
- `building.family.5` story — A household buffer tested by a tuition bill and a parent’s medicine due the same week.

Data hooks: `building.family.5` keep.action (commitment `fund-30`) needs a wallet write grant to start the commitment.

Facts to verify: the ₱100,000-a-year 2040 college cost and the ₱1,800,000 four-year target in `.1` are illustrative, per the facts sheet’s own flag on that figure; the ₱45,000 combined income, ₱5,000 parent support, and the tuition/medicine/buffer amounts in `.3` through `.5` are illustrative round numbers for this income band.

## Lesson 7: building.ofw — The OFW household
Objectives: Split a padala into needs, savings, and a wish on the day it arrives, and name SSS’s compulsory self-employed coverage for OFWs under RA 11199. Build a remittance plan before departure and set a return plan with both a date and a number.

Bites:
- `building.ofw.1` allocate — Splitting a ₱40,000 padala into needs, savings, and a wish.
- `building.ofw.2` match — RA 11199, self-employed member, compulsory coverage, and monthly contribution matched to meaning.
- `building.ofw.3` order — Steps to build a remittance plan before the flight.
- `building.ofw.4` choice — A return plan with a date and a number vs vaguer alternatives.
- `building.ofw.5` story — A late padala covered by a leftover buffer vs a lending app.

Data hooks: `building.ofw.5` keep.action (open `remit`) needs a remittance read grant.

Facts to verify: the ₱40,000 padala split and the ₱600,000 five-year return-plan target in `.1` and `.4` are illustrative for this income band; SSS’s self-employed, compulsory coverage under RA 11199 is from the facts sheet directly.

## Lesson 8: building.business — Business basics
Objectives: Keep a daily sari-sari store record separating sales, purchases, and lista, in a business account kept apart from household money. Tell DTI registration, BMBE status, and BIR registration apart, as three separate steps with three separate purposes.

Bites:
- `building.business.1` order — Steps to keep daily sari-sari store books.
- `building.business.2` choice — Separating business cash from household cash as the first step to a real profit number.
- `building.business.3` compare — DTI-registered vs unregistered business name.
- `building.business.4` match — DTI registration, BMBE status, BIR registration, and the asset ceiling matched to meaning.
- `building.business.5` story — A store that starts, or delays, a daily record and a separate account.

Data hooks: `building.business.1` keep.action (commitment `record-7`) needs a wallet write grant. `building.business.5` keep.action (open `accounts`) needs an accounts read grant.

Facts to verify: the ₱3,000,000 BMBE asset ceiling is from the facts sheet directly; the ₱8,000 / ₱21,000 / ₱16,000 / ₱1,500 daily-record figures in `.5` are illustrative for a small sari-sari store.

## Lesson 9: building.tax — Taxes
Objectives: Compute the freelancer 8% option against a gross-sales figure and list the annual filing steps in order, ending 15 April. Explain what a receipt proves for both the seller and the buyer.

Bites:
- `building.tax.1` match — BIR registration, official receipt, quarterly return, and annual return matched to meaning.
- `building.tax.2` number — The 8% option computed on ₱600,000 gross sales.
- `building.tax.3` order — Annual filing steps from gathering receipts to keeping proof of payment.
- `building.tax.4` choice — What a receipt proves, for the seller and the buyer.
- `building.tax.5` story — A freelancer racing to file on time vs filing late.

Data hooks: `building.tax.5` keep.action (commitment `record-7`) needs a wallet write grant.

Facts to verify: the ₱250,000 tax-free threshold, the 8% option’s ₱3,000,000 gross ceiling, and the 15 April filing deadline are from the facts sheet directly; the ₱600,000 gross sales figure in `.2` and the surcharge/interest amounts (₱3,000, ₱4,500) in `.5` are illustrative.
