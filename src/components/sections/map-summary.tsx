"use client";

import { MapPin, Weight, Factory } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WASTE_LOCATIONS, TOTAL_PLASTIC_KG } from "@/lib/telangana-waste-data";

const STATS = [
  {
    icon: MapPin,
    label: "Urban Local Bodies",
    value: 158,
    suffix: "",
    note: "Across Telangana",
  },
  {
    icon: Weight,
    label: "Total Plastic Waste",
    value: Math.round(TOTAL_PLASTIC_KG / 1000),
    suffix: " t/day",
    note: "State-wide generation",
  },
  {
    icon: Factory,
    label: "Districts Covered",
    value: new Set(WASTE_LOCATIONS.map((l) => l.district)).size || 33,
    suffix: "",
    note: "All Telangana districts",
  },
] as const;

export function MapSummary() {
  return (
    <section className="px-8 pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={0.1 + i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-surface-hover">
              <stat.icon className="mx-auto mb-4 h-8 w-8 text-brand" />
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted">
                {stat.label}
              </p>
              <p className="font-mono text-4xl font-bold text-brand">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs text-muted">{stat.note}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
