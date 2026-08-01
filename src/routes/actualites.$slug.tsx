import { Link, useParams } from "react-router-dom";
import {
  Home,
  ChevronRight,
  Calendar,
  Tag,
  ArrowRight,
  ArrowLeft,
  User,
  Clock,
  Share2,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n, type Lang } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { SITE_URL } from "@/lib/constants";
import { articles, getArticleBySlug } from "@/lib/articles";

export default function ActualiteDetailRoute() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  return article ? <ArticleDetailPage article={article} /> : <NotFoundArticle />;
}

function formatDate(iso: string, lang: Lang) {
  return new Date(iso).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NotFoundArticle() {
  const { lang } = useI18n();
  useDocumentHead({ title: "Article introuvable — Gabon Nettoyage" });
  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            {lang === "fr" ? "Article introuvable" : "Article not found"}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {lang === "fr"
              ? "L'article que vous cherchez n'existe pas ou a été déplacé."
              : "The article you are looking for doesn't exist or has been moved."}
          </p>
          <Link
            to="/actualites"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.02]"
          >
            <ArrowLeft size={16} />
            {lang === "fr" ? "Retour aux actualités" : "Back to news"}
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function ArticleDetailPage({
  article,
}: {
  article: NonNullable<ReturnType<typeof getArticleBySlug>>;
}) {
  const { lang } = useI18n();

  useDocumentHead({
    title: `${article.title.fr} — Gabon Nettoyage & Multiservices`,
    meta: [
      { name: "description", content: article.excerpt.fr },
      { property: "og:title", content: article.title.fr },
      { property: "og:description", content: article.excerpt.fr },
      { property: "og:image", content: `${SITE_URL}${article.cover}` },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${article.cover}` },
    ],
  });

  const related = articles
    .filter((a) => a.id !== article.id && a.category.fr === article.category.fr)
    .slice(0, 3);
  const fallback = articles.filter((a) => a.id !== article.id).slice(0, 3);
  const suggestions = related.length > 0 ? related : fallback;

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://gabon-sparkle-hub.lovable.app/actualites/${article.slug}`;

  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <SocialFloat />

      {/* Hero */}
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1.5 hover:text-brand-green">
              <Home size={14} /> {lang === "fr" ? "Accueil" : "Home"}
            </Link>
            <ChevronRight size={14} />
            <Link to="/actualites" className="hover:text-brand-green">
              {lang === "fr" ? "Actualités" : "News"}
            </Link>
            <ChevronRight size={14} />
            <span className="line-clamp-1 font-semibold text-foreground">
              {article.title[lang]}
            </span>
          </nav>

          <div className="mt-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-green">
              <Tag size={12} /> {article.category[lang]}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {article.title[lang]}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{article.excerpt[lang]}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-brand-green" />
                {formatDate(article.date, lang)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User size={14} className="text-brand-green" />
                {article.author[lang]}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-brand-green" />
                {article.readTime} {lang === "fr" ? "min de lecture" : "min read"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="mt-10">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={article.cover}
              alt={article.title[lang]}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-12 lg:grid-cols-[1fr_260px]">
          <article className="prose-content">
            {article.content[lang].map((para, i) => (
              <p
                key={i}
                className="mb-6 text-lg leading-relaxed text-foreground/90 first:text-xl first:font-medium first:text-foreground"
              >
                {para}
              </p>
            ))}

            {article.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-6">
                <span className="text-sm font-semibold text-foreground">
                  {lang === "fr" ? "Tags :" : "Tags:"}
                </span>
                {article.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <Share2 size={18} className="text-brand-green" />
                {lang === "fr" ? "Partager" : "Share"}
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(article.title[lang] + " " + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gradient-brand p-6 text-primary-foreground shadow-brand">
              <h3 className="font-display text-lg font-bold">
                {lang === "fr" ? "Besoin d'un devis ?" : "Need a quote?"}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/90">
                {lang === "fr"
                  ? "Nos équipes vous répondent en moins de 24h."
                  : "Our teams reply within 24 hours."}
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-brand-blue-deep transition-transform hover:scale-[1.02]"
              >
                {lang === "fr" ? "Nous contacter" : "Contact us"} <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {suggestions.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {lang === "fr" ? "À lire aussi" : "You may also like"}
              </h2>
              <Link
                to="/actualites"
                className="hidden items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-deep sm:inline-flex"
              >
                {lang === "fr" ? "Toutes les actualités" : "All news"} <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((a) => (
                <Link
                  key={a.id}
                  to={`/actualites/${a.slug}`}
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
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
                      {a.title[lang]}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                      {a.excerpt[lang]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-deep"
          >
            <ArrowLeft size={16} /> {lang === "fr" ? "Retour aux actualités" : "Back to news"}
          </Link>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
