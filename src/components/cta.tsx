"use client";

import { useState } from "react";
import { finalCta } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "@/components/ui/icons";

export function Cta() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="relative overflow-hidden py-28 sm:py-36">
      {/* ambient ember light */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-background" />
      <div
        aria-hidden
        className="animate-pulse-glow absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,106,61,0.22),transparent_70%)] blur-2xl"
      />
      <div aria-hidden className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center sm:px-8">
        <Reveal variant="fade">
          <Tag>{finalCta.eyebrow}</Tag>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-sm mt-6 text-balance">{finalCta.headline}</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-text-secondary">
            {finalCta.sub}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-9 w-full max-w-md">
          {done ? (
            <div className="flex items-center justify-center gap-2.5 rounded-full border border-accent-line bg-accent-soft px-5 py-3.5 text-sm text-text">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[#0a0a0b]">
                <Check width={13} height={13} />
              </span>
              Thanks — check <span className="font-medium">{email}</span> to get started.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
              className="flex flex-col gap-2.5 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={finalCta.placeholder}
                className="h-13 flex-1 rounded-full border border-border bg-surface/80 px-5 text-sm text-text placeholder:text-muted focus:border-accent-line focus:outline-none"
              />
              <Button type="submit" size="lg">
                {finalCta.button}
                <ArrowRight width={18} height={18} />
              </Button>
            </form>
          )}
        </Reveal>

        <Reveal variant="fade" delay={320}>
          <p className="mt-5 font-mono text-xs text-muted">{finalCta.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
