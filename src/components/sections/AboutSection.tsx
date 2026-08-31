'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import aboutData from '@/data/sections/about.json';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-background overflow-hidden text-foreground">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutData.image.src}
                                alt={aboutData.image.alt}
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
                            <span className="text-4xl font-black text-brand block mb-1">{aboutData.experienceBadge.value}</span>
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{aboutData.experienceBadge.label}</span>
                        </motion.div>
                    </motion.div>

                    <div className="space-y-10">
                        <div className="space-y-6">
                            <span className="text-brand font-black tracking-widest uppercase text-xs bg-brand/5 px-4 py-2 rounded-full">{aboutData.badge}</span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black text-primary leading-tight"
                            >
                                {aboutData.title.prefix} <span className="text-brand">{aboutData.title.highlight}</span> {aboutData.title.suffix}
                            </motion.h2>
                            {aboutData.paragraphs.map((para, idx) => (
                                <p key={idx} className={`text-muted-foreground leading-relaxed ${idx === 0 ? 'text-xl' : 'text-lg'}`}>
                                    {para}
                                </p>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {aboutData.highlights.map((item, index) => (
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
                            <Link href="/about">
                                <Button size="lg" className="rounded-2xl px-10 py-6 h-auto font-black shadow-xl shadow-brand/10 transition-all hover:scale-105">
                                    {aboutData.cta.text}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
