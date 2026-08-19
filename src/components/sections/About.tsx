"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { Section } from "@/components/primitives/Section";
import { fadeUp, staggerContainer } from "@/constants/animations";

export function About() {
  const nameParts = profile.name.trim().split(/\s+/);
  const familyName = nameParts.at(-1) ?? "";
  const givenName = nameParts.slice(0, -1).join(" ");
  const fyndKeywords = ["5M+ records", "10K orders/day", "Node.js streams", "Rate limiting"];

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      hint="Who / How / Why"
      title={
        <>
          Engineering that stays reliable{" "}
          <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
            under scale.
          </span>
        </>
      }
      kicker={
        <>
          Production-minded engineering across Node.js, data pipelines, APIs, serverless workflows, and full stack products.
        </>
      }
    >
      <div className="grid gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] p-5 sm:p-7">
            <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-mute)]">
              <span>SDE Intern</span>
              <span>Since 2025</span>
            </div>

            <div className="hidden flex-col gap-4 lg:flex">
              <div className="font-serif text-[clamp(3.5rem,9vw,5.5rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-[color:var(--color-ink)]">
                {profile.wordmark}
              </div>
              <div className="h-px w-16 bg-[color:var(--color-emerald)]" />
              <div className="flex flex-col gap-1">
                <div className="font-serif text-2xl leading-tight tracking-tight text-[color:var(--color-ink)]">
                  {profile.name}
                </div>
                <div className="text-[13px] leading-snug text-[color:var(--color-ink-soft)]">
                  {profile.role}
                </div>
              </div>
            </div>

            <div className="flex min-w-0 items-end justify-between gap-4 lg:hidden">
              <div className="min-w-0 flex-1">
                <div className="font-serif text-[clamp(3.5rem,9vw,5.5rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-[color:var(--color-ink)]">
                  {profile.wordmark}
                </div>
                <div className="my-3 h-px w-16 bg-[color:var(--color-emerald)]" />
                <div className="flex max-w-[9rem] flex-col gap-0.5">
                  <div className="font-serif text-[clamp(1.15rem,5vw,1.5rem)] leading-tight tracking-tight text-[color:var(--color-ink)] [overflow-wrap:anywhere]">
                    {givenName}
                  </div>
                  <div className="font-serif text-[clamp(1.15rem,5vw,1.5rem)] leading-tight tracking-tight text-[color:var(--color-ink)] [overflow-wrap:anywhere]">
                    {familyName}
                  </div>
                  <div className="mt-1 text-[13px] leading-snug text-[color:var(--color-ink-soft)]">
                    {profile.role}
                  </div>
                </div>
              </div>

              <div className="flex w-[42%] min-w-0 flex-col items-end gap-2 text-right">
                {fyndKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="max-w-full rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)]/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[color:var(--color-ink-soft)] [overflow-wrap:anywhere]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[color:var(--color-hairline)] pt-5 font-mono text-[10.5px] uppercase tracking-[0.16em]">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[color:var(--color-ink-mute)]">Scale</span>
                  <span className="text-[color:var(--color-ink)] tabular-nums">5M+</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[color:var(--color-ink-mute)]">Mode</span>
                  <span className="text-[color:var(--color-ink)]">Node.js</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[color:var(--color-ink-mute)]">Base</span>
                  <span className="text-[color:var(--color-ink)]">{profile.timezone}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[color:var(--color-ink-mute)]">Status</span>
                  <span className="inline-flex items-center gap-1.5 text-[color:var(--color-emerald)]">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-emerald)] animate-pulse-dot" />
                    SDE roles
                  </span>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
            <span className="[overflow-wrap:anywhere]">Card · {profile.name}</span>
            <span>{profile.location}</span>
          </figcaption>
        </motion.figure>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col gap-6 pt-2"
        >
          {profile.bio.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="max-w-2xl text-[17px] leading-[1.7] text-[color:var(--color-ink)] text-pretty first:text-[19px] first:font-serif first:leading-[1.35] first:tracking-[-0.01em]"
            >
              {para}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="mt-6 grid grid-cols-2 gap-4 border-t border-[color:var(--color-hairline)] pt-8 sm:grid-cols-4">
            {experience.map((role, i) => (
              <div key={role.company} className="flex flex-col gap-1">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-mute)]">
                  0{i + 1}
                </div>
                <div className="font-serif text-lg leading-tight">{role.company}</div>
                <div className="text-[11px] text-[color:var(--color-ink-soft)]">
                  {role.start} — {role.end}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
