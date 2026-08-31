'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/Button';
import heroData from '@/data/sections/hero.json';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-background">
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-2xl"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-semibold text-sm mb-6 uppercase tracking-wider">
                        {heroData.badge}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-primary leading-[1.05] mb-8">
                        {heroData.title.prefix} <span className="text-brand">{heroData.title.highlight}</span> <br className="hidden md:block" /> {heroData.title.suffix}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                        {heroData.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link href={heroData.primaryCta.href}>
                            <Button size="lg" className="rounded-full px-10 py-7 text-lg shadow-2xl shadow-brand/20">
                                {heroData.primaryCta.text}
                            </Button>
                        </Link>
                        <Link href={heroData.secondaryCta.href}>
                            <Button variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg">
                                {heroData.secondaryCta.text}
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-16 flex items-center space-x-8">
                        {heroData.stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center space-x-8">
                                <div>
                                    <div className="text-3xl font-serif text-primary">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                                </div>
                                {idx < heroData.stats.length - 1 && <div className="w-px h-10 bg-border" />}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-[4/5]">
                        <img
                            src={heroData.image.src}
                            alt={heroData.image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-0" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0" />

                    {heroData.floatingCards[0] && (
                        <div className="absolute top-20 -left-12 bg-card p-6 rounded-3xl shadow-2xl z-20 animate-bounce-slow">
                            <div className="bg-brand/10 p-3 rounded-2xl mb-3 flex items-center justify-center">
                                <span className="text-2xl">{heroData.floatingCards[0].icon}</span>
                            </div>
                            <div className="text-sm font-bold text-primary">{heroData.floatingCards[0].label}</div>
                        </div>
                    )}

                    {heroData.floatingCards[1] && (
                        <div className="absolute bottom-20 -right-12 bg-card p-6 rounded-3xl shadow-2xl z-20 animate-float">
                            <div className="bg-highlight/10 p-3 rounded-2xl mb-3 flex items-center justify-center">
                                <span className="text-2xl">{heroData.floatingCards[1].icon}</span>
                            </div>
                            <div className="text-sm font-bold text-primary">{heroData.floatingCards[1].label}</div>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/[0.02] -z-0" />
        </section>
    );
};
