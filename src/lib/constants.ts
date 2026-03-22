export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Mission", href: "/mission" },
  { label: "Map", href: "/map" },
  { label: "Calculator", href: "/calculator" },
  { label: "About", href: "/founders" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/polymer-energy",
  twitter: "https://twitter.com/polymerenergy",
} as const;

export const SITE_CONFIG = {
  name: "Polymer Energy",
  tagline: "Redefining Circularity",
  description:
    "Turning plastic waste into clean energy with micro-recycling systems across India.",
  url: "https://polymerenergy.com",
} as const;
