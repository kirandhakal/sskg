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
