import { Award, Beef, BookOpen, Users, Accessibility, Wine } from "lucide-react";

const points = [
  { icon: Award, title: "Dal 1983", desc: "Locale storico di Bagheria" },
  { icon: Beef, title: "Carne premium", desc: "Tagli selezionati, frollature lente" },
  { icon: BookOpen, title: "Ampio menu", desc: "Carne, pizza, primi, dolci" },
  { icon: Users, title: "Famiglie & gruppi", desc: "Sale ampie e accoglienti" },
  { icon: Accessibility, title: "Accessibile", desc: "Spazi pensati per tutti" },
  { icon: Wine, title: "Carta vini", desc: "Selezione siciliana e nazionale" },
];

const Strengths = () => {
  return (
    <section className="relative py-24 md:py-32 bg-muted border-y border-border/50">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="reveal text-center flex flex-col items-center"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <p.icon className="w-7 h-7 text-primary stroke-[1.2]" />
              <h3 className="mt-5 font-serif-display text-lg text-cream">{p.title}</h3>
              <p className="mt-2 text-xs text-cream/60 leading-relaxed font-light max-w-[160px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
