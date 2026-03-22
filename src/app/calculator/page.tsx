import { CalculatorHero } from "@/components/sections/calculator-hero";
import { CalculatorTool } from "@/components/sections/calculator-tool";
import { CalculatorCta } from "@/components/sections/calculator-cta";

export const metadata = {
  title: "Calculator",
};

export default function CalculatorPage() {
  return (
    <>
      <CalculatorHero />
      <CalculatorTool />
      <CalculatorCta />
    </>
  );
}
