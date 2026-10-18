import type { ReactNode } from 'react';

/** Standard page opening: one heading, one lede, nothing above them. */
export function PageHeader({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="site-page-header mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
      <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">{title}</h1>
      {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lede}</p> : null}
      {children}
    </div>
  );
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** A code sample. Plain <pre>, no drawn window chrome. */
export function Code({ children, lang }: { children: string; lang?: string }) {
  return (
    <pre
      data-lang={lang}
      className="site-code overflow-x-auto rounded-card border border-line bg-card p-4 font-mono text-[13.5px] leading-relaxed text-ink"
    >
      <code>{children}</code>
    </pre>
  );
}

/** Body copy for long pages. */
export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`prose max-w-3xl text-[17px] text-ink ${className}`}>{children}</div>;
}
