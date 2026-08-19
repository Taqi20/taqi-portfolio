import { MetaLabel } from "@/components/primitives/MetaLabel";
import { StatusPill } from "@/components/primitives/StatusPill";

const topics = [
  "Node.js systems",
  "Data pipelines",
  "Production debugging",
  "Deployment decisions",
];

export function Read() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 md:pt-32">
      <div className="container-narrow">
        <div className="flex min-h-[68dvh] flex-col justify-center gap-8">
          <MetaLabel index="07" label="Read" hint="Coming soon" />
          <div>
            <StatusPill status="limited" label="Engineering blogs in progress" />
          </div>
          <h1 className="max-w-4xl font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.96] tracking-[-0.04em] text-balance">
            I’m writing about{" "}
            <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
              systems that keep working.
            </span>
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-ink-soft)] text-pretty">
            I’m preparing concise blogs on the engineering decisions behind data movement, APIs, reliability, and deployment. The first collection will arrive as the ideas are shaped into useful, practical writing.
          </p>
          <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <div
                key={topic}
                className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)] px-4 py-4"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-emerald)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[color:var(--color-ink-soft)]">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
