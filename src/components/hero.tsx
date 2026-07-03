import { hero } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { ArrowRight, Play } from "@/components/ui/icons";
import { HeroPanel } from "@/components/hero-panel";

export function Hero() {
  return (
    <section id="top" className="bg-noise relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* layered background */}
      <div aria-hidden className="bg-mesh absolute inset-0 -z-20" />
      <div aria-hidden className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* left — editorial */}
        <div className="flex flex-col items-start">
          <Reveal variant="fade">
            <Tag>{hero.eyebrow}</Tag>
          </Reveal>

          <h1 className="display mt-6 max-w-[15ch] text-balance">
            <Reveal as="span" className="block" delay={60}>
              {hero.headlineLead}{" "}
            </Reveal>
            <Reveal as="span" className="block" delay={140}>
              <span className="font-serif italic text-accent">{hero.headlineAccent}</span>{" "}
              {hero.headlineTail}
            </Reveal>
          </h1>

          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-text-secondary">
              {hero.sub}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.4}>
                <ButtonLink href={hero.ctaPrimary.href} size="lg">
                  {hero.ctaPrimary.label}
                  <ArrowRight width={18} height={18} />
                </ButtonLink>
              </Magnetic>
              <ButtonLink href={hero.ctaSecondary.href} variant="ghost" size="lg">
                <Play width={16} height={16} className="text-accent" />
                {hero.ctaSecondary.label}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal variant="fade" delay={440}>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-success" />
              {hero.trustLine}
            </div>
          </Reveal>
        </div>

        {/* right — product panel */}
        <Reveal variant="scale" delay={200} className="w-full">
          <HeroPanel />
        </Reveal>
      </div>
    </section>
  );
}
