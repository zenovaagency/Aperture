"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/ui/reveal";
import { ChevronDown } from "@/components/ui/icons";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-6 py-24 sm:px-8 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* sticky heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal variant="fade">
            <Tag>Answers</Tag>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-sm mt-5 text-balance">Questions, answered</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-text-secondary">
              Still curious? Reach the team at{" "}
              <a href="#" className="text-accent underline-offset-4 hover:underline">
                hello@aperture.example
              </a>{" "}
              — we answer fast.
            </p>
          </Reveal>
        </div>

        {/* accordion */}
        <div className="flex flex-col divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-text"
                  >
                    <span className={`text-[1.05rem] font-medium ${isOpen ? "text-text" : "text-text-secondary"}`}>
                      {f.q}
                    </span>
                    <ChevronDown
                      width={20}
                      height={20}
                      className={`shrink-0 text-accent transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 text-pretty leading-relaxed text-text-secondary">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
