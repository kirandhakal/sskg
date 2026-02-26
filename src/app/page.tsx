import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { RoomsSection } from '@/components/sections/RoomsSection';
import { DiningSection } from '@/components/sections/DiningSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <RoomsSection />
      <DiningSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
