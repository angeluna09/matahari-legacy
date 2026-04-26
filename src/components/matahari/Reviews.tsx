import { useEffect, useState } from "react";

const reviews = [
  { text: "Una certezza da oltre 30 anni. La carne è di altissima qualità e l'atmosfera è quella di una volta, calda e familiare.", author: "Giuseppe M.", source: "Cliente storico" },
  { text: "Carne di altissima qualità, servizio impeccabile. Il chateaubriand su pietra lavica è un'esperienza da provare almeno una volta.", author: "Federica L.", source: "Recensione Google" },
  { text: "Atmosfera unica a Bagheria. Si percepisce la passione in ogni dettaglio — dal pane alle portate finali.", author: "Andrea G.", source: "Recensione TripAdvisor" },
  { text: "Sembra di tornare indietro nel tempo, ma con una qualità contemporanea. Il Matahari è la nostra tappa fissa.", author: "Famiglia Russo", source: "Cliente affezionato" },
];

const Reviews = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="container-narrow text-center reveal">
        <span className="eyebrow">Voci dei nostri ospiti</span>
        <div className="mt-12 relative min-h-[260px] md:min-h-[220px]">
          {reviews.map((r, idx) => (
            <blockquote
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="font-serif-display text-primary text-7xl md:text-8xl leading-none">"</div>
              <p className="mt-4 font-italic-accent italic text-2xl md:text-3xl text-cream leading-snug max-w-3xl mx-auto">
                {r.text}
              </p>
              <footer className="mt-8">
                <div className="font-serif-display text-cream text-base">{r.author}</div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-cream/55 mt-1">{r.source}</div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${i === idx ? "w-12 bg-primary" : "w-6 bg-cream/30"}`}
              aria-label={`Recensione ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
