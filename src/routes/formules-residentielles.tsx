import { Link } from "react-router-dom";
import { Home, ChevronRight, ArrowRight, Check, Star, ShieldCheck, Leaf, Target, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { TrustStrip } from "@/components/TrustStrip";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { DEVIS_URL } from "@/lib/constants";

const trustItems = {
  fr: [
    { icon: ShieldCheck, title: "Professionnalisme", desc: "Équipes formées et équipements adaptés" },
    { icon: Leaf, title: "Hygiène", desc: "Respect des normes sanitaires" },
    { icon: Target, title: "Fiabilité", desc: "Suivi régulier et rapports détaillés" },
    { icon: HeartHandshake, title: "Partenaire de confiance", desc: "Pour un cadre de vie sain et durable" },
  ],
  en: [
    { icon: ShieldCheck, title: "Professionalism", desc: "Trained teams and suitable equipment" },
    { icon: Leaf, title: "Hygiene", desc: "Compliant with sanitary standards" },
    { icon: Target, title: "Reliability", desc: "Regular follow-up and detailed reports" },
    { icon: HeartHandshake, title: "Trusted partner", desc: "For a healthy, lasting living space" },
  ],
} as const;

type Plan = {
  slug: string;
  name: { fr: string; en: string };
  context: { fr: string; en: string };
  accroche: { fr: string; en: string };
  bullets: { fr: string; en: string }[];
  bonus: { fr: string; en: string }[];
  accent: "green" | "yellow" | "blue";
  featured?: boolean;
};

const plans: Plan[] = [
  {
    slug: "nouveau-depart",
    name: { fr: "Nouveau Départ", en: "Fresh Start" },
    context: {
      fr: "Avant emménagement, après travaux, maison longtemps fermée",
      en: "Before moving in, after renovation work, or a long-closed home",
    },
    accroche: {
      fr: "Repartez à zéro dans un espace sain",
      en: "Start fresh in a healthy space",
    },
    bullets: [
      { fr: "Gros nettoyage complet / décapage", en: "Full deep clean / stripping" },
      { fr: "Nettoyage des sols, murs, vitres, surfaces", en: "Floors, walls, windows & surfaces cleaned" },
      { fr: "Élimination des poussières de chantier", en: "Construction dust removal" },
      { fr: "Désinfection totale des espaces", en: "Full disinfection of all spaces" },
    ],
    bonus: [{ fr: "Audit / état des lieux gratuit", en: "Free walkthrough audit" }],
    accent: "green",
  },
  {
    slug: "serenite",
    name: { fr: "Sérénité", en: "Serenity" },
    context: {
      fr: "Maison occupée, présence de nuisibles, besoin d'assainissement total",
      en: "Occupied home, pest presence, or full sanitation needs",
    },
    accroche: {
      fr: "Vivez sans stress, on s'occupe de tout",
      en: "Live stress-free, we handle everything",
    },
    bullets: [
      { fr: "Nettoyage en profondeur", en: "Deep cleaning" },
      { fr: "Désinsectisation complète + dératisation", en: "Full pest control + rodent control" },
      { fr: "Après travaux et déménagement", en: "Post-renovation & post-move cleaning" },
      { fr: "Traitement des zones sensibles", en: "Treatment of sensitive areas" },
      { fr: "Suivi après l'intervention", en: "Follow-up after the visit" },
    ],
    bonus: [
      { fr: "Audit / état des lieux gratuit", en: "Free walkthrough audit" },
      { fr: "1 grand nettoyage chaque 3 mois + réduction tarifaire", en: "One deep clean every 3 months + discounted rate" },
    ],
    accent: "yellow",
    featured: true,
  },
  {
    slug: "confort-plus",
    name: { fr: "Confort Plus", en: "Comfort Plus" },
    context: {
      fr: "Le pack premium pour un confort total",
      en: "The premium pack for total comfort",
    },
    accroche: {
      fr: "Votre maison comme un hôtel haut de gamme",
      en: "Your home, like a high-end hotel",
    },
    bullets: [
      { fr: "Nettoyage en profondeur complet", en: "Complete deep cleaning" },
      { fr: "Nettoyage de canapé 6 places", en: "6-seat sofa cleaning" },
      { fr: "Nettoyage des tapis de sol", en: "Rug & carpet cleaning" },
      { fr: "Désinsectisation + dératisation", en: "Pest control + rodent control" },
      { fr: "Traitement anti-acariens", en: "Anti-mite treatment" },
    ],
    bonus: [
      { fr: "Audit / état des lieux gratuit", en: "Free walkthrough audit" },
      { fr: "1 grand nettoyage chaque 3 mois + réduction tarifaire", en: "One deep clean every 3 months + discounted rate" },
    ],
    accent: "blue",
  },
];

const accentClasses: Record<Plan["accent"], { ring: string; badge: string; check: string; accroche: string }> = {
  green: {
    ring: "border-brand-green bg-brand-green/5 ring-2 ring-brand-green",
    badge: "bg-brand-green text-white",
    check: "text-brand-green",
    accroche: "text-brand-green-deep",
  },
  yellow: {
    ring: "border-brand-yellow bg-brand-yellow/10 ring-2 ring-brand-yellow",
    badge: "bg-brand-yellow text-brand-blue-deep",
    check: "text-brand-blue-deep",
    accroche: "text-brand-blue-deep",
  },
  blue: {
    ring: "border-brand-blue-deep bg-brand-blue-deep/5 ring-2 ring-brand-blue-deep",
    badge: "bg-brand-blue-deep text-white",
    check: "text-brand-blue-deep",
    accroche: "text-brand-blue-deep",
  },
};

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
    title: "Formules résidentielles Nouveau Départ, Sérénité, Confort Plus | GN&M",
    meta: [
      {
        name: "description",
        content:
          "Nettoyage à domicile à Libreville, Owendo, Akanda et Ntoum : Nouveau Départ, Sérénité et Confort Plus — audit gratuit et devis adapté à votre situation, plus des prestations ponctuelles à la carte.",
      },
      {
        property: "og:title",
        content: "Formules résidentielles Nouveau Départ, Sérénité, Confort Plus | GN&M",
      },
      {
        property: "og:description",
        content:
          "Nettoyage à domicile à Libreville, Owendo, Akanda et Ntoum : trois formules adaptées à votre situation, avec audit gratuit, et des prestations ponctuelles à la carte.",
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
            {lang === "fr" ? "Chez vous, à Libreville, Owendo, Akanda & Ntoum" : "At home in Libreville, Owendo, Akanda & Ntoum"}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            {lang === "fr" ? "Formules résidentielles" : "Home plans"}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
            {lang === "fr"
              ? "Trois formules adaptées à votre situation — emménagement, présence de nuisibles ou confort premium — avec un audit gratuit et un devis sur mesure."
              : "Three plans adapted to your situation — moving in, pest presence, or premium comfort — with a free walkthrough audit and a tailored quote."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => {
              const accent = accentClasses[plan.accent];
              return (
                <div
                  key={plan.slug}
                  className={`relative flex flex-col rounded-3xl border p-8 shadow-card ${
                    plan.featured ? accent.ring : "border-border bg-card"
                  }`}
                >
                  {plan.featured && (
                    <span
                      className={`absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full px-4 py-1 text-xs font-bold shadow-brand ${accent.badge}`}
                    >
                      <Star size={12} className="fill-current" />
                      {lang === "fr" ? "Le plus choisi" : "Most popular"}
                    </span>
                  )}
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {plan.name[lang]}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.context[lang]}</p>
                  <p className={`mt-1 font-display text-[15px] font-bold ${accent.accroche}`}>
                    {plan.accroche[lang]}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[15px] text-foreground/85">
                        <Check size={18} className={`mt-0.5 shrink-0 ${accent.check}`} />
                        <span>{b[lang]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-border pt-5">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${accent.badge}`}
                    >
                      {lang === "fr" ? "Bonus" : "Bonus"}
                    </span>
                    <ul className="mt-2 space-y-1">
                      {plan.bonus.map((b, i) => (
                        <li key={i} className="text-sm font-semibold text-muted-foreground">
                          {b[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    className={`mt-8 w-full rounded-full hover:opacity-90 ${accent.badge}`}
                  >
                    <a href={DEVIS_URL} target="_blank" rel="noopener noreferrer">
                      {t("cta.quote")} <ArrowRight className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              );
            })}
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

      <TrustStrip items={trustItems[lang]} />

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
