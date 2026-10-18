/** One place for every value that changes when the domain or contact does. */
export const site = {
  name: 'Jinnie',
  tagline: 'Wealth, in order.',
  description:
    'Offline-first personal finance for Android. Money tools and financial learning in one shell, with every record kept on your device. Start Learn in your browser too.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jinnie.ph',
  learnUrl: process.env.NEXT_PUBLIC_LEARN_URL ?? 'https://learn.jinnie.ph/',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@jinnie.ph',
  googleAnalyticsId: 'G-FMBT4CHHBW',
  privacyUpdated: '17 September 2026',
  legalEntity: process.env.NEXT_PUBLIC_LEGAL_ENTITY ?? 'Jinnie',
  jurisdiction: 'the Republic of the Philippines',
  legalUpdated: '5 September 2026',
} as const;
