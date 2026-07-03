"use client";

import { useRef } from "react";
import { Search, Sparkle, ArrowUpRight, Activity } from "@/components/ui/icons";

/**
 * The floating Aperture "dashboard" shown in the hero. Pointer-parallax on
 * the whole panel plus a couple of inner layers that drift at different
 * depths. Transform-only; no-ops under reduced-motion (matchMedia guard).
 */
export function HeroPanel() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  function onMove(e: React.MouseEvent) {
    const el = wrap.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - (r.left + r.width / 2)) / r.width;
    const py = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.setProperty("--rx", `${(-py * 5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 7).toFixed(2)}deg`);
    el.style.setProperty("--tx", `${(px * 10).toFixed(1)}px`);
    el.style.setProperty("--ty", `${(py * 10).toFixed(1)}px`);
  }
  function onLeave() {
    const el = wrap.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  }

  return (
    <div
      className="relative [perspective:1600px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* ambient ember glow */}
      <div
        aria-hidden
        className="animate-pulse-glow absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_60%_30%,rgba(255,106,61,0.28),transparent_70%)] blur-2xl"
      />

      <div
        ref={wrap}
        className="relative transition-transform duration-300 ease-out will-change-transform [transform:rotateX(var(--rx,0))_rotateY(var(--ry,0))_translate3d(var(--tx,0),var(--ty,0),0)] [transform-style:preserve-3d]"
      >
        <div className="card overflow-hidden bg-surface/90 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#3a3a40]" />
            <span className="h-3 w-3 rounded-full bg-[#3a3a40]" />
            <span className="h-3 w-3 rounded-full bg-[#3a3a40]" />
            <div className="ml-3 flex flex-1 items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted">
              <Search width={14} height={14} className="text-accent" />
              <span className="text-text-secondary">
                Why did activation drop last week?
              </span>
              <span className="ml-auto h-3.5 w-px animate-blink bg-accent" />
            </div>
          </div>

          <div className="p-5">
            {/* AI answer strip */}
            <div className="mb-4 flex items-start gap-3 rounded-xl border border-accent-line bg-accent-soft px-3.5 py-3">
              <Sparkle width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
              <p className="text-[0.82rem] leading-relaxed text-text">
                Activation fell <span className="font-medium text-accent">6.4%</span>, driven by
                the mobile signup flow. Two cohorts account for 80% of the drop.
              </p>
            </div>

            {/* headline metric + area chart */}
            <div className="mb-4 flex items-end justify-between">
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                  Activation rate
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight">61.2%</span>
                  <span className="flex items-center gap-0.5 text-xs font-medium text-error">
                    <ArrowUpRight width={13} height={13} className="rotate-90" />
                    6.4%
                  </span>
                </div>
              </div>
              <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.62rem] text-text-secondary">
                Last 30 days
              </span>
            </div>

            <AreaChart />

            {/* mini stat tiles */}
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[
                { label: "Signals", value: "12" },
                { label: "Sources", value: "34" },
                { label: "Uptime", value: "99.9%" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-surface-2 p-3">
                  <div className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                    <Activity width={11} height={11} className="text-accent" />
                    {s.label}
                  </div>
                  <div className="mt-1.5 text-lg font-semibold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* floating detached signal card */}
        <div className="animate-float absolute -right-3 -top-6 hidden w-52 rounded-2xl border border-border bg-surface-2/95 p-3.5 shadow-2xl backdrop-blur sm:block [transform:translateZ(40px)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-text-secondary">
              Signal resolved
            </span>
          </div>
          <p className="mt-2 text-xs leading-snug text-text">
            Checkout latency back to baseline — auto-scaled at 04:12.
          </p>
        </div>
      </div>
    </div>
  );
}

function AreaChart() {
  // 30 daily points; a gentle rise then a late dip (the "6.4% drop").
  const pts = [
    62, 63, 61, 64, 66, 65, 67, 69, 68, 70, 72, 71, 73, 74, 73, 75, 76, 74, 72, 70, 71, 69,
    68, 67, 66, 65, 64, 63, 62, 61,
  ];
  const W = 320;
  const H = 92;
  const max = Math.max(...pts) + 3;
  const min = Math.min(...pts) - 3;
  const x = (i: number) => (i / (pts.length - 1)) * W;
  const y = (v: number) => H - ((v - min) / (max - min)) * H;
  const line = pts.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;
  const lastX = x(pts.length - 1);
  const lastY = y(pts[pts.length - 1]);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-24 w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#hero-area)" />
      <path
        d={line}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="3.5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2" />
    </svg>
  );
}
