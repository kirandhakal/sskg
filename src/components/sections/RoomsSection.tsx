'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { rooms, categories } from '@/data/mock-data';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

export const RoomsSection = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');

    const filteredRooms = activeCategory === 'All'
        ? rooms
        : rooms.filter(room => room.category === activeCategory);

    return (
        <section id="rooms" className="py-24 bg-muted/50">
            <div className="container-custom">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-black text-primary"
                    >
                        Exclusive Living
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Immerse yourself in comfort with our premium accommodations, where every detail is crafted for your peaceful stay.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 pt-6">
                        {categories.rooms.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? 'primary' : 'outline'}
                                size="sm"
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "rounded-full px-8",
                                    activeCategory === cat ? "bg-brand text-white border-transparent" : "bg-white border-border text-primary hover:border-brand"
                                )}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredRooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col group border-none shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 rounded-3xl overflow-hidden bg-white">
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-2xl font-black text-brand shadow-xl z-10">
                                        Rs. {room.price} <span className="text-xs font-medium text-muted-foreground block text-right mt-[-4px]">per night</span>
                                    </div>
                                </div>
                                <CardContent className="p-8 flex-grow">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-primary group-hover:text-brand transition-colors">{room.name}</h3>
                                        <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                                            {room.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {room.amenities.slice(0, 3).map((amenity) => (
                                                <span key={amenity} className="text-xs font-bold uppercase tracking-wider bg-brand/5 text-brand px-3 py-1 rounded-lg">
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-8 pt-0">
                                    <Button className="w-full bg-primary hover:bg-brand text-white rounded-2xl py-6 h-auto font-bold transition-all" variant="primary">
                                        Book This Room
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
