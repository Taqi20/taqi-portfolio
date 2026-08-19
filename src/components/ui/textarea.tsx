import * as React from "react";
import { cn } from "@/lib/cn";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[140px] w-full rounded-lg border border-[color:var(--color-hairline)] bg-transparent px-4 py-3 text-sm leading-relaxed",
        "placeholder:text-[color:var(--color-ink-mute)] focus:outline-none focus:border-[color:var(--color-ink)]",
        "transition-colors resize-none",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

