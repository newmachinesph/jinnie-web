# Finlit visual assets

The app now uses 20 vector illustrations and a generated Jinnie character in `assets/artwork.js`, through the existing `illo()` API. All lesson IDs and written content are preserved. The vector drawings use the established 120-unit grid, rounded strokes, theme colours and CSS draw-in animation. The revised Jinnie character uses a generated PNG on a pale illustration panel.

The lamp carries 金 (jīn), as requested by the brand owner. Its glyph is drawn with paths so it remains available offline without depending on a Chinese font. The header, Wishes icon, favicon, full lamp illustration and progress lamps share this identity. The latest owner direction makes violet dominant, with restrained gold on the lamp glyph and character details as well as granted wishes. Jinnie is a calm woman guide; the navigation controls retain the existing stroke style.

## Reusable files

- `assets/illustrations/*.svg`: 21 individual illustrations.
- `assets/icons/*.svg`: the 14-icon set, including the updated lamp and a new Jinnie glyph.
- `assets/logo.svg`: the full lamp mark with 金.
- `assets/icon.svg`: the violet app/favicon tile.
- `assets/visual-assets.svg`: an overview of the illustration set.

Regenerate the exports with `node scripts/export-visual-assets.mjs`. The app consumes the same source drawings, avoiding separate versions of the art. The concept illustrations are native SVG assets, preserving theme inheritance and stroke animation. The Jinnie character is a generated raster illustration, embedded in standalone SVG exports for portability; see `assets/characters/PROVENANCE.md`.

The service worker caches the new artwork module and reloads shell resources when installing an asset update. Each progress lamp has a unique clipping ID so multiple wishes can render together.

Validation: 9 existing tests pass; 48 lessons and 255 bites pass the content linter. All 13 files under `content/` match their pre-edit SHA-256 hashes. All 516 course illustration references resolve. The complete illustration set was visually reviewed, and its SVG bounds stay within the canvas.
