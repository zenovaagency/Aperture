"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** animation flavor — maps to CSS `data-variant` */
  variant?: "up" | "fade" | "scale" | "clip";
  /** stagger in ms */
  delay?: number;
  /** render element (default div) */
  as?: ElementType;
  className?: string;
  /** re-trigger every time it enters view (default: once) */
  once?: boolean;
};

/**
 * Scroll-reveal wrapper. One IntersectionObserver per mounted instance,
 * created lazily and disconnected after firing (when `once`). All the
 * actual motion lives in CSS (`.reveal` / `.is-visible`) so this stays a
 * tiny interactive leaf, and it fully no-ops under prefers-reduced-motion.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  as,
  className = "",
  once = true,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      data-variant={variant}
      style={delay ? ({ "--delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
