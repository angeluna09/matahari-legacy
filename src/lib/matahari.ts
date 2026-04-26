// Configurazione centralizzata Matahari Bistrot
export const BRAND = {
  name: "Matahari",
  tagline: "Bistrot · Steakhouse · Pizzeria · Wine Bar",
  founded: 1983,
  city: "Bagheria",
  address: "Via Dante Alighieri 79/E, Bagheria (PA)",
  phone: "+39 091 000 0000",
  phoneDisplay: "091 000 0000",
  whatsapp: "+390910000000",
  whatsappMessage: "Ciao! Vorrei prenotare un tavolo al Matahari Bistrot.",
  hours: [
    { day: "Lunedì", time: "Chiuso" },
    { day: "Martedì – Domenica", time: "19:30 – 23:30" },
  ],
  social: {
    instagram: "#",
    facebook: "#",
  },
};

export const whatsappLink = () =>
  `https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;

export const telLink = () => `tel:${BRAND.phone.replace(/\s/g, "")}`;
