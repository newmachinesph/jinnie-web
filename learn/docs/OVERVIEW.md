# Overview

## The idea

A genie grants three wishes. Jinnie asks for yours, then teaches you to grant them yourself. On first open the learner gives their age band, and everything after that is worded for it. An adult names something to have, something to be rid of, and something to be safe from; a child names something to buy, something to stop buying, and something to keep safe; a teen, something to save for, a habit to stop, and something to protect. Those become goals. Every lesson is tagged with the wish it advances, and reminders are tied to those goals, which is the one mechanism with Philippine trial evidence behind it (Karlan and colleagues, savings reminders, about a 6% lift, more when the reminder names a goal).

Progress is a lamp that fills with light as a path is completed. Gold appears once: the moment a wish is granted with real money. Recognition reads as competencies, "Can read a payslip", not levels or badges.

## Structure

- **Bite**: one concept, one interaction, one takeaway, two to four minutes, one screen with no scrolling. Four beats in a fixed rhythm: Hook (a situation), Show (the idea, with a drawn illustration), Do (the interaction, ideally on the learner's own numbers), Keep (one line to remember and an optional action in Jinnie).
- **Lesson**: five or six bites, one competency, one wish. Exactly one branching story, usually last.
- **Path**: one life stage. Six paths, kids to retired. Placement suggests a starting lesson; all lessons stay open.

## Interaction kit

Eleven types, mixed so no two consecutive bites feel the same: tap-one choice, swipe sort, predict-then-reveal, drag-to-allocate jars, spot the scam, order the steps, type the number, which is cheaper, branching story, rapid true or false, match pairs. Feedback is in Jinnie's voice: "Here is the number", never "Wrong".

## Game layer, tied to behaviour

- **Wishes** are the spine. Progress is pesos toward a goal, not points.
- **Commitments** are verified actions: record every expense for seven days, fund a wish on two paydays, pay every bill before its due date, bring one debt down by ₱2,000, check SSS and PhilHealth records. In Jinnie these are marked by Wallet, Bills, Debts and Goals events.
- **Scam drill of the week**: a fake message to flag, scored on what was caught. Practice, not reading.
- **Spaced review**: interactions from finished bites come back on a doubling schedule.
- **Competencies** unlock when a lesson is complete and map to the OECD/INFE competency framework for youth and adults.
- **Path check**: once every lesson in a path is done, eight interactions drawn from the path; seventy per cent unlocks that path's certificate, retakable any time.
- **Drill library and glossary**: all sixteen scam drills are open to practise, not only the weekly one, and sixty-three money words are searchable in both languages.
- **Stories replay**: at the end of a branching story the learner can try the other path; the first outcome keeps the score.
- Deliberately absent: leaderboards, XP, streak fire, cash rewards. Money is private; shame kills retention; prizes invite fraud and regulation.

## Age bands

| Band | Ages | Why the line exists |
|---|---|---|
| Alkansya | 7 to 12 | App-store family policies and the Data Privacy Act require parental consent; GCash Jr sets the market precedent at 7. Play-based, no real accounts. |
| Baon | 13 to 17 | Minors cannot contract; banks and wallets require a guardian. Curriculum shifts to junior and senior high. |
| First money | 18 to 24 | Legal adulthood. Largest cohort entering the workforce by 2027. |
| Building | 25 to 39 | Peak borrowing years; unsecured credit grew 27.7% against 5.8% income growth over 2021 to 2025. |
| Securing | 40 to 59 | Retirement window; the average SSS pension is about ₱6,000 after the 2025 and 2026 increases, far below needs. |
| Retired | 60 and over | Most targeted group for fraud; least studied. |

Inside the adult bands, placement by knowledge decides the starting lesson, not age. A 45-year-old novice starts where an 18-year-old does without being told so.

## Measurement

Placement comes after the age question and uses a question set written for the band: five for children on counting change, needs and wants, codes and saving; six for teens on the daily number, simple interest, scams, paluwagan and 5-6; eight for adults in the style of the BSP six-question battery and the OECD "Big Three" on interest, inflation and diversification. Scores are stored and never shown as a grade. With the same questions at the end of a path, the product can report before-and-after on a scale BSP and the National Strategy for Financial Education will recognise.

## Status

All six paths are fully authored: 48 lessons, 255 bites, one branching story per lesson, every string in English and Taglish, zero linter findings. The engine is complete for all eleven interactions, age-first onboarding with kid, teen and adult wording, three placement sets, wishes, commitments, a sixteen-drill library, a glossary, path checks with certificates, spaced review, offline caching through a service worker, an aggregate-only event log, and accessibility basics (live regions, progress bar roles, focus on route change, a language attribute that follows the toggle). Nine unit tests and three browser tests pass. Assets are placeholders; see `ASSETS.md` and the generated manifests in `docs/manifest/` (1,193 voice lines, 20 illustration ids, 5 mock screenshots, 6 intro video briefs).

## Next

1. Verify every item in `VERIFY.md` and the per-path "Facts to verify" lists against primary sources.
2. Record voice, draw final illustrations and Jinnie herself, shoot six intro videos; the manifests list every line and brief.
3. Wire the data hooks to the Jinnie SDK and replace `localStorage` (`DATA-HOOKS.md`).
4. Play every lesson once on a phone with a Filipino reader for each band and fix what reads wrong.
5. Run the placement before and after with a small cohort and publish the numbers.
