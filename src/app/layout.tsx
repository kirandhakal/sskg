import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

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

export const metadata: Metadata = {
  title: 'Syangja Khaja Ghar | Authentic Nepali Cuisine & Hospitality',
  description: 'Experience authentic Nepali taste and traditional dishes at Syangja Khaja Ghar in Kawasoti, Nawalpur.',
  keywords: 'Syangja Khaja Ghar, Syangja Sundar, Kawasoti Restaurant, Nepali Cuisine, Khaja Ghar Nepal',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased text-foreground bg-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
