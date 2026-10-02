import { cache } from 'react';
import * as fallback from '@/data/sections';

export const sectionDefaults = {
  'sskg-header': fallback.headerData,
  'sskg-footer': fallback.footerData,
  'sskg-metadata': fallback.metadataData,
  'sskg-hero': fallback.heroData,
  'sskg-about': fallback.aboutData,
  'sskg-rooms': fallback.roomsData,
  'sskg-dining': fallback.diningData,
  'sskg-reviews': fallback.reviewsData,
  'sskg-contact': fallback.contactData,
  'sskg-page-intro': fallback.pagesData.about.hero,
  'sskg-privacy': fallback.pagesData.privacy,
  'sskg-terms': fallback.pagesData.terms,
  'sskg-not-found': fallback.notFoundData,
};
export type SectionType = keyof typeof sectionDefaults;
export type ContentSection = { [K in SectionType]: { type: K; data: typeof sectionDefaults[K] } }[SectionType];
type CmsPage = { title: string; seo: Record<string, unknown>; sections: ContentSection[] };

// Reject malformed content before it reaches the existing presentation components.
export function matchesShape(sample: unknown, value: unknown): boolean {
  if (typeof sample !== typeof value || value === null) return false;
  if (Array.isArray(sample)) {
    return Array.isArray(value) && value.every(item => sample.some(example => matchesShape(example, item)));
  }
  if (typeof sample === 'object' && sample !== null) {
    if (Array.isArray(value)) return false;
    return Object.entries(sample).every(([key, child]) =>
      matchesShape(child, (value as Record<string, unknown>)[key]));
  }
  return true;
}

export const getCmsPage = cache(async (pageSlug: string): Promise<CmsPage | null> => {
  const endpoint = process.env.CMS_GRAPHQL_URL;
  const key = process.env.CMS_SITE_KEY;
  const siteSlug = process.env.CMS_SITE_SLUG;
  if (!endpoint || !key || !siteSlug) return null;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Site-Key': key },
      body: JSON.stringify({
        query: `query SskgPage($siteSlug: String!, $pageSlug: String!) {
          page(siteSlug: $siteSlug, pageSlug: $pageSlug) {
            title seo sections { type schemaVersion data }
          }
        }`,
        variables: { siteSlug, pageSlug },
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) return null;
    const result = await response.json();
    const page = result.data?.page;
    if (result.errors?.length || !page || !Array.isArray(page.sections)) return null;
    for (const section of page.sections) {
      if (!section || !Object.hasOwn(sectionDefaults, section.type) || section.schemaVersion !== 1 ||
          !matchesShape(sectionDefaults[section.type as SectionType], section.data)) return null;
    }
    return page;
  } catch {
    return null;
  }
});

export async function getPageSections(slug: string): Promise<ContentSection[]> {
  const page = await getCmsPage(slug);
  // A published empty page is intentional; do not restore disabled/deleted sections.
  if (page) return page.sections;
  if (slug === 'shared') return [
    { type: 'sskg-header', data: fallback.headerData },
    { type: 'sskg-footer', data: fallback.footerData },
    { type: 'sskg-metadata', data: fallback.metadataData },
  ];
  if (slug === 'home') return ['hero', 'about', 'rooms', 'dining', 'reviews', 'contact'].map(name => {
    const type = `sskg-${name}` as SectionType;
    return { type, data: sectionDefaults[type] } as ContentSection;
  });
  if (slug === 'privacy' || slug === 'terms' || slug === 'not-found') {
    const type = `sskg-${slug}` as SectionType;
    return [{ type, data: sectionDefaults[type] } as ContentSection];
  }
  if (slug === 'about' || slug === 'rooms' || slug === 'dining' || slug === 'contact') {
    const type = `sskg-${slug}` as SectionType;
    return [
      { type: 'sskg-page-intro', data: fallback.pagesData[slug].hero },
      { type, data: sectionDefaults[type] } as ContentSection,
    ];
  }
  return [];
}

export async function getPageMetadata(slug: string) {
  const page = await getCmsPage(slug);
  if (!page) return {};
  return {
    title: typeof page.seo?.title === 'string' && page.seo.title ? page.seo.title : page.title,
    ...(typeof page.seo?.description === 'string' ? { description: page.seo.description } : {}),
  };
}
