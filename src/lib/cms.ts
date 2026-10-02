import { cache } from 'react';
import * as fallback from '@/data/sections';
import definitions from '../../cms/section-definitions.json';

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

type ContentSchema = {
  type: string; properties?: Record<string, ContentSchema>; required?: string[];
  items?: ContentSchema; maxItems?: number; minItems?: number;
  minLength?: number; maxLength?: number; minimum?: number; maximum?: number;
  format?: string;
};
// Use the same frontend-owned contract registered in the CMS, including optional fields.
export function matchesSchema(schema: ContentSchema, value: unknown): boolean {
  if (schema.type === 'object') {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const data = value as Record<string, unknown>;
    if (schema.required?.some(key => !Object.hasOwn(data, key))) return false;
    return Object.entries(data).every(([key, child]) => {
      const property = schema.properties?.[key];
      return property !== undefined && matchesSchema(property, child);
    });
  }
  if (schema.type === 'array') return Array.isArray(value) &&
    value.length <= (schema.maxItems ?? 100) && value.length >= (schema.minItems ?? 0) &&
    !!schema.items && value.every(item => matchesSchema(schema.items!, item));
  if (schema.type === 'string') return typeof value === 'string' &&
    value.length <= (schema.maxLength ?? 10000) && value.length >= (schema.minLength ?? 0) &&
    (schema.format !== 'link' || /^(https?:\/\/[^\s]+|\/(?!\/)[^\s]*|mailto:[^\s]+|tel:[+0-9() -]+|#[a-zA-Z0-9_-]*)$/.test(value));
  if (schema.type === 'number' || schema.type === 'integer') return typeof value === 'number' && Number.isFinite(value) &&
    (schema.type !== 'integer' || Number.isInteger(value)) && value >= (schema.minimum ?? -Infinity) && value <= (schema.maximum ?? Infinity);
  return schema.type === 'boolean' && typeof value === 'boolean';
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
      const definition = definitions.find(item => item.type === section?.type);
      if (!section || !definition || section.schemaVersion !== definition.version ||
          !matchesSchema(definition.schema as unknown as ContentSchema, section.data)) return null;
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
