"use client";

import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { stats } from "@/data/stats";
import { Button } from "@/components/ui/button";
import { ShaderBackdrop } from "@/components/primitives/ShaderBackdrop";
import { NoiseOverlay } from "@/components/primitives/NoiseOverlay";
import { StatusPill } from "@/components/primitives/StatusPill";
import { Counter } from "@/components/primitives/Counter";
import { RevealText } from "@/components/primitives/RevealText";
import { easings } from "@/constants/animations";

export function Hero() {
  const specs = [
    { label: "Availability", value: profile.availabilityLabel },
    { label: "Response", value: profile.responseTime },
    { label: "Focus", value: profile.currentFocus },
    { label: "Location", value: `${profile.location} · ${profile.timezone}` },
  ];

  return (
    <section
      id="hero"
      className="relative isolate flex w-full flex-col overflow-hidden pt-24 md:pt-28"
    >
      <ShaderBackdrop className="opacity-90" />
      <NoiseOverlay />

      <div className="relative z-10 container-page flex flex-col gap-8 py-6 md:gap-12 md:py-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-7 md:gap-8">
            <h1 className="font-serif text-[clamp(2.1rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.035em] text-balance lg:text-[clamp(2.75rem,4vw,3.75rem)]">
              <RevealText text={`${profile.headline.lead}`} className="mr-4" />
              <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
                <RevealText text={profile.headline.accent} delay={0.15} />
              </span>{" "}
              <RevealText text={profile.headline.trail} delay={0.3} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: easings.outExpo }}
              className="max-w-xl text-[15px] leading-relaxed text-[color:var(--color-ink-soft)] text-pretty md:text-base"
            >
              {profile.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: easings.outExpo }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button variant="ghost" size="lg" asChild>
                <a href={`mailto:${profile.email}`}>
                  Email <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="primary" size="lg" asChild>
                <Link href="/resume">
                  Resume <FileText className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: easings.outExpo }}
            className="relative rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)]/70 p-5 backdrop-blur-xl shadow-[var(--shadow-soft)] sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
                Spec sheet
              </div>
              <StatusPill status={profile.availability} label={profile.availabilityLabel} />
            </div>

            <dl className="mt-6 grid gap-4">
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 border-b border-[color:var(--color-hairline)] pb-3 last:border-none last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-mute)]">
                    {s.label}
                  </dt>
                  <dd className="max-w-none text-left text-sm text-[color:var(--color-ink)] [overflow-wrap:anywhere] sm:max-w-[60%] sm:text-right">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[color:var(--color-hairline)] pt-6">
              {stats.map((s, i) => {
                const numeric = parseFloat(s.metric);
                return (
                  <div key={s.label} className="flex flex-col gap-1">
                    <div className="font-mono text-[10.5px] tabular-nums uppercase tracking-[0.16em] text-[color:var(--color-ink-mute)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-serif text-3xl tracking-tight text-[color:var(--color-ink)]">
                      <Counter value={numeric} suffix={s.suffix ?? ""} />
                    </div>
                    <div className="text-[11px] leading-snug text-[color:var(--color-ink-soft)]">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.aside>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-[color:var(--color-hairline)] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
            <span>Scroll</span>
            <span className="h-px w-8 bg-[color:var(--color-hairline-strong)]" />
            <span className="text-[color:var(--color-ink-soft)]">Next · About</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
            <span>Stack · Node.js · TypeScript · PostgreSQL</span>
            <span className="hidden md:inline">·</span>
            <span>{profile.timezone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
