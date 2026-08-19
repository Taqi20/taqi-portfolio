"use client";

import { useEffect } from "react";

import { scrollToId } from "@/hooks/useLenis";

export function HashScroll() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => scrollToId(id), 400);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
