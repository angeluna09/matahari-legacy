const reasons = [
  {
    n: "I",
    title: "Prenotazione consigliata",
    desc: "Per garantirti il tavolo migliore e l'attenzione che meriti, ti invitiamo a riservare in anticipo.",
  },
  {
    n: "II",
    title: "Cucina espressa",
    desc: "Ogni piatto viene preparato al momento. La qualità ha bisogno del suo tempo — e ne vale ogni minuto.",
  },
  {
    n: "III",
    title: "Esperienza autentica",
    desc: "Non standardizziamo nulla. Sapori, gesti e accoglienza restano quelli di una vera trattoria di famiglia.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative py-28 md:py-40 bg-background">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="eyebrow">Perché sceglierci</span>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-cream mt-6 leading-[1.1]">
            Il valore della
            <br />
            <span className="font-italic-accent italic text-primary font-normal">cura</span>.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {reasons.map((r, i) => (
            <article
              key={r.n}
              className="reveal relative pt-12 px-8 pb-10 border-t border-primary/30 group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="absolute -top-5 left-8 bg-background px-3 font-serif-display italic text-primary text-2xl">
                {r.n}
              </span>
              <h3 className="font-serif-display text-2xl md:text-3xl text-cream leading-snug">{r.title}</h3>
              <p className="mt-5 text-cream/70 leading-relaxed font-light">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
