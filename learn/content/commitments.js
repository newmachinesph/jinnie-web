// Commitments: real actions Jinnie can verify. In this prototype the user marks a day by hand.
// Replace: each `hook` names the Jinnie app and SDK grant that would mark the day automatically. See docs/DATA-HOOKS.md.
export const commitments = {
  'record-7': {
    id: 'record-7', days: 7,
    title: { en: 'Record every expense for 7 days', tl: 'I-record ang bawat gastos sa loob ng 7 araw' },
    hint: { en: 'A day counts when at least one expense is posted in Wallet.', tl: 'Bilang ang araw kapag may kahit isang gastos na na-post sa Wallet.' },
    hook: { app: 'wallet', grant: 'wallet:read', rule: 'day has ≥1 expense record' },
  },
  'fund-30': {
    id: 'fund-30', days: 2,
    title: { en: 'Fund a wish on the next two paydays', tl: 'Pondohan ang isang wish sa susunod na dalawang payday' },
    hint: { en: 'Counts when a transfer into a wish is recorded on a payday.', tl: 'Bilang kapag may transfer sa isang wish na na-record sa payday.' },
    hook: { app: 'goals', grant: 'goals:read', rule: 'contribution posted within 2 days of a payday' },
  },
  'bills-30': {
    id: 'bills-30', days: 4,
    title: { en: 'Pay every bill before its due date this month', tl: 'Bayaran ang bawat bill bago ang due date ngayong buwan' },
    hint: { en: 'Each bill settled on or before its due date counts as one.', tl: 'Bawat bill na na-settle bago o sa due date ay isang bilang.' },
    hook: { app: 'bills', grant: 'bills:read', rule: 'bill settledAt ≤ dueAt' },
  },
  'debt-30': {
    id: 'debt-30', days: 1,
    title: { en: 'Bring one debt down by ₱2,000 this month', tl: 'Bawasan ang isang utang ng ₱2,000 ngayong buwan' },
    hint: { en: 'Counts when a payment of ₱2,000 or more is posted against one debt.', tl: 'Bilang kapag may bayad na ₱2,000 o higit sa isang utang.' },
    hook: { app: 'debts', grant: 'debts:read', rule: 'sum of payments to one debt in month ≥ 2000' },
  },
  'check-benefits': {
    id: 'check-benefits', days: 2,
    title: { en: 'Check my SSS and PhilHealth records', tl: 'Tingnan ang SSS at PhilHealth records ko' },
    hint: { en: 'Log in to My.SSS and the PhilHealth member portal. Confirm your employer’s contributions are posted.', tl: 'Mag-log in sa My.SSS at PhilHealth member portal. Tiyaking naka-post ang contributions ng employer mo.' },
    hook: { app: null, grant: null, rule: 'self-reported; two checks' },
  },
};
