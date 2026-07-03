import { benefits } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Benefits() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Why teams switch"
        title="Built for the moment a question becomes a decision"
        align="left"
      />

      <div className="mt-16 flex flex-col gap-16 sm:gap-24">
        {benefits.map((b, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal
              key={b.index}
              variant="fade"
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              {/* text */}
              <div className={flip ? "lg:order-2 lg:pl-8" : "lg:pr-8"}>
                <span className="font-serif text-5xl italic text-accent">{b.index}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{b.title}</h3>
                <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-text-secondary">
                  {b.body}
                </p>
              </div>

              {/* stat panel */}
              <div className={flip ? "lg:order-1" : ""}>
                <div className="card bg-noise relative flex flex-col items-center justify-center overflow-hidden px-8 py-16">
                  <div aria-hidden className="bg-grid absolute inset-0 opacity-30" />
                  <div
                    aria-hidden
                    className="absolute h-40 w-40 rounded-full bg-accent-soft blur-3xl"
                  />
                  <span className="relative font-mono text-6xl font-semibold tracking-tight text-text sm:text-7xl">
                    {b.stat}
                  </span>
                  <span className="relative mt-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-text-secondary">
                    {b.statLabel}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
