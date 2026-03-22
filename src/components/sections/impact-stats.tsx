"use client";

import { IndianRupee, Recycle, Wind, Users } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  {
    icon: IndianRupee,
    value: 2.4,
    prefix: "₹",
    suffix: "Cr",
    unit: "Revenue",
    label: "Generated for partners",
    color: "text-brand",
    bg: "bg-bg-peach",
  },
  {
    icon: Recycle,
    value: 18,
    prefix: "",
    suffix: "T",
    unit: "Tonnes/Day",
    label: "Plastic processed",
    color: "text-brand",
    bg: "bg-bg-peach",
  },
  {
    icon: Wind,
    value: 340,
    prefix: "",
    suffix: "T",
    unit: "CO₂ Avoided",
    label: "Carbon emissions saved",
    color: "text-brand",
    bg: "bg-bg-peach",
  },
  {
    icon: Users,
    value: 47,
    prefix: "",
    suffix: "+",
    unit: "Communities",
    label: "Across India served",
    color: "text-brand",
    bg: "bg-bg-peach",
  },
] as const;

export function ImpactStats() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-card-hover">
                <div className={`mb-5 inline-flex w-fit rounded-xl ${stat.bg} p-3`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-4xl font-bold tracking-tight text-heading whitespace-nowrap">
                    {stat.prefix && (
                      <span className="text-3xl">{stat.prefix}</span>
                    )}
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand">
                    {stat.unit}
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted border-t border-border pt-4">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
