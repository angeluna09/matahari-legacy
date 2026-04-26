import { Phone, MessageCircle } from "lucide-react";
import { BRAND, telLink, whatsappLink } from "@/lib/matahari";

const Reservation = () => {
  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, hsl(var(--gold) / 0.18) 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, hsl(var(--leather) / 0.4) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-narrow relative">
        <div className="border border-primary/30 px-8 py-14 md:px-16 md:py-20 text-center grain relative">
          <div className="reveal">
            <span className="eyebrow">Prenota il tuo tavolo</span>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-cream mt-6 leading-[1.1]">
              Vieni a vivere
              <br />
              <span className="font-italic-accent italic text-primary font-normal">il Matahari</span>.
            </h2>
            <p className="mt-6 max-w-lg mx-auto text-cream/70 leading-relaxed font-light">
              Per garantirti il miglior servizio ti consigliamo di prenotare in anticipo.
              Siamo a un messaggio o a una telefonata di distanza.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-gold">
                <MessageCircle className="w-4 h-4" />
                Prenota su WhatsApp
              </a>
              <a href={telLink()} className="btn-ghost-gold">
                <Phone className="w-4 h-4" />
                {BRAND.phoneDisplay}
              </a>
            </div>

            <div className="mt-12 pt-10 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-md mx-auto">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.32em] text-primary mb-3">Orari</h3>
                {BRAND.hours.map((h) => (
                  <div key={h.day} className="text-sm text-cream/80 font-light">
                    <span className="block">{h.day}</span>
                    <span className="text-cream/55 text-xs">{h.time}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.32em] text-primary mb-3">Dove siamo</h3>
                <p className="text-sm text-cream/80 font-light leading-relaxed">{BRAND.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
