import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  Lock,
  Clock,
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
import hero3 from "@/assets/hero-3.webp";
import work23 from "@/assets/work-23.webp";
import work22 from "@/assets/work-22.webp";

const references = [
  "ONDSC",
  "Ministère de l'Économie et des Participations",
  "Ministère de l'Éducation Nationale",
  "Ministère du Pétrole",
  "Gendarmerie Nationale",
  "GSEZ (Gabon Special Economic Zone)",
];

const content = {
  fr: {
    crumb: "Secteur institutionnel",
    eyebrow: "Ministères · Administrations · Santé · Éducation",
    title: "Un partenaire de confiance pour vos institutions",
    intro:
      "Depuis 2020, GN&M accompagne des ministères, des établissements scolaires publics, la Gendarmerie Nationale et des structures parapubliques gabonaises avec un service conforme aux exigences administratives des marchés publics et un personnel encadré et habilité.",
    section1: {
      eyebrow: "Ce qui nous distingue",
      title: "Conçu pour les exigences du secteur public",
      desc: "Nos équipes interviennent en zones sensibles — bureaux ministériels, établissements scolaires, sites administratifs — avec la discrétion et la rigueur que ces environnements exigent.",
      points: [
        {
          icon: FileCheck2,
          title: "Conformité administrative",
          desc: "RCCM, NIF et attestations à jour, dossiers complets pour vos appels d'offres et consultations.",
        },
        {
          icon: ShieldCheck,
          title: "Personnel habilité",
          desc: "Agents identifiés, formés et encadrés, tenues et équipements de protection fournis.",
        },
        {
          icon: Lock,
          title: "Discrétion & confidentialité",
          desc: "Interventions hors heures d'affluence, respect des consignes de sécurité de chaque site.",
        },
        {
          icon: Clock,
          title: "Réactivité",
          desc: "Désinfection sanitaire, remise en état ou renfort ponctuel sous 24h en cas d'urgence.",
        },
      ],
    },
    section2: {
      eyebrow: "Sur le terrain",
      title: "Désinfection et entretien d'établissements scolaires",
      desc: "Fumigation, désinfection des salles de classe et des sanitaires, entretien des bâtiments administratifs : nos équipes ont déjà traité plusieurs établissements scolaires publics et parapublics au Gabon.",
      points: [
        {
          icon: ShieldCheck,
          title: "Protocoles vérifiés",
          desc: "Équipements de protection complets et produits homologués pour les milieux accueillant du public.",
        },
        {
          icon: Clock,
          title: "Interventions planifiées",
          desc: "Hors temps scolaire ou en horaires adaptés, pour ne jamais perturber l'activité.",
        },
      ],
    },
    refsTitle: "Ils nous font confiance",
    refsCta: "Voir toutes nos références",
    ctaTitle: "Un appel d'offres ou une consultation en cours ?",
    ctaDesc:
      "Nous vous transmettons un dossier de présentation complet et un devis adapté à votre cahier des charges.",
    ctaBtn: "Demander un devis",
    ctaSecondary: "Nous contacter",
  },
  en: {
    crumb: "Public sector",
    eyebrow: "Ministries · Public administration · Health · Education",
    title: "A trusted partner for your institutions",
    intro:
      "Since 2020, GN&M has worked with ministries, public schools, the National Gendarmerie and Gabonese semi-public bodies, delivering a service that meets public procurement requirements with supervised, vetted staff.",
    section1: {
      eyebrow: "What sets us apart",
      title: "Built for public-sector requirements",
      desc: "Our teams work in sensitive areas — ministerial offices, schools, administrative buildings — with the discretion and rigor these environments demand.",
      points: [
        {
          icon: FileCheck2,
          title: "Administrative compliance",
          desc: "Up-to-date business registration and tax documents, complete files for your tenders and consultations.",
        },
        {
          icon: ShieldCheck,
          title: "Vetted staff",
          desc: "Identified, trained and supervised agents, uniforms and protective equipment provided.",
        },
        {
          icon: Lock,
          title: "Discretion & confidentiality",
          desc: "Work scheduled outside peak hours, compliant with each site's security rules.",
        },
        {
          icon: Clock,
          title: "Responsiveness",
          desc: "Sanitary disinfection, restoration or extra support within 24h in an emergency.",
        },
      ],
    },
    section2: {
      eyebrow: "On the ground",
      title: "Disinfection and upkeep of school facilities",
      desc: "Fumigation, classroom and restroom disinfection, upkeep of administrative buildings: our teams have already served several public and semi-public schools in Gabon.",
      points: [
        {
          icon: ShieldCheck,
          title: "Verified protocols",
          desc: "Full protective equipment and approved products for facilities open to the public.",
        },
        {
          icon: Clock,
          title: "Scheduled interventions",
          desc: "Outside school hours or at adapted times, so activity is never disrupted.",
        },
      ],
    },
    refsTitle: "They trust us",
    refsCta: "See all our references",
    ctaTitle: "Running a tender or consultation?",
    ctaDesc: "We provide a full presentation file and a quote tailored to your specifications.",
    ctaBtn: "Request a quote",
    ctaSecondary: "Contact us",
  },
} as const;

export default function SecteurInstitutionnelPage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "Nettoyage & Facility Management pour institutions | GN&M Gabon",
    meta: [
      {
        name: "description",
        content:
          "GN&M accompagne ministères, administrations, écoles publiques et forces de l'ordre au Gabon : personnel habilité, conformité administrative, discrétion.",
      },
      {
        property: "og:title",
        content: "Nettoyage & Facility Management pour institutions | GN&M Gabon",
      },
      {
        property: "og:description",
        content:
          "Un partenaire fiable pour vos institutions : conformité, discrétion, réactivité.",
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
          <img src={hero3} alt="" className="size-full object-cover" />
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
        image={work22}
        points={c.section1.points}
        accent="blue"
      />

      <IconPointsSection
        eyebrow={c.section2.eyebrow}
        title={c.section2.title}
        desc={c.section2.desc}
        image={work23}
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
          <div className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
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
