'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 scale-105 animate-slow-zoom"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container-custom relative z-10 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-white font-medium mb-6 backdrop-blur-sm">
                        Welcome to Syangja Sundar
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                        Authentic Hospitality In The Heart of <span className="text-highlight">Nawalpur</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                        Experience the perfect blend of traditional Nepali warmth and modern luxury at our hotel and restaurant.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="text-lg bg-primary hover:bg-primary-light">Reserve Your Room</Button>
                        <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white/10">
                            Explore Our Menu
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
};
