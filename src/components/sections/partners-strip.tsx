"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const partners = [
  "NITI Aayog",
  "CPCB",
  "Tata Trusts",
  "Infosys Foundation",
  "Shell Foundation",
  "UNDP India",
  "WRI India",
  "Circulate Capital",
] as const;

export function PartnersStrip() {
  return (
    <section className="overflow-hidden px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Trusted by leading organizations
          </p>
        </FadeIn>

        {/* Infinite marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32" style={{ background: 'linear-gradient(to right, var(--color-bg-warm), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32" style={{ background: 'linear-gradient(to left, var(--color-bg-warm), transparent)' }} />

          <div className="flex animate-marquee gap-8">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className={cn(
                  "flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface px-6 py-3",
                  "text-sm font-medium text-muted transition-all duration-200 hover:border-brand/20 hover:text-heading",
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand/40" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
