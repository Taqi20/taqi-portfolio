import * as React from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "default" | "emerald" | "ghost";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-[0.14em]",
        tone === "default" && "border border-[color:var(--color-hairline)] text-[color:var(--color-ink-soft)]",
        tone === "emerald" && "bg-[color:var(--color-emerald-soft)] text-[color:var(--color-emerald-ink)]",
        tone === "ghost" && "text-[color:var(--color-ink-mute)]",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

