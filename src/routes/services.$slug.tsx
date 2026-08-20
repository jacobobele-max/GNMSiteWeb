import { Link, useParams } from "react-router-dom";
import { Home, ChevronRight, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { DEVIS_URL } from "@/lib/constants";
import { findService, type Service, type Category } from "@/lib/services-catalog";

export default function ServiceDetailRoute() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? findService(slug) : undefined;

  return service ? <ServiceDetailPage service={service} /> : <NotFoundService />;
}

function NotFoundService() {
  const { lang } = useI18n();
  useDocumentHead({ title: "Service introuvable — Gabon Nettoyage" });
  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            {lang === "fr" ? "Service introuvable" : "Service not found"}
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

function ServiceDetailPage({ service }: { service: Service & { category: Category } }) {
  const { t, lang } = useI18n();

  useDocumentHead({
    title: `${service.name.fr} | Gabon Nettoyage & Multiservices`,
    meta: [
      { name: "description", content: service.description[lang] },
      { property: "og:title", content: service.name[lang] },
      { property: "og:description", content: service.description[lang] },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <SocialFloat />

      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1.5 hover:text-brand-green">
              <Home size={14} /> {t("svc.breadcrumb.home")}
            </Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-brand-green">
              {t("svc.breadcrumb.all")}
            </Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-foreground">{service.name[lang]}</span>
          </nav>

          <div className="mt-6 flex items-center gap-3">
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-deep">
              <service.category.icon size={22} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-green-deep">
              {service.category.name[lang]}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            {service.name[lang]}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
            {service.description[lang]}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                {t("svc.modal.included")}
              </p>
              <ul className="mt-4 space-y-3">
                {service.bullets.map((b) => (
                  <li
                    key={b.fr}
                    className="flex items-start gap-2.5 text-[15px] text-foreground/85"
                  >
                    <Check size={18} className="mt-0.5 shrink-0 text-brand-green" />
                    <span>{b[lang]}</span>
                  </li>
                ))}
              </ul>
              {service.audience !== "tous" && (
                <span className="mt-6 inline-block rounded-full bg-brand-green/15 px-4 py-1.5 text-xs font-semibold text-brand-green-deep">
                  {t(`svc.filter.${service.audience}`)}
                </span>
              )}
            </div>

            <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center shadow-brand">
              <h2 className="font-display text-2xl font-bold text-white">{t("cta.quote")}</h2>
              <p className="mt-3 text-primary-foreground/90">
                {lang === "fr"
                  ? "Nos équipes vous répondent en moins de 24h."
                  : "Our teams reply within 24 hours."}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 w-full rounded-full bg-brand-yellow text-brand-blue-deep shadow-brand hover:opacity-95"
              >
                <a href={DEVIS_URL} target="_blank" rel="noopener noreferrer">
                  {t("cta.quote")} <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-deep"
            >
              <ChevronRight size={14} className="rotate-180" /> {t("svc.breadcrumb.all")}
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
