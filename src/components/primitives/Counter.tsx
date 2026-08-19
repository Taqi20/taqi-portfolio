"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Counter({
  value,
  duration = 1400,
  className,
  suffix = "",
}: {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [animatedDisplay, setAnimatedDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;

    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setAnimatedDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setAnimatedDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);

  const isInt = Number.isInteger(value);
  const display = reduced ? value : animatedDisplay;
  const rendered = isInt ? Math.round(display).toString() : display.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {rendered}
      {suffix}
    </span>
  );
}
