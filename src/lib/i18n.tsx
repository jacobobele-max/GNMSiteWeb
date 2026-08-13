import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, { fr: string; en: string }>;

const dict: Dict = {
  // Nav
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.services": { fr: "Services", en: "Services" },
  "nav.commitments": { fr: "Nos engagements", en: "Our commitments" },
  "nav.about": { fr: "Qui sommes-nous ?", en: "About us" },
  "nav.news": { fr: "Actualités", en: "News" },
  "nav.recycling": { fr: "Recyclage", en: "Recycling" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "cta.client": { fr: "Espace client", en: "Client area" },
  "cta.quote": { fr: "Demander un devis", en: "Request a quote" },
  "nav.search": { fr: "Rechercher", en: "Search" },
  "nav.services.particulier": { fr: "Particuliers", en: "Individuals" },
  "nav.services.entreprise": { fr: "Entreprises", en: "Businesses" },
  "nav.services.all": { fr: "Tous nos services", en: "All services" },
  "nav.commit.expertise": { fr: "Notre expertise", en: "Our expertise" },
  "nav.commit.innovations": { fr: "Innovations", en: "Innovations" },
  "nav.commit.eco": { fr: "Services éco-responsables", en: "Eco-responsible services" },

  // Hero slides
  "hero.eyebrow.1": { fr: "Propreté professionnelle", en: "Professional cleanliness" },
  "hero.title.1": {
    fr: "Des espaces impeccables, une équipe d'experts",
    en: "Impeccable spaces, an expert team",
  },
  "hero.sub.1": {
    fr: "Nettoyage de bureaux, résidences et chantiers au Gabon, avec rigueur et discrétion.",
    en: "Office, residential and site cleaning in Gabon, with rigor and discretion.",
  },
  "hero.eyebrow.2": { fr: "Éco-responsable", en: "Eco-friendly" },
  "hero.title.2": { fr: "Des produits bio, un impact réduit", en: "Bio products, lower impact" },
  "hero.sub.2": {
    fr: "Nous utilisons des solutions certifiées biologiques pour protéger votre santé et l'environnement.",
    en: "We use certified organic solutions to protect your health and the environment.",
  },
  "hero.eyebrow.3": { fr: "Multiservices", en: "Multiservices" },
  "hero.title.3": { fr: "Bien plus que du nettoyage", en: "Much more than cleaning" },
  "hero.sub.3": {
    fr: "Jardinage, désinfection, dératisation, manutention — une seule équipe, toutes les solutions.",
    en: "Gardening, disinfection, pest control, logistics — one team, every solution.",
  },
  "hero.viewServices": { fr: "Nos services", en: "Our services" },

  // Services
  "services.eyebrow": { fr: "Nos services", en: "Our services" },
  "services.title.a": { fr: "Des solutions", en: "Tailored" },
  "services.title.b": { fr: "sur mesure", en: "solutions" },
  "services.title.c": { fr: "pour tous vos besoins", en: "for every need" },
  "services.subtitle": {
    fr: "Une équipe polyvalente, des prestations soignées et un seul interlocuteur pour tous vos services.",
    en: "A versatile team, careful service, and a single point of contact for everything.",
  },
  "services.tab.particulier": { fr: "Particuliers", en: "Individuals" },
  "services.tab.entreprise": { fr: "Entreprises", en: "Businesses" },
  "services.learnMore": { fr: "En savoir plus", en: "Learn more" },
  "services.viewAll": { fr: "Voir tous nos services", en: "View all services" },

  // Philosophy
  "philo.eyebrow": { fr: "Notre philosophie", en: "Our philosophy" },
  "philo.title.a": { fr: "Un nettoyage qui prend soin", en: "Cleaning that cares for" },
  "philo.title.b": { fr: "de vous et de la planète", en: "you and the planet" },

  // Gallery
  "gallery.eyebrow": { fr: "Nos réalisations", en: "Our work" },
  "gallery.title.a": { fr: "Nos dernières", en: "Our latest" },
  "gallery.title.b": { fr: "interventions", en: "projects" },
  "gallery.subtitle": {
    fr: "Quelques aperçus du travail réalisé par nos équipes sur le terrain.",
    en: "A glimpse of the work delivered by our teams in the field.",
  },

  // Testimonials
  "test.eyebrow": { fr: "Témoignages", en: "Testimonials" },
  "test.title": {
    fr: "Ils nous font confiance, ils en parlent",
    en: "They trust us, they talk about it",
  },

  // Trusted
  "trusted.title": { fr: "Ils nous font confiance", en: "They trust us" },

  // Chatbot
  "chat.open": { fr: "Demander un devis", en: "Request a quote" },

  // Services page & mega
  "svc.breadcrumb.home": { fr: "Accueil", en: "Home" },
  "svc.breadcrumb.all": { fr: "Tous nos services", en: "All services" },
  "svc.page.title": { fr: "Tous nos services", en: "All our services" },
  "svc.page.subtitle": {
    fr: "Une gamme complète pour répondre à tous vos besoins de propreté.",
    en: "A complete range to meet all your cleanliness needs.",
  },
  "svc.search.placeholder": { fr: "Rechercher un service...", en: "Search a service..." },
  "svc.search.btn": { fr: "Rechercher", en: "Search" },
  "svc.filter.allCat": { fr: "Toutes catégories", en: "All categories" },
  "svc.filter.allAud": { fr: "Tous publics", en: "All audiences" },
  "svc.filter.reset": { fr: "Réinitialiser", en: "Reset" },
  "svc.filter.particulier": { fr: "Particuliers", en: "Individuals" },
  "svc.filter.entreprise": { fr: "Entreprises", en: "Businesses" },
  "svc.viewAll": { fr: "Voir tous", en: "View all" },
  "svc.discover": { fr: "Découvrir", en: "Discover" },
  "svc.mega.headline": {
    fr: "Propreté, Hygiène et Qualité au service de vos espaces",
    en: "Cleanliness, Hygiene and Quality for your spaces",
  },
  "svc.mega.b1": { fr: "Interventions rapides", en: "Fast response" },
  "svc.mega.b2": { fr: "Équipe qualifiée", en: "Qualified team" },
  "svc.mega.b3": { fr: "Matériel professionnel", en: "Professional equipment" },
  "svc.mega.b4": { fr: "Respect de l'environnement", en: "Environmental respect" },
  "svc.mega.viewAll": { fr: "Voir tous nos services", en: "View all our services" },
  "svc.modal.included": { fr: "Prestations incluses", en: "What's included" },
  "svc.modal.close": { fr: "Fermer", en: "Close" },
  "svc.noResults": {
    fr: "Aucun service ne correspond à votre recherche.",
    en: "No service matches your search.",
  },
  "svc.engage.1.t": { fr: "Interventions rapides", en: "Fast response" },
  "svc.engage.1.d": { fr: "Réponse sous 24h", en: "Reply within 24h" },
  "svc.engage.2.t": { fr: "Équipe qualifiée", en: "Qualified team" },
  "svc.engage.2.d": { fr: "Professionnels expérimentés", en: "Experienced professionals" },
  "svc.engage.3.t": { fr: "Matériel professionnel", en: "Professional equipment" },
  "svc.engage.3.d": { fr: "Équipements performants", en: "High-performance gear" },
  "svc.engage.4.t": { fr: "Respect de l'environnement", en: "Environmental respect" },
  "svc.engage.4.d": { fr: "Produits écologiques", en: "Eco-friendly products" },
};

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dict[k]?.[lang] ?? k;

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
