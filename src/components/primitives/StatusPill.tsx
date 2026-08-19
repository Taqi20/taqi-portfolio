import { cn } from "@/lib/cn";
import type { Profile } from "@/types/profile";

const tone: Record<Profile["availability"], string> = {
  open: "bg-[color:var(--color-emerald)]",
  limited: "bg-amber-400",
  closed: "bg-red-400",
};

export function StatusPill({
  status,
  label,
  className,
}: {
  status: Profile["availability"];
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)]/70 px-3 py-1.5 backdrop-blur-sm",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={cn("absolute inset-0 rounded-full opacity-60 animate-ping", tone[status])}
        />
        <span className={cn("relative inline-block h-1.5 w-1.5 rounded-full", tone[status])} />
      </span>
      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-soft)]">
        {label}
      </span>
    </span>
  );
}

