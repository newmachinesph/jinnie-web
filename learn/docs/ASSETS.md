# Finished assets

The former replacement list is superseded by the delivered assets below. Authored production briefs remain in the course source for future editorial use.

| Asset | Delivered files / implementation |
|---|---|
| Jinnie | `assets/characters/jinnie.png`: girl genie, black hair, blue outfit and smoke, gold details and 金 lamp; generated from the existing character reference with the imagegen tool |
| Illustrations | `assets/artwork.js`, `assets/illustrations.js`: 20 financial concepts, character and six age-path scenes; editable SVG strokes and blue/gold fill plates |
| Exported artwork | `assets/illustrations/`: standalone SVG files exported by `scripts/export-visual-assets.mjs` |
| Icons | `src/ui.js`: 14 stroke icons; `assets/icon.svg`, `assets/icon-192.png`, `assets/icon-512.png` for browser/install use |
| Narration | `assets/audio/manifest.json` and 1,914 MP3 clips, deduplicated by language and exact normalized source text |
| Video | `assets/video/`: 12 localized MP4s, 12 WebVTT caption files, twelve localized posters and a manifest |
| Animation | Small CSS/SVG concept animations and lamp progress, respecting reduced-motion preferences |
| Scam messages | Accessible, selectable simulated message cards in `src/interactions.js`; source words and suspicious-line explanations preserved |
| Certificate | `src/certificate.js`: downloadable blue/gold SVG containing the actual path competencies and a local record code |

## Narration and video production

The clips use synthesized female voices: `en-PH-RosaNeural` for English and `fil-PH-BlessicaNeural` for Taglish. Generated with [edge-tts](https://github.com/rany2/edge-tts), which connects to Microsoft's online speech service. They are synthesized narration, not recordings of a human performer. No music or sound effects were added.

Every video is a 45-second motion-illustration sequence assembled from the existing path introduction, first Hook and first Keep text. It contains project artwork, synthesized narration and timed captions. These are finished illustrated alternatives to the live-action ideas in the original production briefs, not filmed footage.

`prepare-media.mjs` creates the source jobs; `generate-narration.py` generates clips and word timings; `render-media-art.mjs` renders native SVG artwork and install icons; `generate-videos.py` composes and encodes the videos. All media decoded successfully during validation. Pronunciation and editorial suitability have not had a separate human listening review.

## Brand

Original indigo-blue remains primary (`#4338CA`, deep `#312E81`), with gold (`#D4AF37`) for the lamp and highlights. Jinnie is an original illustrated character with the requested Jennie-inspired fashion direction. The character is not presented as a celebrity endorsement. See `BLUE-VISUALS.md` for the visual pass and generation prompt.

## Certificate meaning

The certificate lists the competencies authored for the completed path. Its code identifies a local completion record; it does not claim server verification, accreditation or a professional qualification.
