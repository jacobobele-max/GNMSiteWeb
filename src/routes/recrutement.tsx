import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Users,
  Mail,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { IconPointsSection } from "@/components/IconPointsSection";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { SITE_URL } from "@/lib/constants";
import work1 from "@/assets/work-1.webp";

const WHATSAPP_CV_URL =
  "https://wa.me/24162427778?text=Bonjour%2C%20je%20souhaite%20postuler%20chez%20Gabon%20Nettoyage%20%26%20Multiservices.%20Voici%20mon%20profil%20:";

const profiles = {
  fr: [
    "Agents de nettoyage (bureaux, résidentiel, industriel)",
    "Techniciens de désinfection / désinsectisation / dératisation",
    "Chefs d'équipe et superviseurs de site",
    "Chauffeurs et agents de manutention",
  ],
  en: [
    "Cleaning agents (offices, residential, industrial)",
    "Disinfection / pest control technicians",
    "Team leaders and site supervisors",
    "Drivers and handling staff",
  ],
} as const;

const content = {
  fr: {
    crumb: "Recrutement",
    eyebrow: "Rejoignez-nous",
    title: "Rejoignez l'équipe GN&M",
    intro:
      "Gabon Nettoyage & Multiservices recrute régulièrement du personnel motivé pour renforcer ses équipes à Libreville, Port-Gentil, Moanda et Franceville. Rejoignez une entreprise gabonaise en croissance, où chaque agent est formé, encadré et équipé.",
    section1: {
      eyebrow: "Pourquoi nous rejoindre",
      title: "Une équipe formée et encadrée",
      desc: "Nous investissons dans nos agents parce que ce sont eux qui font la qualité de notre service, chaque jour, sur le terrain.",
      points: [
        {
          icon: GraduationCap,
          title: "Formation continue",
          desc: "Protocoles d'hygiène, sécurité et utilisation du matériel professionnel.",
        },
        {
          icon: ShieldCheck,
          title: "Équipements fournis",
          desc: "Tenues, équipements de protection individuelle et matériel homologué.",
        },
        {
          icon: Users,
          title: "Encadrement de proximité",
          desc: "Des superviseurs présents sur chaque site pour vous accompagner.",
        },
        {
          icon: TrendingUp,
          title: "Perspectives d'évolution",
          desc: "De nombreux chefs d'équipe ont commencé comme agents de terrain.",
        },
      ],
    },
    profilesTitle: "Profils recherchés",
    profilesDesc:
      "Selon nos besoins et ceux de nos clients, nous recrutons notamment sur les profils suivants :",
    ctaTitle: "Envoyez-nous votre candidature",
    ctaDesc:
      "Écrivez-nous sur WhatsApp ou par e-mail avec votre CV et le poste qui vous intéresse — nous étudions chaque candidature.",
    ctaBtn: "Postuler sur WhatsApp",
    ctaSecondary: "Envoyer un e-mail",
  },
  en: {
    crumb: "Careers",
    eyebrow: "Join us",
    title: "Join the GN&M team",
    intro:
      "Gabon Nettoyage & Multiservices regularly recruits motivated staff to strengthen its teams in Libreville, Port-Gentil, Moanda and Franceville. Join a growing Gabonese company where every agent is trained, supervised and equipped.",
    section1: {
      eyebrow: "Why join us",
      title: "A trained, supervised team",
      desc: "We invest in our agents because they are the ones who deliver quality on the ground, every day.",
      points: [
        {
          icon: GraduationCap,
          title: "Ongoing training",
          desc: "Hygiene and safety protocols, professional equipment handling.",
        },
        {
          icon: ShieldCheck,
          title: "Equipment provided",
          desc: "Uniforms, personal protective equipment and certified materials.",
        },
        {
          icon: Users,
          title: "On-site supervision",
          desc: "Supervisors present on every site to support you.",
        },
        {
          icon: TrendingUp,
          title: "Growth opportunities",
          desc: "Many team leaders started out as field agents.",
        },
      ],
    },
    profilesTitle: "Profiles we look for",
    profilesDesc: "Depending on our needs and our clients', we regularly recruit for:",
    ctaTitle: "Send us your application",
    ctaDesc:
      "Message us on WhatsApp or by email with your CV and the role you're interested in — we review every application.",
    ctaBtn: "Apply on WhatsApp",
    ctaSecondary: "Send an email",
  },
} as const;

export default function RecrutementPage() {
  const { lang } = useI18n();
  const c = content[lang];

  useDocumentHead({
    title: "Recrutement | Rejoignez GN&M Gabon Nettoyage & Multiservices",
    meta: [
      {
        name: "description",
        content:
          "GN&M recrute des agents de nettoyage, techniciens de désinfection et chefs d'équipe à Libreville, Port-Gentil, Moanda et Franceville. Envoyez votre candidature.",
      },
      {
        property: "og:title",
        content: "Recrutement | Rejoignez GN&M Gabon Nettoyage & Multiservices",
      },
      {
        property: "og:description",
        content: "Rejoignez une entreprise gabonaise en croissance, où chaque agent est formé et encadré.",
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
          <img src={work1} alt="" className="size-full object-cover" />
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
        image={work1}
        points={c.section1.points}
        accent="green"
      />

      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-blue-deep md:text-3xl">
            {c.profilesTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{c.profilesDesc}</p>
          <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {profiles[lang].map((p) => (
              <li
                key={p}
                className="rounded-xl border border-border bg-card p-4 text-[15px] font-medium text-foreground/85 shadow-card"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-blue-deep md:text-4xl">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.ctaDesc}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-brand transition-all hover:scale-[1.02]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607z" />
              </svg>
              {c.ctaBtn}
            </a>
            <a
              href="mailto:contact@gabonnettoyage.net?subject=Candidature"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold text-foreground transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <Mail size={18} /> {c.ctaSecondary}
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
