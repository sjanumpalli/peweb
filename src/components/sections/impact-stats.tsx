"use client";

import { IndianRupee, Recycle, Wind, Users } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  {
    icon: IndianRupee,
    value: 2.4,
    prefix: "\u20B9",
    suffix: "Cr",
    label: "Revenue Generated",
    decimals: 1,
  },
  {
    icon: Recycle,
    value: 18,
    prefix: "",
    suffix: " Tonnes/Day",
    label: "Plastic Processed",
    decimals: 0,
  },
  {
    icon: Wind,
    value: 340,
    prefix: "",
    suffix: "T",
    label: "CO\u2082 Avoided",
    decimals: 0,
  },
  {
    icon: Users,
    value: 47,
    prefix: "",
    suffix: "",
    label: "Communities Served",
    decimals: 0,
  },
] as const;

export function ImpactStats() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div className="group rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 hover:shadow-card-hover">
                <div className="mb-5 inline-flex rounded-xl bg-bg-peach p-3">
                  <stat.icon className="h-5 w-5 text-brand" />
                </div>
                <div className="font-mono text-4xl font-bold tracking-tight text-accent">
                  {stat.prefix && (
                    <span className="text-3xl">{stat.prefix}</span>
                  )}
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-2 text-sm text-muted">
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
