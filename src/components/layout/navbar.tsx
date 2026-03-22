"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/[0.04] bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Wordmark */}
          <Link
            href="/"
            aria-label="Polymer Energy home"
            className="text-sm font-semibold tracking-[0.15em] text-heading uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Polymer Energy
          </Link>

          {/* Desktop links — center */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm transition-colors duration-200",
                    isActive
                      ? "font-medium text-heading"
                      : "text-muted hover:text-heading",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button size="sm" className="rounded-full">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="cursor-pointer p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-heading" />
            ) : (
              <Menu className="h-5 w-5 text-heading" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed left-0 right-0 top-[65px] z-40 border-b border-black/[0.04] bg-white/90 p-4 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm transition-colors duration-200",
                pathname === link.href
                  ? "font-medium text-brand"
                  : "text-body hover:bg-black/[0.02] hover:text-heading",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="mt-2 w-full rounded-full">
            Get Started
          </Button>
        </div>
      )}
    </>
  );
}
