import { useEffect } from "react";
import Navbar from "@/components/matahari/Navbar";
import Hero from "@/components/matahari/Hero";
import Story from "@/components/matahari/Story";
import Experience from "@/components/matahari/Experience";
import Menu from "@/components/matahari/Menu";
import Strengths from "@/components/matahari/Strengths";
import WhyUs from "@/components/matahari/WhyUs";
import Gallery from "@/components/matahari/Gallery";
import Reviews from "@/components/matahari/Reviews";
import Timeline from "@/components/matahari/Timeline";
import Reservation from "@/components/matahari/Reservation";
import Footer from "@/components/matahari/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Matahari Bistrot · Steakhouse a Bagheria dal 1983";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Matahari Bistrot a Bagheria: steakhouse, pizzeria, bistrot e wine bar dal 1983. Carne premium, forno a legna, atmosfera calda e accogliente."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    // JSON-LD Restaurant
    const ldId = "ld-matahari";
    document.getElementById(ldId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = ldId;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Matahari Bistrot",
      servesCuisine: ["Steakhouse", "Pizzeria", "Mediterranea", "Italiana"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Dante Alighieri 79/E",
        addressLocality: "Bagheria",
        addressRegion: "PA",
        addressCountry: "IT",
      },
      foundingDate: "1983",
      priceRange: "€€",
      url: window.location.origin,
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Experience />
        <Menu />
        <Strengths />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Timeline />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
