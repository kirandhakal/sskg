import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { RoomsSection } from '@/components/sections/RoomsSection';
import { DiningSection } from '@/components/sections/DiningSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <RoomsSection />
      <DiningSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
