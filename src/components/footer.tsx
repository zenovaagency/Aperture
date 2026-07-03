import { brand, footer } from "@/lib/content";
import { ApertureMark } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/30">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        {/* top: brand + link columns */}
        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-2.5" aria-label={`${brand.name} home`}>
              <ApertureMark size={22} className="text-accent" />
              <span className="text-lg font-semibold tracking-tight">{brand.name}</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary">{footer.tagline}</p>
            <div className="mt-1 flex items-center gap-2 text-xs text-muted">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-success" />
              {footer.status}
            </div>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-secondary transition-colors hover:text-text">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* fine print */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-border py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">{footer.copyright}</p>
          <p className="font-mono text-xs text-muted">{brand.tagline}</p>
        </div>
      </div>

      {/* oversized wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <div className="bg-gradient-to-b from-text/[0.06] to-transparent bg-clip-text text-center font-semibold leading-[0.8] tracking-tighter text-transparent [font-size:clamp(4rem,20vw,18rem)]">
          {brand.name}
        </div>
      </div>
    </footer>
  );
}
