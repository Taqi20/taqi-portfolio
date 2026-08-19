"use client";

import { RotateCcw } from "lucide-react";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#09090b] text-[#fafafa]">
        <main className="flex min-h-screen items-center px-6 py-24">
          <div className="mx-auto grid w-full max-w-3xl gap-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#60a5fa]">
              § 500 / Global runtime interruption
            </div>
            <h1 className="font-sans text-[clamp(3rem,10vw,7rem)] leading-none tracking-[-0.04em]">
              The portfolio needs a restart.
            </h1>
            <p className="max-w-lg text-[15px] leading-relaxed text-[#a1a1aa]">
              The application could not load its main shell. Try again or return to the home page.
            </p>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => retry()}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#fafafa] px-2 text-[11px] font-medium tracking-tight text-[#09090b] transition-colors hover:bg-[#60a5fa] hover:text-white sm:px-8 sm:text-[15px]"
              >
                <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Retry
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
