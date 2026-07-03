import type { ReactNode } from "react";

/**
 * Infinite marquee. Renders the children twice back-to-back and translates
 * the track -50%, so the loop is seamless. Edge-masked and hover-paused via
 * CSS (`.marquee-track` / `.animate-marquee`). Pauses entirely under
 * reduced-motion.
 */
export function Marquee({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`marquee-track marquee-mask overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max shrink-0 items-center">
        {children}
        <span aria-hidden className="contents">
          {children}
        </span>
      </div>
    </div>
  );
}
