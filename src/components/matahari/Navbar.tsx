import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, telLink, whatsappLink } from "@/lib/matahari";

const NAV = [
  { label: "Storia", href: "#storia" },
  { label: "Esperienza", href: "#esperienza" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="font-serif-display text-2xl md:text-3xl tracking-wide text-cream">
              {BRAND.name}
            </span>
            <span className="hidden md:inline text-[10px] uppercase tracking-[0.4em] text-primary/80 group-hover:text-primary transition-colors">
              Bagheria · {BRAND.founded}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-xs uppercase tracking-[0.28em] text-cream/80 hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:right-0 after:-bottom-2 after:mx-auto after:w-0 after:h-px after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={telLink()}
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/80 hover:text-primary transition-colors"
              aria-label={`Chiama ${BRAND.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5" />
              {BRAND.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="hidden md:inline-flex btn-gold !py-2.5 !px-5 !text-[11px]">
              Prenota
            </a>
            <button
              type="button"
              aria-label="Apri menu"
              className="lg:hidden p-2 text-cream"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-card border-l border-border shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <span className="font-serif-display text-xl text-cream">{BRAND.name}</span>
            <button aria-label="Chiudi menu" onClick={() => setOpen(false)} className="p-2 text-cream">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif-display text-2xl text-cream hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 mt-2 border-t border-border flex flex-col gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-gold">Prenota su WhatsApp</a>
              <a href={telLink()} className="btn-ghost-gold">{BRAND.phoneDisplay}</a>
            </div>
          </nav>
        </aside>
      </div>

      {/* Mobile sticky CTA */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        className="md:hidden fixed bottom-5 right-5 z-40 btn-gold !px-5 !py-3 !text-[11px] shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)]"
      >
        Prenota
      </a>
    </>
  );
};

export default Navbar;
