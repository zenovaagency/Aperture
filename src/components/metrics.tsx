"use client";

import { useEffect, useRef, useState } from "react";
import { metrics, type Metric } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* faint chart backdrop */}
      <ChartBackdrop />
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <SectionHeading eyebrow="By the numbers" title="Momentum you can measure" />
        <div
          ref={ref}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-border pt-14 lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="font-mono text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                <CountUp metric={m} run={run} />
              </span>
              <span className="mt-3 text-sm leading-snug text-text-secondary">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function format(value: number, m: Metric) {
  const fixed = value.toFixed(m.decimals ?? 0);
  const [int, dec] = fixed.split(".");
  const withSep = Number(int).toLocaleString("en-US");
  const body = dec ? `${withSep}.${dec}` : withSep;
  return `${m.prefix ?? ""}${body}${m.suffix ?? ""}`;
}

function CountUp({ metric, run }: { metric: Metric; run: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVal(metric.value);
      return;
    }
    const duration = 1600;
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setVal(metric.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, metric.value]);

  return <>{format(val, metric)}</>;
}

function ChartBackdrop() {
  // Decorative area silhouette, very low contrast, behind the numbers.
  const pts = [30, 45, 38, 60, 52, 72, 64, 84, 76, 92, 88, 100, 96, 108];
  const W = 1200;
  const H = 260;
  const max = 120;
  const x = (i: number) => (i / (pts.length - 1)) * W;
  const y = (v: number) => H - (v / max) * H;
  const line = pts.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 -z-10 h-64 w-full opacity-[0.12]"
    >
      <defs>
        <linearGradient id="metrics-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#metrics-area)" />
      <path d={line} fill="none" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  );
}
