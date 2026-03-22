export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/founders" },
  { label: "Map", href: "/map" },
  { label: "Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/polymer-energy",
  twitter: "https://twitter.com/polymerenergy",
} as const;

export const CONTACT_INFO = {
  email: "info@polymerenergy.in",
  phone: "+91 XXXX-XXXXXX",
  location: "India-Based Operations",
} as const;

export const SITE_CONFIG = {
  name: "Polymer Energy",
  tagline: "Waste to Energy Solutions",
  description:
    "Leading provider of modular pyrolysis systems for sustainable waste-to-energy solutions across India.",
  url: "https://polymerenergy.in",
} as const;
