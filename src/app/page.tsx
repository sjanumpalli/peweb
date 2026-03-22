import { HeroSection } from "@/components/sections/hero-section";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { ImpactStats } from "@/components/sections/impact-stats";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersStrip />
      <ImpactStats />
      <HowItWorks />
      <CtaSection />
    </>
  );
}
