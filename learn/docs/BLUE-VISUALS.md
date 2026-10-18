# Blue and gold visual pass

Completed 10 September 2026. This direction supersedes the earlier violet palette notes. Product copy, English and Taglish course files, and learning logic are preserved.

## Delivered assets

- `assets/characters/jinnie.png`: final blue Jinnie character, edited with the built-in image generation tool. Her existing adult girl-genie identity, face, long black hair, pose and gold 金 lamp are preserved. The image has a pale background, intentionally presented as an illustration panel in dark mode.
- `assets/illustrations/*.svg`: 27 reusable illustrations: 20 colored financial-concept drawings, Jinnie, and six life-stage compositions. The character export embeds the PNG for portability.
- `assets/icons/*.svg`: 14 exported icons, including the lamp and refined Jinnie portrait glyph.
- `assets/logo.svg` and `assets/icon.svg`: blue brand mark and app icon. 金 is drawn with paths in vector marks so it works offline without a CJK font.
- `assets/visual-assets.svg`: the full illustration contact sheet.
- `docs/visual-review/blue-*.png`: screenshots of the rendered artwork and app.

Original SDK palette restored: primary `#4338CA`, deep blue `#312E81`, night `#1E1B4B`; restrained gold `#D4AF37`. Dark mode uses periwinkle `#A5B4FC` on navy surfaces.

The existing vector library now has colored plates beneath its ink strokes. Animations only draw the ink layer. The six path illustrations appear alongside the existing video brief text; they are static artwork, not produced videos. Message simulations retain selectable HTML text and their existing simulated-message labels. Progress lamps, certificate cards, navigation icons and Keep-beat artwork share the palette.

Regenerate standalone vector exports with `node scripts/export-visual-assets.mjs`. Rebuild the stylesheet with `npm run css`. The service-worker asset version is `jinnie-learn-blue-gold-v7`.

## Verification

- 9 existing tests pass; content linter passes 48 lessons and 255 bites.
- All 516 course illustration references resolve.
- All 13 content files, `src/i18n.js` and `src/store.js` match their pre-edit SHA-256 hashes.
- 128 before/after rendered-text comparisons across English/Taglish, 320px/390px widths, light/dark modes: no changed text or horizontal overflow. Screens include Wishes, onboarding, paths, all six path introductions, Me, and one lesson Hook per path.
- Character, concept library, six path compositions, all icons, and five lamp progress states visually reviewed in Chromium through Argent. Message simulation visually reviewed using its real interaction renderer.
- The graph MCP connection was unavailable; source inspection and runtime checks were used.

## Final image prompt

Mode: built-in image generation, edit of the existing `assets/characters/jinnie.png`; copied into the project after generation. Native SVG artwork and icons were edited directly.

Use case: precise-object-edit. Asset: final Jinnie financial-literacy app character. Edit this exact existing illustration to restore the ORIGINAL BLUE-INDIGO brand, with restrained warm gold. Preserve the exact adult girl-genie character identity inspired by BLACKPINK Jennie, face, long black hair, expression, natural hands, modest blouse, pose, composition, smoke curl and lamp silhouette. Change violet/purple clothing, ribbon, smoke and lamp to BLUE-INDIGO #4338CA, deep midnight BLUE #312E81, soft periwinkle #C7D2FE and icy blue #EEF2FF. The result must read blue, not purple or violet. Keep fine gold piping and clasp #D4AF37, and the exact correct Chinese character 金 in gold on the lamp, with its thin gold rim. Black hair and natural skin remain unchanged. Make the background a uniform pale #F7F7FB. Keep full head-to-lamp composition, generous clear margin and all sparkles inside canvas. Polished 2D editorial illustration, no extra text, no watermark. This is a palette correction of the supplied asset, preserve her identity and all anatomy.
