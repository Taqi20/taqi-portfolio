import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MetaLabel } from "@/components/primitives/MetaLabel";
import { profile } from "@/data/profile";
import { resumeExperience, resumeSkills } from "@/lib/resumeContent";

export function Resume() {
  const experience = resumeExperience();
  const skillCategories = resumeSkills();

  return (
    <div className="pt-28 pb-24 md:pt-32">
      <div className="container-page">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 no-print">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to portfolio
          </Link>
          <Button variant="primary" size="sm" asChild>
            <a href={profile.resumeUrl} download>
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>

        <article className="print-page relative mx-auto max-w-[820px] rounded-3xl border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)] p-5 shadow-[var(--shadow-soft)] sm:p-8 md:p-14">
          <header className="flex flex-col gap-6 border-b border-[color:var(--color-hairline)] pb-8">
            <MetaLabel index="§" label="Résumé" hint={new Date().getFullYear().toString()} />
            <div className="flex flex-col gap-3">
              <h1 className="font-serif text-4xl leading-none tracking-[-0.02em] sm:text-5xl">
                {profile.name.split(" ")[0]}{" "}
                <span className="italic text-[color:var(--color-emerald-ink)]">
                  {profile.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="text-[15px] text-[color:var(--color-ink-soft)]">
                {profile.role} · {profile.tagline}
              </p>
            </div>
            <div className="grid gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-soft)] sm:grid-cols-2 md:grid-cols-4">
              <span className="min-w-0 [overflow-wrap:anywhere]">{profile.email}</span>
              <span>{profile.location}</span>
              <span>{profile.timezone}</span>
            </div>
          </header>

          <section className="mt-10 grid gap-3 border-b border-[color:var(--color-hairline)] pb-10">
            <SubHeading label="Summary" />
            <p className="text-[14.5px] leading-relaxed text-pretty">{profile.sub}</p>
          </section>

          <section className="mt-10 flex flex-col gap-8 border-b border-[color:var(--color-hairline)] pb-10">
            <SubHeading label="Experience" />
            <div className="flex flex-col gap-8">
              {experience.map((role) => (
                <div key={role.company} className="grid gap-3 md:grid-cols-[9rem_1fr]">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-mute)]">
                    {role.start} — {role.end}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-serif text-2xl leading-tight">{role.company}</h3>
                      <span className="text-[13px] text-[color:var(--color-ink-soft)]">· {role.role}</span>
                    </div>
                    <ul className="flex flex-col gap-1.5 text-[13.5px] leading-relaxed text-[color:var(--color-ink-soft)]">
                      {role.achievements.map((achievement, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-emerald)]" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {role.stack.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-2.5 py-1 font-mono text-[11px] tracking-[0.04em] text-[color:var(--color-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-emerald)] hover:text-[color:var(--color-emerald-ink)]"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-4">
            <SubHeading label="Skills" />
            <div className="grid gap-4 md:grid-cols-2">
              {skillCategories.map((category) => (
                <div key={category.id}>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[color:var(--color-ink-mute)]">
                    {category.label}
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-2.5 py-1 font-mono text-[11px] tracking-[0.04em] text-[color:var(--color-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-emerald)] hover:text-[color:var(--color-emerald-ink)]"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </article>
      </div>
    </div>
  );
}

function SubHeading({ label }: { label: string }) {
  return (
    <h2 className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
      <span className="h-px w-6 bg-[color:var(--color-hairline-strong)]" />
      {label}
    </h2>
  );
}
