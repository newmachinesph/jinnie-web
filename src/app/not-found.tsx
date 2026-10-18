import Link from 'next/link';
import { Container } from '@/components/Page';

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-4xl font-bold text-ink">Not found.</h1>
      <p className="mt-4 max-w-md text-lg text-muted">There is nothing at this address. The apps and the guides are one step away.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex h-11 items-center rounded-control bg-primary px-5 font-semibold text-white">Home</Link>
        <Link href="/apps" className="inline-flex h-11 items-center rounded-control border border-line bg-card px-5 font-semibold text-ink">Apps</Link>
      </div>
    </Container>
  );
}
