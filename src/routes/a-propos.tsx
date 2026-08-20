import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  Users,
  Sparkles,
  Leaf,
  HeartHandshake,
  Zap,
  Recycle,
  Lightbulb,
  ShieldCheck,
  Award,
  Headphones,
  Truck,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { DEVIS_URL } from "@/lib/constants";
import hero2 from "@/assets/hero-2.webp";
import work1 from "@/assets/work-1.webp";
import work2 from "@/assets/work-2.webp";
import work3 from "@/assets/work-3.webp";
import work4 from "@/assets/work-4.webp";

const content = {
  fr: {
    crumb: "À propos",
    title: "Qui sommes-nous",
    opening:
      "Depuis janvier 2020, Gabon Nettoyage & Multiservices (GNM) veille à assurer des environnements de travail agréables et sains, et à garantir la satisfaction des clients qui nous font confiance en tant que société de nettoyage des locaux professionnels et particuliers.",
    presence: {
      heading: "Notre présence",
      text: "Présents à l'Estuaire, Port-Gentil, Moanda et Franceville, Gabon Nettoyage & Multiservices se positionne comme l'une des entreprises de propreté parmi les leaders sur le marché gabonais. Réactivité, service de ménage professionnel, qualité du nettoyage et respect de l'environnement caractérisent nos équipes.",
    },
    identity: {
      heading: "Notre identité",
      text: "Gabon Nettoyage & Multiservices est une SUARL immatriculée au Registre du Commerce et du Crédit Mobilier sous le n° GA-LBV-01-2020-B13-00016, basée à Cité Damas, Libreville. Nous intervenons sur huit domaines de service :",
      domains: [
        "Nettoyage professionnel et entretien des locaux",
        "Facility management",
        "Désinfection, dératisation, désinsectisation",
        "Gestion des espaces verts",
        "Maintenance et multiservices",
        "Logistique et support",
        "Gestion environnementale et hygiène",
        "Nettoyage industriel spécialisé",
      ],
    },
    engagement: {
      heading: "Notre engagement",
      text: "Notre réseau d'agences de nettoyage professionnel vous aide à trouver la prestation de qualité dont vous avez besoin. N'hésitez pas à faire appel à notre équipe pour établir un devis gratuit et adapter votre contrat d'entretien à vos besoins de propreté.",
    },
    qualitySection: "Qualité de la propreté à votre service",
    qualities: [
      {
        title: "Personnel Qualifié",
        desc: "Des équipes de nettoyage formées et expérimentées pour assurer un travail impeccable.",
      },
      {
        title: "Flexibilité des services",
        desc: "Des solutions de nettoyage adaptées à vos besoins, qu'il s'agisse de bureaux, de résidences ou d'espaces commerciaux.",
      },
      {
        title: "Produits écologiques",
        desc: "Utilisation de produits de nettoyage respectueux de l'environnement pour une hygiène responsable.",
      },
      {
        title: "Gestion Personnalisée",
        desc: "Un suivi régulier et une gestion personnalisée pour garantir la satisfaction constante de nos clients.",
      },
    ],
    whyTitle: "Pourquoi nous choisir ?",
    whyIntro:
      "Nous sommes à l'écoute de vos besoins et de vos exigences, pour vous fournir un service adapté et personnalisé. La propreté est notre métier et nos clients fidèles, issus des secteurs tertiaire, commercial ou industriel, le savent bien.",
    pillars: [
      {
        title: "Réactivité",
        desc: "Être proche de vous, c'est répondre au plus vite à vos demandes et aux imprévus.",
      },
      {
        title: "RSE",
        desc: "Les enjeux environnementaux et sociaux font partie intégrante de notre stratégie globale.",
      },
      {
        title: "Innovation",
        desc: "Notre équipe s'engage à vous proposer des services toujours plus innovants.",
      },
    ],
    features: [
      {
        title: "Équipe multidisciplinaire",
        desc: "Des prestations solides et des interventions de haute qualité grâce à notre équipe d'experts qualifiés.",
        img: work1,
      },
      {
        title: "Engagement envers la Qualité",
        desc: "Normes strictes de contrôle de la qualité pour garantir l'excellence et offrir des solutions modernes et efficaces.",
        img: work2,
      },
      {
        title: "Innovation Continue",
        desc: "À l'affût des dernières tendances et technologies pour offrir des solutions modernes et efficaces.",
        img: work3,
      },
      {
        title: "Service Client Exceptionnel",
        desc: "Notre priorité est la satisfaction totale du client. Un service client réactif et attentif à vos besoins.",
        img: work4,
      },
    ],
    cta: "Demander un devis",
  },
  en: {
    crumb: "About",
    title: "Who we are",
    opening:
      "Since January 2020, Gabon Nettoyage & Multiservices (GNM) has been ensuring pleasant and healthy work environments, and guaranteeing the satisfaction of clients who trust us as their cleaning company for professional and private premises.",
    presence: {
      heading: "Our presence",
      text: "Active in Estuaire, Port-Gentil, Moanda and Franceville, Gabon Nettoyage & Multiservices stands as one of the leading cleaning companies on the Gabonese market. Reactivity, professional cleaning service, quality and respect for the environment define our teams.",
    },
    identity: {
      heading: "Our identity",
      text: "Gabon Nettoyage & Multiservices is a SUARL registered with the Trade and Personal Property Credit Register (RCCM) under no. GA-LBV-01-2020-B13-00016, based in Cité Damas, Libreville. We operate across eight service domains:",
      domains: [
        "Professional cleaning and premises upkeep",
        "Facility management",
        "Disinfection, pest control, insect control",
        "Green space management",
        "Maintenance and multiservices",
        "Logistics and support",
        "Environmental management and hygiene",
        "Specialized industrial cleaning",
      ],
    },
    engagement: {
      heading: "Our commitment",
      text: "Our network of professional cleaning agencies will help you find the quality service you need. Feel free to contact our team for a free quote and to tailor your maintenance contract to your cleaning needs.",
    },
    qualitySection: "Quality cleanliness at your service",
    qualities: [
      {
        title: "Qualified Staff",
        desc: "Trained and experienced cleaning teams ensuring impeccable work.",
      },
      {
        title: "Flexible Services",
        desc: "Cleaning solutions tailored to your needs — offices, residences or commercial spaces.",
      },
      {
        title: "Eco-friendly Products",
        desc: "Environmentally friendly cleaning products for responsible hygiene.",
      },
      {
        title: "Personalised Management",
        desc: "Regular follow-up and tailored management to ensure ongoing client satisfaction.",
      },
    ],
    whyTitle: "Why choose us?",
    whyIntro:
      "We listen to your needs and requirements to deliver a tailored, personal service. Cleanliness is our trade and our loyal customers — from tertiary, commercial and industrial sectors — know it well.",
    pillars: [
      {
        title: "Reactivity",
        desc: "Being close to you means responding quickly to your requests and the unexpected.",
      },
      {
        title: "CSR",
        desc: "Environmental and social issues are an integral part of our overall strategy.",
      },
      {
        title: "Innovation",
        desc: "Our team is committed to offering ever more innovative services.",
      },
    ],
    features: [
      {
        title: "Multidisciplinary team",
        desc: "Solid services and high-quality interventions thanks to our team of qualified experts.",
        img: work1,
      },
      {
        title: "Commitment to Quality",
        desc: "Strict quality-control standards to guarantee excellence and deliver modern, efficient solutions.",
        img: work2,
      },
      {
        title: "Continuous Innovation",
        desc: "Keeping up with the latest trends and technologies to offer modern, efficient solutions.",
        img: work3,
      },
      {
        title: "Exceptional Customer Service",
        desc: "Total client satisfaction is our priority — a responsive customer service attentive to your needs.",
        img: work4,
      },
    ],
    cta: "Request a quote",
  },
} as const;

const qualityIcons = [Users, Sparkles, Leaf, HeartHandshake];
const pillarIcons = [Zap, Recycle, Lightbulb];
const featureIcons = [Users, ShieldCheck, Award, Headphones];

export default function AboutPage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "À propos de Gabon Nettoyage & Multiservices | GN&M",
    meta: [
      {
        name: "description",
        content:
          "GN&M, entreprise gabonaise de nettoyage et multiservices depuis 2020, présente à Libreville, Port-Gentil, Moanda et Franceville.",
      },
      { property: "og:title", content: "À propos de Gabon Nettoyage & Multiservices | GN&M" },
      {
        property: "og:description",
        content:
          "GN&M, entreprise gabonaise de nettoyage et multiservices depuis 2020, présente à Libreville, Port-Gentil, Moanda et Franceville.",
      },
    ],
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <SocialFloat />

      {/* Header */}
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1.5 hover:text-brand-green">
              <Home size={14} /> {lang === "fr" ? "Accueil" : "Home"}
            </Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-foreground">{c.crumb}</span>
          </nav>
          <h1 className="mt-6 font-display text-5xl font-bold text-foreground md:text-6xl">
            {c.title}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-8">
            <p className="text-[17px] leading-relaxed text-muted-foreground">{c.opening}</p>

            <div>
              <h2 className="text-lg font-bold text-brand-green-deep">{c.presence.heading}</h2>
              <p className="mt-2 text-[17px] leading-relaxed text-muted-foreground">
                {c.presence.text}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-green-deep">{c.identity.heading}</h2>
              <p className="mt-2 text-[17px] leading-relaxed text-muted-foreground">
                {c.identity.text}
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {c.identity.domains.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-green" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-green-deep">{c.engagement.heading}</h2>
              <p className="mt-2 text-[17px] leading-relaxed text-muted-foreground">
                {c.engagement.text}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 size-40 rounded-full bg-gradient-sun opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-brand ring-1 ring-border">
              <img
                src={hero2}
                alt="Équipe Gabon Nettoyage & Multiservices"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality cards */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {c.qualitySection}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.qualities.map((q, i) => {
              const Icon = qualityIcons[i];
              return (
                <div
                  key={q.title}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand-green hover:shadow-brand"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-deep transition-colors group-hover:bg-brand-green group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-green-deep">{q.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{q.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-brand ring-1 ring-border">
            <img
              src={work3}
              alt="Désinfection professionnelle"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              {c.whyTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">{c.whyIntro}</p>

            <div className="mt-8 space-y-6">
              {c.pillars.map((p, i) => {
                const Icon = pillarIcons[i];
                return (
                  <div key={p.title} className="flex gap-4">
                    <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white shadow-brand">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold uppercase tracking-wider text-brand-green">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-2">
            {c.features.map((f, i) => {
              const Icon = featureIcons[i];
              const reverse = i % 2 === 1;
              return (
                <div
                  key={f.title}
                  className={`flex flex-col gap-5 ${reverse ? "md:flex-row-reverse" : "md:flex-row"} md:items-start`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-card md:w-[45%]">
                    <img
                      src={f.img}
                      alt={f.title}
                      className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:flex-1">
                    <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green-deep">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center shadow-brand md:p-14">
            <Truck className="mx-auto text-white" size={40} />
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
              {lang === "fr"
                ? "Prêt à confier votre propreté à des experts ?"
                : "Ready to trust experts with your cleanliness?"}
            </h2>
            <a
              href={DEVIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-3 font-semibold text-brand-blue-deep shadow-brand transition-all hover:scale-[1.02]"
            >
              {c.cta}
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
