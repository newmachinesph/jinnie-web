# Standalone completion record

This records the original standalone delivery. For the current source and build workflow, see [the course README](../README.md): edit `jinnie-web/learn`, build the website, and let Expo load `https://learn.jinnie.ph/`.

## Delivered

The existing financial literacy course is now packaged as an installable standalone app. All authored course files are byte-for-byte unchanged from the pre-completion backup (12 files; the content registry has a progression fix).

- Original indigo-blue identity, gold accents, girl-genie character and 金 lamp.
- Complete illustration/icon library, simulated message visuals and reduced-motion-aware concept animation.
- 1,914 local narration clips and twelve captioned illustrated videos, six paths in two languages.
- Offline course shell, separately downloadable narration/video packs and cached byte-range playback.
- Downloadable competency certificates, validated progress backup/restore, install controls and app icons.
- Fixed duplicate submissions, timer cleanup on navigation, equivalent matching answers, invalid savings inputs, local-calendar commitment dates and age/placement-aware continuation.
- Explicit optional host launcher, covering every authored app destination, with an honest standalone fallback.
- `dist/` static build with content-derived cache revision and media completeness checks.

The packaged app is approximately 120 MiB, mostly narration. The first-load course shell is much smaller; videos and narration packs are separate downloads. Existing lesson words, sample figures and factual claims were preserved rather than re-authored.

## Verification

- `npm.cmd test`: 20 passing tests. This includes 542 complete DOM interaction runs: all 255 bites and 16 drills in both English and Taglish.
- Content schema: 48 lessons, 255 bites, zero lint issues.
- All 1,926 MP3/MP4 assets fully decoded with FFmpeg, zero errors.
- Browser playback: 45-second video, caption cues, and audio ready-state 4.
- Actual offline check: stopped the task's local HTTP server, reopened the cached course, played saved audio/video, sought to 25 seconds and served an exact 1,000-byte range with HTTP 206. The server was restarted afterward.
- Certificates rendered to PNG and visually inspected; sample in `completion-review/`.
- Build validates all 49 shell resources, 1,914 narration jobs, twelve videos, captions and posters.
- Packaged browser layout checks: 568 light-mode and 568 dark-mode screen combinations across both languages, 320/390-pixel widths, and standard/large text; zero route, language, overflow or runtime failures. A further 1,084 exercise layouts (every bite and drill in both languages and widths, large text) had no horizontal overflow.

Browser layout results and screenshots are saved in `completion-review/`. Testing used Chromium through Argent. Mobile Safari and physical-device installation were not tested. Synthetic pronunciation has not had a separate human listening pass.

## Use

The working preview is http://127.0.0.1:4173/dist/. `npm.cmd run build` regenerates the publishable `dist/` directory. Serve that directory over HTTPS for installation/service workers outside localhost. Source, tests, documentation and media authoring tools remain in the project root.

## Main-app boundary

The standalone experience stores learning progress locally and uses the existing sample financial figures. Live Jinnie account data, cross-device SDK storage, verified transaction events and background reminders need the main application's adapter and permissions. The shipped `window.JinnieLearnHost.openApp(appId)` contract supports opening destinations; it does not claim to synchronize accounts or post financial data. See `DATA-HOOKS.md`.

Completion certificates are local records of a passed path check. Their codes are not external verification or accreditation. No external deployment or account write was performed.
