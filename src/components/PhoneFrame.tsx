import Image from 'next/image';
import { getApp } from '@/lib/apps';

export type ScreenKind = 'home' | 'launcher' | string;

/** Unmodified Android device captures; provenance is in public/screens/README.md. */
export function PhoneFrame({
  screen,
  width = 300,
  className = '',
  caption,
  priority = false,
}: {
  screen: ScreenKind;
  width?: number;
  className?: string;
  caption?: string;
  priority?: boolean;
}) {
  const label = screen === 'home' ? 'Home' : screen === 'launcher' ? 'launcher' : getApp(screen)?.name ?? screen;
  const alt = screen === 'learn'
    ? 'Jinnie Learn on Android, showing the age-based welcome screen'
    : `Jinnie ${label} on Android, using the Reyes sample household`;

  return (
    <figure className={`real-app-frame mx-auto ${className}`} style={{ width }}>
      <Image
        src={`/screens/${screen}.png`}
        alt={alt}
        width={488}
        height={1088}
        sizes={`${width}px`}
        priority={priority}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
