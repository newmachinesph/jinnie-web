# Learn application and host routing

Learn is a React application in this Next.js deployment. Its App Router entry
is `src/app/learn/[[...segments]]/page.tsx`, with its own layout and components
in `src/components/learn/`. The marketing pages live in `src/app/(site)/` and
have a separate layout; their public URLs have not changed.

`learn/` remains the single source for authored lessons, translations, shared
learning logic, illustrations, narration, and videos. Next imports that source
directly. The media build publishes only assets into the ignored
`public/learn-assets/` directory. It does not publish a standalone HTML/JavaScript
course. Expo opens the Next application in a WebView and contains no course copy.

## One deployment, two hosts

- `jinnie.ph` serves the marketing website. Its Learn links point directly to
  `https://learn.jinnie.ph/`; `/learn` also renders the course.
- `learn.jinnie.ph` serves Learn through its dedicated Next layout.
  `src/proxy.ts` rewrites `/` internally to `/learn` and maps the other Learn
  screens to `/learn/…`. The browser keeps the short Learn-origin URL. The
  WebView receives the Next page directly, without a wrapper iframe.
- `learn.localhost` enables the same host routing locally. For example, start
  Next on port 3010 and open `http://learn.localhost:3010/`.
- `http://localhost:3010/learn` is the same real application for local and
  device development. The `/learn` route also remains available on the business
  hostname; it does not depend on the Learn subdomain resolving.

The proxy preserves the incoming query string, including `?embed=native`.
The native bridge remains in the page's top window. Routes are real paths:
`/paths`, `/path/first`, `/lesson/first.sweldo`, `/bite/first.sweldo.1`,
`/practice`, `/me`, `/onboard`, `/placement`, and `/placement/age`. For example,
Expo can open `https://learn.jinnie.ph/path/first?embed=native`. The page validates
content IDs and uses Next navigation. Existing hash links are migrated by the
client after hydration.

## Files and offline scope

Next serves its framework code from `/_next/`. Narration, video, illustrations,
and icons use `/learn-assets/`; neither authored source modules nor an old
`index.html` are public assets. These paths pass through the Learn proxy.
With `JINNIE_ASSET_ORIGIN=https://cdn.jinnie.ph`, Next proxies `/learn-assets/`
and `/screens/` to Cloudflare R2 before checking local static files. The browser
keeps same-origin URLs for its offline worker. Without this setting, development
serves local files. Upload assets before deploying a build that references them.
Audio/video requests use a streaming route handler that explicitly forwards byte
ranges and preserves HTTP 206. These responses are not cached by Vercel, avoiding
partial files being cached as complete responses; R2 remains the media origin.

`/learn-sw.js` is registered in production with `/` scope on the Learn host and
`/learn` scope on a local marketing origin. The dynamic manifest is served at
`/manifest.webmanifest` on the Learn host and `/learn/manifest.webmanifest`
locally, with matching scope/start URLs. Downloaded media and local progress
remain separate from the marketing site.

The Learn host has its own `robots.txt` and `sitemap.xml`, listing the public
Learn root, paths, and practice screens. Profile/onboarding/placement pages are
excluded. Unknown paths return 404 rather than a marketing page.

The previous `/learn-content/index.html` entry redirects to the real application
on both local and production hosts, preserving query parameters. All other
`/learn-content/…` requests return 404, even if a developer still has old generated
files on disk. Use `/learn` for device development when `learn.localhost` cannot
resolve.

## Local verification

`pnpm dev --port 3010` publishes media once and starts Next development.
React screens and imported course sources use Next's development updates.
The watcher skips dependencies and generated output, retries edits queued during
a failed build, and stops its build/Next process trees on shutdown. Asset builds
validate a staging directory before replacing the published files, keeping the
last working output available if validation or publication fails.
`pnpm build` publishes and verifies media before compiling Next. Use
`pnpm test:learn` for the course tests/content lint and `pnpm check:learn` for
the generated asset inventory. The host routing check talks to a running local
server with explicit Host headers, so it does not need public DNS:

```powershell
pnpm check:learn:routing -- http://127.0.0.1:3010
node --test tests/learn-routing.test.mjs
```

The unit checks exercise the actual TypeScript proxy, its matcher, and Next's
production-only redirect configuration. The HTTP check verifies ten real React
routes on both Learn hosts, local `/learn`, framework scripts/styles, media byte
ranges, scoped manifests, metadata isolation, canonical links, and legacy file
blocking. Browser QA additionally checks hydration, navigation, saved progress,
and responsive layout.

For a browser check, `learn.localhost` is recognized as loopback by Chromium.
If a device or browser cannot resolve it, use the local `/learn` URL or
add an explicit local DNS/hosts mapping for development.

## Domain setup

Attach **both** `jinnie.ph` and `learn.jinnie.ph` to the same Next.js deployment.
Configure the `learn` DNS record according to that deployment provider's custom
domain instructions and enable its HTTPS certificate. Preserve the incoming
Host header at the reverse proxy. The course is served by the website build;
it does not need a second application deployment or a separate content release.

The Vercel project was recreated under `sumnora` on 17 September 2026 and both
hosts were attached. Production uses `NEXT_PUBLIC_SITE_URL=https://jinnie.ph`
and `NEXT_PUBLIC_LEARN_URL=https://learn.jinnie.ph/`. Both custom hostnames are
verified by Vercel. Learn's HTTPS root, native embed query, course routes,
metadata, worker, and R2-backed media have been checked after deployment.

To publish subsequent releases:

```powershell
pnpm build:learn
# From the sibling app workspace, upload media using its R2 credentials:
pnpm --dir ../jinnie --filter @jinnie/host assets:upload
vercel deploy --prod --scope sumnora
```

DNS now uses Cloudflare (`miki.ns.cloudflare.com`, `rajeev.ns.cloudflare.com`).
Vercel currently requests a DNS-only CNAME `learn` to
`5bb64d0e3282cc0c.vercel-dns-016.com`. Run `vercel domains verify learn.jinnie.ph`
to confirm the current recommendation and HTTPS readiness. Keep the existing
nameservers and unrelated records.
