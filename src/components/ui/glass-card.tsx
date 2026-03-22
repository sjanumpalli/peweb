import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-white p-6 shadow-card",
        hover && "transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
