'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
        <section id="about" className="py-24 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1551882547-ff43c63efe81?auto=format&fit=crop&q=80&w=800"
                                alt="Hotel Architecture"
                                className="w-full h-[600px] object-cover"
                            />
                        </motion.div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0" />
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="absolute -bottom-8 -left-8 bg-background border border-border p-8 rounded-2xl shadow-xl z-20 hidden md:block"
                        >
                            <div className="text-4xl font-bold text-primary mb-1">15k+</div>
                            <div className="text-muted-foreground font-medium">Happy Guests Served</div>
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Legacy</span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                A Family Tradition of Excellence and Taste
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Founded with a passion for Syangja's rich culinary heritage, Syangja Sundar evolved from a small khaja ghar into a premier destination for travelers and food lovers alike.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We believe that hospitality is not just about a comfortable bed, but about creating memories through taste, touch, and tradition.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="bg-accent/10 p-1.5 rounded-full">
                                        <Check className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="font-medium text-primary/80 dark:text-foreground/80">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                                Read Our Full Story
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
