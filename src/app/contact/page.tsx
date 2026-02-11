import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24">
            <Header />
            <div className="py-12 bg-muted/30">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        We're here to assist you. Reach out for reservations, inquiries, or just to say Namaste.
                    </p>
                </div>
            </div>
            <ContactSection />
            <Footer />
        </main>
    );
}
