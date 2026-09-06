import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
import { pagesData } from '@/data/sections';

export default function ContactPage() {
    const { hero } = pagesData.contact;

    return (
        <main className="min-h-screen pt-24">
            <Header />
            <div className="py-12 bg-muted/30">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{hero.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        {hero.description}
                    </p>
                </div>
            </div>
            <ContactSection />
            <Footer />
        </main>
    );
}
