import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-[2px] w-full">
      <div
        className="h-full origin-left bg-gradient-to-r from-[color:var(--color-emerald)] via-[color:var(--color-indigo)] to-[color:var(--color-violet)] transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

