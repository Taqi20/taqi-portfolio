"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { scrollToTop } from "@/hooks/useLenis";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { MagneticButton } from "@/components/primitives/MagneticButton";

export function Footer() {
  const progress = useScrollProgress();

  return (
    <footer className="relative border-t border-[color:var(--color-hairline)] bg-[color:var(--color-bg)]">
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(180px,auto)]">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em]">
              <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--color-emerald)] animate-pulse-dot" />
              {profile.wordmark}
            </Link>
            <p className="max-w-sm font-serif text-2xl leading-tight text-balance">
              {profile.tagline}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
              Available for SDE opportunities. The best way to reach me is email, LinkedIn, or GitHub.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-emerald)] hover:underline underline-offset-4 [overflow-wrap:anywhere]"
            >
              {profile.email} →
            </a>
          </div>
          <div className="hidden self-center md:block md:justify-self-end">
            <SocialLinks vertical />
          </div>
        </div>
        <div className="mt-16 border-t border-[color:var(--color-hairline)] pt-8 md:hidden">
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
      {progress >= 0.1 && (
        <MagneticButton
          variant="secondary"
          size="icon"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 cursor-pointer shadow-[var(--shadow-soft)] md:bottom-6 md:right-6"
        >
          <ArrowUp className="h-4 w-4" />
        </MagneticButton>
      )}
    </footer>
  );
}

function SocialLinks({ vertical = false }: { vertical?: boolean }) {
  const visibleSocials = profile.socials.filter((social) => social.label !== "Email");

  return (
    <div
      className={
        vertical
          ? "flex min-w-0 flex-col items-end gap-3"
          : "flex w-full min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-2"
      }
    >
      {visibleSocials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
          className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-emerald)] [overflow-wrap:anywhere]"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
