import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-bg-cream/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* 3-column grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Col 1: Brand + mission */}
          <div>
            <p
              className="text-sm font-semibold tracking-[0.15em] text-heading uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Polymer Energy
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-2 text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-full border border-border p-2 text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Pages */}
          <div>
            <h4 className="text-sm font-semibold text-heading">Pages</h4>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-heading"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-heading">Contact</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:hello@polymerenergy.com"
                className="text-sm text-muted transition-colors hover:text-heading"
              >
                hello@polymerenergy.com
              </a>
              <p className="text-sm text-muted">Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted transition-colors duration-200 hover:text-heading"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-xs text-muted">Built in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
