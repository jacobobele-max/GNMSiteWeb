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
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { DEVIS_URL } from "@/lib/constants";
import hero2 from "@/assets/hero-2.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const content = {
  fr: {
    crumb: "À propos",
    title: "Qui sommes-nous ?",
    intro: [
      "Gabon Nettoyage & Multiservices est une entreprise de droit gabonais qui offre des services professionnels aux entreprises et particuliers. Engagée dans l'hygiène et l'assainissement, elle met en œuvre différentes compétences techniques au profit du bien-être.",
      "Depuis janvier 2020, Gabon Nettoyage & Multiservices veille à assurer des environnements de travail agréables et sains à leurs occupants et à garantir la satisfaction des clients qui nous font confiance en tant que société de nettoyage des locaux professionnels et particuliers.",
      "Présent à l'Estuaire, Port-Gentil, Moanda et Franceville, Gabon Nettoyage & Multi-services se positionne comme l'une des entreprises de propreté parmi les leaders sur le marché de la propreté. Réactivité, service de ménage professionnel, qualité du nettoyage et respect de l'environnement caractérisent nos équipes.",
      "Notre réseau d'agences de nettoyage professionnel vous aidera à trouver la prestation de qualité dont vous avez besoin. N'hésitez pas à faire appel à notre entreprise spécialisée pour établir un devis gratuit et adapter votre contrat d'entretien à vos besoins.",
    ],
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
    cta: "Demander un devis gratuit",
  },
  en: {
    crumb: "About",
    title: "Who are we?",
    intro: [
      "Gabon Nettoyage & Multiservices is a company under Gabonese law providing professional services to businesses and individuals. Committed to hygiene and sanitation, it deploys a range of technical skills to serve well-being.",
      "Since January 2020, Gabon Nettoyage & Multiservices has been ensuring pleasant and healthy work environments for occupants and the satisfaction of clients who trust us as their cleaning company for both professional and private premises.",
      "Active in Estuaire, Port-Gentil, Moanda and Franceville, Gabon Nettoyage & Multi-services stands as one of the leading cleaning companies on the market. Reactivity, professional cleaning service, quality and respect for the environment define our teams.",
      "Our network of professional cleaning agencies will help you find the quality service you need. Get in touch for a free quote and tailor your maintenance contract to your needs.",
    ],
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
    cta: "Request a free quote",
  },
} as const;

const qualityIcons = [Users, Sparkles, Leaf, HeartHandshake];
const pillarIcons = [Zap, Recycle, Lightbulb];
const featureIcons = [Users, ShieldCheck, Award, Headphones];

export default function AboutPage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "Qui sommes-nous ? — Gabon Nettoyage & Multiservices",
    meta: [
      {
        name: "description",
        content:
          "Découvrez Gabon Nettoyage & Multiservices : entreprise de droit gabonais spécialisée dans l'hygiène, l'assainissement et le nettoyage professionnel.",
      },
      { property: "og:title", content: "Qui sommes-nous ? — Gabon Nettoyage & Multiservices" },
      {
        property: "og:description",
        content:
          "Entreprise gabonaise au service des entreprises et particuliers : réactivité, RSE et innovation.",
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground">
            {c.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
