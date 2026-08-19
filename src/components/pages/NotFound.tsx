import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { MetaLabel } from "@/components/primitives/MetaLabel";
import { NoiseOverlay } from "@/components/primitives/NoiseOverlay";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80dvh] items-center overflow-hidden pt-28">
      <NoiseOverlay />
      <div className="container-page relative z-10 grid gap-10">
        <MetaLabel index="404" label="Not found" />
        <h1 className="max-w-3xl font-serif text-[clamp(3rem,10vw,7rem)] leading-none tracking-[-0.02em]">
          This page was{" "}
          <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
            never shipped
          </span>
          .
        </h1>
        <p className="max-w-lg text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
          Looks like whatever you were after has moved, been renamed, or never existed. Head back to the front page and try again.
        </p>
        <div>
          <Button variant="primary" size="lg" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
