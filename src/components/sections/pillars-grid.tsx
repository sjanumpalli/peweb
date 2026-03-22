"use client";

import { Globe, TrendingUp, Leaf, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

const pillars = [
  {
    icon: Globe,
    title: "Accessible",
    description:
      "Deploy at any location — rural or urban, small or large. Our compact systems reach communities that need them most.",
  },
  {
    icon: TrendingUp,
    title: "Profitable",
    description:
      "ROI within 18 months. Real revenue from recycled output that sustains local operators.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description:
      "Zero waste to landfill. 100% material recovery target with minimal energy footprint.",
  },
  {
    icon: Users,
    title: "Community-First",
    description:
      "Local jobs, training programs, and waste picker integration. Empowering communities to turn waste into opportunity.",
  },
] as const;

export function PillarsGrid() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeader
            label="Our Pillars"
            title="Built on Four Foundations"
          />
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={0.1 * i}>
              <div className="group cursor-pointer rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card-hover md:p-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-peach transition-colors duration-200 group-hover:border-brand/30 group-hover:bg-brand/10">
                  <pillar.icon className="h-6 w-6 text-brand transition-colors duration-200" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-heading md:text-2xl">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
