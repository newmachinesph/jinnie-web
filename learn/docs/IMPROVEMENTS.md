# Jinnie finlit improvement pass

This pass improves the existing standalone app while preserving every content and i18n file byte-for-byte. The original blue and gold colors, girl-genie character and 金 lamp remain.

The `dist/` and ZIP references below are historical. The maintained source is now `jinnie-web/learn`; the website build generates `public/learn-content` and serves it at `https://learn.jinnie.ph/` for both browser and Expo WebView users.

## Experience

- The home screen leads with Jinnie and a prominent next lesson, followed by illustrated wishes and their savings progress.
- Desktop uses a navigation rail and wider layouts; phones keep the bottom navigation. Wishes form three columns on desktop, and paths form two.
- Paths use the six life-stage illustration scenes. The lesson list is a numbered roadmap with clear current and completed steps.
- Intro videos stay compact until opened, with native playback, captions and offline downloads inside. Closing a video stops playback.
- The lesson reader has a wrapping title, named four-step progress, a focused reading card and clearer illustration placement.
- Practice puts weekly practice, due review and glossary before the expandable drill library.
- Onboarding and progress screens share the same spacing, rounded cards and illustration treatment.

## Usability fixes

- Larger text now scales the actual font sizes, including exercises.
- Numeric answers validate complete numbers instead of turning arbitrary text into zero. Currency formatting, signed values and percentages remain supported.
- Savings recording requires a valid positive amount and preserves decimals. Invalid onboarding amounts cannot partially save wishes.
- Sliders and numeric answers have accessible question labels. Ordering and stories retain useful keyboard focus, and selected scam/matching answers expose their state to assistive technology.
- Beat headings receive focus as the lesson advances. Stale callbacks and repeated clicks cannot advance or complete an abandoned lesson.
- Paths navigation remains selected inside paths and lessons.

## Validation and delivery

35 automated tests pass, including every authored interaction and scam drill in both languages. Content and translations match the pre-pass backup. Video opening, playback with captions, and pausing on close were checked through Argent in Chromium. Screenshots and responsive layout results are in `improvement-review/`.

Browser checks passed for 1,136 light-mode screen combinations and 276 packaged dark-mode combinations, across phone/tablet/desktop widths, both languages and standard/large text. All 1,084 exercise layouts passed inside the reading card after correcting wrapping for a long Taglish answer. Actual reader text measures 18px normally and 20.16px with large text enabled. The ZIP integrity and its revision (`593f19cecf88`) match the final build. Physical-device and Safari testing were not performed in this pass.

`npm.cmd run build` produces the static `dist/` release and its content-derived offline cache revision. Live main-app account integration remains the boundary documented in `DATA-HOOKS.md`.
