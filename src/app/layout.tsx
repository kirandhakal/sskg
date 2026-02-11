import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Syangja Sundar Hotel & Khaja Ghar | Authentic Nepali Hospitality',
  description: 'Experience the perfect blend of traditional Nepali warmth and modern luxury at Syangja Sundar Hotel & Restaurant in Kawasoti, Nawalpur.',
  keywords: 'Syangja Sundar, Hotel Nawalpur, Nepali Cuisine, Khaja Ghar, Kawasoti Hotel, Luxury Accommodation Nepal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-foreground bg-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
