'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { rooms, categories } from '@/data/mock-data';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { Users, Wifi, Wind, MapPin } from 'lucide-react';

export const RoomsSection = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');

    const filteredRooms = activeCategory === 'All'
        ? rooms
        : rooms.filter(room => room.category === activeCategory);

    return (
        <section id="rooms" className="py-24 bg-muted/30">
            <div className="container-custom">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Luxurious Accommodations
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Stay in our carefully curated rooms that combine traditional Nepali heritage with modern comforts for a restful experience.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 pt-6">
                        {categories.rooms.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? 'primary' : 'ghost'}
                                size="sm"
                                onClick={() => setActiveCategory(cat)}
                                className="rounded-full"
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col group">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-primary shadow-sm">
                                        Rs. {room.price} <span className="text-xs font-normal text-muted-foreground">/ night</span>
                                    </div>
                                </div>
                                <CardContent className="p-6 flex-grow">
                                    <h3 className="text-2xl font-bold mb-3">{room.name}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-2">
                                        {room.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {room.amenities.slice(0, 4).map((amenity) => (
                                            <div key={amenity} className="flex items-center text-sm text-primary/70">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <Button className="w-full" variant="outline">View Details</Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
