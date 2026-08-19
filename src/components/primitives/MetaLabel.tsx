import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function MetaLabel({
  index,
  label,
  hint,
  className,
  children,
}: {
  index?: string;
  label: string;
  hint?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-soft)]",
        className
      )}
    >
      {index && (
        <span className="shrink-0 tabular-nums text-[color:var(--color-ink-mute)]">§ {index}</span>
      )}
      <span className="h-px w-6 bg-[color:var(--color-hairline-strong)]" aria-hidden />
      <span className="min-w-0 text-[color:var(--color-ink)] [overflow-wrap:anywhere]">{label}</span>
      {hint && (
        <>
          <span className="text-[color:var(--color-ink-mute)]">/</span>
          <span className="min-w-0 text-[color:var(--color-ink-mute)] [overflow-wrap:anywhere]">{hint}</span>
        </>
      )}
      {children}
    </div>
  );
}
