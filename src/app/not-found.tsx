import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background px-4 pt-40 pb-24">
      <section className="container-custom mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-full border-2 border-accent bg-brand text-primary-foreground shadow-xl shadow-brand/20">
          <FileQuestion className="h-9 w-9" aria-hidden="true" />
        </div>
        <p className="mb-4 font-semibold uppercase tracking-widest text-brand">404</p>
        <h1 className="text-5xl font-semibold text-foreground md:text-7xl">Page not found.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          The page you are looking for may have moved, or the address may be incorrect.
        </p>
        <Link href="/" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-brand/20 transition-transform hover:bg-brand/90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </section>
    </main>
  );
}
