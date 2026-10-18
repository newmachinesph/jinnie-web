# Compliance and safety

## Children and teens

- **App stores**: an app that targets children falls under Google Play's Families policy and Apple's Kids Category, which restrict data collection, ads and third-party SDKs for the whole app. Jinnie is a finance app for adults. Keep the kids and teens paths behind family mode under the parent's login, and consider shipping them as a separate family app if they grow. Never let the main app declare children as a target audience.
- **Data Privacy Act of 2012**: personal data of a minor is processed only with a parent's or guardian's consent. Family mode collects nothing beyond on-device progress; keep it that way.
- Content rules for these paths are in `content/schema.md`: no credit, no investing products, no real accounts, and every action is parent-facing.
- The age band is the first question in the app, before any wish or quiz, so a child never sees adult wording. Choosing 7 to 12 or 13 to 17 turns family mode on and adds a "sit with a parent" line to onboarding and placement.

## Financial education, not advice

The course explains public instruments (SSS, PhilHealth, Pag-IBIG MP2, retail treasury bonds, PERA) and how to read offers. It does not recommend a specific insurer, fund, bank or broker. Keep it that way, and mark illustrative figures as illustrative. Add a plain disclaimer in Me: education, not personal financial advice.

## Fraud simulations

Scam drills and `spot` interactions show fake messages. They now carry a "Simulated message" chip on screen; keep it, never send them as real notifications that could be mistaken for a bank alert, and never use a real institution's exact branding in a way that could be screenshot and reused.

## No cash rewards

Recognition, competencies and a certificate only. Cash or prize rewards invite fraud and may draw promotions regulation.

## Accessibility

Targets at least 44 px, contrast at WCAG AA on both themes, captions for all voice and video, `prefers-reduced-motion` respected, a larger-text setting, everything operable by tap alone. The retired path keeps sentences short for large print.

## Brand rules that double as safety

No shame about debt or spending. No exclamation marks. No emoji. Gold only when a wish is granted. These keep the product calm for people who arrive stressed about money.
