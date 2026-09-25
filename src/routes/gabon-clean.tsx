import { Link } from "react-router-dom";
import { Home, ChevronRight, Citrus, Cherry, Flower2, Apple, Sun, Droplet } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { SITE_URL } from "@/lib/constants";

const WHATSAPP_LAUNCH_URL =
  "https://wa.me/24162427778?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20la%20gamme%20GABON%20CLEAN.%20Merci%20de%20me%20pr%C3%A9venir%20du%20lancement.";

type Accent = "yellow" | "red" | "blue" | "green" | "blueDeep";

const accentClasses: Record<Accent, { bg: string; text: string }> = {
  yellow: { bg: "bg-brand-yellow/15", text: "text-brand-yellow" },
  red: { bg: "bg-brand-red/10", text: "text-brand-red" },
  blue: { bg: "bg-brand-blue/10", text: "text-brand-blue" },
  green: { bg: "bg-brand-green/10", text: "text-brand-green" },
  blueDeep: { bg: "bg-brand-blue-deep/10", text: "text-brand-blue-deep" },
};

const scents = [
  { icon: Citrus, accent: "yellow" as Accent, name: { fr: "Citron", en: "Lemon" } },
  { icon: Cherry, accent: "red" as Accent, name: { fr: "Fraise", en: "Strawberry" } },
  { icon: Flower2, accent: "blue" as Accent, name: { fr: "Lavande", en: "Lavender" } },
  { icon: Apple, accent: "green" as Accent, name: { fr: "Pomme", en: "Apple" } },
  { icon: Sun, accent: "yellow" as Accent, name: { fr: "Mandarine", en: "Tangerine" } },
  {
    icon: Droplet,
    accent: "blueDeep" as Accent,
    name: { fr: "Original", en: "Original" },
    desc: { fr: "sans parfum ajouté", en: "no added fragrance" },
  },
];

const content = {
  fr: {
    crumb: "Gabon Clean",
    badge: "Bientôt disponible",
    title: "GABON CLEAN",
    subtitle: "La nouvelle gamme de savons multi-usages by GN&M",
    intro:
      "Forts de nos années d'expérience du nettoyage professionnel au Gabon, nous lançons notre propre gamme de savons liquides multi-usages : efficaces sur les sols, surfaces, sanitaires et cuisines, en bidons pratiques pour la maison comme pour les professionnels.",
    scentsTitle: "Nos parfums",
    ctaTitle: "Soyez parmi les premiers servis !",
    ctaDesc: "Laissez-nous votre numéro sur WhatsApp et recevez une offre de lancement.",
    ctaBtn: "M'informer sur WhatsApp",
  },
  en: {
    crumb: "Gabon Clean",
    badge: "Coming soon",
    title: "GABON CLEAN",
    subtitle: "GN&M's new multi-purpose soap range",
    intro:
      "Drawing on years of professional cleaning experience in Gabon, we're launching our own range of multi-purpose liquid soaps: effective on floors, surfaces, bathrooms and kitchens, in practical containers for home and professional use alike.",
    scentsTitle: "Our scents",
    ctaTitle: "Be among the first to know!",
    ctaDesc: "Leave us your WhatsApp number and get a launch offer.",
    ctaBtn: "Notify me on WhatsApp",
  },
} as const;

export default function GabonCleanPage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "GABON CLEAN – Savon multi-usages by GN&M | Bientôt disponible",
    meta: [
      {
        name: "description",
        content:
          "Découvrez GABON CLEAN, la nouvelle gamme de savons liquides multi-usages par Gabon Nettoyage & Multiservices : sols, surfaces, sanitaires et cuisines. Bientôt disponible — laissez-nous votre contact WhatsApp.",
      },
      {
        property: "og:title",
        content: "GABON CLEAN – Savon multi-usages by GN&M | Bientôt disponible",
      },
      {
        property: "og:description",
        content: "La nouvelle gamme de savons multi-usages by GN&M. Bientôt disponible.",
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

      <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 text-white">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-sm text-white/80"
          >
            <Link to="/" className="inline-flex items-center gap-1 hover:text-white">
              <Home size={14} /> {lang === "fr" ? "Accueil" : "Home"}
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{c.crumb}</span>
          </nav>

          <div className="text-center">
            <span className="inline-block rounded-full bg-brand-red px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-brand">
              {c.badge}
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              {c.title}
            </h1>
            <p className="mt-4 text-lg text-white/90 md:text-xl">{c.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="text-[17px] leading-relaxed text-muted-foreground">{c.intro}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <h2 className="text-center font-display text-2xl font-bold text-brand-blue-deep md:text-3xl">
            {c.scentsTitle}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {scents.map((s) => {
              const Icon = s.icon;
              const accent = accentClasses[s.accent];
              return (
                <div
                  key={s.name.fr}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-shadow hover:shadow-brand"
                >
                  <div
                    className={`inline-flex size-14 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}
                  >
                    <Icon size={26} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">{s.name[lang]}</p>
                    {s.desc && (
                      <p className="mt-0.5 text-xs text-muted-foreground">{s.desc[lang]}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-blue-deep md:text-4xl">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.ctaDesc}</p>
          <a
            href={WHATSAPP_LAUNCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-brand transition-all hover:scale-[1.02]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607z" />
            </svg>
            {c.ctaBtn}
          </a>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
