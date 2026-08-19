"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Section } from "@/components/primitives/Section";
import { fadeUp, staggerContainer } from "@/constants/animations";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Strengths"
      title={
        <>
          Engineering areas where I{" "}
          <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
            add
          </span>{" "}
          value.
        </>
      }
      kicker={
        <>A resume-grounded view of the systems, product flows, and delivery practices I have worked on.</>
      }
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--color-ink)] hover:shadow-[var(--shadow-lift)]"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--color-emerald)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-emerald-soft)] text-[color:var(--color-emerald-ink)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="mt-6 font-serif text-2xl leading-tight tracking-tight">
                {service.name}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-ink-soft)] text-pretty">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-col gap-1.5 border-t border-[color:var(--color-hairline)] pt-4">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-ink-soft)]">
                    <span className="h-1 w-1 rounded-full bg-[color:var(--color-emerald)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
