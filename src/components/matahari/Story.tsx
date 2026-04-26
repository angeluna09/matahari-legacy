import storyImg from "@/assets/story-founders.jpg";

const Story = () => {
  return (
    <section id="storia" className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="lg:col-span-5 reveal">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/40" aria-hidden />
            <img
              src={storyImg}
              alt="I tre fondatori del Matahari Bistrot negli anni '80"
              loading="lazy"
              width={1280}
              height={1600}
              className="relative w-full h-auto object-cover grayscale-[20%] sepia-[15%]"
            />
            <div className="absolute -bottom-6 -right-6 bg-background border border-primary/50 px-6 py-4">
              <span className="font-serif-display text-4xl text-primary">1983</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-cream/70 mt-1">
                anno di fondazione
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 reveal">
          <span className="eyebrow eyebrow-left mb-6">La nostra storia</span>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-cream mt-6">
            Tre amici, un sogno
            <br />
            tornato a casa.
          </h2>

          <div className="mt-10 space-y-6 text-cream/75 leading-relaxed text-lg max-w-2xl font-light">
            <p>
              <span className="font-italic-accent text-primary text-xl">Firenze, primi anni Ottanta.</span>{" "}
              Tre giovani siciliani — <strong className="text-cream font-medium">Martino Paracino</strong>,{" "}
              <strong className="text-cream font-medium">Giacomo Gargano</strong> e{" "}
              <strong className="text-cream font-medium">Paolo Caccamese</strong> — lavorano nelle cucine toscane e
              imparano un mestiere che li cambierà per sempre.
            </p>
            <p>
              Nel 1983 tornano a Bagheria con un'idea che, all'epoca, era pura innovazione: portare in città la prima
              vera <em className="text-primary not-italic font-italic-accent text-xl">steakhouse</em> — la carne come
              protagonista, il fuoco come linguaggio, la convivialità come rito.
            </p>
            <p>
              Quarant'anni dopo, il Matahari è diventato un'istituzione. Una tappa del cuore per generazioni di
              bagheresi, e una scoperta per chi arriva oggi cercando un sapore che non si dimentica.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <div className="gold-divider" />
            <span className="font-italic-accent italic text-cream/80 text-xl">
              "Da quarant'anni, lo stesso fuoco."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
