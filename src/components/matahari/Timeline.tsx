const events = [
  { year: "1983", title: "L'inizio", desc: "Tre amici aprono la prima steakhouse di Bagheria." },
  { year: "1990", title: "Istituzione", desc: "Il Matahari diventa punto di riferimento della città." },
  { year: "2005", title: "Nuova generazione", desc: "Si rinnovano le sale e nasce il forno a legna." },
  { year: "Oggi", title: "Tradizione viva", desc: "Quattro decenni di sapori, ricordi e nuove storie da raccontare." },
];

const Timeline = () => {
  return (
    <section className="relative py-24 md:py-32 bg-muted border-y border-border/50 overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal mb-16">
          <span className="eyebrow">Ricordi al Matahari</span>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-cream mt-6 leading-tight">
            Quarant'anni in poche righe.
          </h2>
        </div>

        <div className="relative">
          {/* Linea orizzontale */}
          <div className="hidden md:block absolute top-[34px] left-0 right-0 h-px bg-primary/30" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {events.map((e, i) => (
              <div
                key={e.year}
                className="reveal relative md:text-left"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="hidden md:block absolute top-7 left-0 w-3 h-3 rounded-full bg-primary ring-4 ring-muted" />
                <div className="md:pt-16">
                  <span className="font-serif-display italic text-primary text-3xl">{e.year}</span>
                  <h3 className="mt-3 font-serif-display text-cream text-xl">{e.title}</h3>
                  <p className="mt-2 text-sm text-cream/65 leading-relaxed font-light max-w-[240px]">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
