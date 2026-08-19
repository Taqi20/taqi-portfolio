"use client";

import { AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Nav } from "@/components/layout/Nav";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SkipLink } from "@/components/layout/SkipLink";

export function PortfolioShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <LenisProvider>
      <SkipLink />
      <ScrollProgress />
      <Nav />
      <div id="main">
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>{children}</PageTransition>
        </AnimatePresence>
      </div>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "!font-mono !text-[11px] !uppercase !tracking-[0.14em] !rounded-full",
        }}
      />
      <Analytics />
    </LenisProvider>
  );
}
