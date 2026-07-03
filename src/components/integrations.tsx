import { integrations } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ApertureMark } from "@/components/ui/icons";

// A few chips ride the orbit; the rest fill the grid below.
const orbit = integrations.chips.slice(0, 6);

export function Integrations() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24 sm:px-8 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* orbit visual */}
        <Reveal variant="scale" className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* rings */}
            <div className="absolute inset-[8%] rounded-full border border-border" />
            <div className="absolute inset-[24%] rounded-full border border-dashed border-border" />
            <div className="absolute inset-[40%] rounded-full border border-border" />
            {/* ambient */}
            <div aria-hidden className="absolute inset-1/4 rounded-full bg-accent-soft blur-3xl" />

            {/* center mark */}
            <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-accent-line bg-surface text-accent shadow-[0_0_40px_-8px_rgba(255,106,61,0.5)]">
              <ApertureMark size={34} />
            </div>

            {/* orbiting chips */}
            {orbit.map((name, i) => {
              const angle = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 42; // % from center
              const left = 50 + Math.cos(angle) * radius;
              const top = 50 + Math.sin(angle) * radius;
              return (
                <div
                  key={name}
                  className="animate-float absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 shadow-lg"
                  style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${i * 0.6}s` }}
                >
                  <span className="grid h-5 w-5 place-items-center rounded-md bg-surface-3 font-mono text-[0.6rem] text-accent">
                    {name[0]}
                  </span>
                  <span className="whitespace-nowrap text-xs text-text-secondary">{name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* copy + grid */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Connected to your stack"
            title="Plugs into the tools you already trust"
            lead={integrations.note}
            align="left"
          />

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {integrations.chips.map((name, i) => (
              <Reveal
                key={name}
                variant="fade"
                delay={i * 40}
                className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-surface-2 font-mono text-xs text-accent transition-colors group-hover:bg-accent-soft">
                  {name[0]}
                </span>
                <span className="truncate text-sm text-text-secondary group-hover:text-text">{name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
