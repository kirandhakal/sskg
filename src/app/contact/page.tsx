import { CmsSections } from '@/components/sections/CmsSections';
import { getPageSections, getPageMetadata } from '@/lib/cms';

export default async function Page() {
  const sections = await getPageSections('contact');
  return <main className="min-h-screen pt-24"><CmsSections sections={sections} /></main>;
}

export async function generateMetadata() {
  return getPageMetadata('contact');
}
