import { Link } from "react-router-dom";
import { Home, ChevronRight, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { DEVIS_URL } from "@/lib/constants";

type Plan = {
  slug: string;
  name: { fr: string; en: string };
  price: string;
  period: { fr: string; en: string };
  tagline: { fr: string; en: string };
  bullets: { fr: string; en: string }[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    slug: "essentielle",
    name: { fr: "Essentielle", en: "Essential" },
    price: "30 000 F",
    period: { fr: "/ mois", en: "/ month" },
    tagline: {
      fr: "L'entretien courant du foyer, sans y penser.",
      en: "Everyday home upkeep, without having to think about it.",
    },
    bullets: [
      { fr: "Ménage complet, 1×/semaine", en: "Full cleaning, 1×/week" },
      { fr: "4 passages par mois", en: "4 visits per month" },
    ],
  },
  {
    slug: "confort",
    name: { fr: "Confort", en: "Comfort" },
    price: "52 000 F",
    period: { fr: "/ mois", en: "/ month" },
    tagline: {
      fr: "La maison et le linge pris en charge.",
      en: "The home and the laundry, taken care of.",
    },
    bullets: [
      { fr: "Ménage complet, 1×/semaine", en: "Full cleaning, 1×/week" },
      { fr: "Lavage ou repassage, 1×/semaine", en: "Laundry or ironing, 1×/week" },
      { fr: "8 interventions par mois", en: "8 visits per month" },
    ],
    featured: true,
  },
  {
    slug: "premium",
    name: { fr: "Premium", en: "Premium" },
    price: "85 000 F",
    period: { fr: "/ mois", en: "/ month" },
    tagline: {
      fr: "Le service complet, sans compromis.",
      en: "The full service, no compromise.",
    },
    bullets: [
      { fr: "Ménage complet, 1×/semaine", en: "Full cleaning, 1×/week" },
      { fr: "Lavage et repassage combinés, 2×/semaine", en: "Combined laundry & ironing, 2×/week" },
      { fr: "12 interventions par mois", en: "12 visits per month" },
      {
        fr: "Lutte antivectorielle 1×/trimestre",
        en: "Pest control treatment once per quarter",
      },
    ],
  },
];

const alaCarte = [
  {
    name: { fr: "Lavage ou repassage", en: "Laundry or ironing" },
    detail: { fr: "1 panier / bassine moyenne, au choix", en: "1 average basket, your choice" },
    price: "7 500 F",
  },
  {
    name: { fr: "Lavage & repassage", en: "Laundry & ironing" },
    detail: { fr: "1 panier, combinés", en: "1 basket, combined" },
    price: "13 500 F",
  },
  {
    name: { fr: "Lavage & repassage", en: "Laundry & ironing" },
    detail: { fr: "1 grande bassine, combinés", en: "1 large basket, combined" },
    price: "17 500 F",
  },
];

export default function FormulesResidentiellesPage() {
  const { t, lang } = useI18n();

  useDocumentHead({
    title: "Formules résidentielles Essentielle, Confort, Premium | GN&M",
    meta: [
      {
        name: "description",
        content:
          "Ménage, lavage et repassage à domicile à Libreville, Owendo et Akanda : trois formules mensuelles (30 000 à 85 000 F) et des prestations ponctuelles à la carte.",
      },
      {
        property: "og:title",
        content: "Formules résidentielles Essentielle, Confort, Premium | GN&M",
      },
      {
        property: "og:description",
        content:
          "Ménage, lavage et repassage à domicile à Libreville, Owendo et Akanda : trois formules mensuelles et des prestations ponctuelles à la carte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <SocialFloat />

      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1.5 hover:text-brand-green">
              <Home size={14} /> {lang === "fr" ? "Accueil" : "Home"}
            </Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-foreground">
              {lang === "fr" ? "Formules résidentielles" : "Home plans"}
            </span>
          </nav>

          <span className="mt-6 inline-block rounded-full bg-brand-green/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green-deep">
            {lang === "fr" ? "Chez vous, à Libreville, Owendo & Akanda" : "At home in Libreville, Owendo & Akanda"}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            {lang === "fr" ? "Formules résidentielles" : "Home plans"}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
            {lang === "fr"
              ? "Un abonnement mensuel pour l'entretien de votre maison, avec ou sans lavage et repassage. Même équipe, même qualité, à chaque passage."
              : "A monthly plan for your home's upkeep, with or without laundry and ironing. Same team, same quality, every visit."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.slug}
                className={`relative flex flex-col rounded-3xl border p-8 shadow-card ${
                  plan.featured
                    ? "border-brand-green bg-brand-green/5 ring-2 ring-brand-green"
                    : "border-border bg-card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white shadow-brand">
                    <Star size={12} className="fill-white" />
                    {lang === "fr" ? "Le plus choisi" : "Most popular"}
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {plan.name[lang]}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{plan.tagline[lang]}</p>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold text-brand-green-deep">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.period[lang]}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-foreground/85">
                      <Check size={18} className="mt-0.5 shrink-0 text-brand-green" />
                      <span>{b[lang]}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 w-full rounded-full ${
                    plan.featured
                      ? "bg-brand-green text-white hover:bg-brand-green-deep"
                      : "bg-brand-blue-deep text-white hover:opacity-90"
                  }`}
                >
                  <a href={DEVIS_URL} target="_blank" rel="noopener noreferrer">
                    {t("cta.quote")} <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              {lang === "fr" ? "Prestations à la carte" : "One-off services"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {lang === "fr"
                ? "Besoin d'un lavage ou d'un repassage ponctuel, sans abonnement ? Paiement le jour même, produits homologués, linge parfumé."
                : "Need a one-off laundry or ironing service, no subscription? Pay the same day, certified products, scented laundry."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {alaCarte.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center shadow-card"
              >
                <p className="font-display text-lg font-bold text-foreground">{item.name[lang]}</p>
                <p className="text-sm text-muted-foreground">{item.detail[lang]}</p>
                <p className="mt-2 font-display text-2xl font-bold text-brand-green-deep">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-yellow px-8 text-brand-blue-deep shadow-brand hover:opacity-95"
            >
              <a href={DEVIS_URL} target="_blank" rel="noopener noreferrer">
                {t("cta.quote")} <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
