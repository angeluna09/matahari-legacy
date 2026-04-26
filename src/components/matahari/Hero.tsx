import heroImg from "@/assets/hero-steak.jpg";
import { whatsappLink } from "@/lib/matahari";

const Hero = () => {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden grain">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Chateaubriand su pietra lavica al Matahari Bistrot"
          className="w-full h-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--charcoal)/0.6)_85%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container-wide">
            <div className="max-w-3xl animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-14 bg-primary" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-primary font-medium">
                  Dal 1983 · Bagheria
                </span>
              </div>

              <h1 className="font-serif-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
                Il sapore della
                <br />
                <span className="font-italic text-primary italic font-normal">tradizione</span>,
                <br />
                a tavola.
              </h1>

              <p className="mt-8 max-w-xl text-base md:text-lg text-cream/75 leading-relaxed font-light">
                Steakhouse, pizzeria, bistrot e wine bar.
                <br className="hidden md:block" />
                Un luogo da vivere, non solo da gustare.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-gold">
                  Prenota un tavolo
                </a>
                <a href="#menu" className="btn-ghost-gold">
                  Scopri il menu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pb-10 flex justify-center">
          <div className="flex flex-col items-center gap-3 animate-shimmer">
            <span className="text-[10px] uppercase tracking-[0.4em] text-cream/60">Scopri</span>
            <div className="w-px h-10 bg-gradient-to-b from-primary/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
