"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Section } from "@/components/primitives/Section";
import { fadeUp, staggerContainer } from "@/constants/animations";
import { cn } from "@/lib/cn";

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      hint={`${skillCategories.length} categories`}
      title={
        <>
          The stack behind{" "}
          <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
            the systems
          </span>
          .
        </>
      }
      kicker={
        <>Grouped by the kind of work I have used them for: systems, integrations, delivery, and product builds.</>
      }
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillCategories.map((cat, i) => (
          <motion.article
            key={cat.id}
            variants={fadeUp}
            className={cn(
              "group relative flex flex-col gap-5 rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)] p-6 transition-all duration-500",
              "hover:-translate-y-1 hover:border-[color:var(--color-ink)] hover:shadow-[var(--shadow-lift)]"
            )}
          >
            <div className="flex items-baseline justify-between">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
                0{i + 1}
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
                {cat.skills.length}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-2xl leading-tight tracking-tight">{cat.label}</h3>
              <p className="text-[13px] text-[color:var(--color-ink-soft)]">{cat.caption}</p>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {cat.skills.map((s) => (
                <li
                  key={s.name}
                  className="rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-2.5 py-1 font-mono text-[11px] tracking-[0.04em] text-[color:var(--color-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-emerald)] hover:text-[color:var(--color-emerald-ink)]"
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
