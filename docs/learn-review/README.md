# Learn integration review

This is the historical review of the initial website iframe integration.
The current implementation serves the course directly at `learn.jinnie.ph`;
see [the host routing guide](../learn-hosting.md) for the current structure and checks.

Checked on 11 September 2026 using Argent Chromium tools against the local
production server at `http://127.0.0.1:3010`.

The production build and TypeScript checks passed, with 33 prerendered pages.
ESLint and `git diff --check` passed. The packaging and HTTP smoke checks passed
on the final course revision `19d88235063e`: 50 offline shell resources, 1,914
narration clips, and 12 videos. The directory launch URL redirects to the
course index; audio and video return HTTP 206 for byte-range requests.

## Browser checks

- The `/learn` page shows its own exit bar and the course, with no marketing
  header or footer taking up the learning viewport.
- Desktop onboarding, a complete four-beat activity, and keyboard answer
  submission worked. `first.sweldo.1` saved with score 1 and remained completed
  after a full page reload. The next activity was offered.
- The recorded narration played from the website's bundled MP3 and advanced
  beyond 13 seconds. The path introduction played beyond 27 seconds, decoded
  at 720 × 1280, and showed English captions. Its duration was 45.06 seconds.
- The Wallet lesson action opened the explanation that the native Jinnie app
  is required. No host bridge or transaction was fabricated on the website.
- A nested, same-origin iframe harness rendered the **whole website page** at
  390 × 844 and 320 × 740 CSS pixels, giving the course viewports of 390 × 799
  and 320 × 695. These are layout checks, not physical-device emulation.
  Neither the website nor the course had horizontal overflow.
- Mobile onboarding, the home screen, the Filipino path, and the child-facing
  wish form remained readable. Scrolling reached Continue, Skip for now, and
  Change age; controls were not covered by the website frame.
- After the final asset sync, the active shell cache was
  `jinnie-shell-/learn-content/-release-19d88235063e`. Desktop onboarding still
  fit its viewport. The debugger's log registry contained no errors or warnings.

Temporary test progress was removed and the browser returned to fresh
onboarding. Authored course text and media were not changed by this integration.

## Screenshots

- [Desktop onboarding](desktop-onboarding.png)
- [Desktop activity](desktop-activity.png)
- [390px home](mobile-390-home.png)
- [320px Filipino path](mobile-320-filipino.png)
- [320px onboarding](mobile-320-onboarding.png)
- [320px form controls after scrolling](mobile-320-form-controls.png)
