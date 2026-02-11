import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RoomsSection } from '@/components/sections/RoomsSection';

export default function RoomsPage() {
    return (
        <main className="min-h-screen pt-24">
            <Header />
            <div className="py-12 bg-muted/30">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Accommodations</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Discover our range of comfortable rooms designed to provide you with the best resting experience in Syangja.
                    </p>
                </div>
            </div>
            <RoomsSection />
            <Footer />
        </main>
    );
}
