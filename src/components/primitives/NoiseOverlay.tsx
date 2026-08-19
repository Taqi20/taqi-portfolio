import { cn } from "@/lib/cn";

export function NoiseOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] opacity-[0.06] mix-blend-overlay dark:opacity-[0.09] dark:mix-blend-soft-light",
        "[background-image:url('/grain.svg')] [background-size:200px_200px]",
        className
      )}
    />
  );
}

