'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, type ReactNode } from 'react';
import { illo, lamp } from '@learn/assets/illustrations.js';
import { icons } from '@learn/src/ui.js';
import { dispose } from '@learn/src/lifecycle.js';
import { u } from '@learn/src/i18n.js';
import { useLearn } from './LearnProvider';

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const svg = icons[name as keyof typeof icons] || icons.lamp;
  return <span className={`learn-icon ${className}`} aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
}
export function Illustration({ id, className = '', progress }: { id: string; className?: string; progress?: number }) {
  if (id === 'jinnie') return <div className={`learn-illustration ${className}`} aria-hidden="true"><Image src="/learn-assets/characters/jinnie.png" alt="" width={512} height={512} priority unoptimized sizes="(max-width: 640px) 160px, 280px" /></div>;
  const markup = progress === undefined ? illo(id, { className: 'w-full' }) : lamp(progress, { granted: progress >= 1 });
  return <div className={`learn-illustration ${className}`} aria-hidden="true" dangerouslySetInnerHTML={{ __html: markup }} />;
}
export function Progress({ value, label }: { value: number; label?: string }) {
  const percent = Math.round(Math.min(1, Math.max(0, value || 0)) * 100);
  return <div className="bar" role="progressbar" aria-label={label || u('progress')} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}><span style={{ width: `${percent}%` }} /></div>;
}
export function Back({ route = 'paths' }: { route?: string }) {
  const { href } = useLearn();
  return <Link href={href(route)} className="learn-back"><Icon name="back" />{u('back')}</Link>;
}
export function Section({ title, children }: { title?: string; children: ReactNode }) {
  return <section className="learn-section">{title && <h2 className="eyebrow">{title}</h2>}{children}</section>;
}
/** Isolate existing exercise/export widgets; React owns the surrounding route. */
export function Widget({ create, revision = '', className = '' }: { create: () => Node | null; revision?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const factory = useRef(create);
  useEffect(() => { factory.current = create; });
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const node = factory.current();
    if (node) host.appendChild(node);
    return () => { dispose(host); host.replaceChildren(); };
  }, [revision]);
  return <div ref={ref} className={className} />;
}
