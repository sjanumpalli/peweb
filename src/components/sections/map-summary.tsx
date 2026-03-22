"use client";

import { MapPin, Weight, Recycle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { NumberTicker } from "@/components/magicui/number-ticker";

const STATS = [
  {
    icon: MapPin,
    label: "Total Cities Covered",
    value: 28,
    suffix: "",
  },
  {
    icon: Weight,
    label: "Total Waste Tracked",
    value: 16800,
    suffix: " tons/day",
  },
  {
    icon: Recycle,
    label: "Avg Recycling Rate",
    value: 34,
    suffix: "%",
  },
] as const;

export function MapSummary() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={0.1 + i * 0.1}>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/20">
              <stat.icon className="mx-auto mb-4 h-8 w-8 text-accent" />
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-white/40">
                {stat.label}
              </p>
              <p className="font-mono text-4xl font-bold text-accent">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
