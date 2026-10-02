# Syangja Sundar - Modern Hotel & Restaurant Frontend

This is a production-ready, highly responsive Next.js frontend built for Syangja Sundar Hotel & Khaja Ghar.

## ⚙️ Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4 (using `@theme` variables)
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: Next-Themes (Light/Dark mode)

## 📂 Project Structure
- `src/app`: Routes, global styles, and layout.
- `src/components/ui`: Reusable primitive components (Button, Card, etc.).
- `src/components/layout`: Global layout pieces (Header, Footer).
- `src/components/sections`: Page-specific sections (Hero, Rooms, Dining, etc.).
- `src/data`: Mock JSON data for rooms and menu items.
- `src/lib`: Utility functions (cn helper).

## 🎨 Design System & Accessibility
- **Senior Readability**: Base font size is 1.1rem (18px) for better legibility.
- **Visual Hierarchy**: Clear distinction between headings (Outfit serif) and body text (Inter sans).
- **High Contrast**: Default light theme with deep charcoal primary colors and muted backgrounds.
- **Responsiveness**: Mobile-first design with specific optimizations for tablets and desktop grids.
- **Transitions**: Smooth 300ms transitions on all interactive elements.

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 🛠 Features
- **Booking Flow Preview**: Cards show room details and pricing.
- **Interactive Menu**: Functional category filtering and "Add to Order" feedback.
- **Theme Support**: Full dark mode support with accessible contrast ratios.
- **Performance**: Static page generation with optimized image loading.

## Connect to Universal CMS

SSKG supports CMS content on every existing route. No seed or automatic content
population is required. The existing `src/data` JSON remains the fallback.

1. Start the updated Universal CMS backend and admin frontend.
2. Create your website in the CMS. Copy its public key from **Connect a frontend**.
3. Edit `sskg/.env.local` (created locally; `.env.example` is the shareable template):
   - `CMS_GRAPHQL_URL`: your backend's public GraphQL endpoint.
   - `CMS_SITE_SLUG`: the exact slug of the website you created.
   - `CMS_SITE_KEY`: that website's public key.
4. Create pages with the slugs below, add the corresponding **SSKG** sections,
   fill their fields, save, and **publish**. Restart SSKG after changing environment
   variables. Published content is fetched on each request; draft changes do not
   affect the public site until published again.

| CMS page slug | SSKG section types | Website route |
| --- | --- | --- |
| `home` | Hero, About, Rooms, Dining, Reviews, Contact | `/` |
| `about` | Page Intro, About | `/about` |
| `rooms` | Page Intro, Rooms | `/rooms` |
| `dining` | Page Intro, Dining | `/dining` |
| `contact` | Page Intro, Contact | `/contact` |
| `privacy` | Privacy | `/privacy` |
| `terms` | Terms | `/terms` |
| `not-found` | Not Found | Unknown routes |
| `shared` | Header, Footer, Metadata | Shared across all pages |

Section names in the editor start with **SSKG** (API types start with `sskg-`).
These are blank editable templates, not populated website records. The existing
JSON files show the supported structure. Prices and ratings use numeric fields.
For room/menu filters, include `All` and match category labels to each item's
category. Images accept HTTP(S) URLs or local paths. Header/footer links, logos,
contact details, legal copy, form labels, and page headings are editable. Use the
page's SEO fields for its title and description; the shared Metadata section sets
the site's defaults, keywords, and favicon. This connection supports the existing
routes; creating an arbitrary CMS slug does not create a new SSKG route.

Missing configuration, unpublished/missing pages, failed requests (three-second
timeout), or incompatible content use that page's local JSON. Published section
order is preserved. An intentionally empty published page stays empty, and
removed/disabled sections are not restored from JSON. A published `shared` page
should contain Header, Footer, and Metadata; removing either layout section hides
it. Content editing does not add booking, checkout, or contact-message delivery;
those controls retain their existing behaviour.

Connection tests (using this workspace's installed backend test tooling):

```bash
cd sskg
node --import ../backend/node_modules/tsx/dist/loader.mjs --test tests/cms.test.ts
npx tsc --noEmit
npm run lint
```
