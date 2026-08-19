import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "transition-[transform,background,color,border,box-shadow] duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-emerald)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]",
    "disabled:pointer-events-none disabled:opacity-50 select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--color-ink)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-emerald)] hover:text-white active:scale-[0.98]",
        secondary:
          "bg-[color:var(--color-surface)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface-2)] border border-[color:var(--color-hairline)]",
        ghost:
          "bg-transparent text-[color:var(--color-ink)] border border-[color:var(--color-hairline)] hover:border-[color:var(--color-ink)]",
        emerald:
          "bg-[color:var(--color-emerald)] text-white hover:brightness-110 active:scale-[0.98]",
        link:
          "bg-transparent text-[color:var(--color-ink)] underline-offset-4 hover:underline decoration-[color:var(--color-emerald)]",
      },
      size: {
        sm: "h-9 px-4 text-[13px] rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-14 px-8 text-[15px] rounded-full tracking-tight",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };

