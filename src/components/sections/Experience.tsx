"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { experience } from "@/data/experience";
import { Section } from "@/components/primitives/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer } from "@/constants/animations";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      hint={`${experience.length} roles · full stack and backend`}
      title={
        <>
          Production work across{" "}
          <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
            data
          </span>
          , APIs, and customer workflows.
        </>
      }
      kicker={
        <>Each build adds practical depth across Node.js, APIs, data flow, asynchronous processing, and dependable delivery.</>
      }
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute bottom-5 left-0 top-5 z-0 block w-0.5 bg-gradient-to-b from-[color:var(--color-emerald)] via-[color:var(--color-emerald)] to-[color:var(--color-hairline-strong)] opacity-80 lg:hidden"
          aria-hidden
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute bottom-5 left-0 top-5 z-0 hidden w-0.5 origin-top bg-gradient-to-b from-[color:var(--color-emerald)] via-[color:var(--color-emerald)] to-[color:var(--color-hairline-strong)] opacity-80 lg:block"
          aria-hidden
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="relative z-10 ml-7 flex flex-col gap-3 md:ml-10"
        >
          <Accordion type="single" collapsible defaultValue={experience[0]?.company}>
            {experience.map((role) => (
              <motion.div key={role.company} variants={fadeUp}>
                <AccordionItem value={role.company} className="relative rounded-2xl border-none px-0">
                  <div className="pointer-events-none absolute -left-7 top-6 z-10 block h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[color:var(--color-bg)] bg-[color:var(--color-emerald)] md:-left-10" aria-hidden />
                  {role.githubLinks && role.githubLinks.length > 0 && (
                    <div className="absolute right-10 top-5 z-20 flex items-center gap-1.5">
                      {role.githubLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Open ${link.label} on GitHub`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)] text-[color:var(--color-ink-soft)] transition-[transform,background,color,border] hover:-translate-y-0.5 hover:border-[color:var(--color-emerald)] hover:bg-[color:var(--color-emerald-soft)] hover:text-[color:var(--color-emerald)]"
                        >
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                  <AccordionTrigger className="group flex-col items-start gap-3 !py-6 pr-24 md:flex-row md:items-center md:justify-between md:pr-28">
                    <div className="flex w-full flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                      <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)] md:min-w-[7rem]">
                        {role.start} — {role.end}
                        {role.current && (
                          <span className="ml-2 inline-flex items-center gap-1 text-[color:var(--color-emerald)]">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-emerald)] animate-pulse-dot" />
                            live
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-serif text-2xl leading-tight tracking-tight group-hover:text-[color:var(--color-emerald)] md:text-3xl">
                          {role.company}
                        </h3>
                        <div className="text-sm text-[color:var(--color-ink-soft)]">{role.role}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                      <div className="flex flex-col gap-6">
                        <p className="max-w-xl text-[15px] leading-relaxed text-[color:var(--color-ink)]">
                          {role.summary}
                        </p>
                        <ul className="flex flex-col gap-3">
                          {role.achievements.map((a, i) => (
                            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-emerald)]" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {role.stack.map((t) => (
                            <Badge key={t}>{t}</Badge>
                          ))}
                        </div>
                      </div>
                      {role.impact && role.impact.length > 0 && (
                        <div className="relative flex flex-col items-center rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] p-5 text-center sm:p-6 md:items-stretch md:p-7 md:text-left">
                          <div className="flex w-full flex-wrap items-center justify-between gap-3 border-b border-[color:var(--color-hairline)] pb-4">
                            <div className="flex items-center gap-2">
                              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-emerald)]" />
                              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink)]">
                                Measured impact
                              </span>
                            </div>
                            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)] tabular-nums">
                              {role.impact.length.toString().padStart(2, "0")}
                            </span>
                          </div>

                          <ul className="flex flex-col divide-y divide-[color:var(--color-hairline)]">
                            {role.impact.map((m, mi) => (
                              <li key={m.label} className="flex flex-col items-center gap-2 py-5 text-center first:pt-6 last:pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:items-baseline md:text-left">
                                <div className="min-w-0 flex flex-col gap-1">
                                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)] tabular-nums">
                                    {String(mi + 1).padStart(2, "0")}
                                  </div>
                                  <div className="text-[13px] leading-snug text-[color:var(--color-ink-soft)] text-pretty">
                                    {m.label}
                                  </div>
                                </div>
                                <div className="shrink-0 font-serif text-4xl font-semibold leading-none tracking-[-0.03em] text-[color:var(--color-ink)] md:text-5xl">
                                  {m.metric}
                                </div>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-4 flex flex-col items-center gap-2 border-t border-[color:var(--color-hairline)] pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)] sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:items-start">
                            <span>Role · {role.role.split(" ").slice(-2).join(" ")}</span>
                            <span className="tabular-nums">{role.stack.length} tools · shipped</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
}
