'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { textPrimary, textMuted } from '@/components/ui/Colors';
import reviewsData from '@/data/sections/reviews.json';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-transparent">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className={`${textPrimary} text-3xl font-semibold`}>{reviewsData.title}</h2>
          <p className={`${textMuted} mt-2`}>{reviewsData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.reviews.map((r, idx) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
            >
              <Card className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mr-3">
                      <span className="font-bold text-brand">{r.name.split(' ')[0].charAt(0)}</span>
                    </div>
                    <div>
                      <div className={`${textPrimary} font-semibold`}>{r.name}</div>
                      <div className={`${textMuted} text-sm`}>{r.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < r.rating ? 'text-yellow-400' : 'text-muted-foreground/40'}`} />
                    ))}
                  </div>

                  <p className={`${textMuted} flex-1`}>{r.text}</p>
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
