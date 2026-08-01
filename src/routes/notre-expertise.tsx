import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  Award,
  Lightbulb,
  Leaf,
  ShieldCheck,
  Sparkles,
  Recycle,
  Droplets,
  Wind,
  CheckCircle2,
  Zap,
  HeartHandshake,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { DEVIS_URL, SITE_URL } from "@/lib/constants";
import hero2 from "@/assets/hero-2.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const content = {
  fr: {
    crumb: "Nos engagements",
    title: "Notre expertise",
    intro:
      "Depuis 2020, nous mettons au service de nos clients un savoir-faire pointu en hygiène et propreté, combiné à des innovations terrain et à un engagement écologique fort.",
    expertise: {
      eyebrow: "Savoir-faire",
      title: "Une expertise reconnue",
      desc: "Nos équipes maîtrisent l'ensemble des métiers de la propreté professionnelle, des bureaux aux environnements sensibles (hôpitaux, industries, stations services).",
      points: [
        {
          icon: Award,
          title: "Personnel certifié",
          desc: "Agents formés en continu aux protocoles d'hygiène et de sécurité.",
        },
        {
          icon: ShieldCheck,
          title: "Normes HSE",
          desc: "Procédures conformes aux standards internationaux santé, sécurité, environnement.",
        },
        {
          icon: HeartHandshake,
          title: "Engagement qualité",
          desc: "Cahier des charges sur-mesure et suivi qualité régulier sur chaque site.",
        },
        {
          icon: CheckCircle2,
          title: "Polyvalence métier",
          desc: "Du nettoyage classique à l'hydrovidange, une seule équipe pour tous vos besoins.",
        },
      ],
    },
    innovation: {
      eyebrow: "Innovation",
      title: "Des solutions modernes et efficaces",
      desc: "Nous investissons en permanence dans des équipements de pointe et des méthodes de travail novatrices pour offrir un service rapide, sûr et mesurable.",
      points: [
        {
          icon: Zap,
          title: "Mécanisation",
          desc: "Auto-laveuses, monobrosses, aspirateurs haute performance pour grandes surfaces.",
        },
        {
          icon: Lightbulb,
          title: "Méthodes optimisées",
          desc: "Protocoles inspirés du Lean cleaning : moins d'eau, moins de produits, plus d'efficacité.",
        },
        {
          icon: Sparkles,
          title: "Technologies vapeur",
          desc: "Désinfection à la vapeur sèche, sans produit chimique, idéale pour les milieux sensibles.",
        },
        {
          icon: Droplets,
          title: "Suivi digital",
          desc: "Reporting d'intervention et traçabilité numérique des passages.",
        },
      ],
    },
    eco: {
      eyebrow: "Éco-responsabilité",
      title: "Des services éco-responsables",
      desc: "La propreté ne doit pas se faire au détriment de la planète. Nous privilégions des produits biologiques, des dosages maîtrisés et la valorisation des déchets.",
      points: [
        {
          icon: Leaf,
          title: "Produits écolabellisés",
          desc: "Détergents biodégradables, sans phosphates ni substances nocives.",
        },
        {
          icon: Recycle,
          title: "Tri & recyclage",
          desc: "Collecte sélective sur site et filières de valorisation des déchets.",
        },
        {
          icon: Droplets,
          title: "Économie d'eau",
          desc: "Microfibres et techniques pré-imprégnées qui divisent par 4 la consommation d'eau.",
        },
        {
          icon: Wind,
          title: "Air intérieur sain",
          desc: "Limitation des COV et amélioration de la qualité de l'air dans vos locaux.",
        },
      ],
    },
    ctaTitle: "Bénéficiez de notre expertise sur votre site",
    ctaDesc: "Audit gratuit, devis personnalisé et plan d'intervention adapté à vos enjeux.",
    ctaBtn: "Demander un devis gratuit",
  },
  en: {
    crumb: "Our commitments",
    title: "Our expertise",
    intro:
      "Since 2020, we have brought our clients sharp know-how in hygiene and cleaning, combined with field innovations and a strong ecological commitment.",
    expertise: {
      eyebrow: "Know-how",
      title: "Recognized expertise",
      desc: "Our teams master every profession of professional cleaning, from offices to sensitive environments (hospitals, industry, service stations).",
      points: [
        {
          icon: Award,
          title: "Certified staff",
          desc: "Agents continuously trained in hygiene and safety protocols.",
        },
        {
          icon: ShieldCheck,
          title: "HSE standards",
          desc: "Procedures aligned with international health, safety and environmental standards.",
        },
        {
          icon: HeartHandshake,
          title: "Quality commitment",
          desc: "Tailored specifications and regular quality follow-up on every site.",
        },
        {
          icon: CheckCircle2,
          title: "Versatility",
          desc: "From standard cleaning to hydro-cleaning, one team for all your needs.",
        },
      ],
    },
    innovation: {
      eyebrow: "Innovation",
      title: "Modern and efficient solutions",
      desc: "We constantly invest in cutting-edge equipment and innovative methods to deliver fast, safe and measurable service.",
      points: [
        {
          icon: Zap,
          title: "Mechanization",
          desc: "Scrubbers, single-disc machines and high-performance vacuums for large areas.",
        },
        {
          icon: Lightbulb,
          title: "Optimized methods",
          desc: "Lean cleaning protocols: less water, less product, more efficiency.",
        },
        {
          icon: Sparkles,
          title: "Steam technologies",
          desc: "Dry steam disinfection, chemical-free, ideal for sensitive environments.",
        },
        {
          icon: Droplets,
          title: "Digital tracking",
          desc: "Intervention reports and digital traceability of every pass.",
        },
      ],
    },
    eco: {
      eyebrow: "Eco-responsibility",
      title: "Eco-responsible services",
      desc: "Cleanliness should not come at the expense of the planet. We favor biological products, controlled dosing and waste recovery.",
      points: [
        {
          icon: Leaf,
          title: "Eco-labeled products",
          desc: "Biodegradable detergents, free of phosphates and harmful substances.",
        },
        {
          icon: Recycle,
          title: "Sorting & recycling",
          desc: "On-site selective collection and waste recovery channels.",
        },
        {
          icon: Droplets,
          title: "Water savings",
          desc: "Microfibers and pre-soaked techniques that cut water use by four.",
        },
        {
          icon: Wind,
          title: "Healthy indoor air",
          desc: "Reduced VOCs and improved air quality in your premises.",
        },
      ],
    },
    ctaTitle: "Get our expertise on your site",
    ctaDesc: "Free audit, personalized quote and intervention plan tailored to your challenges.",
    ctaBtn: "Request a free quote",
  },
} as const;

export default function ExpertisePage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "Notre expertise — Gabon Nettoyage & Multiservices",
    meta: [
      {
        name: "description",
        content:
          "Découvrez notre expertise, nos innovations et nos services éco-responsables au service de la propreté professionnelle au Gabon.",
      },
      { property: "og:title", content: "Notre expertise — Gabon Nettoyage & Multiservices" },
      {
        property: "og:description",
        content:
          "Expertise métier, innovations technologiques et engagement éco-responsable : la signature Gabon Nettoyage & Multiservices.",
      },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent={false} />

      {/* Hero */}
      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0">
          <img src={hero2} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-deep/90 via-brand-blue-deep/75 to-brand-green/60" />
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
            <span>{c.crumb}</span>
            <ChevronRight size={14} />
            <span className="text-white">{c.title}</span>
          </nav>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{c.intro}</p>
        </div>
      </section>

      {/* Expertise */}
      <Section
        id="expertise"
        eyebrow={c.expertise.eyebrow}
        title={c.expertise.title}
        desc={c.expertise.desc}
        image={work2}
        points={c.expertise.points}
        accent="green"
      />

      {/* Innovation */}
      <Section
        id="innovation"
        eyebrow={c.innovation.eyebrow}
        title={c.innovation.title}
        desc={c.innovation.desc}
        image={work5}
        points={c.innovation.points}
        accent="blue"
        reverse
      />

      {/* Eco-responsible */}
      <Section
        id="eco"
        eyebrow={c.eco.eyebrow}
        title={c.eco.title}
        desc={c.eco.desc}
        image={work6}
        points={c.eco.points}
        accent="green"
      />

      {/* Stats band */}
      <section className="bg-brand-blue-deep py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
          {[
            { k: "5+", v: lang === "fr" ? "Années d'expérience" : "Years of experience" },
            { k: "4", v: lang === "fr" ? "Villes couvertes" : "Cities covered" },
            { k: "100%", v: lang === "fr" ? "Produits éco-labellisés" : "Eco-labeled products" },
            { k: "24h", v: lang === "fr" ? "Délai de réponse" : "Response time" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <div className="font-display text-4xl font-bold text-brand-green md:text-5xl">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-white/80">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-blue-deep md:text-4xl">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.ctaDesc}</p>
          <a
            href={DEVIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 font-semibold text-white shadow-brand transition-colors hover:bg-brand-green-deep"
          >
            {c.ctaBtn}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
      <SocialFloat />
      <QuoteChatbot />
      <WhatsAppFloat />
    </div>
  );
}

type Point = { icon: typeof Award; title: string; desc: string };

function Section({
  id,
  eyebrow,
  title,
  desc,
  image,
  points,
  accent,
  reverse,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  points: readonly Point[];
  accent: "green" | "blue";
  reverse?: boolean;
}) {
  const accentText = accent === "green" ? "text-brand-green" : "text-brand-blue";
  const accentBg = accent === "green" ? "bg-brand-green/10" : "bg-brand-blue/10";

  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
        >
          <div>
            <div className="overflow-hidden rounded-2xl shadow-brand">
              <img src={image} alt={title} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
          <div>
            <p className={`mb-3 text-sm font-bold uppercase tracking-widest ${accentText}`}>
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-blue-deep md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{desc}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-brand"
                  >
                    <div
                      className={`mb-3 inline-flex size-11 items-center justify-center rounded-full ${accentBg} ${accentText}`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-blue-deep">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
