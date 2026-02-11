import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutSection } from '@/components/sections/AboutSection';

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24">
            <Header />
            <div className="py-12 bg-muted/30">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Learn about our journey from a local khaja ghar to a renowned destination for hospitality and traditional Nepali cuisine.
                    </p>
                </div>
            </div>
            <AboutSection />
            <Footer />
        </main>
    );
}
