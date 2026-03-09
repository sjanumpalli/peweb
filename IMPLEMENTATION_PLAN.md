# Polymer Energy — Implementation Plan

> **Status:** In Progress
> **Stack:** Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript
> **Design Refs:** `design-system/polymer-energy/MASTER.md`, `WIREFRAMES.md`
> **Mockups:** `mockups/*.html` (open in browser to preview)

---

## Completed

- [x] **Design System** — MASTER.md with colors, typography, spacing, components
- [x] **Wireframes** — WIREFRAMES.md with detailed section-by-section specs for all 5 pages
- [x] **Visual HTML Mockups** — 5 browser-viewable HTML files with full styling and animations
  - `mockups/landing.html` — Hero, counter strip, how-it-works timeline, CTA
  - `mockups/mission.html` — Problem stats, solution flow, pillars bento grid
  - `mockups/map.html` — India SVG map with data points, side panel, upload zone
  - `mockups/calculator.html` — Slider inputs, live results, revenue chart, breakdown
  - `mockups/founders.html` — Alternating founder cards, advisor grid
- [x] **Next.js Project** — Scaffolded with `create-next-app` (Tailwind, TypeScript, App Router)

---

## Remaining Work

### Phase 1: Foundation (do first)

- [ ] **Install dependencies**
  - `framer-motion` — page transitions, scroll animations, hover effects
  - `lucide-react` — consistent SVG icon set (replace emoji placeholders)
  - `next/font` — load Space Grotesk + DM Sans via Next.js font optimization
  - `recharts` — revenue projection chart on calculator page
  - `react-leaflet` + `leaflet` — interactive India map (or Mapbox GL)

- [ ] **Global layout & theme**
  - Update `globals.css` with CSS variables from MASTER.md
  - Create `app/layout.tsx` with font loading, metadata, dark theme
  - Build shared `Navbar` component (glassmorphism floating nav)
  - Build shared `Footer` component
  - Add dot-grid overlay as global background layer
  - Add particle/aurora background components (reusable)

### Phase 2: Pages (build in order)

- [ ] **Landing Page** (`app/page.tsx`)
  - Hero section: gradient text headline, subtitle, dual CTA buttons
  - 3D machine visual placeholder (Spline embed or static illustration)
  - Animated impact counter strip (4 cards with counting animation)
  - "How It Works" timeline (5 steps with connected dots)
  - CTA banner with animated gradient border
  - Scroll indicator with breathing animation

- [ ] **Mission Page** (`app/mission/page.tsx`)
  - Hero quote with gradient text
  - "The Problem" — 4 stat cards with progress bars and counting animations
  - "Our Solution" — 3-step horizontal flow with arrow connectors
  - "Our Pillars" — 4-card bento grid (Accessible, Profitable, Sustainable, Community)
  - Aurora background effect (unique to this page)

- [ ] **India Data Map** (`app/map/page.tsx`)
  - Interactive map with Leaflet or Mapbox (India bounds, dark tile style)
  - Data points: color-coded by waste volume (red/amber/green) + PE installation sites (cyan)
  - Click state → side panel shows: daily waste, recyclable potential, revenue potential, CO₂ reduction
  - Excel/CSV upload zone (drag & drop, parse with SheetJS or Papa Parse)
  - Legend overlay on map
  - Data source: hardcode initial data, design for easy JSON/API swap later

- [ ] **ROI Calculator** (`app/calculator/page.tsx`)
  - Input panel: equipment model dropdown, 5 custom sliders (investment, daily input, hours, workers, electricity cost)
  - Results panel: monthly revenue, breakeven point, 5-year ROI (live-updating)
  - Revenue projection chart (Recharts area chart with revenue vs cost lines)
  - Cost breakdown grid (3 cards: monthly costs, annual savings, plastic processed)
  - "Get a Custom Quote" CTA with animated border
  - Optional: PDF report download (jsPDF or server-side)

- [ ] **Founders Page** (`app/founders/page.tsx`)
  - Alternating layout founder cards (photo left/right, bio, social links)
  - Grayscale → color photo transition on hover
  - Spotlight cursor-follow effect on cards
  - Advisor grid (4 cards with avatars)
  - Gradient mesh background (unique to this page)
  - Content: placeholder names/bios — replace with real data when available

### Phase 3: Polish & Ship

- [ ] **Animations & interactions**
  - Framer Motion scroll-triggered reveals on all sections
  - Smooth page transitions between routes
  - `prefers-reduced-motion` media query support
  - Loading states / skeleton screens

- [ ] **Responsiveness**
  - Test all pages at 375px, 768px, 1024px, 1440px breakpoints
  - Mobile hamburger menu for navbar
  - Stack grids to single column on mobile
  - Touch-friendly sliders on calculator

- [ ] **Accessibility**
  - 4.5:1 contrast ratios on all text
  - Visible focus states for keyboard navigation
  - Semantic HTML (proper heading hierarchy, landmarks)
  - Alt text on images, aria-labels on interactive elements

- [ ] **Performance**
  - Lazy load below-fold sections
  - Optimize images (Next.js Image component)
  - Code split heavy dependencies (map, chart)
  - Lighthouse audit — target 90+ on all metrics

- [ ] **Content & data**
  - Replace placeholder founder names, bios, photos
  - Plug in real plastic waste data for map
  - Verify calculator formulas with real business numbers
  - Add real contact info, social links

- [ ] **Deploy**
  - Vercel deployment setup
  - Environment variables (if any API keys for map tiles)
  - Custom domain configuration
  - OG/meta tags for social sharing

---

## Key Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | App Router (Next.js) | Already scaffolded, supports layouts |
| Styling | Tailwind CSS 4 | Already installed, fast iteration |
| Animations | Framer Motion | Best React animation library, scroll triggers |
| Icons | Lucide React | Clean, consistent, tree-shakeable |
| Map | React Leaflet | Free, no API key needed, good India support |
| Charts | Recharts | React-native, composable, dark theme support |
| Fonts | next/font | Auto-optimized, no layout shift |

---

## File Structure (Target)

```
src/
├── app/
│   ├── layout.tsx          # Global layout, fonts, metadata
│   ├── page.tsx            # Landing page
│   ├── mission/page.tsx    # Mission page
│   ├── map/page.tsx        # Data map page
│   ├── calculator/page.tsx # ROI calculator page
│   └── founders/page.tsx   # Founders page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Slider.tsx
│   │   └── Counter.tsx
│   ├── backgrounds/
│   │   ├── ParticlesBg.tsx
│   │   ├── AuroraBg.tsx
│   │   ├── GradientMeshBg.tsx
│   │   └── DotOverlay.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── ImpactCounters.tsx
│       ├── HowItWorks.tsx
│       └── CTABanner.tsx
├── lib/
│   ├── calculator.ts       # ROI calculation logic
│   └── map-data.ts         # India state waste data
└── styles/
    └── globals.css          # CSS variables, base styles
```

---

## How to Continue

1. **Review mockups** — Open `mockups/*.html` in browser, note any changes
2. **Start Phase 1** — Install deps, build global layout + navbar + footer
3. **Build pages** — One at a time, starting with landing page
4. **Test & polish** — Responsive, accessible, performant
5. **Deploy** — Push to Vercel

To resume development, start a new session and say:
> "Continue implementing Polymer Energy website — pick up from IMPLEMENTATION_PLAN.md"
