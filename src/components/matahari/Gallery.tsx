import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-interior-1.jpg";
import g2 from "@/assets/gallery-meat.jpg";
import g3 from "@/assets/gallery-dish-1.jpg";
import g4 from "@/assets/gallery-wine.jpg";
import g5 from "@/assets/gallery-oven.jpg";
import g6 from "@/assets/gallery-table.jpg";
import gSteak from "@/assets/exp-steakhouse.jpg";
import gPizza from "@/assets/exp-pizza.jpg";

const images = [
  { src: g1, alt: "Sala interna del Matahari Bistrot", span: "row-span-2" },
  { src: g2, alt: "Carne in frollatura" },
  { src: g3, alt: "Tagliata di manzo plated" },
  { src: gSteak, alt: "Bistecca alla griglia", span: "row-span-2" },
  { src: g5, alt: "Forno a legna acceso" },
  { src: g4, alt: "Calice di vino e tagliere" },
  { src: gPizza, alt: "Pizza appena sfornata" },
  { src: g6, alt: "Tavolo apparecchiato con candele" },
];

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-muted">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <span className="eyebrow eyebrow-left">Atmosfera</span>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-cream mt-6 leading-[1.1]">
              Uno sguardo dentro
              <br />
              al Matahari.
            </h2>
          </div>
          <p className="md:max-w-sm text-cream/70 leading-relaxed font-light">
            Luci soffuse, legno, pietra, carne e fuoco. Le immagini parlano la nostra lingua meglio di qualsiasi parola.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`reveal group relative overflow-hidden bg-card ${img.span ?? ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              aria-label={`Apri immagine: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-700" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/40 transition-all duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[80] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/80 hover:text-primary p-2"
            onClick={() => setOpen(null)}
            aria-label="Chiudi"
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={images[open].src}
            alt={images[open].alt}
            className="max-w-full max-h-[85vh] object-contain border border-primary/30"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
