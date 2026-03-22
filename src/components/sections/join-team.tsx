"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Factory, Building2, Globe } from "lucide-react";

const impacts = [
  {
    icon: Factory,
    audience: "For Industries",
    headline: "Turn waste into a revenue stream",
    description:
      "Transform your waste management cost center into a revenue stream. Process waste on-site, reduce logistics, and achieve sustainability goals.",
  },
  {
    icon: Building2,
    audience: "For Communities",
    headline: "Cleaner cities, local energy",
    description:
      "Cleaner cities, reduced landfills, and local energy generation. Our systems help municipalities solve waste problems while creating economic value.",
  },
  {
    icon: Globe,
    audience: "For India",
    headline: "A distributed energy network",
    description:
      "A distributed energy network powered by waste. Energy independence, reduced imports, and a cleaner environment — all from resources we already have.",
  },
];

export function JoinTeam() {
  return (
    <>
      {/* Impact section */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <FadeIn>
          <SectionHeader
            label="Beyond Technology"
            title="The Impact We're Creating"
            description="Transforming how India thinks about waste — from burden to opportunity"
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {impacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.audience} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-card-hover">
                  <div className="mb-4 inline-flex w-fit rounded-xl bg-bg-peach p-3">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {item.audience}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold text-heading">
                    {item.headline}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Closing quote */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <FadeIn>
          <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/5 via-bg-cream to-bg-sky p-10 text-center md:p-16">
            <p className="mx-auto max-w-3xl font-heading text-xl font-medium leading-relaxed text-heading md:text-2xl">
              &ldquo;We&apos;re creating a distributed energy network powered by
              waste. Every industrial cluster, every municipality can become
              energy self-sufficient while solving their waste problem. That&apos;s
              the circular economy India deserves.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold text-brand">
              — Polymer Energy Leadership Team
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
