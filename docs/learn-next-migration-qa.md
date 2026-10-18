# Next.js Learn migration verification

Verified locally on 11 September 2026. No changes were staged, committed, or deployed.

## Architecture

- Next.js App Router validates course URLs and renders the React screens in `src/components/learn/`.
- `learn/content/` is the canonical bilingual content. All authored content files match the archived course byte for byte; only the registry imports changed.
- The standalone HTML entry point, hash router, and separate bite player are retired. Existing hash links migrate to real routes.
- `learn/scripts/build.mjs` publishes media only to `public/learn-assets/`, with an exclusive build lock, validation, atomic publication, and a SHA-256 inventory. No course HTML or application source is published there.
- Expo opens the same hosted Next.js app in `react-native-webview`. Native storage, sharing, app links, visibility, and Back navigation stay in the small native wrapper.

## Automated checks

- 61 course tests, including all 255 activities and 16 drills in both languages, React reader/practice flows, route transitions before history commits, offline bootstrap, native hydration/save retry, backup disposal, and Philippine speech normalization.
- Content lint: six paths, 48 lessons, 255 bites, zero problems.
- Seven host routing tests. HTTP smoke verifies ten routes on each Learn hostname, local `/learn`, Next resources, media seeking, scoped manifests, metadata, and retired static paths.
- Root ESLint, TypeScript, and the production build pass.
- Media verification: 1,914 narration clips, 12 localized videos, 2,007 published files. Published media bytes match the canonical source.
- Native: nine wrapper tests, Learn/host type checks, Android and iOS JavaScript bundles, and CDN packaging pass.

## Browser checks

Chromium checks use an isolated local profile. Test progress is not production learner data.

Actual browser captures: [mobile Wishes](learn-review/wishes-mobile.png), [offline lesson](learn-review/offline-lesson-mobile.png).

- Desktop and 390px mobile onboarding, Wishes, paths, lesson reader, practice, and profile.
- A real four-beat lesson accepts an answer, displays feedback, saves its score, schedules review, and advances to the correct next bite.
- Narration loads the Philippine-peso MP3 from `/learn-assets/audio/`.
- Dark mode, fixed app navigation, keyboard focus, and responsive illustrations.
- With the production server stopped, an unvisited `/learn/bite/first.sweldo.3?embed=native` opens from the cached Next document and renders the requested lesson. Its interaction advances; offline link navigation returns to Wishes with the embed query, saved progress, and Jinnie artwork intact. Network-state emulation also shows the offline notice. No iframe or archived static renderer is involved.
- Marketing home, apps, Learn detail, mobile menu, and footer pass at 1440px and 390px. All 14 app tiles and 25 footer links fit, artwork loads, and Escape restores focus to the menu toggle. See [screenshots and evidence](marketing-review/README.md).

## Release boundary

`learn.jinnie.ph` still needs its hosting project/domain configuration and HTTPS deployment. The current integration is locally reviewable at `/learn`; code changes do not create DNS records.

The new Next.js renderer has not been run end to end in the Android WebView. Earlier device checks covered the prior renderer. The local native Learn server restart was rejected by automatic approval review, so that action was not retried. Native compilation and protocol tests do not substitute for that remaining device check.
