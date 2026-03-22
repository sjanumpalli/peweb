import { HeroSection } from "@/components/sections/hero-section";
import { ImpactStats } from "@/components/sections/impact-stats";
import { TechFeatures } from "@/components/sections/tech-features";
import { PolymerGuarantee } from "@/components/sections/polymer-guarantee";
import { TechSpecs } from "@/components/sections/tech-specs";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <TechFeatures />
      <PolymerGuarantee />
      <TechSpecs />
      <PartnersStrip />
      <CtaSection />
    </>
  );
}
