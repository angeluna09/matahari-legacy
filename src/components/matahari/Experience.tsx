import steakImg from "@/assets/exp-steakhouse.jpg";
import pizzaImg from "@/assets/exp-pizza.jpg";
import wineImg from "@/assets/exp-wine.jpg";
import bistrotImg from "@/assets/exp-bistrot.jpg";

const items = [
  {
    n: "01",
    title: "Steakhouse",
    desc: "Carne premium, frollature lente e il rito della pietra lavica. Il chateaubriand è la nostra firma dal 1983.",
    img: steakImg,
    alt: "Bistecca alla griglia su fiamma viva",
  },
  {
    n: "02",
    title: "Pizzeria",
    desc: "Forno a legna, impasti maturati, ingredienti del territorio. La pizza come la facevano i nostri nonni — solo migliore.",
    img: pizzaImg,
    alt: "Pizza napoletana al forno a legna",
  },
  {
    n: "03",
    title: "Wine Bar",
    desc: "Una carta dei vini ragionata, etichette siciliane e grandi denominazioni nazionali. Anche birre artigianali, scelte una a una.",
    img: wineImg,
    alt: "Sommelier che versa vino rosso",
  },
  {
    n: "04",
    title: "Bistrot",
    desc: "Piatti mediterranei, materie prime fresche e una cucina espressa. Per chi vuole assaporare la Sicilia con eleganza.",
    img: bistrotImg,
    alt: "Piatto bistrot mediterraneo plated",
  },
];

const Experience = () => {
  return (
    <section id="esperienza" className="relative py-28 md:py-40 bg-muted">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">Quattro mondi</span>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-cream mt-6 leading-[1.1]">
            Un solo luogo.
            <br />
            <span className="font-italic-accent italic text-primary font-normal">Tante esperienze.</span>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed font-light">
            Dal taglio premium di carne al forno a legna, dalla carta dei vini al piatto mediterraneo.
            Il Matahari è un mosaico di tradizioni che si incontrano sotto la stessa luce calda.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="reveal group relative h-[420px] md:h-[480px] overflow-hidden bg-card border border-border/50"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <span className="font-serif-display text-primary/80 text-sm tracking-[0.3em]">{it.n}</span>

                <div>
                  <h3 className="font-serif-display text-3xl md:text-4xl text-cream">{it.title}</h3>
                  <div className="overflow-hidden">
                    <p className="mt-3 text-cream/75 text-sm leading-relaxed font-light max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      {it.desc}
                    </p>
                  </div>
                  <div className="mt-5 h-px w-12 bg-primary group-hover:w-24 transition-all duration-700" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
