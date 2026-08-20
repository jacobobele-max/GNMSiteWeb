import { Link } from "react-router-dom";
import { Home, ChevronRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";

const references = [
  "COMILOG",
  "SOGARA",
  "Nouvelle Gabon Mining",
  "Ministère de l'Économie et des Participations",
  "Ministère de l'Éducation Nationale",
  "Ministère du Pétrole",
  "Gendarmerie Nationale",
  "GSEZ (Gabon Special Economic Zone)",
  "ONDSC",
  "SGEPP",
  "Ecobank",
  "Complexe Scolaire Privé Michel Dirat",
  "Sauce Créole",
  "Children's House",
];

const content = {
  fr: {
    crumb: "Nos références",
    h1: "Ils nous font confiance",
    intro:
      "Depuis 2020, Gabon Nettoyage & Multiservices accompagne des institutions publiques, des entreprises industrielles et des établissements privés à Libreville, Port-Gentil, Moanda et Franceville. Voici quelques structures avec lesquelles nous avons travaillé.",
    highlight:
      "À Franceville, notre équipe assure une prestation 3D (désinfection, dératisation, désinsectisation) à temps partiel pour Ecobank Franceville.",
  },
  en: {
    crumb: "Our references",
    h1: "They trust us",
    intro:
      "Since 2020, Gabon Nettoyage & Multiservices has worked with public institutions, industrial companies and private establishments in Libreville, Port-Gentil, Moanda and Franceville. Here are some of the organizations we've worked with.",
    highlight:
      "In Franceville, our team provides a part-time 3D service (disinfection, pest control, insect control) for Ecobank Franceville.",
  },
} as const;

export default function ReferencesPage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "Nos références | Gabon Nettoyage & Multiservices",
    meta: [
      {
        name: "description",
        content:
          "Institutions, entreprises et établissements qui font confiance à GN&M au Gabon : COMILOG, SOGARA, ministères, GSEZ, Ecobank...",
      },
      { property: "og:title", content: "Nos références | Gabon Nettoyage & Multiservices" },
      {
        property: "og:description",
        content:
          "Institutions, entreprises et établissements qui font confiance à GN&M au Gabon : COMILOG, SOGARA, ministères, GSEZ, Ecobank...",
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
            <span className="font-semibold text-foreground">{c.crumb}</span>
          </nav>
          <h1 className="mt-6 font-display text-4xl font-bold text-foreground md:text-5xl">
            {c.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
            {c.intro}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {references.map((name) => (
              <div
                key={name}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-border bg-card p-5 text-center shadow-card"
              >
                <span className="font-display text-base font-bold text-foreground/80">{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-start gap-4 rounded-2xl border border-brand-green/30 bg-brand-green/10 p-6">
            <ShieldCheck className="mt-0.5 shrink-0 text-brand-green-deep" size={24} />
            <p className="text-[15px] leading-relaxed text-foreground/85">{c.highlight}</p>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
