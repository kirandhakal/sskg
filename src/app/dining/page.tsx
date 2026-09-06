import { DiningSection } from '@/components/sections/DiningSection';
import { pagesData } from '@/data/sections';

export default function DiningPage() {
    const { hero } = pagesData.dining;

    return (
        <main className="min-h-screen pt-24">
            <div className="py-12 bg-muted/30">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{hero.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        {hero.description}
                    </p>
                </div>
            </div>
            <DiningSection />
        </main>
    );
}
