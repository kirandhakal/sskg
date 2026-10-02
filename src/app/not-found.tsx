import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { getPageSections } from '@/lib/cms';

export default async function NotFound() {
  const sections = await getPageSections('not-found');
  const section = sections.find(section => section.type === 'sskg-not-found');
  if (!section || section.type !== 'sskg-not-found') return null;
  const notFoundData = section.data;
  return (
    <main className="min-h-screen bg-background px-4 pt-32 pb-20 md:pt-36">
      <section className="container-custom grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-lg lg:order-1">
          <Image
            src={notFoundData.illustration.base.src}
            alt={notFoundData.illustration.base.alt}
            width={1024}
            height={1024}
            unoptimized
            priority
            className="h-auto w-full translate-y-8 md:translate-y-12"
          />
          <Image
            src={notFoundData.illustration.floatingFood.src}
            alt={notFoundData.illustration.floatingFood.alt}
            width={1024}
            height={1024}
            unoptimized
            priority
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full animate-[food-fall_2.8s_cubic-bezier(0.45,0,0.55,1)_infinite]"
          />
        </div>
        <div className="mx-auto max-w-xl text-center lg:order-2 lg:mx-0 lg:text-left">
          <p className="mb-4 font-semibold uppercase tracking-widest text-brand">{notFoundData.code}</p>
          <h1 className="text-5xl font-semibold text-foreground md:text-7xl">{notFoundData.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{notFoundData.description}</p>
          <Link href={notFoundData.action.href} className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-brand/20 transition-transform hover:bg-brand/90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {notFoundData.action.label}
        </Link>
        </div>
      </section>
    </main>
  );
}
