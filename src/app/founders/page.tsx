import { FoundersHero } from "@/components/sections/founders-hero";
import { FounderCards } from "@/components/sections/founder-cards";
import { AdvisorGrid } from "@/components/sections/advisor-grid";
import { JoinTeam } from "@/components/sections/join-team";

export const metadata = { title: "About" };

export default function FoundersPage() {
  return (
    <>
      <FoundersHero />
      <FounderCards />
      <AdvisorGrid />
      <JoinTeam />
    </>
  );
}
