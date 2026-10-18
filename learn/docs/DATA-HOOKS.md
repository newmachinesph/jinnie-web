# Data hooks into Jinnie

The standalone build runs on the existing sample data and `localStorage`. Inside Jinnie, every hook below becomes an SDK call. Grants follow the pattern already in `packages/sdk` (for example `wallet:post`).

## Storage

`src/store.js` is one object. Replace `load`/`set` with the SDK store; keep the shape. Nothing in the engine reads `localStorage` directly.

## Wishes and goals

| Engine | Jinnie | Grant |
|---|---|---|
| `addWish` from onboarding or a `keep.action` of kind `wish` | Create a goal in Goals with the wish kind as a tag | `goals:write` |
| `fundWish` (the "Record" button, sample) | Contributions posted to that goal | `goals:read` |
| Granted state | Goal reached; Learn shows the gold moment once | `goals:read` |

## Commitments

Each commitment in `content/commitments.js` names the rule that marks a day. Replace the "Mark today" button with an event subscription.

| Commitment | App | Grant | Rule |
|---|---|---|---|
| record-7 | Wallet | wallet:read | a day with at least one expense record |
| fund-30 | Goals | goals:read | a contribution within two days of a payday |
| bills-30 | Bills | bills:read | a bill settled on or before its due date |
| debt-30 | Debts | debts:read | payments to one debt in the month total ₱2,000 or more |
| check-benefits | none | none | self-reported |

Paydays come from the income pattern Wallet already sees.

## Live numbers in the Do beat

Bites use a ₱20,000 gross and ₱18,300 net reference. Where Jinnie knows the learner's numbers, substitute them before mounting the interaction: net pay from Wallet income, monthly needs from Budget, the current card balance from Credit, the padala amount from Remit. Keep the sample as fallback and label it, as the home screen does now.

## Deep links

`keep.action.kind: 'open'` carries `payload.app`. Map to the host's launcher: `accounts`, `wallet`, `bills`, `budget`, `debts`, `credit`, `remit`, `circles`, `goals`. The delivered launcher calls `window.JinnieLearnHost.openApp(appId)` when the embedding host provides it. It accepts synchronous or asynchronous results; returning `false` means the destination did not open. Without a host adapter, an accessible dialog explains the requirement and the action is not falsely marked completed. Opening an app does not post the lesson figures to that app.

## Drills and reminders

`drill` actions enrol the learner in the weekly scam drill. In Jinnie this is a local notification once a week that opens Practice; the message inside is the drill itself, marked simulated. Reminders for wishes fire on payday morning, the timing with trial evidence.

## Review

`store.review` holds a due date per bite on a doubling schedule (1, 3, 6, 12 days, capped at 60). A daily local notification when five or more are due is enough; do not nag.

## Events

`src/events.js` records aggregate-only events in the store: bite_complete with type and score, drill_done, commitment_started and commitment_marked, wish_added, placement_done, path_check. `summary()` feeds the Activity card in Me. In Jinnie, forward the same names to the SDK analytics; never attach a person.

## Offline

`sw.js` precaches a versioned shell and every content file on first load. Release builds derive the cache revision from content. Narration/video media have a separate cache, opt-in pack downloads and byte-range support for offline seeking. In Jinnie the host's own bundle cache replaces it; keep the content JSON versioned so a stale cache can be invalidated.

## Placement and analytics

Keep the placement result and per-bite scores in the store. Report only aggregates: completion by lesson, average score by interaction type, drill hit rate, commitments completed. Never export a child's data; family-mode paths write nothing outside the device.

## Content delivery

Ship each path as JSON on the CDN beside the app bundles (`learn/<path>.json`, with a manifest and a version). The engine loads paths dynamically already (`content/index.js`), so a network fetch with an on-device cache replaces the static import with no other change.
