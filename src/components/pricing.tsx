"use client";

import { useState } from "react";
import { pricing, type Tier } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Check } from "@/components/ui/icons";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="mx-auto max-w-[1200px] px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Pricing"
        title="Start free. Scale when it pays for itself."
        lead="Every plan includes natural-language queries and unlimited dashboards. No per-query fees, ever."
      />

      {/* toggle */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <span className={`text-sm ${annual ? "text-muted" : "text-text"}`}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual((v) => !v)}
          className={`relative h-7 w-12 rounded-full border border-border transition-colors ${
            annual ? "bg-accent" : "bg-surface-3"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-[#0a0a0b] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              annual ? "translate-x-6" : "translate-x-0.5"
            }`}
          />
        </button>
        <span className={`flex items-center gap-2 text-sm ${annual ? "text-text" : "text-muted"}`}>
          Annual
          <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[0.62rem] text-accent">
            Save 20%
          </span>
        </span>
      </div>

      {/* tiers */}
      <div className="mt-14 grid grid-cols-1 items-center gap-5 lg:grid-cols-3">
        {pricing.map((t, i) => (
          <Reveal key={t.name} delay={i * 90} className={t.featured ? "lg:-my-3" : ""}>
            <PricingCard tier={t} annual={annual} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PricingCard({ tier, annual }: { tier: Tier; annual: boolean }) {
  const price = annual ? tier.annual : tier.monthly;
  const isCustom = price < 0;
  const isFree = price === 0;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 ${
        tier.featured
          ? "border-accent-line bg-surface shadow-[0_0_60px_-20px_rgba(255,106,61,0.5)] lg:p-8"
          : "border-border bg-surface/60"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#0a0a0b]">
          Most popular
        </span>
      )}

      <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>
      <p className="mt-2 min-h-[2.5rem] text-sm leading-snug text-text-secondary">{tier.tagline}</p>

      <div className="mt-6 flex items-end gap-1.5">
        {isCustom ? (
          <span className="text-4xl font-semibold tracking-tight">Custom</span>
        ) : (
          <>
            <span className="font-mono text-5xl font-semibold tracking-tight">${price}</span>
            {!isFree && <span className="mb-1.5 text-sm text-muted">/seat/mo</span>}
          </>
        )}
      </div>
      <p className="mt-1 h-4 text-xs text-muted">
        {annual && !isCustom && !isFree ? "billed annually" : " "}
      </p>

      <Button variant={tier.featured ? "primary" : "secondary"} className="mt-6 w-full">
        {tier.cta}
      </Button>

      <ul className="mt-7 space-y-3 border-t border-border pt-7">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                tier.featured ? "bg-accent-soft text-accent" : "bg-surface-3 text-text-secondary"
              }`}
            >
              <Check width={12} height={12} />
            </span>
            <span className="text-text-secondary">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
