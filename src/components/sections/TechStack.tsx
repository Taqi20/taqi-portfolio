import { techStack } from "@/data/techStack";
import { Section } from "@/components/primitives/Section";
import { Marquee } from "@/components/primitives/Marquee";

export function TechStack() {
  const all = techStack.flatMap((c) => c.items.map((i) => ({ ...i, cat: c.label })));
  const half = Math.ceil(all.length / 2);
  const rowA = all.slice(0, half);
  const rowB = all.slice(half);

  return (
    <Section
      id="tech"
      index="08"
      eyebrow="Tech stack"
      hint={`${all.length} tools`}
      title={
        <>
          The tools I{" "}
          <span className="italic text-[color:var(--color-emerald-ink)] dark:text-[color:var(--color-emerald)]">
            build with
          </span>{" "}
          every day.
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <Marquee duration={55}>
          {rowA.map((t) => (
            <TechChip key={`${t.cat}-${t.name}`} name={t.name} cat={t.cat} />
          ))}
        </Marquee>
        <Marquee duration={70} reverse>
          {rowB.map((t) => (
            <TechChip key={`${t.cat}-${t.name}`} name={t.name} cat={t.cat} />
          ))}
        </Marquee>

        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[color:var(--color-hairline)] pt-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
          {techStack.map((cat) => (
            <div key={cat.id} className="flex flex-col gap-2">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
                {cat.label}
              </div>
              <div className="text-sm text-[color:var(--color-ink)]">{cat.items.length} tools</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TechChip({ name, cat }: { name: string; cat: string }) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)] px-5 py-3 transition-all duration-500 hover:-translate-y-0.5 hover:border-[color:var(--color-ink)] hover:shadow-[var(--shadow-soft)]">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-emerald)] transition-transform group-hover:scale-125" />
      <span className="font-serif text-xl leading-none text-[color:var(--color-ink)]">{name}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-ink-mute)]">
        {cat}
      </span>
    </div>
  );
}
