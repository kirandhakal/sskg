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
        <section id="dining" className="py-24">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <span className="text-highlight font-bold tracking-widest uppercase text-sm">Fine Dining</span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            Authentic Nepali Flavors
                        </motion.h2>
                        <p className="text-muted-foreground text-lg">
                            Our kitchen serves the most delicious local cuisine, prepared with traditional methods and fresh ingredients from the Syangja region.
                        </p>
                    </div>

                    <div className="relative">
                        <Button variant="outline" className="rounded-full flex items-center gap-2 border-white/20 text-white">
                            <ShoppingBag className="w-5 h-5" />
                            View Cart
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.menu.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveCategory(cat)}
                            className={cn("rounded-full", activeCategory === cat ? "text-white" : "text-white/60")}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="group cursor-pointer border-white/5 hover:border-highlight/30">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 left-2 bg-highlight text-black text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-lg">
                                        <Star className="w-3 h-3 fill-current" />
                                        BESTSELLER
                                    </div>
                                </div>
                                <CardContent className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                        <span className="text-accent font-bold">Rs.{item.price}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full bg-primary/20 hover:bg-primary text-white border-none transition-colors"
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
