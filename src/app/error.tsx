"use client";

import { RotateCcw } from "lucide-react";

import { MetaLabel } from "@/components/primitives/MetaLabel";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <section className="relative isolate flex min-h-[80dvh] items-center overflow-hidden pt-28">
      <div className="container-page relative z-10 grid gap-8">
        <MetaLabel index="500" label="Runtime interruption" hint="Retry available" />
        <h1 className="max-w-3xl font-serif text-[clamp(3rem,10vw,7rem)] leading-none tracking-[-0.02em]">
          This build hit an unexpected{" "}
          <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
            state
          </span>
          .
        </h1>
        <p className="max-w-lg text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
          Something interrupted this page while it was rendering. Try the request again or return to the portfolio.
        </p>
        <div className="flex items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => retry()}
            className="px-2 text-[11px] sm:px-8 sm:text-[15px]"
          >
            <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Retry
          </Button>
        </div>
      </div>
    </section>
  );
}
