"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 backdrop-blur-xl" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8 md:px-12 md:py-10">
          {/* Logo mark + wordmark */}
          <Link
            href="/"
            aria-label="Polymer Energy home"
            className="flex items-center gap-2.5"
          >
            <Image
              src="/logo-mark.svg"
              alt="Polymer Energy logo mark"
              width={32}
              height={32}
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="font-body text-sm font-semibold tracking-[0.2em] text-heading uppercase">
              POLYMER ENERGY
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200",
                    isActive ? "text-heading" : "text-muted hover:text-heading",
                  )}
                >
                  {link.label.toUpperCase()}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: theme toggle + mobile hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="flex cursor-pointer flex-col gap-1.5 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-heading" />
              ) : (
                <>
                  <span className="block h-px w-6 bg-heading" />
                  <span className="block h-px w-6 bg-heading" />
                  <span className="block h-px w-4 bg-heading" />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to push content below fixed nav — matches py-8 + text height + md:py-10 */}
      <div className="h-[88px] md:h-[100px]" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed left-0 right-0 top-[88px] z-40 p-6 backdrop-blur-xl md:hidden md:top-[100px]" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200",
                  pathname === link.href ? "text-heading" : "text-muted hover:text-heading",
                )}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
