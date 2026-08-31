'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import reviewsData from '@/data/sections/reviews.json';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-foreground">{reviewsData.title}</h2>
          <p className="text-muted-foreground mt-3 text-lg">{reviewsData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.reviews.map((r, idx) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
            >
              <Card className="h-full bg-card border-border shadow-lg">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mr-3 shrink-0">
                      <span className="font-bold text-brand">{r.name.split(' ')[0].charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-foreground font-bold text-lg">{r.name}</div>
                      <div className="text-muted-foreground text-sm">{r.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < r.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed flex-1">{r.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
