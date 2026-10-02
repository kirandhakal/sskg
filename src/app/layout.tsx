import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getPageSections } from '@/lib/cms';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const sections = await getPageSections('shared');
  const section = sections.find(section => section.type === 'sskg-metadata');
  if (!section || section.type !== 'sskg-metadata') return {};
  const { title, description, keywords, icon } = section.data;
  return { title, description, keywords, icons: { icon, shortcut: icon, apple: icon } };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = await getPageSections('shared');
  const header = sections.find(section => section.type === 'sskg-header');
  const footer = sections.find(section => section.type === 'sskg-footer');
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased text-foreground bg-background`}>
        <Providers>
          {header?.type === 'sskg-header' && <Header data={header.data} />}
          {children}
          {footer?.type === 'sskg-footer' && <Footer data={footer.data} />}
        </Providers>
      </body>
    </html>
  );
}
