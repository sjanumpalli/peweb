"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { MapPin, TrendingUp, ShieldCheck, Target, Lightbulb, Handshake } from "lucide-react";

const modularAdvantages = [
  {
    icon: MapPin,
    title: "Portability",
    description: "Deploy anywhere, no infrastructure needed. Our container-sized units arrive ready to deploy.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Start with one unit, scale as you grow. Add capacity incrementally without massive upfront investment.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Risk",
    description: "100% buyback guarantee on fuel produced. Your revenue is secured from day one.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide scalable, sustainable waste-to-energy solutions that address India's growing plastic waste challenge while creating economic value.",
    highlight: true,
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Pioneering modular pyrolysis technology designed and manufactured in India for Indian conditions and global standards.",
    highlight: false,
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "Collaborating with industries, municipalities, and waste management companies to create a circular economy ecosystem.",
    highlight: false,
  },
];

export function AdvisorGrid() {
  return (
    <>
      {/* The Modular Advantage */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <FadeIn>
          <SectionHeader
            label="Our Revolution"
            title="The Modular Advantage"
            description="Unlike massive plants that need infrastructure, permits, and years of construction, our container-sized units arrive ready to deploy. Drop one at your facility, and within weeks you're converting waste into valuable fuel."
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {modularAdvantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="group flex flex-col rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-card-hover">
                  <div className="mb-4 inline-flex w-fit rounded-xl bg-bg-peach p-3">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-heading">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Made in India callout */}
        <FadeIn delay={0.3}>
          <div className="mt-8 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/5 to-bg-cream p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Made in India, For India</p>
            <p className="mt-3 text-base leading-relaxed text-body md:text-lg">
              Our engineering is rooted in understanding India&apos;s diverse waste streams, infrastructure challenges,
              and climatic conditions. We don&apos;t just import technology — we innovate for local needs,
              manufacture locally, and support with local teams.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <FadeIn>
          <SectionHeader
            label="What Drives Us"
            title="Our Values"
            description="What drives us to build better waste-to-energy solutions"
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div
                  className={`group flex h-full flex-col rounded-2xl border p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${
                    value.highlight
                      ? "border-brand/25 bg-gradient-to-br from-brand/5 to-bg-cream hover:border-brand/40"
                      : "border-border bg-white hover:border-brand/20"
                  }`}
                >
                  <div className="mb-4 inline-flex w-fit rounded-xl bg-bg-peach p-3">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-heading">{value.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}
