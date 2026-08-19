import { Button, type ButtonProps } from "@/components/ui/button";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/cn";

export function MagneticButton({ className, children, ...props }: ButtonProps) {
  const ref = useMagnetic<HTMLButtonElement>(0.25);

  return (
    <Button
      ref={ref}
      className={cn("will-change-transform", className)}
      {...props}
    >
      <span className="pointer-events-none inline-flex items-center gap-2">{children}</span>
    </Button>
  );
}
