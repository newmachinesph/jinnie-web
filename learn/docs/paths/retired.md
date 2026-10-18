# Retired (60 and over)
For seniors living on a pension, personal savings, and family support, the group scammers target most. The path opens with claiming that pension safely, then works through fraud defence, health coverage, spending down savings, a monthly budget, estate transfers, and helping family without going broke.

## Lessons
| # | Lesson | Wish | Status | Bites |
|---|---|---|---|---|
| 1 | retired.claim — Claiming your pension | have | authored | 5 |
| 2 | retired.fraud — Fraud defence | safe | authored | 6 |
| 3 | retired.health — PhilHealth and the 20% discount | safe | authored | 5 |
| 4 | retired.buckets — Spending down safely | safe | authored | 5 |
| 5 | retired.budget — Staying independent on a pension | have | authored | 5 |
| 6 | retired.estate — Estate and transfers | rid | authored | 5 |
| 7 | retired.family — Helping family without going broke | rid | authored | 5 |

Total authored bites: 36.

## Video
Path intro placeholder brief: "Thirty second vertical clip. An older parent and an adult child look at a phone screen together, Jinnie's lamp in the corner. Voice: 'These are your wishes now, and you do not have to guard them alone.' No music stings, no exclamation."
Illustration: `family`.

## Lesson 1: retired.claim — Claiming your pension
Objectives: Know when SSS or GSIS retirement is optional (60) versus compulsory (65). Count contributions toward the 120 needed for a lifetime monthly pension instead of a lump sum, and size the 13th month pension SSS and GSIS pay every December. File a retirement claim online, and complete the yearly confirmation of pensioners on time so the pension does not pause.

Bites:
- `retired.claim.1` choice — Decide whether 60 or 65 applies to you.
- `retired.claim.2` number — Count how many contributions remain before 120.
- `retired.claim.3` predict — Guess the size of the 13th month pension in December.
- `retired.claim.4` order — Sequence the steps to file an SSS retirement claim online.
- `retired.claim.5` story — Confirm your pension status once a year, or watch it pause.

Voice lines to record (verbatim, en then tl):

**retired.claim.1**
- hook.text (en): You turn sixty. You have stopped working. A neighbor says you must wait until sixty-five to claim.
- hook.text (tl): Nag-sisenta ka na. Tumigil ka nang magtrabaho. Sabi ng kapitbahay, kailangan mo pang maghintay hanggang sesenta-singko para mag-claim.
- show.text (en): Retirement can start at sixty if you have stopped working. It becomes compulsory at sixty-five either way.
- show.text (tl): Puwede kang mag-retire sa animnapu kung tumigil ka nang magtrabaho. Compulsory ito sa animnapu't lima, kahit ano pa ang trabaho mo.
- keep.text (en): Sixty is a choice, not a rule. You decide when to stop.
- keep.text (tl): Ang animnapu ay pagpipilian, hindi patakaran. Ikaw ang magpapasya kung kailan titigil.

**retired.claim.2**
- hook.text (en): Two neighbors turn 65 the same month. One gets a pension for life. The other gets one payment.
- hook.text (tl): Dalawang kapitbahay, parehong buwan sila nag-65. Isa, buhay-buhay na pension. Isa, minsanang bayad na lang.
- show.text (en): A monthly pension for life needs at least 120 monthly contributions. Fewer than that, SSS pays a lump sum instead.
- show.text (tl): Kailangan ng hindi bababa sa 120 monthly contributions para sa buwanang pension habambuhay. Kulang dito, lump sum na lang ang ibibigay ng SSS.
- keep.text (en): 120 is ten years. Ask SSS or GSIS exactly how many you have.
- keep.text (tl): 120 ay sampung taon. Itanong sa SSS o GSIS kung ilan na talaga ang sa iyo.

**retired.claim.3**
- hook.text (en): Same amount lands every month, all year. Then December brings a second deposit.
- hook.text (tl): Pareho ang halagang dumarating kada buwan, buong taon. Tapos may pangalawang deposito sa Disyembre.
- show.text (en): SSS and GSIS pay a 13th month pension every December. It is the same amount as one month's pension, and no application is needed.
- show.text (tl): Nagbibigay ang SSS at GSIS ng 13th month pension tuwing Disyembre. Kapareho ito ng isang buwang pension, at walang kailangang i-apply.
- keep.text (en): Expect two deposits in December, not one. Plan for both.
- keep.text (tl): Umasa ng dalawang deposito sa Disyembre, hindi isa lang. Planuhin ang dalawa.

**retired.claim.4**
- hook.text (en): The nearest SSS branch is two jeepney rides away. Ate files her claim from her phone instead.
- hook.text (tl): Dalawang sakay ng jeep ang pinakamalapit na SSS branch. Sa phone na lang nag-file si Ate ng claim niya.
- show.text (en): My.SSS and the SSS mobile app accept a retirement claim online. GSIS members file through their agency's eServices portal.
- show.text (tl): Tinatanggap ng My.SSS at SSS mobile app ang online na retirement claim. Ang GSIS members ay nag-file sa eServices portal ng ahensya nila.
- keep.text (en): File it yourself, from home, before you need the pension.
- keep.text (tl): Ikaw mismo ang mag-file, mula sa bahay, bago mo kailanganin ang pension.

**retired.claim.5**
- hook.text (en): Once a year, SSS and GSIS ask every pensioner to confirm they are still there. Skip it, and the pension stops.
- hook.text (tl): Minsan sa isang taon, may hihilingin ang SSS at GSIS. Kumpirmahin ng bawat pensioner na buhay pa sila. Kung hindi, titigil ang pension.
- show.text (en): This is the Annual Confirmation of Pensioners. It protects the fund from paying a pension no one is receiving.
- show.text (tl): Ito ang Annual Confirmation of Pensioners. Pinoprotektahan nito ang fund sa pagbabayad ng pension na walang tumatanggap.
- keep.text (en): Confirm every year, on time. It keeps the pension moving.
- keep.text (tl): Kumpirma bawat taon, sa tamang oras. Nagpapatuloy nito ang pension.

Illustrations: `calendar` (retired.claim.1, retired.claim.3 hook/show), `certificate` (retired.claim.2 hook/show), `phone` (retired.claim.4 hook/show), `shield` (retired.claim.5 hook/show).

Mock screenshots: none — no `spot` interaction in this lesson.

Data hooks: `retired.claim.2` and `retired.claim.5` keep.action is a `commitment` (`check-benefits`) — per `content/commitments.js` this hook is self-reported (`app: null, grant: null`), no SDK grant needed. `retired.claim.3` keep.action is a `wish` (key `thirteenth-pension`) — needs `goals:write` to create the goal. `retired.claim.1` and `retired.claim.4` have no keep.action.

Facts to verify:
- The 13th month pension for SSS and GSIS pensioners (`retired.claim.3`): the same amount as one month's pension, paid automatically every December. Not on the schema.md facts sheet, which only covers the private-sector 13th month pay under PD 851. Source used: general knowledge of SSS pensioner practice. Verify the current rule and status against an SSS or GSIS circular before recording narration that states it as fact.
- The Annual Confirmation of Pensioners, including suspension on a missed year and reinstatement (`retired.claim.5`): not on the facts sheet. Source used: general knowledge of SSS/GSIS pensioner administration. Verify the current confirmation channels and the exact suspension and reinstatement mechanics.
- GSIS's own contribution rule (`retired.claim.2`) and the GSIS eServices online filing portal (`retired.claim.4`): the facts sheet details SSS only. Verify against RA 8291 and current GSIS eServices/mobile app documentation before naming a specific portal to users.
- The ₱4,500 illustrative monthly pension used in `retired.claim.3` and the `retired.claim.5` story: a round number under the facts sheet's "average SSS retirement pension is under ₱5,000 a month." It is not an official average and is marked "illustrative" in the bite itself.

## Lesson 2: retired.fraud — Fraud defence
Objectives: Recognise that no bank, SSS, or PhilHealth contact will ever ask for an OTP or a full ATM PIN. Spot the red flags in a scam message — a new number, urgency, and a request for secrecy — and sort real agency practice from scam behaviour. Act correctly and quickly in the first hour after money is sent to a scammer by mistake.

Bites:
- `retired.fraud.1` choice — Refuse to give an OTP to a caller claiming to be your bank.
- `retired.fraud.2` spot — Tap the suspicious lines in a fake message from "your apo".
- `retired.fraud.3` swipe — Sort real SSS or PhilHealth practice from scam behavior.
- `retired.fraud.4` rapid — True or false on investment seminars and the Anti-Financial Account Scamming Act.
- `retired.fraud.5` order — Sequence the correct actions for the first hour after a scam.
- `retired.fraud.6` story — Live through two scam calls in one month, with a choice at each.

Voice lines to record (verbatim, en then tl):

**retired.fraud.1**
- hook.text (en): A caller says your account is compromised. He needs the OTP sent to your phone to fix it.
- hook.text (tl): May tumawag, sabing na-compromise ang account mo. Kailangan daw niya ang OTP na dumating sa phone mo para ayusin ito.
- show.text (en): No bank employee will ever ask for your OTP, even to protect your account. The OTP is yours alone.
- show.text (tl): Walang empleyado ng bangko ang hihingi ng OTP mo, kahit para protektahan ang account mo. Sa iyo lang dapat ang OTP.
- keep.text (en): No bank will ever ask for your OTP over the phone.
- keep.text (tl): Walang bangko ang hihingi ng OTP mo sa telepono.

**retired.fraud.2**
- hook.text (en): Twenty seconds. A message arrives that says it is from your grandchild. Read it closely.
- hook.text (tl): Dalawampung segundo. May dumating na mensahe, sabi galing sa apo mo. Basahing mabuti.
- show.text (en): Some messages arrive built on urgency, a new number, and a request for secrecy. Tap the lines that raise doubt.
- show.text (tl): May mga mensaheng ginawa sa urgency, bagong number, at request na manahimik ka lang. I-tap ang linyang may pag-aalinlangan.
- keep.text (en): A real apo will not mind if you call to confirm first.
- keep.text (tl): Kung tunay na apo, hindi magagalit kung tatawag ka muna para i-confirm.

**retired.fraud.3**
- hook.text (en): A caller says your PhilHealth benefits stop today unless you pay a fee right now.
- hook.text (tl): May tumawag, sabing titigil ang PhilHealth benefits mo ngayon kung hindi ka magbabayad ng fee.
- show.text (en): SSS and PhilHealth never suspend a benefit through a phone call or a text link. Sort what is real from what is fake.
- show.text (tl): Hindi kailanman sinususpinde ng SSS at PhilHealth ang benefit sa tawag o text link. Ayusin kung alin ang tunay at alin ang huwad.
- keep.text (en): A real agency lets you verify first. A scammer rushes you.
- keep.text (tl): Pinapayagan kang mag-verify muna ng tunay na ahensya. Pinapabilis ka ng scammer.

**retired.fraud.4**
- hook.text (en): Ninety seconds. Ten statements about investment seminars and scams aimed at retirees.
- hook.text (tl): Siyamnapung segundo. Sampung pahayag tungkol sa investment seminars at scam na laban sa retirees.
- show.text (en): A free lunch and a guaranteed high return are the two most common bait.
- show.text (tl): Ang libreng lunch at guaranteed na mataas na kita ang dalawang pinaka-karaniwang pain.
- keep.text (en): Check the SEC list before the seminar, not after you pay.
- keep.text (tl): I-check ang listahan ng SEC bago ang seminar, hindi pagkatapos magbayad.

**retired.fraud.5**
- hook.text (en): You realize the money you just sent went to a scammer. The next hour matters most.
- hook.text (tl): Napansin mong ang perang ipinadala mo ay napunta sa scammer. Ang susunod na oras ang pinakamahalaga.
- show.text (en): Speed matters more than anything else. A bank can act fast if you report right away.
- show.text (tl): Mas mahalaga ang bilis kaysa sa lahat. Puwedeng kumilos agad ang bangko kung agad mong i-report.
- keep.text (en): Save your bank's hotline number now, before you ever need it.
- keep.text (tl): I-save na ngayon ang hotline number ng bangko, bago mo ito kailanganin.

**retired.fraud.6**
- hook.text (en): A caller says he is from your bank. A suspicious transfer needs your OTP to stop it.
- hook.text (tl): May tumawag, sabing taga-bangko siya. Kailangan ng OTP mo para pigilan ang kahina-hinalang paglipat.
- show.text (en): Two calls, one month, each testing what you learned this lesson.
- show.text (tl): Dalawang tawag, isang buwan, sinusubok ang natutunan mo sa araling ito.
- keep.text (en): The pause before you answer is worth more than any caller's urgency.
- keep.text (tl): Ang pag-iisip bago sumagot ay mas mahalaga kaysa sa urgency ng sinumang tumawag.

Illustrations: `phone` (retired.fraud.1, retired.fraud.2, retired.fraud.6 hook/show), `shield` (retired.fraud.3, retired.fraud.5 hook/show), `certificate` (retired.fraud.4 hook/show).

Mock screenshots: `retired.fraud.2`, an SMS thread from "Unknown number" with a 20-second countdown at the top. Five message bubbles in order: a greeting, the "new number, lost phone" line, a warm filler line, the ₱3,000 padala request, and the line asking the reader not to tell their parents. Tapped bubbles turn amber immediately; once the timer ends, the three correctly-suspicious bubbles turn red and the two calm bubbles turn green, each with its `why` line in a small caption underneath. A summary card at the end reads "3 of 5 flagged."

Data hooks: `retired.fraud.2` keep.action is a `drill` — per `docs/DATA-HOOKS.md` this enrols the learner in the weekly scam drill as a local notification; no SDK data grant needed. `retired.fraud.5` keep.action is an `open` deep link to `circles` — maps to the host's Circles launcher, sharing the first-hour steps with family. `retired.fraud.1`, `.3`, `.4`, and `.6` have no keep.action.

Facts to verify: none beyond the schema.md facts sheet. RA 12010 (Anti-Financial Account Scamming Act), the SEC Check App and SEC advisories, and the mid-2026 OTP retirement date are already listed there and used as given.

## Lesson 3: retired.health — PhilHealth and the 20% discount
Objectives: Know that every senior citizen is an automatic PhilHealth member under RA 10645, no application needed. Compute the RA 9994 senior discount at the counter, know what it does and does not cover, and use the ID without being wrongly denied.

Bites:
- `retired.health.1` choice — Confirm PhilHealth membership starts automatically at sixty.
- `retired.health.2` match — Match each purchase to the discount it carries.
- `retired.health.3` number — Compute what a ₱336 medicine actually costs after VAT and the discount.
- `retired.health.4` swipe — Sort what the discount covers from what it does not.
- `retired.health.5` story — Present the ID at a pharmacy and a dentist without being denied.

Voice lines: generated in `docs/manifest/retired.md`.

Illustrations: `shield` (retired.health.1), `cart` (retired.health.2), `coins` (retired.health.3), `scale` (retired.health.4), `card` (retired.health.5).

Data hooks: `retired.health.1` keep.action is a `commitment` (`check-benefits`) — self-reported, no SDK grant needed. `retired.health.3` keep.action is an `open` deep link to `budget`. `retired.health.2`, `.4`, `.5` have no keep.action.

Facts to verify: the order of operations for computing the discount (remove 12% VAT, then take 20% off) used in `retired.health.3` and `retired.health.5` — the facts sheet confirms the discount and VAT exemption rates but not this computation order; verify against the RA 9994 implementing rules before recording. The valid ID types accepted at the counter (an OSCA-issued ID or booklet versus a barangay ID) used in `retired.health.5` — not on the facts sheet; verify against the RA 9994 IRR's list of acceptable proof.

## Lesson 4: retired.buckets — Spending down safely
Objectives: Understand why spending down in retirement differs from saving up while working. Split savings into a one-year cash bucket, a five-year bonds-and-MP2 bucket, and a growth bucket, and refill the cash bucket every year.

Bites:
- `retired.buckets.1` choice — Recognise that retirement turns saving into a planned withdrawal.
- `retired.buckets.2` allocate — Split ₱2,000,000 across the three buckets.
- `retired.buckets.3` number — Size one year of cash from monthly needs.
- `retired.buckets.4` match — Match Retail Treasury Bonds and Pag-IBIG MP2 to their features.
- `retired.buckets.5` story — Refill bucket one before it runs low, or watch it run dry.

Voice lines: generated in `docs/manifest/retired.md`.

Illustrations: `hourglass` (retired.buckets.1), `jars` (retired.buckets.2, retired.buckets.5), `alkansya` (retired.buckets.3), `tree` (retired.buckets.4).

Data hooks: `retired.buckets.3` keep.action is a `wish` (key `cash-bucket`, ₱120,000) — needs `goals:write`. `retired.buckets.5` keep.action is an `open` deep link to `goals`. `retired.buckets.1`, `.2`, `.4` have no keep.action.

Facts to verify: the allocate guide ranges in `retired.buckets.2` (roughly 5–10% cash, 25–35% bonds and MP2, 55–70% growth) are an illustrative reading of the bucket approach for a ₱2,000,000, ₱10,000-a-month example, not an official percentage split. The current Pag-IBIG MP2 dividend rate and the available Retail Treasury Bond series, used in `retired.buckets.4`, change yearly — confirm both at publish time.

## Lesson 5: retired.budget — Staying independent on a pension
Objectives: Build a monthly budget that fits ₱5,000 to ₱15,000, with needs and medicine paid before extras. Know the daily spending number, and what to do when the pension itself is not enough.

Bites:
- `retired.budget.1` allocate — Split ₱9,000 across needs, medicine, and extras.
- `retired.budget.2` swipe — Sort what pays first from what can wait.
- `retired.budget.3` number — Compute what a ₱600 medicine bill costs after the discount.
- `retired.budget.4` predict — Guess the daily number on a ₱9,000 monthly budget.
- `retired.budget.5` story — Stretch a short week without borrowing, or pay the cost of a loan.

Voice lines: generated in `docs/manifest/retired.md`.

Illustrations: `jars` (retired.budget.1), `cart` (retired.budget.2), `coins` (retired.budget.3), `hourglass` (retired.budget.4), `scale` (retired.budget.5).

Data hooks: `retired.budget.1` keep.action is an `open` deep link to `budget`. `retired.budget.2`, `.3`, `.4`, `.5` have no keep.action.

Facts to verify: none beyond the schema.md facts sheet. The ₱9,000 monthly figure and the ₱600 medicine bill are illustrative amounts within the path's stated ₱5,000 to ₱15,000 band, not official statistics.

## Lesson 6: retired.estate — Estate and transfers
Objectives: Know why a will and named beneficiaries matter at any estate size, and how the flat 6% estate tax is computed. Understand why a bank freezes an account, joint ones included, until estate tax clearance.

Bites:
- `retired.estate.1` choice — Decide whether a small estate still needs a will.
- `retired.estate.2` match — Match each account type to what happens to it at death.
- `retired.estate.3` number — Compute the 6% estate tax on a net estate.
- `retired.estate.4` compare — Compare a lifetime gift against leaving the same amount in the estate.
- `retired.estate.5` story — File the estate tax return promptly, or watch a joint account stay frozen.

Voice lines: generated in `docs/manifest/retired.md`.

Illustrations: `house` (retired.estate.1, retired.estate.5), `certificate` (retired.estate.2), `scale` (retired.estate.3), `hand` (retired.estate.4).

Data hooks: `retired.estate.2` keep.action is an `open` deep link to `accounts`. `retired.estate.1`, `.3`, `.4`, `.5` have no keep.action.

Facts to verify: `retired.estate.4`'s comparison assumes the estate is already above its standard deduction, so every additional peso costs a flat 6% — a simplification for the comparison, not itself a separate fact. The typical wait time for estate tax clearance to unfreeze an account, used in `retired.estate.5`, is not on the facts sheet; the facts sheet confirms the freeze and that a withdrawal is allowed subject to 6% final tax, but not how long clearance usually takes. Verify against current BIR rules before recording.

## Lesson 7: retired.family — Helping family without going broke
Objectives: Set a fixed, affordable limit for family support before being asked. Refuse a lending app opened in the reader's name, size the padala to what the budget allows, and recognise when repeated giving empties the cash bucket.

Bites:
- `retired.family.1` number — Set a fair monthly limit for helping family.
- `retired.family.2` choice — Decline opening a lending app in your own name for someone else.
- `retired.family.3` allocate — Split ₱9,000 across needs, padala, and savings.
- `retired.family.4` swipe — Sort requests that deserve help from those that deserve a kind no.
- `retired.family.5` story — Hold a kind no, or watch the cash bucket empty early.

Voice lines: generated in `docs/manifest/retired.md`.

Illustrations: `coins` (retired.family.1), `phone` (retired.family.2), `ship` (retired.family.3), `hand` (retired.family.4), `family` (retired.family.5).

Data hooks: `retired.family.1` keep.action is an `open` deep link to `budget`. `retired.family.3` keep.action is an `open` deep link to `remit`. `retired.family.5` keep.action is an `open` deep link to `circles`. `retired.family.2`, `.4` have no keep.action.

Facts to verify: none beyond the schema.md facts sheet. The ₱10,000 income, ₱9,000 monthly figure, and the padala amounts are illustrative, within the path's stated band.

## Facts to verify (consolidated)
- The 13th month pension for SSS/GSIS pensioners and the Annual Confirmation of Pensioners (Lesson 1) — not on the schema.md facts sheet; see the Lesson 1 notes above for sourcing and what to verify before recording.
- GSIS-specific contribution rules and its online filing portal (Lesson 1) — the facts sheet covers SSS only; verify against RA 8291 and current GSIS documentation.
- The ₱4,500 illustrative monthly pension used throughout Lesson 1 — a round number under the facts sheet's "under ₱5,000 a month" average, not an official figure.
- The VAT-then-discount computation order and the valid ID types accepted at the counter (Lesson 3) — see the Lesson 3 notes above; verify against the RA 9994 implementing rules.
- The allocate guide ranges for the three buckets, and the current Pag-IBIG MP2 dividend rate and available Retail Treasury Bond series (Lesson 4) — see the Lesson 4 notes above; MP2 and RTB terms change yearly.
- The typical wait time for estate tax clearance to unfreeze an account, and the simplifying assumption behind the lifetime-gift comparison (Lesson 6) — see the Lesson 6 notes above; verify the clearance timeline against current BIR rules.
- Lessons 5 and 7 need nothing beyond the schema.md facts sheet; their peso figures are illustrative amounts within the path's stated ₱5,000 to ₱15,000 band.
