import { hero, wordmarks } from "@/lib/content";
import { Marquee } from "@/components/ui/marquee";

export function Trusted() {
  return (
    <section aria-label="Customers" className="border-y border-border bg-surface/40 py-10">
      <p className="mb-8 text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
        {hero.trustLine}
      </p>
      <Marquee>
        {wordmarks.map((name) => (
          <span
            key={name}
            className="mx-8 select-none whitespace-nowrap text-xl font-semibold tracking-tight text-text-secondary/70 grayscale transition-colors hover:text-text sm:mx-12 sm:text-2xl"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
