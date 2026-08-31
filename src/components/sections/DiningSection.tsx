'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import diningData from '@/data/sections/dining.json';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { ShoppingBag, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const DiningSection = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');
    const [cartCount, setCartCount] = React.useState(0);

    const filteredItems = activeCategory === 'All'
        ? diningData.items
        : diningData.items.filter(item => item.category === activeCategory);

    const addToCart = () => {
        setCartCount(prev => prev + 1);
    };

    return (
        <section id="dining" className="py-24 bg-background">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <span className="text-brand font-black tracking-widest uppercase text-xs bg-brand/5 px-4 py-2 rounded-full">
                            {diningData.badge}
                        </span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: smoothEase }}
                            className="text-4xl md:text-6xl font-black text-foreground leading-tight"
                        >
                            {diningData.title.prefix} <span className="text-brand">{diningData.title.highlight}</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {diningData.description}
                        </p>
                    </div>

                    <div className="relative group">
                        <Button variant="outline" className="rounded-2xl flex items-center gap-2 border-border hover:border-brand hover:text-brand transition-all bg-card px-8 py-6 h-auto">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="font-bold">{diningData.cartButtonText}</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-3 -right-3 bg-accent text-white text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center border-4 border-card shadow-xl">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-12">
                    {diningData.categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "rounded-xl px-6 py-2 transition-all duration-300 font-bold",
                                activeCategory === cat
                                    ? "bg-brand text-white shadow-lg shadow-brand/20"
                                    : "bg-card border border-border text-foreground hover:bg-brand/5 hover:text-brand"
                            )}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, delay: index * 0.08, ease: smoothEase }}
                        >
                            <Card className="group h-full flex flex-col border-border shadow-lg shadow-black/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 rounded-3xl overflow-hidden bg-card">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {item.tag && (
                                        <div className="absolute top-4 left-4 bg-accent text-white text-[9px] font-black px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-xl tracking-widest uppercase">
                                            <Star className="w-3 h-3 fill-current" />
                                            {item.tag}
                                        </div>
                                    )}
                                </div>
                                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                                            <span className="text-brand font-black text-lg">Rs.{item.price}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <Button
                                        className="w-full bg-brand hover:bg-brand/90 text-white rounded-xl py-3 h-auto font-bold transition-all shadow-md shadow-brand/20 border-none"
                                        onClick={addToCart}
                                    >
                                        {diningData.addToCartText}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
