'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const AboutSection = () => {
    const highlights = [
        '25+ Years of Tradition',
        'Authentic Syangja Recipes',
        'Modern Luxury Amenities',
        'Prime Location in Kawasoti',
        'Eco-friendly Practices',
        'Award-winning Service'
    ];

    return (
        <section id="about" className="py-24 bg-background overflow-hidden text-foreground">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Hotel exterior"
                                className="w-full h-[600px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-0" />
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl -z-0" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="absolute -bottom-10 -left-10 bg-card p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-border"
                        >
                            <span className="text-4xl font-black text-brand block mb-1">25+</span>
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Years of Hospitality</span>
                        </motion.div>
                    </motion.div>

                    <div className="space-y-10">
                        <div className="space-y-6">
                            <span className="text-brand font-black tracking-widest uppercase text-xs bg-brand/5 px-4 py-2 rounded-full">OUR STORY</span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black text-primary leading-tight"
                            >
                                Family Tradition, <span className="text-brand">Global</span> Standards
                            </motion.h2>
                            <p className="text-muted-foreground text-xl leading-relaxed">
                                Founded in the heart of Nawalpur, Syangja Sundar has grown from a humble eatery to a cornerstone of hospitality in the region.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We believe in the power of authentic connection—whether it's through a perfectly brewed cup of tea or a restful night in our executive suites.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-4 bg-muted/30 p-4 rounded-2xl hover:bg-brand/5 transition-colors group"
                                >
                                    <div className="bg-brand/10 p-2 rounded-xl group-hover:bg-brand transition-colors">
                                        <Check className="w-5 h-5 text-brand group-hover:text-white" />
                                    </div>
                                    <span className="font-bold text-primary">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Button size="lg" className="rounded-2xl px-10 py-6 h-auto font-black shadow-xl shadow-brand/10 transition-all hover:scale-105">
                                Read Our Full Story
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
