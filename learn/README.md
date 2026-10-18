# Jinnie Learn: Wishes

Jinnie Learn is the bilingual financial-literacy course for the Philippines, from age seven to retirement. Next.js renders its screens at https://learn.jinnie.ph/. Expo opens that same application in a WebView; it does not keep another copy of the course.

## One course, one renderer

- `learn/content/` contains the six paths, 48 lessons, 255 learning bites, placement questions, 16 scam drills, commitments, and 63 glossary entries. English and Filipino wording stays together in the authored objects.
- `src/app/learn/` and `src/components/learn/` contain the Next.js routes and React screens, including the four-beat lesson reader, practice, wishes, and progress.
- `learn/src/` contains the shared progress store, Philippine narration, native bridge, media, backup/certificate helpers, and the eleven activity renderers. React mounts only an individual activity and disposes it on navigation or language changes.
- `learn/src/input.css` supplies the shared course design tokens and activity styles through the Next.js stylesheet. It is not compiled into a second static application.
- `learn/assets/` contains canonical media and source artwork. Next.js imports the artwork modules; the publisher copies media only.

There is no standalone HTML entry point, hash router, vanilla bite player, or native course bundle. Existing hash links are migrated by the React provider.

## Run and verify

From the `jinnie-web` repository root:

```powershell
pnpm.cmd install
npm.cmd --prefix learn ci
pnpm.cmd dev --port 3010
```

Open http://learn.localhost:3010/ or http://localhost:3010/learn. Both use the Next.js application. Next handles screen/content changes; the development runner publishes changed media.

```powershell
pnpm.cmd build:learn
pnpm.cmd check:learn
pnpm.cmd test:learn
pnpm.cmd build
```

The media build publishes into ignored `public/learn-assets/`. It does not copy HTML, JavaScript, CSS, lesson objects, or production-job metadata. Audio/video manifests retain their authored `assets/...` references; `src/urls.js` maps those references to `/learn-assets/...` at runtime. Do not edit generated files or copy them into Expo.

Publishing acquires an exclusive build lock, prepares `learn/.tmp/build/`, validates all referenced media, and calculates a SHA-256 inventory before swapping it into place. Failed preparation keeps the previous output; a failed swap restores `learn/.tmp/assets-backup/`. A completed publication removes the retired `public/learn-content/` artifact. If a process is forcibly terminated, inspect the PID in `learn/.tmp/media-build.lock` and confirm it has exited before removing that stale lock and rebuilding. Concurrent builds never clean each other's staging directory.

`public/learn-assets/integration-manifest.json` identifies the canonical source, `renderer: "nextjs"`, media revision, content totals, and file hashes. The checker verifies the complete inventory against the canonical source bytes and rejects application code or unexpected files. The media revision covers media bytes; Next.js builds and versions the application separately. The installation manifest points at the production Learn root. Service-worker source is `learn/sw-next.js`; the root build generates `public/learn-sw.js` for the Next application.

## Regression coverage

The exhaustive activity tests complete every authored activity and all 16 drills in both languages. React screen tests exercise the actual reader/practice components with the real content, store, and interaction engine; navigation and decorative artwork are isolated for these DOM tests. Coverage includes four-beat progression, double-press protection, review scheduling, cancelled practice, commitments, glossary access, path-check gating, and recoverable activity errors.

Other tests cover atomic media publication, exact media preservation, Philippine speech normalization and visibility guards, placement, savings, native hydration and retry, backups, certificates, media cleanup, and offline behavior. Tests use Node's test runner; React screen tests require Node 22.15+ or 24+ for module customization hooks. Browser QA remains necessary for visual layout, real media playback, and device WebView behavior.

## Progress and Jinnie integration

Ordinary browser visits keep learning progress locally. Use **Me > Save progress backup** for a portable copy; clearing browser data removes local progress and downloaded media. Wishes and commitments retain their authored sample/self-reported behavior.

Expo loads `https://learn.jinnie.ph/?embed=native`. Its restricted bridge restores and saves Learn-scoped progress, opens the nine authored native app destinations, and shares JSON backups or SVG certificates. The React provider waits for native hydration and exposes retry when it fails. Native settings backups and resets include this scoped storage. No account data is fabricated when a host action is unavailable.

For local Expo testing set `JINNIE_LEARN_URL=http://localhost:3010/learn` before starting the Learn mini-app server, and reverse port 3010 on Android. Both browser and native visits use the same Next.js renderer and media URLs. Deployment must support byte-range requests for streaming media.

## Media authoring

The course contains 1,914 Philippine narration clips and 12 captioned intro videos. Builds preserve their bytes and never regenerate audio or video. Optional authoring commands, run inside `learn/`:

```powershell
python -m pip install -r scripts/requirements-media.txt
npm.cmd run media:prepare
npm.cmd run media:narration
npm.cmd run media:video
npm.cmd run build
```

Generation uses an online synthesis service for public authored text. Playback uses local MP3s with device speech as a fallback and uploads no learner text. The voices are `en-PH-RosaNeural` and `fil-PH-BlessicaNeural`. Video rendering uses FFmpeg; set `JINNIE_MEDIA_FONT` and `JINNIE_MEDIA_BOLD` when Windows Segoe UI is unavailable.

Number expansion is speech-only: both languages say pesos and centavos, and Filipino narration spells every number out in English words ("five thousand pesos", "two point five percent") the way Taglish is spoken, never "limang libong piso". English course text is plain English with no Filipino loanwords; `scripts/en-english.mjs` is the one-off rewrite that enforced it. `scripts/prune-narration.mjs` removes clips that edited text no longer references. `src/speech-text.js` supplies normalization to recordings and device fallback. Authored text, lookup keys, and media filenames remain stable. The currency repair regenerated 544 clips and refreshed eight intro soundtracks while preserving the video frames and captions. `refresh-video-audio.py` can update soundtracks from a saved prior narration manifest. When replacing recordings again, update the media-cache revision in `src/urls.js` and `sw-next.js` so existing downloads refresh. Authoring references and provenance are in `docs/ASSETS.md` and `docs/DATA-HOOKS.md`.
