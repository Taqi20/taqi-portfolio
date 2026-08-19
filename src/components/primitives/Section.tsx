"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, staggerContainer } from "@/constants/animations";
import { MetaLabel } from "./MetaLabel";

interface SectionProps {
  id: string;
  index?: string;
  eyebrow: string;
  hint?: string;
  title?: ReactNode;
  kicker?: ReactNode;
  children: ReactNode;
  container?: "page" | "narrow" | "fluid";
  className?: string;
  headingClassName?: string;
  bare?: boolean;
}

export function Section({
  id,
  index,
  eyebrow,
  hint,
  title,
  kicker,
  children,
  container = "page",
  className,
  headingClassName,
  bare = false,
}: SectionProps) {
  const wrap =
    container === "page"
      ? "container-page"
      : container === "narrow"
        ? "container-narrow"
        : "";

  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-20 lg:py-24",
        className
      )}
    >
      <div className={cn(wrap)}>
        {!bare && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-10 flex flex-col gap-5 md:mb-14"
          >
            <motion.div variants={fadeUp}>
              <MetaLabel index={index} label={eyebrow} hint={hint} />
            </motion.div>
            {title && (
              <motion.h2
                variants={fadeUp}
                className={cn(
                  "max-w-3xl font-serif text-[clamp(2.4rem,5.2vw,4.5rem)] leading-[0.98] tracking-[-0.02em] text-balance",
                  headingClassName
                )}
              >
                {title}
              </motion.h2>
            )}
            {kicker && (
              <motion.div
                variants={fadeUp}
                className="max-w-xl text-[color:var(--color-ink-soft)] text-[15px] leading-relaxed text-pretty"
              >
                {kicker}
              </motion.div>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
