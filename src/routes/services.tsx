import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Search, Check, ArrowRight, Clock, Users, Wrench, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { categories, allServices } from "@/lib/services-catalog";

export default function ServicesPage() {
  useDocumentHead({
    title: "Tous nos services — Gabon Nettoyage & Multiservices",
    meta: [
      {
        name: "description",
        content:
          "Découvrez plus de 200 services de nettoyage, désinfection, entretien extérieur et gestion des déchets à Libreville.",
      },
      { property: "og:title", content: "Tous nos services — Gabon Nettoyage & Multiservices" },
      {
        property: "og:description",
        content: "Une gamme complète pour tous vos besoins de propreté au Gabon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  });

  const { t, lang } = useI18n();
  const [q, setQ] = useState("");
  const [catSlug, setCatSlug] = useState<string>("");
  const [aud, setAud] = useState<string>("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return allServices.filter((s) => {
      if (catSlug && s.category.slug !== catSlug) return false;
      if (aud && s.audience !== aud && s.audience !== "tous") return false;
      if (!query) return true;
      return (
        s.name[lang].toLowerCase().includes(query) ||
        s.description[lang].toLowerCase().includes(query) ||
        s.category.name[lang].toLowerCase().includes(query)
      );
    });
  }, [q, catSlug, aud, lang]);

  const grouped = useMemo(() => {
    return categories
      .map((c) => ({ cat: c, items: filtered.filter((s) => s.category.slug === c.slug) }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  const reset = () => {
    setQ("");
    setCatSlug("");
    setAud("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <SocialFloat />
      <div className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand-green">
              {t("svc.breadcrumb.home")}
            </Link>
            <span>›</span>
            <span className="text-foreground">{t("svc.breadcrumb.all")}</span>
          </nav>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
                {t("svc.page.title")}
              </h1>
              <p className="mt-2 text-muted-foreground">{t("svc.page.subtitle")}</p>
            </div>
            <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-card p-1 shadow-sm">
              <div className="flex flex-1 items-center gap-2 pl-4">
                <Search size={18} className="text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={t("svc.search.placeholder")}
                  className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button className="rounded-full bg-brand-green hover:bg-brand-green-deep">
                {t("svc.search.btn")}
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <select
              value={catSlug}
              onChange={(e) => setCatSlug(e.target.value)}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-brand-green"
            >
              <option value="">{t("svc.filter.allCat")}</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name[lang]}
                </option>
              ))}
            </select>
            <select
              value={aud}
              onChange={(e) => setAud(e.target.value)}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm outline-none focus:border-brand-green"
            >
              <option value="">{t("svc.filter.allAud")}</option>
              <option value="particulier">{t("svc.filter.particulier")}</option>
              <option value="entreprise">{t("svc.filter.entreprise")}</option>
            </select>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted-foreground hover:text-brand-green"
            >
              ↺ {t("svc.filter.reset")}
            </button>
            <span className="ml-auto text-sm text-muted-foreground">
              {filtered.length} services
            </span>
          </div>

          {/* Category cards */}
          {grouped.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-dashed border-border bg-card p-16 text-center text-muted-foreground">
              {t("svc.noResults")}
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {grouped.map(({ cat, items }) => (
                <div
                  key={cat.slug}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-brand"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-deep">
                      <cat.icon size={22} />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      {cat.name[lang]}
                    </h3>
                  </div>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {items.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="flex w-full items-start gap-2 text-left text-sm text-foreground/80 transition-colors hover:text-brand-green"
                        >
                          <Check size={16} className="mt-0.5 shrink-0 text-brand-green" />
                          <span>{s.name[lang]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setCatSlug(cat.slug)}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-green-deep"
                  >
                    {t("svc.viewAll")} ({items.length}) <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Engagements strip */}
          <div className="mt-16 grid gap-6 rounded-2xl border border-border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, k: "1" },
              { icon: Users, k: "2" },
              { icon: Wrench, k: "3" },
              { icon: Leaf, k: "4" },
            ].map(({ icon: Icon, k }) => (
              <div key={k} className="flex items-start gap-3">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-deep">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t(`svc.engage.${k}.t`)}</p>
                  <p className="text-xs text-muted-foreground">{t(`svc.engage.${k}.d`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </div>
  );
}
