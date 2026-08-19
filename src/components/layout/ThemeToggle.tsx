import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)]/60 text-[color:var(--color-ink-soft)] backdrop-blur transition-colors hover:text-[color:var(--color-ink)] md:h-9 md:w-9",
        className
      )}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
