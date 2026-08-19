"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/constants/animations";
import { cn } from "@/lib/cn";

interface ScrollRevealProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
