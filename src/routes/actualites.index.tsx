import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Home, ChevronRight, Calendar, Tag, ArrowRight, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LanguageProvider, useI18n, type Lang } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { articles } from "@/lib/articles";

export default function ActualitesIndexRoute() {
  return (
    <LanguageProvider>
      <ActualitesPage />
    </LanguageProvider>
  );
}

const categories: { key: string; label: { fr: string; en: string } }[] = [
  { key: "all", label: { fr: "Tous", en: "All" } },
  { key: "Éco-responsable", label: { fr: "Éco-responsable", en: "Eco-friendly" } },
  { key: "Intervention", label: { fr: "Interventions", en: "Field work" } },
  { key: "Formation", label: { fr: "Formation", en: "Training" } },
  { key: "Partenariat", label: { fr: "Partenariats", en: "Partnerships" } },
  { key: "Innovation", label: { fr: "Innovation", en: "Innovation" } },
  { key: "Événement", label: { fr: "Événements", en: "Events" } },
];

function formatDate(iso: string, lang: Lang) {
  return new Date(iso).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ActualitesPage() {
  const { t, lang } = useI18n();

  useDocumentHead({
    title: "Actualités — Gabon Nettoyage & Multiservices",
    meta: [
      {
        name: "description",
        content:
          "Suivez les actualités de Gabon Nettoyage & Multiservices : nouveaux services, événements, engagements éco-responsables et interventions terrain.",
      },
      { property: "og:title", content: "Actualités — Gabon Nettoyage & Multiservices" },
      {
        property: "og:description",
        content:
          "Les dernières nouvelles de notre équipe : interventions, innovations et engagements.",
      },
    ],
  });

  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = active === "all" || a.category.fr === active;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        a.title.fr.toLowerCase().includes(q) ||
        a.title.en.toLowerCase().includes(q) ||
        a.excerpt.fr.toLowerCase().includes(q) ||
        a.excerpt.en.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

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
            <span className="font-semibold text-foreground">
              {lang === "fr" ? "Actualités" : "News"}
            </span>
          </nav>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
                {lang === "fr" ? "Le journal de l'équipe" : "Team journal"}
              </p>
              <h1 className="mt-2 font-display text-5xl font-bold text-foreground md:text-6xl">
                {lang === "fr" ? "Actualités" : "News"}
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {lang === "fr"
                  ? "Interventions terrain, innovations, événements et engagements : suivez ce qui anime nos équipes."
                  : "Field work, innovations, events and commitments: follow what drives our teams."}
              </p>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === "fr" ? "Rechercher un article…" : "Search an article…"}
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-green text-white shadow-brand"
                      : "border border-border bg-card text-foreground hover:border-brand-green hover:text-brand-green"
                  }`}
                >
                  {c.label[lang]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="mt-12">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <article className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-card md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                <img
                  src={featured.cover}
                  alt={featured.title[lang]}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue-deep">
                  <Tag size={12} /> {featured.category[lang]}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-green">
                  <Calendar size={14} /> {formatDate(featured.date, lang)}
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  {featured.title[lang]}
                </h2>
                <p className="mt-4 text-muted-foreground">{featured.excerpt[lang]}</p>
                <Link
                  to={`/actualites/${featured.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.02]"
                >
                  {lang === "fr" ? "Lire l'article" : "Read article"} <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {rest.length === 0 ? (
            <p className="text-center text-muted-foreground">
              {lang === "fr" ? "Aucun article trouvé." : "No articles found."}
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <article
                  key={a.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-brand"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={a.cover}
                      alt={a.title[lang]}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-green/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      <Tag size={11} /> {a.category[lang]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green">
                      <Calendar size={12} /> {formatDate(a.date, lang)}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground">
                      {a.title[lang]}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt[lang]}</p>
                    <Link
                      to={`/actualites/${a.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-deep"
                    >
                      {lang === "fr" ? "Lire la suite" : "Read more"} <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center text-primary-foreground shadow-brand md:p-14">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              {lang === "fr" ? "Restez informé" : "Stay informed"}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/90">
              {lang === "fr"
                ? "Recevez nos actualités, conseils et offres exclusives directement par email."
                : "Get our news, tips and exclusive offers directly by email."}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder={lang === "fr" ? "Votre email" : "Your email"}
                className="flex-1 rounded-full bg-white/95 px-5 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-brand-yellow"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-brand-blue-deep transition-transform hover:scale-[1.02]"
              >
                {lang === "fr" ? "S'inscrire" : "Subscribe"} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
