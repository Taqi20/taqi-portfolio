import { cn } from "@/lib/cn";

export function GradientRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-[color:var(--color-hairline-strong)] to-transparent",
        className
      )}
    />
  );
}

