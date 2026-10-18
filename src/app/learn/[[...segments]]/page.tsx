import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LearnApp from '@/components/learn/LearnApp';
import { findPath, findLesson, findBite } from '@learn/content/index.js';

type Props = { params: Promise<{ segments?: string[] }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segments = [] } = await params;
  const [route, id] = segments;
  const title = route === 'path' ? findPath(id)?.title.en : route === 'lesson' ? findLesson(id)?.lesson.title.en : route === 'bite' ? findBite(id)?.bite.title.en : undefined;
  return { title: title ? `${title} · Jinnie Learn` : 'Jinnie Learn', alternates: { canonical: `https://learn.jinnie.ph/${segments.join('/')}` }, robots: { index: !['me', 'onboard', 'placement'].includes(route), follow: true } };
}
export default async function Page({ params }: Props) {
  const { segments = [] } = await params;
  const [route, id] = segments;
  const valid = segments.length === 0 || (segments.length === 1 && ['onboard', 'placement', 'paths', 'practice', 'me'].includes(route)) || (segments.length === 2 && ((route === 'placement' && id === 'age') || (route === 'path' && findPath(id)) || (route === 'lesson' && findLesson(id)) || (route === 'bite' && findBite(id))));
  if (!valid) notFound();
  return <LearnApp segments={segments} />;
}
