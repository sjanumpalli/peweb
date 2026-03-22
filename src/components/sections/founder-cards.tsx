"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";
import { Linkedin, Twitter } from "lucide-react";

interface Founder {
  name: string;
  initials: string;
  role: string;
  bio: string;
}

const founders: Founder[] = [
  {
    name: "Rajesh Kumar",
    initials: "RK",
    role: "Co-Founder & CEO",
    bio: "With 15+ years in sustainable energy and waste management, Rajesh saw firsthand how India\u2019s plastic crisis was growing faster than any solution could address. A chemical engineering background and deep industry experience led him to found Polymer Energy \u2014 making recycling not just sustainable, but profitable for local communities.",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "Co-Founder & CTO",
    bio: "A PhD in polymer science and ex-IIT researcher, Priya spent years designing industrial recycling systems before creating the compact micro-recycler that became Polymer Energy\u2019s core product. Her vision: a recycling system so small and efficient it can go anywhere.",
  },
  {
    name: "Amit Patel",
    initials: "AP",
    role: "Co-Founder & COO",
    bio: "An operations expert who has scaled 3 cleantech startups, Amit brings deep experience in deploying technology across underserved regions. His focus is on building sustainable partnerships with local governments, waste pickers, and community leaders to make decentralized recycling a reality.",
  },
];

function FounderAvatar({ initials }: { initials: string }) {
  return (
    <div className="relative flex h-52 w-48 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-bg-cream md:h-64 md:w-56">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-warm to-bg-cream" />
      {[100, 150, 200].map((size) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
          style={{ width: size, height: size }}
        />
      ))}
      <span className="relative z-10 font-heading text-5xl font-bold text-heading/50 grayscale transition-all duration-200 hover:text-heading/70 hover:grayscale-0 md:text-6xl">
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
    <section className="mx-auto max-w-5xl px-6 pb-24">
      {founders.map((founder, i) => {
        const isReversed = i % 2 !== 0;
        return (
          <FadeIn key={founder.name} delay={i * 0.1}>
            <div className="mb-12 rounded-xl border border-border bg-white p-10 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover md:p-14">
              <div
                className={cn(
                  "flex flex-col items-center gap-10 md:flex-row",
                  isReversed && "md:flex-row-reverse",
                )}
              >
                <FounderAvatar initials={founder.initials} />
                <div className="flex-1">
                  <h2 className="font-heading text-2xl font-bold text-heading md:text-3xl">
                    {founder.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-brand">
                    {founder.role}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-body">
                    {founder.bio}
                  </p>
                  <div className="mt-6">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </section>
  );
}
