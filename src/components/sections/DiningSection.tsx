'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { menuItems, categories } from '@/data/mock-data';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { ShoppingBag, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export const DiningSection = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');
    const [cartCount, setCartCount] = React.useState(0);

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    const addToCart = () => {
        setCartCount(prev => prev + 1);
    };

    return (
        <section id="dining" className="py-24 bg-background">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <span className="text-brand font-black tracking-widest uppercase text-xs bg-brand/5 px-4 py-2 rounded-full">AUTHENTIC FLAVORS</span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-black text-primary leading-tight"
                        >
                            The Taste of <span className="text-brand">Syangja</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Our kitchen is a celebration of heritage. Every dish is a journey through the traditional recipes passed down through generations.
                        </p>
                    </div>

                    <div className="relative group">
                        <Button variant="outline" className="rounded-2xl flex items-center gap-2 border-border hover:border-brand hover:text-brand transition-all bg-muted/30 px-8 py-6 h-auto">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="font-bold">My Order</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-3 -right-3 bg-accent text-white text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center border-4 border-white shadow-xl animate-bounce-slow">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-12">
                    {categories.menu.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "rounded-xl px-6 py-2 transition-all font-bold",
                                activeCategory === cat
                                    ? "bg-brand text-white shadow-lg shadow-brand/20"
                                    : "text-muted-foreground hover:bg-brand/5 hover:text-brand"
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
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="group h-full flex flex-col border-none shadow-lg shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-3xl overflow-hidden bg-card">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-accent text-white text-[9px] font-black px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-xl tracking-widest uppercase">
                                        <Star className="w-3 h-3 fill-current" />
                                        Signature
                                    </div>
                                </div>
                                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                                            <span className="text-brand font-black text-lg">Rs.{item.price}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full bg-brand/5 hover:bg-brand text-brand hover:text-white rounded-xl py-3 h-auto font-black transition-all border-none"
                                        onClick={addToCart}
                                    >
                                        Add to Order
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
