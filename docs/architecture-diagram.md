# How It Works diagram

Design guidance: [Cathryn Lavery's diagram-design skill](https://github.com/cathrynlavery/diagram-design/blob/main/skills/diagram-design/SKILL.md), architecture reference and doc-inline layout. Integrated into the existing Next.js page rather than delivered as a separate document.

## Brand mapping

Use the existing Jinnie CSS variables; do not introduce another font download or independent palette.

| Diagram role | Existing site source | Light value |
| --- | --- | --- |
| Canvas | `--surface` | `#f7f7fb` |
| Node fill | `--card` | `#ffffff` |
| Ink | `--ink` | `#111827` |
| Secondary text and connections | `--muted` | `#6b7280` |
| Focal stroke | `--primary` | `#4338ca` |
| Focal fill | `--tone-indigo-bg` | `#eef2ff` |
| Border | `--line` | `#e4e4ed` |
| Host | `--night` / `--on-night` | `#1e1b4b` / `#ffffff` |

Dark mode resolves through the same existing variables. Diagram labels inherit the site's exact `--font-sans` stack; package names and the SDK hostname inherit `--font-mono`. The heading inherits the marketing site's `--site-display` stack. These are system-font stacks, so the resolved face varies by operating system. No skill default fonts are added.

## Layout and meaning

- Desktop: six components on a 960 × 600 canvas, five independently routed connections, two indigo focal components. Group app names instead of drawing a box for each app.
- Below 768px: the same group data renders as semantic HTML with a vertical host/SDK flow and an indented list of SDK relationships. No horizontal scrolling or miniature SVG labels.
- Solid arrows indicate what a layer supplies, not the direction of every read/write operation.
- Finance shares the ledger. Learn's course progress is separate. Community apps receive scoped storage and can receive limited Wallet posting through explicit grants. This is an API contract, not an operating-system security boundary.
- Security and Settings are summarized in the caption, keeping the main diagram below the complexity budget. Settings is not counted in the launcher.

## Verification

Production build and ESLint pass. The skill's accessible-SVG self-check and label-mask geometry check pass against the SVG extracted from the built page. Desktop SVGs were rendered and inspected in light and dark themes using local Segoe UI/Consolas; mobile content and layout were inspected in Chrome on the attached Android phone. Desktop browser computed-font inspection was not available.
