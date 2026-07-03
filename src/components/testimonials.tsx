import { testimonials, type Testimonial } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function monogram(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured)!;
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section className="border-y border-border bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <SectionHeading eyebrow="Proof" title="The teams closest to their data trust Aperture" />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* featured pull-quote */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <figure className="card bg-noise relative flex h-full flex-col justify-between overflow-hidden p-8 sm:p-10">
              <div aria-hidden className="absolute -right-8 -top-10 font-serif text-[12rem] leading-none text-accent/10">
                &rdquo;
              </div>
              <blockquote className="relative text-pretty text-2xl font-medium leading-snug tracking-tight sm:text-[1.75rem]">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <Attribution t={featured} large />
            </figure>
          </Reveal>

          {rest.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card flex h-full flex-col justify-between p-6">
                <blockquote className="text-pretty leading-relaxed text-text">&ldquo;{t.quote}&rdquo;</blockquote>
                <Attribution t={t} />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Attribution({ t, large = false }: { t: Testimonial; large?: boolean }) {
  return (
    <figcaption className={`flex items-center gap-3 ${large ? "mt-10" : "mt-6"}`}>
      <span
        className={`grid shrink-0 place-items-center rounded-full border border-border-strong bg-surface-2 font-mono text-accent ${
          large ? "h-12 w-12 text-sm" : "h-10 w-10 text-xs"
        }`}
      >
        {monogram(t.name)}
      </span>
      <span className="flex flex-col">
        <span className={`font-medium ${large ? "text-base" : "text-sm"}`}>{t.name}</span>
        <span className="text-sm text-muted">
          {t.role}, {t.company}
        </span>
      </span>
    </figcaption>
  );
}
