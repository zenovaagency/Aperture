import type { ReactNode } from "react";

/** Small pill used for eyebrows / labels above section headings. */
export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-text-secondary ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}
