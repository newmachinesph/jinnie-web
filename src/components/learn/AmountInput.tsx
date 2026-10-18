'use client';

import { useId, useState, type InputHTMLAttributes } from 'react';
import { updateNumericInput } from '@learn/src/numeric-input.js';

export function AmountInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  const [error, setError] = useState('');
  return <><input {...props} type="text" inputMode="decimal" autoComplete="off" maxLength={24}
    aria-describedby={error ? id : undefined}
    onInput={event => setError(updateNumericInput(event.currentTarget, { money: true, required: props.required }))}
    onBlur={event => setError(updateNumericInput(event.currentTarget, { money: true, required: props.required }))} />
    {error && <p id={id} role="alert" className="small text-negative">{error}</p>}</>;
}
