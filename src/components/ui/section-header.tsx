import { cn } from "@/lib/utils";
import { Badge } from "./badge";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <Badge>{label}</Badge>
      <h2 className="mt-5 font-heading text-4xl leading-[1.15] text-heading md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
