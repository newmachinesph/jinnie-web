/** Keep editing precision (including a trailing dot/zero) while grouping digits. */
export function formatNumericText(value) {
  const [whole, fraction] = value.split('.');
  return whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (fraction === undefined ? '' : `.${fraction}`);
}

export function parseNumericText(value) {
  const text = String(value ?? '').trim();
  if (!/^-?(?:(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?|\.\d+)$/.test(text)) return NaN;
  const number = Number(text.replace(/,/g, ''));
  return Number.isFinite(number) && Math.abs(number) < 1e12 ? number : NaN;
}

export function updateNumericInput(input, {money = false, signed = false, required = false} = {}) {
  const value = input.value;
  const raw = value.replace(/,/g, '');
  const pattern = money ? /^\d*(?:\.\d{0,2})?$/ : signed ? /^-?\d*(?:\.\d*)?$/ : /^\d*(?:\.\d*)?$/;
  let error = '';
  if (!raw && required) error = 'Enter an amount.';
  else if (raw && (!pattern.test(raw) || !Number.isFinite(parseNumericText(raw)))) error = money ? 'Enter a number with up to 2 decimal places, below 1 trillion.' : 'Enter a valid number below 1 trillion.';
  else if (money && raw && Number(raw) <= 0) error = 'Enter an amount greater than zero.';
  input.setCustomValidity(error);
  if (error) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
  if (pattern.test(raw)) {
    const position = input.selectionStart ?? value.length;
    const before = value.slice(0, position).replace(/,/g, '').length;
    const formatted = formatNumericText(raw);
    input.value = formatted;
    let caret = 0, seen = 0;
    while (caret < formatted.length && seen < before) { if (formatted[caret] !== ',') seen++; caret++; }
    input.setSelectionRange(caret, caret);
  }
  return error;
}
