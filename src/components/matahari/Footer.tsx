import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { BRAND, telLink } from "@/lib/matahari";

const Footer = () => {
  return (
    <footer id="contatti" className="relative bg-charcoal border-t border-border">
      {/* Mappa */}
      <div className="w-full h-[320px] md:h-[400px] grayscale opacity-80">
        <iframe
          title="Mappa Matahari Bistrot"
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.5060%2C38.0750%2C13.5170%2C38.0820&layer=mapnik&marker=38.0785%2C13.5115"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-serif-display text-3xl text-cream">{BRAND.name}</div>
            <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-primary">
              Bistrot · Steakhouse · dal 1983
            </p>
            <p className="mt-8 text-cream/65 leading-relaxed font-light max-w-md">
              Un luogo da vivere a Bagheria. Tradizione, fuoco, materia prima e il piacere
              di stare a tavola insieme.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={BRAND.social.instagram}
                aria-label="Instagram"
                className="w-10 h-10 border border-border flex items-center justify-center text-cream/70 hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND.social.facebook}
                aria-label="Facebook"
                className="w-10 h-10 border border-border flex items-center justify-center text-cream/70 hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.32em] text-primary mb-5">Contatti</h3>
            <ul className="space-y-4 text-sm text-cream/75 font-light">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={telLink()} className="hover:text-primary transition-colors">
                  {BRAND.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.32em] text-primary mb-5">Orari</h3>
            <ul className="space-y-3 text-sm text-cream/75 font-light">
              {BRAND.hours.map((h) => (
                <li key={h.day} className="flex gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div>{h.day}</div>
                    <div className="text-cream/50 text-xs">{h.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/45">
          <span>© {new Date().getFullYear()} Matahari Bistrot — Bagheria. Tutti i diritti riservati.</span>
          <span className="font-italic-accent italic text-cream/60">"Da quarant'anni, lo stesso fuoco."</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
