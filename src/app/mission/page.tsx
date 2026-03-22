import { MissionHero } from "@/components/sections/mission-hero";
import { ProblemStats } from "@/components/sections/problem-stats";
import { SolutionFlow } from "@/components/sections/solution-flow";
import { PillarsGrid } from "@/components/sections/pillars-grid";

export const metadata = {
  title: "Mission",
};

export default function MissionPage() {
  return (
    <>
      <MissionHero />
      <ProblemStats />
      <SolutionFlow />
      <PillarsGrid />
    </>
  );
}
