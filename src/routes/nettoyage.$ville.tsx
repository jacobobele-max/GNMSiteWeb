import { Link, useParams } from "react-router-dom";
import { Home, ChevronRight, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { DEVIS_URL } from "@/lib/constants";
import { getCityBySlug, type CityContent } from "@/lib/cities";
import { categories } from "@/lib/services-catalog";

export default function NettoyageVilleRoute() {
  const { ville } = useParams<{ ville: string }>();
  const city = ville ? getCityBySlug(ville) : undefined;

  return city ? <CityPage city={city} /> : <NotFoundCity />;
}

function NotFoundCity() {
  const { lang } = useI18n();
  useDocumentHead({ title: "Ville introuvable — Gabon Nettoyage" });
  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            {lang === "fr" ? "Ville introuvable" : "City not found"}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {lang === "fr"
              ? "La page que vous cherchez n'existe pas ou a été déplacée."
              : "The page you are looking for doesn't exist or has been moved."}
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.02]"
          >
            {lang === "fr" ? "Voir nos services" : "View our services"}
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function CityPage({ city }: { city: CityContent }) {
  const { lang } = useI18n();
  const featuredCategories = city.featuredCategorySlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is (typeof categories)[number] => c !== undefined);

  useDocumentHead({
    title: city.title,
    meta: [
      { name: "description", content: city.metaDescription },
      { property: "og:title", content: city.title },
      { property: "og:description", content: city.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
            <span className="font-semibold text-foreground">{city.name}</span>
          </nav>
          <h1 className="mt-6 font-display text-4xl font-bold text-foreground md:text-5xl">
            {city.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
            {city.presence}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {lang === "fr" ? `Nos services à ${city.name}` : `Our services in ${city.name}`}
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
            {city.intro}
          </p>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-brand-green-deep">
            {city.highlight}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featuredCategories.map((cat) => (
              <div
                key={cat.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-brand"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-deep">
                  <cat.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{cat.name[lang]}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cat.tagline[lang]}</p>
                <ul className="mt-4 space-y-2">
                  {cat.services.slice(0, 2).map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="flex items-start gap-2 text-sm text-foreground/80 hover:text-brand-green"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-brand-green" />
                        <span>{s.name[lang]}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${cat.services[0].slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-green group-hover:text-brand-green-deep"
                >
                  {lang === "fr" ? "En savoir plus" : "Learn more"} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center shadow-brand md:p-14">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              {lang === "fr"
                ? `Besoin d'un devis pour ${city.name} ?`
                : `Need a quote for ${city.name}?`}
            </h2>
            <p className="mt-3 text-primary-foreground/90">
              {lang === "fr"
                ? "Nos équipes vous répondent en moins de 24h."
                : "Our teams reply within 24 hours."}
            </p>
            <a
              href={DEVIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-3 font-semibold text-brand-blue-deep shadow-brand transition-all hover:scale-[1.02]"
            >
              {lang === "fr" ? "Demander un devis" : "Request a quote"}
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
