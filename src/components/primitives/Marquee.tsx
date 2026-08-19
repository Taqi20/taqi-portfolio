import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Marquee({
  children,
  duration = 40,
  className,
  reverse = false,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden mask-fade-x", className)}>
      <div
        className="flex w-max animate-marquee"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

