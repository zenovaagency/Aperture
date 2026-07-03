import { features, type Feature } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Search, Sparkle, Bell, Users, Branch, Shield } from "@/components/ui/icons";

const spanClass: Record<Feature["span"], string> = {
  lg: "lg:col-span-4 lg:row-span-2",
  md: "lg:col-span-2",
  sm: "lg:col-span-2",
};

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Everything, in focus"
        title={
          <>
            One surface for the whole
            <br className="hidden sm:block" /> question-to-decision loop
          </>
        }
        lead="Aperture replaces the sprawl of dashboards, tickets, and Slack threads with a single place to ask, understand, and act."
      />

      <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {features.map((f, i) => (
          <Reveal
            key={f.title}
            delay={i * 70}
            className={`group card relative flex flex-col justify-between overflow-hidden p-6 transition-colors duration-300 hover:border-border-strong ${spanClass[f.span]}`}
          >
            {/* hover glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <FeatureVisual feature={f} />
            <div className="relative mt-6">
              <h3 className={`font-semibold tracking-tight ${f.span === "lg" ? "text-2xl" : "text-lg"}`}>
                {f.title}
              </h3>
              <p className={`mt-2 text-pretty leading-relaxed text-text-secondary ${f.span === "lg" ? "max-w-md text-base" : "text-sm"}`}>
                {f.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeatureVisual({ feature }: { feature: Feature }) {
  switch (feature.visual) {
    case "query":
      return (
        <div className="relative">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3.5 py-2.5">
            <Search width={16} height={16} className="text-accent" />
            <span className="text-sm text-text-secondary">Top accounts by expansion this quarter</span>
            <span className="ml-auto h-4 w-px animate-blink bg-accent" />
          </div>
          <div className="mt-3 space-y-2">
            {[
              { name: "Northwind", w: "92%", v: "+$418k" },
              { name: "Meridian", w: "74%", v: "+$286k" },
              { name: "Ardent", w: "58%", v: "+$203k" },
            ].map((r) => (
              <div key={r.name} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2">
                <span className="w-20 shrink-0 text-xs text-text-secondary">{r.name}</span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-3">
                  <span className="block h-full rounded-full bg-accent" style={{ width: r.w }} />
                </span>
                <span className="w-16 shrink-0 text-right font-mono text-xs text-success">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "signal":
      return (
        <div className="rounded-xl border border-border bg-surface-2 p-4">
          <div className="mb-2 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
            <Sparkle width={13} height={13} className="text-accent" /> Anomaly detected
          </div>
          <Sparkline />
        </div>
      );
    case "alerts":
      return (
        <div className="space-y-2">
          {[
            { c: "bg-error", t: "Churn risk · Enterprise" },
            { c: "bg-warning", t: "Latency · Checkout API" },
          ].map((a) => (
            <div key={a.t} className="flex items-center gap-2.5 rounded-lg border border-border bg-surface-2 px-3 py-2">
              <Bell width={14} height={14} className="text-text-secondary" />
              <span className={`h-1.5 w-1.5 rounded-full ${a.c}`} />
              <span className="text-xs text-text-secondary">{a.t}</span>
            </div>
          ))}
        </div>
      );
    case "collab":
      return (
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {["DO", "MR", "PN"].map((m, i) => (
              <span
                key={m}
                className="grid h-8 w-8 place-items-center rounded-full border border-surface bg-surface-3 font-mono text-[0.6rem] text-text"
                style={{ zIndex: 3 - i }}
              >
                {m}
              </span>
            ))}
          </div>
          <Users width={16} height={16} className="text-accent" />
        </div>
      );
    case "trace":
      return <LineageGraph />;
    case "guard":
      return (
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent-line bg-accent-soft text-accent">
            <Shield width={20} height={20} />
          </span>
          <div className="flex flex-col gap-1">
            {["SOC 2", "Row-level", "Audit log"].map((t) => (
              <span key={t} className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-text-secondary">
                {t}
              </span>
            ))}
          </div>
        </div>
      );
  }
}

function Sparkline() {
  const pts = [40, 42, 38, 44, 41, 43, 39, 45, 42, 70, 48, 44];
  const W = 200;
  const H = 44;
  const max = 74;
  const min = 34;
  const x = (i: number) => (i / (pts.length - 1)) * W;
  const y = (v: number) => H - ((v - min) / (max - min)) * H;
  const line = pts.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-11 w-full" preserveAspectRatio="none" aria-hidden>
      <path d={line} fill="none" stroke="var(--chart-cool)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx={x(9)} cy={y(70)} r="4" fill="var(--accent)" stroke="var(--surface-2)" strokeWidth="2" />
    </svg>
  );
}

function LineageGraph() {
  return (
    <svg viewBox="0 0 200 72" className="h-16 w-full" aria-hidden fill="none">
      <path d="M40 36 H92 M108 36 h20 a8 8 0 0 1 8 8 v-16 a8 8 0 0 0 8-8" stroke="var(--border-strong)" strokeWidth="1.4" />
      <path d="M40 36 H92" stroke="var(--accent)" strokeWidth="1.6" />
      {[
        { x: 24, y: 36 },
        { x: 100, y: 36 },
        { x: 176, y: 20 },
        { x: 176, y: 52 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="9" fill="var(--surface-2)" stroke={i === 0 ? "var(--accent)" : "var(--border-strong)"} strokeWidth="1.4" />
          <circle cx={n.x} cy={n.y} r="2.4" fill={i === 0 ? "var(--accent)" : "var(--muted)"} />
        </g>
      ))}
    </svg>
  );
}
