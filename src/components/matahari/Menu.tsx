import { useState } from "react";

type Item = { name: string; desc: string; price: string };
type Category = { id: string; label: string; items: Item[] };

const MENU: Category[] = [
  {
    id: "antipasti",
    label: "Antipasti",
    items: [
      { name: "Tagliere del Matahari", desc: "Salumi e formaggi siciliani selezionati, confetture di stagione", price: "18" },
      { name: "Carpaccio di manzo", desc: "Marinato al limone, scaglie di parmigiano, rucola selvatica", price: "16" },
      { name: "Burrata e pomodoro confit", desc: "Burrata pugliese, pomodorini canditi, basilico, olio extravergine", price: "14" },
      { name: "Tartare di filetto", desc: "Battuta al coltello, tuorlo, capperi di Salina, crostini caldi", price: "19" },
    ],
  },
  {
    id: "pizze",
    label: "Pizze",
    items: [
      { name: "Margherita verace", desc: "San Marzano DOP, fior di latte, basilico, olio extravergine", price: "9" },
      { name: "Bagherese", desc: "Pomodoro, mozzarella, salsiccia, friarielli, pecorino", price: "13" },
      { name: "Tartufo & burrata", desc: "Crema di tartufo, burrata, prosciutto crudo a fine cottura", price: "16" },
      { name: "Quattro stagioni", desc: "Carciofi, funghi, prosciutto cotto, olive nere", price: "12" },
    ],
  },
  {
    id: "carne",
    label: "Carne",
    items: [
      { name: "Chateaubriand su pietra lavica", desc: "Filetto di manzo per due, cottura espressa al tavolo", price: "62" },
      { name: "Bistecca alla Fiorentina", desc: "Tagliata di scottona, frollatura 40 giorni — al kg", price: "65" },
      { name: "Tagliata di Angus", desc: "Rucola, scaglie di grana, riduzione di Nero d'Avola", price: "26" },
      { name: "Costata di vitello", desc: "Servita con patate al rosmarino e verdure grigliate", price: "28" },
    ],
  },
  {
    id: "primi",
    label: "Primi",
    items: [
      { name: "Spaghetti alla bottarga", desc: "Bottarga di muggine di Cabras, aglio, prezzemolo, olio", price: "16" },
      { name: "Tagliatelle al ragù di filetto", desc: "Ragù bianco di filetto di manzo, scaglie di pecorino", price: "17" },
      { name: "Risotto al Nero d'Avola", desc: "Mantecato al pecorino siciliano, riduzione di vino rosso", price: "18" },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    items: [
      { name: "Cannolo del Matahari", desc: "Cialda croccante, ricotta di pecora, pistacchio di Bronte", price: "8" },
      { name: "Tortino al cioccolato", desc: "Cuore caldo di cioccolato fondente, gelato alla vaniglia", price: "9" },
      { name: "Cassata siciliana", desc: "Pan di Spagna, ricotta, pasta di mandorle, frutta candita", price: "8" },
    ],
  },
  {
    id: "bevande",
    label: "Bevande",
    items: [
      { name: "Carta dei vini", desc: "Oltre 80 etichette tra Sicilia e grandi denominazioni nazionali", price: "—" },
      { name: "Birre artigianali", desc: "Selezione rotativa di birrifici siciliani e italiani", price: "—" },
      { name: "Coperto", desc: "Pane casereccio, focaccia, olio extravergine d'oliva", price: "3" },
    ],
  },
];

const Menu = () => {
  const [active, setActive] = useState(MENU[0].id);
  const current = MENU.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative py-28 md:py-40 bg-background">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">La carta</span>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-cream mt-6 leading-[1.1]">
            Selezione del giorno
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed font-light">
            Una proposta che cambia con le stagioni. Carne premium, pesce freschissimo,
            verdure dell'orto e una mano leggera per esaltarne ogni sfumatura.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14 reveal">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-border pb-2">
            {MENU.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative pb-3 text-xs uppercase tracking-[0.28em] transition-colors duration-300 ${
                  active === cat.id ? "text-primary" : "text-cream/55 hover:text-cream"
                }`}
              >
                {cat.label}
                <span
                  className={`absolute left-0 right-0 -bottom-[9px] h-px bg-primary transition-all duration-500 ${
                    active === cat.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Items */}
        <div key={active} className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 animate-fade-in">
          {current.items.map((it) => (
            <article key={it.name} className="group">
              <div className="flex items-baseline">
                <h3 className="font-serif-display text-xl md:text-2xl text-cream group-hover:text-primary transition-colors duration-500">
                  {it.name}
                </h3>
                <span className="dotted-line" />
                <span className="font-serif-display text-xl text-primary tabular-nums">
                  {it.price === "—" ? "—" : `${it.price}€`}
                </span>
              </div>
              <p className="mt-2 text-sm text-cream/60 leading-relaxed font-light max-w-md">{it.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-16 text-center text-xs uppercase tracking-[0.3em] text-cream/45">
          La carta completa è consultabile in sala — i prezzi sono indicativi
        </p>
      </div>
    </section>
  );
};

export default Menu;
