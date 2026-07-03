"use client";

import { useEffect, useRef, useState } from "react";
import { workflow } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section id="workflow" className="border-y border-border bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From raw tables to a decided next move"
          lead="Four steps, one afternoon. No data-engineering project required."
        />

        <div ref={ref} className="relative mt-16">
          {/* connector line (draws left→right) */}
          <div
            aria-hidden
            className="absolute left-0 top-6 hidden h-px w-full origin-left bg-gradient-to-r from-accent via-accent/40 to-transparent transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:block"
            style={{ transform: `scaleX(${drawn ? 1 : 0})` }}
          />

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {workflow.map((s, i) => (
              <li
                key={s.n}
                className="relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transitionDelay: `${i * 160}ms`,
                  opacity: drawn ? 1 : 0,
                  transform: drawn ? "none" : "translateY(16px)",
                }}
              >
                <span
                  className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-accent-line bg-background font-mono text-sm text-accent transition-transform duration-500"
                  style={{ transitionDelay: `${i * 160 + 200}ms`, transform: drawn ? "scale(1)" : "scale(0.6)" }}
                >
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 max-w-xs text-pretty text-sm leading-relaxed text-text-secondary">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
