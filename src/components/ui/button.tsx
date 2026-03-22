import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "bg-surface border border-border text-heading hover:border-brand hover:text-brand hover:bg-surface-hover",
  outline:
    "border-2 border-brand text-brand bg-transparent hover:bg-brand hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-body hover:text-heading hover:bg-surface-hover",
} as const;

const sizes = {
  sm: "px-5 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-xl",
  lg: "px-8 py-3.5 text-base rounded-xl",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out",
          "focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none",
          "disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
