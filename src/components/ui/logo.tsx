import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className, size = 32, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logo.jpeg"
        alt="Polymer Energy"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-heading text-lg font-bold tracking-tight text-heading">
            Polymer Energy
          </span>
        </div>
      )}
    </div>
  );
}
