# Polymer Energy — Wireframe Mockups & Design Spec

## Design Philosophy
**"Where Technology Meets Earth"** — A fusion of Cyberpunk UI + Organic Biophilic. Dark,
immersive backgrounds with bioluminescent green/cyan energy pulses. The site should feel
like a living, breathing control dashboard for the planet's plastic crisis.

---

## Design System Summary

| Token              | Value                                           |
|--------------------|-------------------------------------------------|
| **Background**     | `#0A0F1A` (deep navy-black)                     |
| **Surface**        | `#111827` (card/panel bg)                       |
| **Surface Glow**   | `#0D2818` (subtle green tint glass)             |
| **Primary**        | `#00FF88` (electric green — recycling energy)   |
| **Secondary**      | `#00D4FF` (cyan — data/tech accent)             |
| **Accent Warm**    | `#FFB800` (amber — alerts, ROI highlights)      |
| **Text Primary**   | `#F0FDF4` (near-white with green tint)          |
| **Text Muted**     | `#94A3B8` (slate-400)                           |
| **Border**         | `rgba(0, 255, 136, 0.15)` (green glass edge)   |
| **Heading Font**   | Space Grotesk (700, 600)                        |
| **Body Font**      | DM Sans (400, 500)                              |
| **Radius**         | 16px cards, 24px hero elements, 999px buttons   |
| **Glow Effect**    | `0 0 30px rgba(0, 255, 136, 0.2)`              |

---

## Global Navigation (Floating Navbar)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ◈ POLYMER ENERGY          Mission   Map   Calculator   Founders   [CTA] │
│     ───────────────                                                 ▓▓▓▓  │
│     green glow logo          nav links (DM Sans 500)          "Get Quote" │
│                                                               green pill  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
  ↑ Floating: top-6, left-6, right-6
  ↑ Glassmorphism: bg-[#111827]/80 backdrop-blur-xl
  ↑ Border: 1px solid rgba(0,255,136,0.1)
  ↑ Rounded: 16px
  ↑ Sticky on scroll with subtle shadow increase
```

Mobile version:
```
┌──────────────────────────────┐
│  ◈ POLYMER ENERGY       ☰  │
│                              │
└──────────────────────────────┘
  → Hamburger opens fullscreen overlay
  → Links stacked vertically with staggered fade-in
```

---

## PAGE 1: Hero / Landing Page

### Section 1 — Hero (Full Viewport)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                          [NAVBAR - floating]                                │
│                                                                             │
│                                                                             │
│              TURNING PLASTIC WASTE                                          │
│              INTO CLEAN ENERGY ─────── ◈                                   │
│                                                                             │
│              ░░░░░░░░░░░░░░░░░░░░░░░░░░░                                  │
│              Subtitle: We build micro-recycling                             │
│              systems that transform plastic                                 │
│              pollution into reusable materials —                            │
│              one community at a time.                                       │
│                                                                             │
│              ┌──────────────┐   ┌──────────────────┐                       │
│              │  See Our Map  │   │  Calculate ROI  ◈│                      │
│              │  (outline)    │   │  (green filled)   │                      │
│              └──────────────┘   └──────────────────┘                       │
│                                                                             │
│                                                                             │
│         ┌─────────────────────────────────────────────┐                    │
│         │                                             │                    │
│         │        ╔═══════════════════╗                 │                    │
│         │        ║  3D MACHINE HERO  ║  ← Rotating    │                    │
│         │        ║  VISUALIZATION    ║    mini system  │                    │
│         │        ║  (Three.js/Spline)║    with green   │                    │
│         │        ╚═══════════════════╝    particle     │                    │
│         │                                 trails      │                    │
│         └─────────────────────────────────────────────┘                    │
│                                                                             │
│              ↓ scroll indicator (breathing animation)                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

Background: Animated gradient mesh — dark navy shifting with subtle green pulses
Typography: Space Grotesk 700, 56px/64px desktop, 36px/44px mobile
```

### Section 2 — Impact Counter Strip

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│    ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│    │   12,450    │  │    85+     │  │   ₹2.3Cr   │  │   340+     │         │
│    │  TONS       │  │ LOCATIONS  │  │  REVENUE    │  │  JOBS      │         │
│    │  Recycled   │  │ Installed  │  │  Generated  │  │  Created   │         │
│    │  ◈─────── │  │  ◈─────── │  │  ◈─────── │  │  ◈─────── │         │
│    └────────────┘  └────────────┘  └────────────┘  └────────────┘         │
│                                                                             │
│    ↑ Numbers animate (count-up) when scrolled into view                    │
│    ↑ Each card has subtle green glow bottom border                         │
│    ↑ Glass card style: bg-[#111827]/60 backdrop-blur                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Section 3 — How It Works (Horizontal Scroll Journey)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│    HOW OUR MICRO-RECYCLER WORKS                                            │
│    ═══════════════════════════                                             │
│                                                                             │
│    ◈───────────────────────────────────────────────────◈                   │
│    ●          ●            ●            ●           ●                      │
│   COLLECT   SORT        PROCESS      CONVERT     OUTPUT                    │
│                                                                             │
│    ┌─────────────────────────────────────────────────────────── →          │
│    │                                                                       │
│    │  ┌────────────┐  ┌────────────┐  ┌────────────┐                      │
│    │  │            │  │            │  │            │  → scroll →           │
│    │  │  Step 1    │  │  Step 2    │  │  Step 3    │                      │
│    │  │  icon +    │  │  icon +    │  │  icon +    │                      │
│    │  │  animation │  │  animation │  │  animation │                      │
│    │  │            │  │            │  │            │                      │
│    │  └────────────┘  └────────────┘  └────────────┘                      │
│    │                                                                       │
│    └─────────────────────────────────────────────────────────── →          │
│                                                                             │
│    Each card: 400px wide, glass bg, icon animates on enter                 │
│    Progress line: green gradient fills as you scroll                       │
│    Sticky heading while scrolling through steps                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Section 4 — CTA Banner

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│    ┌───────────────────────────────────────────────────────────┐            │
│    │                                                           │            │
│    │   READY TO TRANSFORM YOUR                    ┌─────────┐ │            │
│    │   COMMUNITY'S PLASTIC WASTE?                 │ GET A    │ │            │
│    │                                              │ QUOTE    │ │            │
│    │   Join 85+ locations across India            │ ◈        │ │            │
│    │                                              └─────────┘ │            │
│    │                                                           │            │
│    └───────────────────────────────────────────────────────────┘            │
│                                                                             │
│    ↑ Gradient border (green→cyan)                                          │
│    ↑ Background: subtle animated particle field                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Footer

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│    ◈ POLYMER ENERGY                                                        │
│                                                                             │
│    Making plastic recycling          Quick Links    Contact                 │
│    accessible, profitable,           Mission        info@polymerenergy.in   │
│    and impactful.                    Map            +91 XXXXX XXXXX         │
│                                      Calculator     Mumbai, India           │
│                                      Founders                               │
│                                                                             │
│    ──────────────────────────────────────────────────────────              │
│    © 2026 Polymer Energy Pvt. Ltd.     Privacy  Terms                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## PAGE 2: Mission Page

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────┐            │
│  │                                                             │            │
│  │     OUR MISSION                                             │            │
│  │     ═══════════                                             │            │
│  │                                                             │            │
│  │     "To make plastic recycling the most                     │            │
│  │      accessible and profitable clean                        │            │
│  │      technology in India."                                  │            │
│  │                                                             │            │
│  │     ─── Large hero quote, Space Grotesk 48px               │            │
│  │         Green gradient text effect                          │            │
│  │                                                             │            │
│  └─────────────────────────────────────────────────────────────┘            │
│                                                                             │
│  THE PROBLEM                                                                │
│  ───────────                                                                │
│                                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐                        │
│  │                      │  │                      │                        │
│  │   26,000 TONS/DAY    │  │   Only 30% gets      │                        │
│  │   of plastic waste   │  │   recycled in India   │                        │
│  │   generated in India │  │                      │                        │
│  │                      │  │   ████████░░░░░░░░░░ │                        │
│  │   [animated counter] │  │   ↑ animated bar     │                        │
│  │                      │  │                      │                        │
│  └──────────────────────┘  └──────────────────────┘                        │
│                                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐                        │
│  │                      │  │                      │                        │
│  │   ₹10,000 Cr+        │  │   70% ends up in     │                        │
│  │   market opportunity │  │   landfills & oceans  │                        │
│  │   in recycled plastic│  │                      │                        │
│  │                      │  │   [earth animation]  │                        │
│  └──────────────────────┘  └──────────────────────┘                        │
│                                                                             │
│  OUR SOLUTION                                                               │
│  ────────────                                                               │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────┐            │
│  │                                                             │            │
│  │   ┌──────────┐     ┌──────────┐     ┌──────────┐          │            │
│  │   │          │     │          │     │          │          │            │
│  │   │ COMPACT  │────▶│ SMART    │────▶│ CIRCULAR │          │            │
│  │   │ SYSTEM   │     │ SORTING  │     │ OUTPUT   │          │            │
│  │   │          │     │          │     │          │          │            │
│  │   └──────────┘     └──────────┘     └──────────┘          │            │
│  │                                                             │            │
│  │   Our micro-recycling units fit in a 200 sq ft space,      │            │
│  │   process 500kg/day, and produce market-ready materials.    │            │
│  │                                                             │            │
│  └─────────────────────────────────────────────────────────────┘            │
│                                                                             │
│  PILLARS                                                                    │
│  ───────                                                                    │
│                                                                             │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │    ◈       │  │    ◈       │  │    ◈       │  │    ◈       │           │
│  │ Accessible │  │ Profitable │  │ Sustainable│  │ Community  │           │
│  │            │  │            │  │            │  │  Driven    │           │
│  │ Deploy at  │  │ ROI within │  │ Zero waste │  │ Local jobs │           │
│  │ any loc.   │  │ 18 months  │  │ to landfill│  │ & training │           │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘           │
│                                                                             │
│  ↑ Bento grid style, each card with icon animation on hover                │
│  ↑ Glass cards with green glow border on hover                             │
│                                                                             │
│  [FOOTER]                                                                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## PAGE 3: Founders Page

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                   │
│                                                                             │
│  THE PEOPLE BEHIND                                                          │
│  POLYMER ENERGY                                                             │
│  ════════════════                                                           │
│  Space Grotesk 48px, green gradient                                        │
│                                                                             │
│  "Born from frustration with India's plastic crisis,                       │
│   we quit our corporate jobs to build solutions."                          │
│                                                                             │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────┐            │
│  │                                                             │            │
│  │   ┌──────────────┐                                         │            │
│  │   │              │   FOUNDER NAME                           │            │
│  │   │              │   Co-Founder & CEO                       │            │
│  │   │   PHOTO      │   ──────────────                        │            │
│  │   │   (grayscale │   Bio paragraph here. Background,       │            │
│  │   │    → color   │   motivation, vision for the company.   │            │
│  │   │    on hover) │                                         │            │
│  │   │              │   LinkedIn ◈  Twitter ◈                 │            │
│  │   └──────────────┘                                         │            │
│  │                                                             │            │
│  └─────────────────────────────────────────────────────────────┘            │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────┐            │
│  │                                                             │            │
│  │                          ┌──────────────┐                   │            │
│  │   FOUNDER NAME           │              │                   │            │
│  │   Co-Founder & CTO       │              │                   │            │
│  │   ──────────────         │   PHOTO      │                   │            │
│  │   Bio paragraph here.    │   (grayscale │                   │            │
│  │   Technical background,  │    → color   │                   │            │
│  │   engineering vision.    │    on hover) │                   │            │
│  │                          │              │                   │            │
│  │   LinkedIn ◈  Twitter ◈  └──────────────┘                   │            │
│  │                                                             │            │
│  └─────────────────────────────────────────────────────────────┘            │
│                                                                             │
│  ↑ Alternating layout: photo-left/photo-right                              │
│  ↑ Photos: grayscale by default, color on hover (filter transition)        │
│  ↑ Glass card with subtle green border-left (or border-right)              │
│  ↑ Social links with cyan hover glow                                       │
│                                                                             │
│                                                                             │
│  OUR ADVISORS                                                               │
│  ════════════                                                               │
│                                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │  Photo   │  │  Photo   │  │  Photo   │  │  Photo   │                   │
│  │  Name    │  │  Name    │  │  Name    │  │  Name    │                   │
│  │  Title   │  │  Title   │  │  Title   │  │  Title   │                   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘                   │
│                                                                             │
│  ↑ Smaller cards, 4-column grid                                            │
│  ↑ Hover: scale(1.02) + green glow                                        │
│                                                                             │
│  [FOOTER]                                                                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## PAGE 4: Interactive Map — Plastic Data Explorer

**This is the hero feature of the site.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                   │
│                                                                             │
│  INDIA PLASTIC                                                              │
│  DATA EXPLORER ◈                                                           │
│  ════════════════                                                           │
│                                                                             │
│  ┌──────────────────────────────────┬──────────────────────────┐            │
│  │                                  │                          │            │
│  │                                  │  REGION DETAILS          │            │
│  │          ┌───┐                   │  ═══════════════         │            │
│  │         ╱     ╲                  │                          │            │
│  │        │ ● ●   │  ← India map   │  Select a region on      │            │
│  │        │  ●●    │    with data   │  the map to view         │            │
│  │        │ ● ●●●  │    points     │  plastic waste data.     │            │
│  │        │   ●●   │               │                          │            │
│  │        │  ●● ●  │    ● = data   │  ┌────────────────────┐  │            │
│  │        │ ●●  ●● │    markers    │  │ Total Waste:  ---  │  │            │
│  │         ╲ ●●●  ╱│               │  │ Recyclable:   ---  │  │            │
│  │          ╲●●  ╱  │    Markers   │  │ Revenue Pot:  ---  │  │            │
│  │           ╲  ╱   │    are color │  │ CO₂ Saved:    ---  │  │            │
│  │            ╲╱    │    coded by  │  └────────────────────┘  │            │
│  │                  │    intensity │                          │            │
│  │  [Zoom +/-]      │             │  [Upload Excel Data]     │            │
│  │  [Reset View]    │             │  ↑ Drag & drop zone      │            │
│  │                  │             │                          │            │
│  └──────────────────────────────────┴──────────────────────────┘            │
│                                                                             │
│  MAP LEGEND                                                                 │
│  ──────────                                                                │
│  ● Low (< 100 tons/day)     — #22C55E (green)                              │
│  ● Medium (100-500 tons)    — #FFB800 (amber)                              │
│  ● High (> 500 tons/day)    — #FF4444 (red)                                │
│  ○ Our Installation Site    — #00D4FF (cyan, pulsing)                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### When a Region is Clicked:

```
┌──────────────────────────┐
│  REGION DETAILS          │
│  ═══════════════         │
│                          │
│  📍 Maharashtra          │
│  ──────────────          │
│                          │
│  Daily Plastic Waste     │
│  ┌────────────────────┐  │
│  │  2,847 tons/day    │  │
│  │  ████████████████░ │  │
│  └────────────────────┘  │
│                          │
│  Recyclable Potential    │
│  ┌────────────────────┐  │
│  │  1,994 tons (70%)  │  │
│  │  ███████████░░░░░░ │  │
│  └────────────────────┘  │
│                          │
│  Revenue Potential       │
│  ┌────────────────────┐  │
│  │  ₹4.2 Cr/month     │  │
│  └────────────────────┘  │
│                          │
│  CO₂ Reduction           │
│  ┌────────────────────┐  │
│  │  892 tons CO₂/mo   │  │
│  └────────────────────┘  │
│                          │
│  Polymer Energy Sites: 3 │
│  ○ Mumbai  ○ Pune        │
│  ○ Nagpur                │
│  │                       │
│  [Calculate ROI →]       │
│  ↑ links to calculator   │
│  with this region's data │
│                          │
└──────────────────────────┘

↑ Panel slides in from right on click
↑ Animated progress bars
↑ Data sourced from uploaded Excel
↑ Map zooms into clicked region
```

### Map Tech Stack:
- **Library:** Leaflet.js or Mapbox GL (free tier)
- **Data format:** GeoJSON for India district boundaries
- **Markers:** Custom SVG markers with pulse animation
- **Data source:** Excel upload → parsed client-side (SheetJS/xlsx)

---

## PAGE 5: ROI Calculator

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                   │
│                                                                             │
│  RECYCLING ROI                                                              │
│  CALCULATOR ◈                                                              │
│  ════════════                                                               │
│  "See exactly what your investment returns"                                │
│                                                                             │
│  ┌──────────────────────────────────┬──────────────────────────┐            │
│  │                                  │                          │            │
│  │  INPUT PARAMETERS                │  YOUR RESULTS            │            │
│  │  ════════════════                │  ═══════════             │            │
│  │                                  │                          │            │
│  │  Equipment Model                 │  (updates in real-time   │            │
│  │  ┌───────────────────────────┐   │   as sliders move)       │            │
│  │  │  ▼  Select Model         │   │                          │            │
│  │  └───────────────────────────┘   │  ┌──────────────────┐   │            │
│  │                                  │  │                  │   │            │
│  │  Investment Amount (₹)           │  │  MONTHLY REVENUE │   │            │
│  │  ┌───────────────────────────┐   │  │  ₹ 4,50,000     │   │            │
│  │  │  ₹ 25,00,000             │   │  │  ████████████░░ │   │            │
│  │  └───────────────────────────┘   │  │                  │   │            │
│  │  ├────────●──────────────────┤   │  └──────────────────┘   │            │
│  │  5L                        1Cr   │                          │            │
│  │                                  │  ┌──────────────────┐   │            │
│  │  Daily Plastic Input (kg)        │  │                  │   │            │
│  │  ├──────────●───────────────┤   │  │  BREAKEVEN       │   │            │
│  │  100kg                   2000kg  │  │  14 months       │   │            │
│  │                                  │  │  ██████████░░░░ │   │            │
│  │  Operating Hours / Day           │  │                  │   │            │
│  │  ├────────────●─────────────┤   │  └──────────────────┘   │            │
│  │  4hrs                     16hrs  │                          │            │
│  │                                  │  ┌──────────────────┐   │            │
│  │  Workers Available               │  │                  │   │            │
│  │  ├──●───────────────────────┤   │  │  5-YEAR ROI      │   │            │
│  │  1                          10   │  │  340%            │   │            │
│  │                                  │  │  ↑ big green #   │   │            │
│  │  Electricity Cost (₹/kWh)       │  │                  │   │            │
│  │  ┌───────────────────────────┐   │  └──────────────────┘   │            │
│  │  │  ₹ 8.50                  │   │                          │            │
│  │  └───────────────────────────┘   │                          │            │
│  │                                  │                          │            │
│  └──────────────────────────────────┴──────────────────────────┘            │
│                                                                             │
│                                                                             │
│  DETAILED BREAKDOWN                                                         │
│  ══════════════════                                                         │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────┐            │
│  │                                                             │            │
│  │  Revenue Projection (5 Years)                               │            │
│  │                                                             │            │
│  │  ₹ │                                          ╱──          │            │
│  │    │                                    ╱───╱              │            │
│  │    │                              ╱───╱                    │            │
│  │    │                        ╱───╱                          │            │
│  │    │                  ╱───╱                                │            │
│  │    │       ─────────╱  ← breakeven line                    │            │
│  │    │  ╱───╱                                                │            │
│  │    │╱                                                      │            │
│  │    └──────────────────────────────────────── Year           │            │
│  │      Y1      Y2      Y3      Y4      Y5                   │            │
│  │                                                             │            │
│  │  ── Revenue (green)   ── Costs (red)   -- Breakeven        │            │
│  │                                                             │            │
│  └─────────────────────────────────────────────────────────────┘            │
│                                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                        │
│  │ Monthly     │  │ Annual      │  │ Plastic     │                        │
│  │ Costs       │  │ Savings     │  │ Processed   │                        │
│  │             │  │             │  │             │                        │
│  │ ₹ 1,20,000 │  │ ₹ 39,60,000│  │ 182 tons    │                        │
│  │             │  │             │  │ /year       │                        │
│  │ ◈ Electric  │  │ ◈ vs dump  │  │ ◈ recycled  │                        │
│  │ ◈ Labor     │  │   costs    │  │ ◈ reused    │                        │
│  │ ◈ Maint.    │  │             │  │             │                        │
│  └─────────────┘  └─────────────┘  └─────────────┘                        │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────┐            │
│  │                                                             │            │
│  │   Want a detailed report?     [Download PDF]  [Get Quote]   │            │
│  │                                                             │            │
│  └─────────────────────────────────────────────────────────────┘            │
│                                                                             │
│  [FOOTER]                                                                   │
└─────────────────────────────────────────────────────────────────────────────┘

↑ Left panel: sliders with haptic-feel design (custom styled range inputs)
↑ Right panel: results update in real-time with number animation
↑ Chart: Recharts area chart with gradient fill (green)
↑ All calculations happen client-side — no server calls
↑ Mobile: inputs stack on top, results below (sticky summary bar at bottom)
```

---

## Page Flow & Navigation

```
                    ┌──────────────┐
                    │   LANDING    │
                    │   (Hero)     │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
      ┌───────▼──────┐ ┌──▼─────────┐ ┌▼────────────┐
      │   MISSION    │ │    MAP     │ │  CALCULATOR  │
      └───────┬──────┘ └──┬─────────┘ └┬────────────┘
              │           │            │
              │           │    ┌───────┘
              │           │    │ (click region → prefill calc)
              │           └────┘
              │
      ┌───────▼──────┐
      │  FOUNDERS    │
      └──────────────┘
```

**Key interactions:**
- Map → Calculator: Clicking "Calculate ROI" in region detail pre-fills the calculator with that region's data
- Landing CTAs route to Map and Calculator directly
- Navbar accessible from every page

---

## Animation & Interaction Spec

| Element               | Animation                                  | Duration | Trigger       |
|-----------------------|--------------------------------------------|----------|---------------|
| Hero title            | Fade up + letter stagger                   | 800ms    | Page load     |
| Impact counters       | Count-up animation                         | 1500ms   | Scroll into   |
| Process steps         | Slide in from right                        | 400ms    | Horizontal scroll |
| Map markers           | Pulse ring animation                       | 2000ms   | Always (loop) |
| Map region click      | Zoom + panel slide-in                      | 300ms    | Click         |
| Calculator sliders    | Smooth value update                        | 150ms    | Drag          |
| Calculator results    | Number morph animation                     | 200ms    | Input change  |
| Founder photos        | Grayscale → color                          | 400ms    | Hover         |
| Cards (all pages)     | Scale(1.02) + glow increase                | 200ms    | Hover         |
| Page transitions      | Fade + slight Y translate                  | 300ms    | Navigation    |

---

## Mobile Responsive Strategy

| Breakpoint | Layout Changes                                                |
|------------|---------------------------------------------------------------|
| < 640px    | Single column. Navbar → hamburger. Map fullscreen. Calculator inputs stack vertically. |
| 640-1024px | 2-column where possible. Map + panel side by side.           |
| > 1024px   | Full layout as wireframed above.                              |

---

## Tech Stack for Implementation

| Layer        | Technology                                         |
|--------------|----------------------------------------------------|
| Framework    | Next.js 16 (App Router)                            |
| Styling      | Tailwind CSS v4 + custom design tokens             |
| Components   | shadcn/ui (buttons, inputs, cards, sliders)        |
| Map          | Leaflet.js + react-leaflet (free, no API key)      |
| Charts       | Recharts (revenue projection chart)                |
| 3D Hero      | Spline or Three.js (machine visualization)         |
| Excel Parse  | SheetJS (xlsx) for client-side Excel upload        |
| Animations   | Framer Motion (scroll-triggered, page transitions) |
| Icons        | Lucide React                                       |
| Fonts        | Space Grotesk + DM Sans (Google Fonts)             |

---

## Component Library Mapping — 21st.dev + Magic UI + shadcn/ui

Every section of every page is mapped to a specific community component from
[21st.dev](https://21st.dev), [Magic UI](https://magicui.design), or
[shadcn.io](https://www.shadcn.io). This is the component shopping list.

### BACKGROUNDS (Full Page)

| Page / Section         | Component                          | Source                                           |
|------------------------|------------------------------------|--------------------------------------------------|
| Landing Hero bg        | **Particles Background**           | shadcn.io/background/particles — mouse-reactive floating dots with green tint |
| Mission page bg        | **Aurora Background**              | shadcn.io/background/aurora — flowing emerald/teal waves, pure CSS 60fps |
| Founders page bg       | **Gradient Mesh Background**       | shadcn.io/background/gradient — ambient drifting color blobs (green/cyan) |
| Map page bg            | **Dark Veil / Noise Background**   | shadcn.io/background/noise — subtle grain texture on dark navy |
| Calculator page bg     | **Gradient Animation Background**  | shadcn.io/background/gradient-animation — shifting green-to-cyan gradient |
| All pages (overlay)    | **Dot Pattern** (21st.dev)         | Subtle grid dot overlay for depth, 0.03 opacity |

### NAVBAR

| Component              | Source                             | Notes                                            |
|------------------------|------------------------------------|--------------------------------------------------|
| Floating Glass Navbar  | **21st.dev** community navbar      | Glassmorphism navbar with backdrop-blur-xl, floating with top-6 inset |
| Mobile Hamburger       | **shadcn/ui Sheet**                | Sheet component as fullscreen mobile nav overlay |

### PAGE 1: LANDING — Component Breakdown

| Section                | Component                          | Source                             |
|------------------------|------------------------------------|------------------------------------|
| Hero Title             | **Magic UI: Animated Gradient Text** | magicui.design — text with animated green→cyan gradient shift |
| Hero Subtitle          | **Magic UI: Text Reveal / Fade Text** | Staggered word fade-in on load |
| Hero CTA Buttons       | **Magic UI: Shimmer Button**       | Animated shimmer/shine border effect on primary CTA |
| Hero 3D Machine        | **Spline Embed** or **Magic UI: Globe** | Interactive 3D scene, or globe with India focus as fallback |
| Scroll Indicator       | **21st.dev** scroll indicator      | Breathing chevron-down animation |
| Impact Counter Strip   | **Magic UI: Number Ticker**        | magicui.design/docs/components/number-ticker — animated count-up |
| Counter Cards          | **Magic UI: Magic Card**           | Gradient spotlight follows cursor, glass bg |
| Counter Border Glow    | **Magic UI: Border Beam**          | Animated beam traveling along card border (green) |
| How It Works Section   | **Magic UI: Arc Timeline**         | magicui.design/docs/components/arc-timeline — step-by-step arc flow |
| Process Step Cards     | **Magic UI: Neon Gradient Card**   | Cards with neon green/cyan gradient borders |
| Process Icons          | **Lucide React** icons             | Recycle, Filter, Zap, Package, ArrowRight |
| CTA Banner             | **Magic UI: Shine Border**         | Animated shine border wrapping the full CTA block |
| CTA Background         | **Magic UI: Animated Beam**        | Subtle beam lines connecting dots in background |

### PAGE 2: MISSION — Component Breakdown

| Section                | Component                          | Source                             |
|------------------------|------------------------------------|------------------------------------|
| Hero Quote             | **Magic UI: Animated Gradient Text** | Large quote with green gradient text animation |
| Problem Stats (4 cards)| **Magic UI: Bento Grid**           | magicui.design/docs/components/bento-grid — asymmetric card layout |
| Stat Numbers           | **Magic UI: Number Ticker**        | Count-up animation on scroll |
| Progress Bars          | **shadcn/ui Progress**             | Animated fill with green gradient |
| Solution Flow          | **Magic UI: Animated Beam**        | Beam lines connecting the 3 solution stages |
| Solution Stage Cards   | **Magic UI: Magic Card**           | Hover spotlight effect |
| Pillars Grid           | **Magic UI: Bento Grid**           | 4-card bento layout with icons |
| Pillar Icons           | **Magic UI: Orbiting Circles**     | Or simple Lucide icons with fade-in |

### PAGE 3: FOUNDERS — Component Breakdown

| Section                | Component                          | Source                             |
|------------------------|------------------------------------|------------------------------------|
| Page Header            | **Magic UI: Animated Gradient Text** | "The People Behind Polymer Energy" |
| Founder Cards          | **Magic UI: Magic Card**           | Large cards with cursor-following spotlight |
| Founder Photos         | Custom + **Framer Motion**         | grayscale → color filter transition on hover |
| Social Links           | **21st.dev** icon buttons          | Hover glow effect (cyan) |
| Advisors Grid          | **Magic UI: Avatar Circles**       | magicui.design — overlapping avatar circles for compact display |
| Advisor Cards          | **Magic UI: Neon Gradient Card**   | Smaller cards with subtle neon border |

### PAGE 4: MAP — Component Breakdown

| Section                | Component                          | Source                             |
|------------------------|------------------------------------|------------------------------------|
| Map Container          | **react-leaflet** + custom tiles   | Dark-themed tiles (CartoDB Dark Matter) |
| India GeoJSON          | **Custom GeoJSON overlay**         | India state/district boundaries from public datasets |
| Data Point Markers     | **Custom SVG markers**             | Pulsing ring animation via CSS keyframes |
| Region Detail Panel    | **shadcn/ui Sheet**                | Slide-in panel from right side |
| Stat Bars in Panel     | **shadcn/ui Progress**             | Animated progress bars (green gradient fill) |
| Stat Numbers           | **Magic UI: Number Ticker**        | Animated count on panel open |
| Upload Zone            | **shadcn/ui** + **react-dropzone** | Drag & drop file area with dashed border |
| Map Controls           | **shadcn/ui Button** (icon)        | Plus/Minus/Reset zoom controls |
| Legend                  | Custom with **Lucide** circle icons| Color-coded dot legend |

### PAGE 5: CALCULATOR — Component Breakdown

| Section                | Component                          | Source                             |
|------------------------|------------------------------------|------------------------------------|
| Input Sliders          | **shadcn/ui Slider**               | Custom-styled with green thumb + track |
| Model Dropdown         | **shadcn/ui Select**               | Glass-styled dropdown |
| Number Inputs          | **shadcn/ui Input**                | With ₹ prefix formatting |
| Result Cards           | **Magic UI: Magic Card**           | 3 result cards with spotlight effect |
| Result Numbers         | **Magic UI: Number Ticker**        | Real-time animated number updates |
| ROI Percentage         | **Magic UI: Animated Gradient Text** | Large 340% with green→amber gradient |
| Revenue Chart          | **Recharts AreaChart**             | Gradient fill under the line (green) |
| Breakeven Line         | **Recharts ReferenceLine**         | Dashed horizontal line |
| Cost Breakdown Cards   | **Magic UI: Bento Grid**           | 3-column mini bento for costs/savings/processed |
| CTA Section            | **Magic UI: Shimmer Button**       | "Download PDF" and "Get Quote" with shimmer |
| CTA Border             | **Magic UI: Shine Border**         | Animated shine wrapping the CTA block |

### GLOBAL COMPONENTS

| Component              | Source                             | Used On                            |
|------------------------|------------------------------------|-----------------------------------|
| **Animated Gradient Text** | Magic UI                       | All page headings                  |
| **Number Ticker**      | Magic UI                           | Landing stats, Mission stats, Map panel, Calculator results |
| **Magic Card**         | Magic UI                           | All interactive cards              |
| **Border Beam**        | Magic UI                           | Featured cards, CTA sections       |
| **Shine Border**       | Magic UI                           | CTA banners                        |
| **Shimmer Button**     | Magic UI                           | Primary CTA buttons                |
| **Bento Grid**         | Magic UI                           | Mission pillars, Calculator breakdown |
| **Sheet**              | shadcn/ui                          | Mobile nav, Map detail panel       |
| **Slider**             | shadcn/ui                          | Calculator inputs                  |
| **Progress**           | shadcn/ui                          | Map stats, Mission stats           |
| **Button**             | shadcn/ui                          | All buttons (base)                 |
| **Select / Input**     | shadcn/ui                          | Calculator form elements           |

---

## Installation Plan (npm packages)

```bash
# Core
npx shadcn@latest init

# shadcn/ui components
npx shadcn@latest add button card input select slider progress sheet

# Magic UI components (copy-paste from magicui.design)
# - number-ticker
# - animated-gradient-text
# - bento-grid
# - magic-card
# - border-beam
# - shine-border
# - shimmer-button
# - neon-gradient-card
# - animated-beam
# - orbiting-circles
# - avatar-circles
# - arc-timeline

# Additional packages
npm install framer-motion recharts react-leaflet leaflet xlsx react-dropzone
npm install -D @types/leaflet
```

---

## Sources & References

- [21st.dev — Component Library](https://21st.dev)
- [21st.dev — Hero Components](https://21st.dev/s/hero)
- [21st.dev — Map Components](https://21st.dev/s/map)
- [21st.dev — Background Components](https://21st.dev/community/components/s/background)
- [21st.dev — Landing Page Components](https://21st.dev/community/components/s/landing-page)
- [Magic UI — All Components](https://magicui.design/docs/components)
- [Magic UI — Number Ticker](https://magicui.design/docs/components/number-ticker)
- [Magic UI — Bento Grid](https://magicui.design/docs/components/bento-grid)
- [Magic UI — Magic Card](https://magicui.design/docs/components/magic-card)
- [Magic UI — Arc Timeline](https://magicui.design/docs/components/arc-timeline)
- [shadcn.io — Animated Backgrounds](https://www.shadcn.io/background)
- [shadcn.io — Aurora Background](https://www.shadcn.io/background/aurora)
- [shadcn.io — Particles Background](https://www.shadcn.io/background/particles)
- [shadcn.io — Gradient Mesh Shader](https://www.shadcn.io/shaders/gradient-mesh)
- [shadcn/ui — Official Components](https://ui.shadcn.com/docs/components)
- [Inspira UI — World Map](https://inspira-ui.com/docs/components/visualization/world-map)
- [React Simple Maps](https://www.react-simple-maps.io/)
- [ShadcnBlocks — Hero Blocks](https://www.shadcnblocks.com/blocks/hero)
