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
import { DEVIS_URL, SITE_URL } from "@/lib/constants";

const trustItems = {
  fr: [
    { icon: ShieldCheck, title: "Professionnalisme", desc: "Équipes formées et équipements adaptés" },
    { icon: Leaf, title: "Hygiène", desc: "Respect des normes sanitaires" },
    { icon: Target, title: "Fiabilité", desc: "Suivi régulier et rapports détaillés" },
    { icon: HeartHandshake, title: "Partenaire de confiance", desc: "Pour un cadre de travail sain et performant" },
  ],
  en: [
    { icon: ShieldCheck, title: "Professionalism", desc: "Trained teams and suitable equipment" },
    { icon: Leaf, title: "Hygiene", desc: "Compliant with sanitary standards" },
    { icon: Target, title: "Reliability", desc: "Regular follow-up and detailed reports" },
    { icon: HeartHandshake, title: "Trusted partner", desc: "For a healthy, high-performing workplace" },
  ],
} as const;

type Plan = {
  slug: string;
  name: { fr: string; en: string };
  tagline: { fr: string; en: string };
  bullets: { fr: string; en: string }[];
  bonus: { fr: string; en: string }[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    slug: "essentiel-pro",
    name: { fr: "Essentiel Pro", en: "Essential Pro" },
    tagline: {
      fr: "La propreté fiable au quotidien.",
      en: "Reliable everyday cleanliness.",
    },
    bullets: [
      { fr: "Agent de nettoyage qualifié", en: "Qualified cleaning agent" },
      { fr: "Produits et matériel non inclus (à la charge du client)", en: "Products & equipment not included (client-supplied)" },
      { fr: "Nettoyage régulier", en: "Regular cleaning" },
      { fr: "Suivi qualité mensuel", en: "Monthly quality follow-up" },
      {
        fr: "Services 3D trimestriels : désinfection, désinsectisation, dératisation",
        en: "Quarterly 3D services: disinfection, pest control, rodent control",
      },
    ],
    bonus: [
      { fr: "Audit / état des lieux gratuit", en: "Free walkthrough audit" },
      { fr: "Première intervention 3D offerte (1er trimestre)", en: "First 3D treatment free (first quarter)" },
    ],
  },
  {
    slug: "performance",
    name: { fr: "Performance", en: "Performance" },
    tagline: {
      fr: "Un environnement sain qui valorise votre image.",
      en: "A healthy environment that reflects well on your business.",
    },
    bullets: [
      { fr: "Agent de nettoyage qualifié", en: "Qualified cleaning agent" },
      { fr: "Produits d'entretien inclus", en: "Cleaning products included" },
      { fr: "Matériel d'entretien inclus", en: "Cleaning equipment included" },
      { fr: "Nettoyage régulier", en: "Regular cleaning" },
      {
        fr: "Services 3D trimestriels : désinfection, désinsectisation, dératisation",
        en: "Quarterly 3D services: disinfection, pest control, rodent control",
      },
      { fr: "Certificat de lutte anti-vectorielle chaque trimestre", en: "Vector-control certificate every quarter" },
      { fr: "Suivi qualité mensuel", en: "Monthly quality follow-up" },
    ],
    bonus: [
      { fr: "Audit / état des lieux gratuit", en: "Free walkthrough audit" },
      { fr: "Première intervention 3D offerte (1er trimestre)", en: "First 3D treatment free (first quarter)" },
    ],
    featured: true,
  },
];

export default function FormulesProfessionnellesPage() {
  const { t, lang } = useI18n();

  useDocumentHead({
    title: "Formules professionnelles Essentiel Pro & Performance | GN&M",
    meta: [
      {
        name: "description",
        content:
          "Entretien récurrent de vos bureaux et locaux professionnels au Gabon : formules Essentiel Pro et Performance, audit gratuit, suivi qualité mensuel et certificat de lutte anti-vectorielle.",
      },
      {
        property: "og:title",
        content: "Formules professionnelles Essentiel Pro & Performance | GN&M",
      },
      {
        property: "og:description",
        content:
          "Un entretien récurrent et fiable pour vos bureaux et locaux professionnels, avec audit gratuit et suivi qualité mensuel.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
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
              {lang === "fr" ? "Formules professionnelles" : "Business plans"}
            </span>
          </nav>

          <span className="mt-6 inline-block rounded-full bg-brand-blue-deep/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-deep">
            {lang === "fr" ? "Pour vos bureaux & locaux professionnels" : "For your offices & business premises"}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            {lang === "fr" ? "Formules professionnelles" : "Business plans"}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
            {lang === "fr"
              ? "Un entretien récurrent et fiable pour vos bureaux et locaux professionnels, avec audit gratuit et suivi qualité mensuel."
              : "Reliable, recurring upkeep for your offices and business premises, with a free audit and monthly quality follow-up."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.slug}
                className={`relative flex flex-col rounded-3xl border p-8 shadow-card ${
                  plan.featured
                    ? "border-brand-blue-deep bg-brand-blue-deep/5 ring-2 ring-brand-blue-deep"
                    : "border-border bg-card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-blue-deep px-4 py-1 text-xs font-bold text-white shadow-brand">
                    <Star size={12} className="fill-white" />
                    {lang === "fr" ? "Le plus complet" : "Most complete"}
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {plan.name[lang]}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{plan.tagline[lang]}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-foreground/85">
                      <Check size={18} className="mt-0.5 shrink-0 text-brand-blue-deep" />
                      <span>{b[lang]}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-border pt-5">
                  <span className="inline-block rounded-full bg-brand-blue-deep px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Bonus
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
                  className="mt-8 w-full rounded-full bg-brand-blue-deep text-white hover:opacity-90"
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
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="text-muted-foreground">
            {lang === "fr"
              ? "Ministère, site industriel ou minier ? Découvrez nos pages dédiées."
              : "Ministry, industrial or mining site? See our dedicated sector pages."}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/secteurs/institutionnel"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-deep hover:underline"
            >
              {lang === "fr" ? "Secteur institutionnel" : "Public sector"} <ArrowRight size={14} />
            </Link>
            <Link
              to="/secteurs/industriel-minier"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-deep hover:underline"
            >
              {lang === "fr" ? "Industriel & Minier" : "Industrial & Mining"} <ArrowRight size={14} />
            </Link>
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
