import { Hero } from './Hero';
import { AboutSection } from './AboutSection';
import { RoomsSection } from './RoomsSection';
import { DiningSection } from './DiningSection';
import { ReviewsSection } from './ReviewsSection';
import { ContactSection } from './ContactSection';
import { ContentSection } from '@/lib/cms';

export function CmsSections({ sections }: { sections: ContentSection[] }) {
  return sections.map((section, index) => {
    switch (section.type) {
      case 'sskg-hero': return <Hero key={index} data={section.data} />;
      case 'sskg-about': return <AboutSection key={index} data={section.data} />;
      case 'sskg-rooms': return <RoomsSection key={index} data={section.data} />;
      case 'sskg-dining': return <DiningSection key={index} data={section.data} />;
      case 'sskg-reviews': return <ReviewsSection key={index} data={section.data} />;
      case 'sskg-contact': return <ContactSection key={index} data={section.data} />;
      case 'sskg-page-intro': return (
        <div key={index} className="py-12 bg-muted/30">
          <div className="container-custom">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{section.data.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{section.data.description}</p>
          </div>
        </div>
      );
      case 'sskg-privacy':
      case 'sskg-terms': return (
        <div key={index} className="container-custom py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-foreground text-4xl font-semibold mb-6">{section.data.title}</h1>
            <p className="text-muted-foreground mb-6 leading-relaxed">{section.data.description}</p>
            {section.data.sections.map((item, i) => (
              <section key={i} className="mb-6">
                <h2 className="text-foreground text-2xl font-medium mb-3">{item.title}</h2>
                {'items' in item && item.items ? (
                  <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                    {item.items.map((text, j) => <li key={j}>{text}</li>)}
                  </ul>
                ) : <p className="text-muted-foreground leading-relaxed">{item.content}</p>}
              </section>
            ))}
          </div>
        </div>
      );
      default: return null;
    }
  });
}
