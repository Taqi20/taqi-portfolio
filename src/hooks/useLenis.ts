import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "./useReducedMotion";

let lenisInstance: Lenis | null = null;

export function useLenisSetup() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      lenisInstance?.destroy();
      lenisInstance = null;
      return;
    }

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.05,
      touchMultiplier: window.matchMedia("(pointer: coarse)").matches ? 1 : 1.5,
      smoothWheel: true,
    });

    lenisInstance = lenis;
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [reduced]);
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -80, duration: 0.85 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 0.85 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
