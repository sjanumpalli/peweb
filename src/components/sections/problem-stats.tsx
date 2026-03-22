"use client";

import { Trash2, Recycle, TrendingUp, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  {
    icon: Trash2,
    value: 62,
    suffix: "M",
    unit: "Tonnes",
    label: "Annual plastic waste",
    description: "Generated across India every year",
  },
  {
    icon: Recycle,
    value: 94,
    suffix: "%",
    unit: "",
    label: "Not recycled",
    description: "Ends up in landfills, rivers, and oceans",
  },
  {
    icon: TrendingUp,
    value: 85,
    prefix: "\u20B9",
    suffix: ",000",
    unit: "Cr",
    label: "Wasted value",
    description: "Recoverable material lost to landfill annually",
  },
  {
    icon: Users,
    value: 340,
    suffix: "M",
    unit: "People",
    label: "Without infrastructure",
    description: "Lacking access to proper recycling facilities",
  },
] as const;

export function ProblemStats() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="The Problem"
            title="India's Plastic Crisis in Numbers"
          />
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div className="group relative rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-card-hover">
                <div className="mb-5 inline-flex rounded-xl bg-bg-peach p-3">
                  <stat.icon className="h-5 w-5 text-brand" />
                </div>

                <div className="font-mono text-4xl font-bold tracking-tight text-accent lg:text-5xl">
                  <NumberTicker
                    value={stat.value}
                    prefix={"prefix" in stat ? stat.prefix : ""}
                    suffix={stat.suffix}
                  />
                </div>

                {stat.unit && (
                  <span className="mt-1 block font-mono text-sm font-medium uppercase tracking-wider text-accent/60">
                    {stat.unit}
                  </span>
                )}

                <p className="mt-3 text-sm font-semibold text-heading">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
