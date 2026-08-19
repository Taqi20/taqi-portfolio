"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easings } from "@/constants/animations";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: easings.outExpo }}
    >
      {children}
    </motion.main>
  );
}
