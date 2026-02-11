import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DiningSection } from '@/components/sections/DiningSection';

export default function DiningPage() {
    return (
        <main className="min-h-screen pt-24">
            <Header />
            <div className="py-12 bg-muted/30">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Syangja Sundar Khaja Ghar</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Experience the authentic taste of Syangja region with our meticulously prepared traditional dishes and modern snacks.
                    </p>
                </div>
            </div>
            <DiningSection />
            <Footer />
        </main>
    );
}
