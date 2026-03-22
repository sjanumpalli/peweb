import { MapHero } from "@/components/sections/map-hero";
import { MapExplorer } from "@/components/sections/map-explorer";
import { MapSummary } from "@/components/sections/map-summary";

export const metadata = {
  title: "Map",
};

export default function MapPage() {
  return (
    <div className="min-h-screen">
      <MapHero />
      <MapExplorer />
      <MapSummary />
    </div>
  );
}
