import type { SVGProps } from "react";

/**
 * Inline SVG icon set — 24×24, 1.6 stroke, currentColor.
 * No icon-library dependency.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ApertureMark({ size = 24, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" />
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ChevronDown = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9.5 12 1.8 1.8 3.2-3.6" />
  </svg>
);

export const Search = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const Bell = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);

export const Users = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.2a3.2 3.2 0 0 1 0 6M17 20a5.5 5.5 0 0 0-3-4.9" />
  </svg>
);

export const Branch = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <circle cx="6" cy="5" r="2.4" />
    <circle cx="6" cy="19" r="2.4" />
    <circle cx="18" cy="7" r="2.4" />
    <path d="M6 7.4v9.2M8.4 6.2H14a2 2 0 0 1 2 2v.4M18 9.4c0 4-4 3.6-6 5.6" />
  </svg>
);

export const Activity = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M3 12h4l2.5-7 4 14 2.5-7H21" />
  </svg>
);

export const Play = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M7 5.5v13l11-6.5-11-6.5Z" fill="currentColor" strokeWidth="1.2" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base} aria-hidden {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
