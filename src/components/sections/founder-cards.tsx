"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Linkedin, Twitter, Quote } from "lucide-react";

interface Founder {
  name: string;
  initials: string;
  role: string;
  bio: string;
  quote: string;
}

const founders: Founder[] = [
  {
    name: "Dinesh Reddy",
    initials: "DR",
    role: "Co-Founder",
    bio: "With decades building industrial ecosystems, Dinesh saw first-hand how traditional waste management was failing India. His vision: make waste-to-energy so accessible that every factory, every municipality could have their own solution.",
    quote:
      "We're not just building machines. We're creating an infrastructure revolution—one container at a time.",
  },
  {
    name: "Satish Janumpalli",
    initials: "SJ",
    role: "Co-Founder & CTO",
    bio: "A technology pioneer, Satish believed the recycling industry needed digitalization and smart engineering. His mission: design pyrolysis systems that are not just efficient, but intelligent and maintainable across India's diverse conditions.",
    quote:
      "Technology should democratize sustainability. Our modular systems put powerful clean energy in the hands of everyone.",
  },
];

function FounderAvatar({ initials }: { initials: string }) {
  return (
    <div className="relative flex h-48 w-44 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-bg-cream md:h-64 md:w-56">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-warm to-bg-cream" />
      {[80, 130, 180].map((size) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10"
          style={{ width: size, height: size }}
        />
      ))}
      <span className="relative z-10 font-heading text-5xl font-bold text-brand/40 md:text-6xl">
        {initials}
      </span>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-3">
      <a
        href="#"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-border bg-white text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand hover:shadow-card"
        aria-label="LinkedIn profile"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href="#"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-border bg-white text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand hover:shadow-card"
        aria-label="X profile"
      >
        <Twitter className="h-4 w-4" />
      </a>
    </div>
  );
}

export function FounderCards() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <FadeIn>
        <SectionHeader
          label="Leadership"
          title="The Vision Behind Polymer Energy"
          description="Our founders shared a conviction: India's waste problem demands decentralized solutions. Not massive plants that take years to build, but agile systems that go wherever waste is generated."
        />
      </FadeIn>

      <div className="mt-12 space-y-8">
        {founders.map((founder, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <FadeIn key={founder.name} delay={i * 0.15}>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover md:p-12">
                <div
                  className={cn(
                    "flex flex-col items-start gap-8 md:flex-row md:items-center",
                    isReversed && "md:flex-row-reverse",
                  )}
                >
                  <FounderAvatar initials={founder.initials} />
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl font-bold text-heading md:text-3xl">
                      {founder.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand">
                      {founder.role}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-body">
                      {founder.bio}
                    </p>

                    {/* Quote */}
                    <div className="mt-5 flex gap-3 rounded-xl border border-brand/15 bg-brand/5 p-4">
                      <Quote className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                      <p className="text-sm italic leading-relaxed text-heading">
                        {founder.quote}
                      </p>
                    </div>

                    <div className="mt-5">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
