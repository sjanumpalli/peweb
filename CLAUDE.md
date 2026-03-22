# Polymer Energy — Website

## Project Overview
Marketing website for Polymer Energy — a sustainability company building micro-recycling systems for plastic waste in India.
Tagline: "Redefining Circularity"

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4 (no inline styles, no CSS modules)
- **Animations:** Framer Motion
- **Icons:** Lucide React (never emojis)
- **Fonts:** Space Grotesk (headings) + DM Sans (body) via `next/font/google`
- **3D/Effects:** Magic UI, Aceternity UI components (from 21st.dev)

## Architecture & Conventions

### File Structure
```
src/
  app/                    # Next.js App Router pages
    layout.tsx            # Root layout (fonts, metadata, shared components)
    page.tsx              # Landing page
    mission/page.tsx
    map/page.tsx
    calculator/page.tsx
    founders/page.tsx
  components/
    ui/                   # Reusable UI primitives (Button, Card, Badge, etc.)
    layout/               # Navbar, Footer, PageBackground
    sections/             # Page-specific sections (HeroSection, StatsGrid, etc.)
    magicui/              # 21st.dev / Magic UI components
    aceternity/           # Aceternity UI components
  lib/
    utils.ts              # cn() helper, shared utilities
    constants.ts          # Site-wide constants (nav links, social links, etc.)
  types/                  # Shared TypeScript types
```

### Coding Standards
- **No inline styles.** Use Tailwind classes exclusively.
- **No `any` types.** Type everything properly.
- **No default exports** for components (except pages). Use named exports.
- **One component per file.** Keep files focused and small (<150 lines).
- **Colocate** types with their components when not shared.
- **Use `cn()` helper** (clsx + tailwind-merge) for conditional class merging.
- **Prefer composition over props.** Use children and slots, not mega-prop components.
- **Extract repeated patterns** into reusable components after 2 occurrences.
- **Server Components by default.** Only add `"use client"` when you need interactivity.
- **No barrel exports** (index.ts re-exports). Import directly from component files.

### Component Patterns
```tsx
// Always: named export, typed props, no inline styles
interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = "primary", size = "md", children, className }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </button>
  );
}
```

### Tailwind Conventions
- Use `@theme` block in globals.css for design tokens (colors, fonts, spacing)
- Use semantic color names: `--color-brand`, `--color-brand-light`, not hex in classes
- Responsive: mobile-first (`sm:`, `md:`, `lg:`, `xl:`)
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-24 md:py-32` standard, `py-32 md:py-40` for heroes

### Brand Colors (from logo)
| Role | Value | Tailwind |
|------|-------|----------|
| Brand (primary green) | `#22C55E` | `brand` |
| Brand Light | `rgba(34,197,94,0.1)` | `brand-light` |
| Brand Dark | `#16A34A` | `brand-dark` |
| Teal (secondary) | `#0EA5E9` | `teal` |
| Lime (logo accent) | `#8CC63F` | `lime` |
| Dark Teal (logo deep) | `#1B4332` | `dark-teal` |
| Background | `#FEFCFA` | `bg-warm` |
| Background Peach | `#FFF5EB` | `bg-peach` |
| Background Sky | `#F0F7FF` | `bg-sky` |
| Heading text | `#2D2D3F` | `heading` |
| Body text | `#64748B` | `body` |
| Muted text | `#94A3B8` | `muted` |
| Glass panel | `rgba(255,255,255,0.45)` | — |
| Glass border | `rgba(0,0,0,0.03)` | — |

### Logo
- Circular mark: overlapping green rings (lime → emerald → dark teal gradient)
- Recreated as inline SVG component at `src/components/ui/logo.tsx`
- Use `<Logo />` in navbar, never an image file for the mark

### Animation Guidelines
- Use Framer Motion for scroll animations and page transitions
- `prefers-reduced-motion` must be respected (disable animations)
- Hover transitions: 200-300ms ease
- Scroll reveal: fade-up with 0.6s duration
- No layout-shifting animations (avoid scale transforms that reflow)

### Accessibility
- Minimum 4.5:1 contrast ratio for text
- All interactive elements: visible focus states (`focus-visible:ring-2`)
- Semantic HTML: proper heading hierarchy, landmark regions
- All images: meaningful alt text
- Keyboard navigable: all interactive elements reachable via Tab

### Anti-Patterns
- No emojis as icons — use Lucide React
- No inline styles — use Tailwind classes
- No `any` types
- No CSS modules or styled-components
- No barrel/index.ts re-exports
- No greenwashing visuals or stock photos
- No default exports for non-page components
- No magic numbers — use design tokens
- No `!important` — fix specificity properly

## Key Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint check
```

## Pages (5 total)
1. **Landing** (`/`) — Hero with globe, impact counters, how-it-works, CTA
2. **Mission** (`/mission`) — Problem stats, solution flow, pillars
3. **Map** (`/map`) — Interactive India map with data explorer
4. **Calculator** (`/calculator`) — ROI calculator with sliders and charts
5. **Founders** (`/founders`) — Team cards, advisors, testimonials

## Reference Files
- `design-system/polymer-energy/MASTER.md` — Design system spec
- `design-system/polymer-energy/WIREFRAMES.md` — Detailed wireframes
- `mockups/*.html` — Visual HTML mockups (open in browser)
- `logo.jpeg` — Brand logo reference
