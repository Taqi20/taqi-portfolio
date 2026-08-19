import { ArrowUpRight, Mail } from "lucide-react";

import { Section } from "@/components/primitives/Section";
import { StatusPill } from "@/components/primitives/StatusPill";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      hint="Email / GitHub / LinkedIn"
      title={
        <>
          Reach out for{" "}
          <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
            engineering
          </span>
          conversations.
        </>
      }
      kicker={
        <>For SDE opportunities, backend or full stack roles, technical discussions, and resume follow-ups.</>
      }
    >
      <div>
        <div className="rounded-3xl border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)] p-5 sm:p-8">
          <StatusPill status={profile.availability} label={profile.availabilityLabel} />
          <h3 className="mt-5 font-serif text-3xl leading-tight tracking-tight">
            Open to{" "}
            <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
              select
            </span>{" "}
            SDE opportunities.
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--color-ink-soft)]">
            Best aligned with full stack or backend engineering roles involving Node.js, React.js, APIs,
            microservices, databases, and production systems.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink)] transition-colors hover:border-[color:var(--color-ink)]"
            >
              <Mail className="h-3.5 w-3.5" />
              Email directly
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/taqi20"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] font-sans text-sm font-semibold lowercase text-[color:var(--color-ink-soft)] transition-colors hover:border-[color:var(--color-emerald)] hover:bg-[color:var(--color-emerald-soft)] hover:text-[color:var(--color-emerald)]"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
