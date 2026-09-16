import { Link } from "react-router-dom";
import { Home, ChevronRight, Users, Leaf, CalendarClock, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { IconPointsSection } from "@/components/IconPointsSection";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { SITE_URL } from "@/lib/constants";
import work17 from "@/assets/work-17.webp";
import work18 from "@/assets/work-18.webp";
import work19 from "@/assets/work-19.webp";
import work20 from "@/assets/work-20.webp";
import work21 from "@/assets/work-21.webp";

const gallery = [work17, work18, work19, work20, work21];

const content = {
  fr: {
    crumb: "Particuliers",
    eyebrow: "Résidentiel · Libreville, Owendo & Akanda",
    title: "Le nettoyage de votre maison, sans y penser",
    intro:
      "Ménage régulier, lavage-repassage, désinfection ou grand nettoyage ponctuel : nos formules résidentielles s'adaptent à votre rythme de vie, avec une équipe fixe et de confiance.",
    section1: {
      eyebrow: "Pourquoi nous choisir",
      title: "Un service pensé pour votre foyer",
      desc: "La même exigence que sur nos chantiers professionnels, au service de votre maison ou de votre villa.",
      points: [
        {
          icon: Users,
          title: "Équipe fixe et de confiance",
          desc: "Des agents que vous connaissez, formés et encadrés par GN&M.",
        },
        {
          icon: Leaf,
          title: "Produits sûrs pour la famille",
          desc: "Détergents biodégradables, sans danger pour les enfants et les animaux.",
        },
        {
          icon: CalendarClock,
          title: "Formules flexibles",
          desc: "Essentielle, Confort ou Premium — un rythme d'entretien adapté à votre budget.",
        },
        {
          icon: Sparkles,
          title: "Sans abonnement, aussi",
          desc: "Lavage, repassage ou grand nettoyage ponctuel, payables le jour même.",
        },
      ],
    },
    galleryTitle: "Nos interventions chez les particuliers",
    ctaTitle: "Découvrez nos formules résidentielles",
    ctaDesc: "Essentielle, Confort ou Premium — trouvez la formule adaptée à votre foyer.",
    ctaBtn: "Voir les formules et tarifs",
  },
  en: {
    crumb: "Individuals",
    eyebrow: "Residential · Libreville, Owendo & Akanda",
    title: "Your home, cleaned — without the hassle",
    intro:
      "Regular cleaning, laundry and ironing, disinfection or a one-off deep clean: our home plans adapt to your pace of life, with a trusted, fixed team.",
    section1: {
      eyebrow: "Why choose us",
      title: "A service built for your home",
      desc: "The same standards as our professional sites, applied to your house or villa.",
      points: [
        {
          icon: Users,
          title: "A trusted, fixed team",
          desc: "Agents you know, trained and supervised by GN&M.",
        },
        {
          icon: Leaf,
          title: "Family-safe products",
          desc: "Biodegradable detergents, safe for children and pets.",
        },
        {
          icon: CalendarClock,
          title: "Flexible plans",
          desc: "Essential, Comfort or Premium — a pace that fits your budget.",
        },
        {
          icon: Sparkles,
          title: "No subscription needed, too",
          desc: "One-off laundry, ironing or deep cleaning, payable the same day.",
        },
      ],
    },
    galleryTitle: "Our work in private homes",
    ctaTitle: "Discover our home plans",
    ctaDesc: "Essential, Comfort or Premium — find the plan that fits your home.",
    ctaBtn: "See plans & pricing",
  },
} as const;

export default function SecteurParticuliersPage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "Nettoyage résidentiel à Libreville, Owendo & Akanda | GN&M",
    meta: [
      {
        name: "description",
        content:
          "Ménage, lavage-repassage et désinfection pour particuliers au Gabon : équipe fixe, produits sûrs, formules flexibles Essentielle, Confort et Premium.",
      },
      {
        property: "og:title",
        content: "Nettoyage résidentiel à Libreville, Owendo & Akanda | GN&M",
      },
      {
        property: "og:description",
        content: "Le nettoyage de votre maison, sans y penser.",
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
          <img src={work17} alt="" className="size-full object-cover" />
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
        image={work18}
        points={c.section1.points}
        accent="green"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="text-center font-display text-2xl font-bold text-brand-blue-deep">
            {c.galleryTitle}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {gallery.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-card">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-blue-deep md:text-4xl">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.ctaDesc}</p>
          <Link
            to="/formules-residentielles"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 font-semibold text-brand-blue-deep shadow-brand transition-all hover:scale-[1.02]"
          >
            {c.ctaBtn} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
