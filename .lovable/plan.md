# Matahari Bistrot — Sito Web Premium

Un sito vetrina cinematografico in italiano per il ristorante storico di Bagheria, con estetica scura, calda ed elegante, lontana da qualsiasi impressione "pub". One-page con scroll storytelling + sezioni ben ritmate.

## Direzione visiva

- **Palette**: nero carbone `#0F0F0F` come base, marrone cuoio `#3B2F2F`, oro satinato `#C6A15B` come accento, crema caldo `#F5E9DA` per testi su scuro, verde oliva scuro `#3E4A3C` per dettagli.
- **Tipografia**: Playfair Display (titoli serif), Inter (testi), Cormorant Garamond italic per accenti narrativi.
- **Mood**: dark mode permanente, immagini ad alto contrasto (carne, fuoco, pietra, legno), grana sottile, vignettature, oro usato con parsimonia su filetti, numeri e CTA.
- **Microinterazioni**: fade/slide on scroll, parallax leggero sull'hero, hover con underline oro, immagini con leggero zoom, transizioni morbide.

## Struttura della pagina

1. **Navbar trasparente → solid on scroll**
   Logo "Matahari" + menu (Storia, Esperienza, Menu, Gallery, Contatti) + CTA "Prenota" (telefono/WhatsApp).

2. **Hero cinematografico**
   Immagine generata AI (chateaubriand su pietra lavica, fiamme, luce calda), overlay scuro, headline serif grande:
   *"Dal 1983, il sapore della tradizione a Bagheria"*
   Sub: "Steakhouse · Pizzeria · Bistrot · Wine Bar — Un luogo da vivere."
   CTA: "Prenota ora" (apre WhatsApp), "Scopri il menu" (scroll).

3. **Storytelling fondatori**
   Layout a due colonne, immagine vintage AI + testo emozionale su Martino Paracino, Giacomo Gargano, Paolo Caccamese — Firenze anni '80, ritorno a Bagheria, prima steakhouse della città. Citazione in corsivo oro.

4. **Esperienza (4 mondi)**
   Griglia di 4 card scure con immagini AI dedicate:
   🥩 Steakhouse · 🍕 Pizzeria forno a legna · 🍷 Wine Bar · 🍽️ Bistrot mediterraneo.
   Hover: zoom immagine + descrizione che scivola in alto.

5. **Menu (struttura editabile)**
   Tabs eleganti: Antipasti · Pizze · Carne · Primi · Dessert · Bevande.
   Ogni voce: nome serif, descrizione breve, prezzo a destra con linea puntinata oro. Voci placeholder facilmente sostituibili in un singolo file dati.

6. **Punti di forza**
   Riga di icone sottili (oro): 1983 · Carne premium · Ampio menu · Famiglie & gruppi · Accessibile · Carta vini.

7. **Perché sceglierci**
   Tre blocchi che reframano le criticità in valori: prenotazione consigliata, cucina espressa, esperienza autentica.

8. **Gallery**
   Masonry grid scura con 8–10 immagini AI (interni, piatti, carne, atmosfera). Lightbox al click.

9. **Recensioni**
   Carosello citazioni curate su sfondo scuro con virgolette oro grandi.

10. **Ricordi al Matahari (extra)**
    Mini timeline orizzontale: 1983 fondazione → anni '90 istituzione → oggi. Tocco emozionale che rinforza l'eredità.

11. **Prenotazione**
    Sezione full-width scura con CTA grandi: "Prenota su WhatsApp" e "Chiama ora", più orari evidenti.

12. **Contatti & footer**
    Indirizzo Via Dante Alighieri 79/E, telefono, orari, social, mappa Google embed, copyright.

## Funzionalità

- Italiano unico
- Prenotazioni via WhatsApp + telefono (link diretti, nessun backend)
- Hero immagine statica cinematografica
- Tutte le immagini generate via AI Gateway (Nano Banana) e salvate in `src/assets/` per ottime performance
- Animazioni scroll-based, dark mode permanente, mobile-first con CTA fissa "Prenota" su mobile

## Note tecniche

- Design system aggiornato in `index.css` + `tailwind.config.ts` con la palette HSL e i font.
- Generazione immagini one-shot via script che chiama AI Gateway, output importati come asset statici.
- Componenti per sezione in `src/components/matahari/` per pulizia.
- Animazioni con classi Tailwind + IntersectionObserver leggero.
- Numero di telefono e link WhatsApp configurabili in un unico file costanti.
