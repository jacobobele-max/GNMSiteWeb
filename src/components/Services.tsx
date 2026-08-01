import { useState } from "react";
import {
  Sparkles,
  Building2,
  Trees,
  Bug,
  SprayCan,
  Truck,
  Home,
  Waves,
  Hammer,
  Wind,
  Grid3x3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

type Cat = "particulier" | "entreprise";

const services: Record<Cat, Array<{ icon: any; fr: { t: string; d: string }; en: { t: string; d: string } }>> = {
  particulier: [
    {
      icon: Home,
      fr: { t: "Nettoyage résidentiel", d: "Une maison impeccable, à votre rythme, par une équipe de confiance et formée." },
      en: { t: "Home cleaning", d: "An impeccable home, at your pace, by a trained and trusted team." },
    },
    {
      icon: Waves,
      fr: { t: "Entretien piscine", d: "Traitement de l'eau, nettoyage des parois, équilibre chimique vérifié." },
      en: { t: "Pool maintenance", d: "Water treatment, wall cleaning, balanced chemistry checked." },
    },
    {
      icon: Trees,
      fr: { t: "Jardin & espaces verts", d: "Tonte, taille, désherbage et entretien régulier de vos jardins." },
      en: { t: "Garden & green spaces", d: "Mowing, pruning, weeding and regular garden upkeep." },
    },
    {
      icon: Hammer,
      fr: { t: "Fin de chantier / rénovation", d: "Nettoyage minutieux après travaux : poussière, résidus, vitres." },
      en: { t: "Post-construction / renovation", d: "Detailed cleanup after works: dust, residue, windows." },
    },
    {
      icon: Truck,
      fr: { t: "Déménagement", d: "Logistique et manutention pour un déménagement serein, en toute sécurité." },
      en: { t: "Moving", d: "Logistics and handling for a smooth, safe move." },
    },
    {
      icon: SprayCan,
      fr: { t: "Désinfection domicile", d: "Désinfection sécuritaire aux produits certifiés, pour vos enfants et animaux." },
      en: { t: "Home disinfection", d: "Safe disinfection with certified products, safe for kids and pets." },
    },
  ],
  entreprise: [
    {
      icon: Building2,
      fr: { t: "Nettoyage de bureaux", d: "Entretien quotidien ou ponctuel de vos espaces professionnels, en toute discrétion." },
      en: { t: "Office cleaning", d: "Daily or one-off upkeep of your workspaces, with full discretion." },
    },
    {
      icon: Wind,
      fr: { t: "Nettoyage de vitres", d: "Vitres, baies, façades : intérieur comme extérieur, à toutes hauteurs." },
      en: { t: "Window cleaning", d: "Windows, bays, façades: indoor and outdoor, at any height." },
    },
    {
      icon: Grid3x3,
      fr: { t: "Carrelage & sols durs", d: "Décapage, lustrage, cristallisation pour des sols brillants et durables." },
      en: { t: "Tile & hard floors", d: "Stripping, polishing, crystallization for lasting, shiny floors." },
    },
    {
      icon: SprayCan,
      fr: { t: "Désinfection professionnelle", d: "Protocoles sanitaires conformes pour vos équipes et vos clients." },
      en: { t: "Professional disinfection", d: "Compliant sanitary protocols for your teams and clients." },
    },
    {
      icon: Bug,
      fr: { t: "Dératisation & 3D", d: "Lutte contre les nuisibles (rats, insectes, termites) avec des protocoles maîtrisés." },
      en: { t: "Pest control (3D)", d: "Rats, insects, termites — controlled, expert protocols." },
    },
    {
      icon: Sparkles,
      fr: { t: "Manutention & logistique", d: "Manutention, déménagement d'entreprise et installation, en toute sécurité." },
      en: { t: "Logistics & handling", d: "Corporate moves, handling and installation, safely." },
    },
  ],
};

export function Services() {
  const { t, lang } = useI18n();
  const [cat, setCat] = useState<Cat>("particulier");
  const list = services[cat];

  return (
    <section id="services" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-green/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green-deep">
            {t("services.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            {t("services.title.a")} <span className="text-gradient-brand">{t("services.title.b")}</span>{" "}
            {t("services.title.c")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1 shadow-card">
            {(["particulier", "entreprise"] as Cat[]).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  cat === c
                    ? "bg-gradient-brand text-primary-foreground shadow-brand"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(`services.tab.${c}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => {
            const copy = s[lang];
            return (
              <div
                key={copy.t}
                className="group relative overflow-hidden rounded-2xl bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-brand"
              >
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-sun opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative">
                  <div className="inline-flex size-14 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand">
                    <s.icon size={26} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{copy.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{copy.d}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green"
                  >
                    {t("services.learnMore")} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-brand text-primary-foreground shadow-brand"
          >
            <a href="#contact">
              {t("services.viewAll")} <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
