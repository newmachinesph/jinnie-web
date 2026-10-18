# Android direct download

The download page reads `src/lib/android-release.json`. The APK itself is checked into `public/downloads`; Vercel serves it directly from the biz site with Android package MIME type and attachment disposition. The filename includes the version, build date and checksum prefix so a replacement build gets a new URL.

## Current artifact

- Version: 1.0.0 (version code 1), built 17 September 2026.
- Source: sibling `jinnie` repository, `packages/host/android/app/build/outputs/apk/release/app-release.apk`.
- Build: forced `:app:createBundleReleaseJsAndAssets --rerun-tasks --no-daemon`, then `:app:assembleRelease --no-daemon`, with `NODE_ENV=production` and `JINNIE_CDN=https://sdk.jinnie.ph`.
- Manifest: `com.jinnie.app`, minimum API 24 (Android 7.0), target API 36; arm64-v8a, armeabi-v7a, x86 and x86_64.
- Size: 93,880,859 bytes.
- SHA-256: `0becf3cd6fdcbd2fc95358cfa3205252321442fc6178424e4b3b14ccd101e453`.
- Signing: existing generated **Android development key**, certificate SHA-256 `fac61745dc0903786fb9ede62a962b399f7348f0bb6f899b8332667591033b9c`. This is a pre-release distribution, not a store-signed production release. A future signing migration needs an explicit update/data-migration plan.

The signature and manifest were checked with Android build tools. An in-place `adb install -r` succeeded on the attached vivo V2205 running Android 14, preserving existing app data. The public page lists the manifest's minimum Android version; older Android versions have not been device-tested here.

For a later release, rebuild first, verify the signature/manifest, copy the APK to a new filename under `public/downloads`, and update the release JSON from that exact file's size and SHA-256. Verify the deployed response headers and hash against the local artifact. Do not publish a debug variant or overwrite an existing versioned download with different bytes.
