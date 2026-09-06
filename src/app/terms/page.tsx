import React from 'react';
import { textPrimary, textMuted } from '@/components/ui/Colors';
import { pagesData } from '@/data/sections';

export default function TermsPage() {
  const { title, description, sections } = pagesData.terms;

  return (
    <main className="min-h-screen text-foreground bg-background">
      <div className="container-custom py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${textPrimary} text-4xl font-semibold mb-6`}>{title}</h1>
          <p className={`${textMuted} mb-6 leading-relaxed`}>{description}</p>

          {sections.map((section) => (
            <section className="mb-6" key={section.title}>
              <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>{section.title}</h2>
              <p className={`${textMuted} leading-relaxed`}>{section.content}</p>
            </section>
          ))}

        </div>
      </div>
    </main>
  );
}
