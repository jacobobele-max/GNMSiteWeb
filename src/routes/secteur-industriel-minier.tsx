import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  Zap,
  HardHat,
  Recycle,
  Radio,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { IconPointsSection } from "@/components/IconPointsSection";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { DEVIS_URL, SITE_URL } from "@/lib/constants";
import work12 from "@/assets/work-12.webp";
import work9 from "@/assets/work-9.webp";
import work10 from "@/assets/work-10.webp";

const references = ["COMILOG", "SOGARA", "Nouvelle Gabon Mining", "GSEZ (Gabon Special Economic Zone)"];

const content = {
  fr: {
    crumb: "Secteur industriel & minier",
    eyebrow: "Sites industriels · Mines · Bases-vie",
    title: "Facility management pour sites industriels et miniers",
    intro:
      "Bases-vie, unités de production, stations et sites industriels : GN&M déploie des équipes formées aux environnements exigeants, avec un parc d'équipements mécanisés et des procédures HSE alignées sur les standards du secteur.",
    section1: {
      eyebrow: "Ce que nous apportons à vos sites",
      title: "Un service pensé pour l'industrie",
      desc: "Nettoyage industriel, gestion des déchets, assainissement : une seule équipe pour couvrir l'ensemble des besoins d'un site de production ou d'une base-vie.",
      points: [
        {
          icon: Zap,
          title: "Équipements mécanisés",
          desc: "Autolaveuses, monobrosses et hydrocureuse pour les grandes surfaces et l'assainissement des fosses.",
        },
        {
          icon: HardHat,
          title: "Procédures HSE",
          desc: "Agents équipés d'EPI complets, habilités aux consignes de sécurité propres à chaque site.",
        },
        {
          icon: Recycle,
          title: "Gestion des déchets",
          desc: "Collecte, tri sélectif, vidange et filières de valorisation adaptées à votre activité.",
        },
        {
          icon: Radio,
          title: "Continuité de service",
          desc: "Astreinte, remplacement immédiat en cas d'absence, reporting régulier d'intervention.",
        },
      ],
    },
    section2: {
      eyebrow: "Sur le terrain",
      title: "Assainissement et gestion des déchets",
      desc: "Notre flotte de véhicules d'hydrocurage et nos équipes dédiées interviennent sur les fosses septiques, réseaux d'assainissement et zones de collecte des sites industriels et résidences d'entreprise.",
      points: [
        {
          icon: Recycle,
          title: "Vidange & curage",
          desc: "Camions équipés, intervention rapide sur fosses septiques et réseaux d'évacuation.",
        },
        {
          icon: HardHat,
          title: "Équipes formées",
          desc: "Personnel équipé et formé aux manipulations sensibles en environnement industriel.",
        },
      ],
    },
    refsTitle: "Ils nous font confiance",
    refsCta: "Voir toutes nos références",
    ctaTitle: "Un besoin sur votre site industriel ou minier ?",
    ctaDesc: "Audit gratuit et devis adapté à la configuration et aux contraintes de votre site.",
    ctaBtn: "Demander un devis",
    ctaSecondary: "Nous contacter",
  },
  en: {
    crumb: "Industrial & mining sector",
    eyebrow: "Industrial sites · Mines · Life-support bases",
    title: "Facility management for industrial and mining sites",
    intro:
      "Life-support bases, production units, stations and industrial sites: GN&M deploys teams trained for demanding environments, with mechanized equipment and HSE procedures aligned with sector standards.",
    section1: {
      eyebrow: "What we bring to your sites",
      title: "A service built for industry",
      desc: "Industrial cleaning, waste management, sanitation: one team to cover every need of a production site or life-support base.",
      points: [
        {
          icon: Zap,
          title: "Mechanized equipment",
          desc: "Scrubbers, single-disc machines and vacuum trucks for large areas and pit sanitation.",
        },
        {
          icon: HardHat,
          title: "HSE procedures",
          desc: "Agents with full PPE, trained on the safety rules specific to each site.",
        },
        {
          icon: Recycle,
          title: "Waste management",
          desc: "Collection, sorting, pumping and recovery channels tailored to your activity.",
        },
        {
          icon: Radio,
          title: "Service continuity",
          desc: "On-call staff, immediate replacement in case of absence, regular reporting.",
        },
      ],
    },
    section2: {
      eyebrow: "On the ground",
      title: "Sanitation and waste management",
      desc: "Our fleet of vacuum trucks and dedicated teams work on septic tanks, sewage networks and collection areas of industrial sites and company residences.",
      points: [
        {
          icon: Recycle,
          title: "Pumping & cleaning",
          desc: "Equipped trucks, fast response on septic tanks and drainage networks.",
        },
        {
          icon: HardHat,
          title: "Trained teams",
          desc: "Staff equipped and trained for sensitive operations in industrial environments.",
        },
      ],
    },
    refsTitle: "They trust us",
    refsCta: "See all our references",
    ctaTitle: "A need on your industrial or mining site?",
    ctaDesc: "Free audit and a quote tailored to your site's configuration and constraints.",
    ctaBtn: "Request a quote",
    ctaSecondary: "Contact us",
  },
} as const;

export default function SecteurIndustrielMinierPage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "Facility Management Industriel & Minier au Gabon | GN&M",
    meta: [
      {
        name: "description",
        content:
          "Nettoyage industriel, assainissement et gestion des déchets pour sites miniers et industriels au Gabon : équipements mécanisés, procédures HSE, continuité de service.",
      },
      {
        property: "og:title",
        content: "Facility Management Industriel & Minier au Gabon | GN&M",
      },
      {
        property: "og:description",
        content: "Un service pensé pour l'industrie : équipements, HSE, continuité.",
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

      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0">
          <img src={work12} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-deep/92 via-brand-blue-deep/80 to-brand-green/55" />
        </div>
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
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-yellow">
            {c.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{c.intro}</p>
        </div>
      </section>

      <IconPointsSection
        eyebrow={c.section1.eyebrow}
        title={c.section1.title}
        desc={c.section1.desc}
        image={work9}
        points={c.section1.points}
        accent="blue"
      />

      <IconPointsSection
        eyebrow={c.section2.eyebrow}
        title={c.section2.title}
        desc={c.section2.desc}
        image={work10}
        points={c.section2.points}
        accent="green"
        reverse
      />

      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Link
            to="/references"
            className="block text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand-green"
          >
            {c.refsTitle}
          </Link>
          <div className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            {references.map((r) => (
              <div
                key={r}
                className="flex items-center justify-center text-center font-display text-sm font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-brand-blue"
              >
                {r}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/references"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-deep hover:underline"
            >
              {c.refsCta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-blue-deep md:text-4xl">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.ctaDesc}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={DEVIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 font-semibold text-brand-blue-deep shadow-brand transition-all hover:scale-[1.02]"
            >
              {c.ctaBtn} <ChevronRight size={18} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold text-foreground transition-colors hover:border-brand-green hover:text-brand-green"
            >
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
