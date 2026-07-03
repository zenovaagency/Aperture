"use client";

import { useRef, useState } from "react";
import { showcase } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check, Sparkle, Bell, Bolt, ArrowRight } from "@/components/ui/icons";

export function Showcase() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent) {
    const count = showcase.length;
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % count;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + count) % count;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = count - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  const tab = showcase[active];

  return (
    <section id="showcase" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="bg-mesh absolute inset-0 -z-10 opacity-50" />
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="See it work"
          title="Four surfaces. One source of truth."
          lead="Move from a live dashboard to a ranked signal to a written report to an automated action — without ever leaving Aperture."
        />

        {/* Tabs */}
        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label="Product surfaces"
            onKeyDown={onKeyDown}
            className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-surface/60 p-1.5 backdrop-blur"
          >
            {showcase.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 sm:px-5 ${
                    selected ? "text-[#0a0a0b]" : "text-text-secondary hover:text-text"
                  }`}
                >
                  {selected && (
                    <span aria-hidden className="absolute inset-0 -z-0 rounded-full bg-accent" />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <Reveal variant="fade" className="mt-10">
          <div
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className="card grid grid-cols-1 gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            {/* copy */}
            <div key={`copy-${tab.id}`} className="panel-enter">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{tab.headline}</h3>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-text-secondary">
                {tab.body}
              </p>
              <ul className="mt-6 space-y-3">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[0.95rem]">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                      <Check width={13} height={13} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* visual */}
            <div
              key={`viz-${tab.id}`}
              className="panel-enter rounded-2xl border border-border bg-surface-2/60 p-5 sm:p-6"
            >
              <ShowcaseVisual id={tab.id} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ShowcaseVisual({ id }: { id: string }) {
  if (id === "dashboards") return <DashboardsViz />;
  if (id === "signals") return <SignalsViz />;
  if (id === "reports") return <ReportsViz />;
  return <AutomationsViz />;
}

function DashboardsViz() {
  const tiles = [
    { label: "MRR", value: "$1.28M", delta: "+4.2%", up: true },
    { label: "Active", value: "18,204", delta: "+1.9%", up: true },
    { label: "Churn", value: "1.4%", delta: "-0.3%", up: true },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-xl border border-border bg-surface p-3">
            <div className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">{t.label}</div>
            <div className="mt-1 text-base font-semibold">{t.value}</div>
            <div className="mt-0.5 text-[0.65rem] font-medium text-success">{t.delta}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-border bg-surface p-4">
        <BarChart />
      </div>
    </div>
  );
}

function BarChart() {
  const data = [48, 62, 55, 70, 66, 78, 74, 85, 80, 92, 88, 96];
  const max = 100;
  return (
    <div className="flex h-28 items-end gap-1.5">
      {data.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
          <div
            className="w-full rounded-t bg-gradient-to-t from-accent/40 to-accent"
            style={{ height: `${(v / max) * 100}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function SignalsViz() {
  const rows = [
    { t: "Activation drop · Mobile", impact: 92, sev: "text-error" },
    { t: "Expansion surge · EMEA", impact: 74, sev: "text-success" },
    { t: "Latency · Checkout API", impact: 61, sev: "text-warning" },
    { t: "Trial-to-paid up · SMB", impact: 44, sev: "text-success" },
  ];
  return (
    <div className="space-y-2.5">
      {rows.map((r) => (
        <div key={r.t} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-3">
          <Sparkle width={15} height={15} className={r.sev} />
          <span className="flex-1 text-sm">{r.t}</span>
          <span className="h-1.5 w-16 overflow-hidden rounded-full bg-surface-3">
            <span className="block h-full rounded-full bg-accent" style={{ width: `${r.impact}%` }} />
          </span>
          <span className="w-8 text-right font-mono text-xs text-text-secondary">{r.impact}</span>
        </div>
      ))}
    </div>
  );
}

function ReportsViz() {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted">Weekly briefing · auto-generated</div>
      <h4 className="mt-2 text-base font-semibold">Growth held despite a mobile activation dip</h4>
      <div className="mt-3 space-y-2.5 text-[0.82rem] leading-relaxed text-text-secondary">
        <p>
          MRR grew <span className="rounded bg-accent-soft px-1 font-medium text-accent">+4.2%</span> to
          $1.28M, led by EMEA expansion.
        </p>
        <p>
          Activation fell <span className="rounded bg-accent-soft px-1 font-medium text-accent">6.4%</span>,
          isolated to the mobile signup flow.
        </p>
        <div className="h-px bg-border" />
        <p className="text-xs text-muted">Sources: warehouse.mrr, product.activation · 3 charts attached</p>
      </div>
    </div>
  );
}

function AutomationsViz() {
  const steps = [
    { icon: <Bell width={15} height={15} />, label: "When", detail: "Churn signal fires", tone: "border-warning/40 text-warning" },
    { icon: <Check width={15} height={15} />, label: "If", detail: "ARR > $50k", tone: "border-border text-text-secondary" },
    { icon: <Bolt width={15} height={15} />, label: "Then", detail: "Page owner + open ticket", tone: "border-accent-line text-accent" },
  ];
  return (
    <div className="space-y-2.5">
      {steps.map((s, i) => (
        <div key={s.label}>
          <div className={`flex items-center gap-3 rounded-xl border bg-surface px-3.5 py-3 ${s.tone}`}>
            <span className="grid h-7 w-7 place-items-center rounded-lg border border-current/30">{s.icon}</span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em]">{s.label}</span>
            <span className="ml-1 text-sm text-text">{s.detail}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="ml-6 flex h-4 items-center">
              <ArrowRight width={14} height={14} className="rotate-90 text-muted" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
