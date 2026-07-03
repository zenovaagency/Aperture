"use client";

import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/content";
import { ApertureMark, Close, Menu } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled ? "glass border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5 text-text" aria-label={`${brand.name} home`}>
          <ApertureMark size={22} className="text-accent" />
          <span className="text-[1.05rem] font-semibold tracking-tight">{brand.name}</span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-text-secondary transition-colors hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={nav.secondary.href}
            className="rounded-full px-3.5 py-2 text-sm text-text-secondary transition-colors hover:text-text"
          >
            {nav.secondary.label}
          </a>
          <ButtonLink href={nav.cta.href} size="md">
            {nav.cta.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`glass overflow-hidden border-b border-border transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-text-secondary transition-colors hover:bg-[rgba(255,255,255,0.05)] hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <ButtonLink href={nav.cta.href} className="w-full" onClick={() => setOpen(false)}>
              {nav.cta.label}
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
