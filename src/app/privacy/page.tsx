import React from 'react';
import { textPrimary, textMuted } from '@/components/ui/Colors';
import { pagesData } from '@/data/sections';

export default function PrivacyPage() {
  const { title, description, sections } = pagesData.privacy;

  return (
    <main className="min-h-screen text-foreground bg-background"> 
      <div className="container-custom py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${textPrimary} text-4xl font-semibold mb-6`}>{title}</h1>
          <p className={`${textMuted} mb-6 leading-relaxed`}>
            {description}
          </p>

          {sections.map((section) => (
            <section className="mb-6" key={section.title}>
              <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>{section.title}</h2>
              {section.items ? (
                <ul className={`${textMuted} list-disc pl-6 space-y-2`}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className={`${textMuted} leading-relaxed`}>{section.content}</p>
              )}
            </section>
          ))}

        </div>
      </div>
    </main>
  );
}
