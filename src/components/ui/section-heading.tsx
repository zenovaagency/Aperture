import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { Tag } from "./tag";

/**
 * Shared section header: eyebrow pill + display title + optional lead.
 * `align` controls centering; sections that want a bespoke header skip this.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}>
      <Reveal variant="fade">
        <Tag>{eyebrow}</Tag>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="display-sm text-balance">{title}</h2>
      </Reveal>
      {lead ? (
        <Reveal delay={140}>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-text-secondary">
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
