import { useEffect } from "react";
import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { googleRating } from "@/data/googleRating";
import { testimonials } from "@/data/testimonials";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_WIDGET_CLASS = "elfsight-app-66c75e7c-e44c-4bdd-b805-baa306cce649";

const labels = {
  fr: {
    seeAll: "Voir tous les avis",
    leaveReview: "Laisser un avis",
    googleReview: "Avis Google",
    reviews: (n: number) => `${n} avis Google`,
  },
  en: {
    seeAll: "See all reviews",
    leaveReview: "Leave a review",
    googleReview: "Google review",
    reviews: (n: number) => `${n} Google reviews`,
  },
} as const;

function useElfsightScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);
}

export function Testimonials() {
  const { t, lang } = useI18n();
  const l = labels[lang];
  useElfsightScript();

  return (
    <section className="bg-gradient-hero py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-yellow/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-deep">
            {t("test.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">{t("test.title")}</h2>

          {/* Badge statique, présent dans le HTML pré-rendu (donc indexable),
              contrairement au widget Elfsight ci-dessous. */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2">
              <Star className="size-4 fill-brand-yellow text-brand-yellow" />
              {googleRating.value.toString().replace(".", ",")}/5 · {l.reviews(googleRating.count)}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={googleRating.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              {l.seeAll}
            </a>
            <a
              href={googleRating.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-brand-blue-deep transition-transform hover:scale-[1.02]"
            >
              {l.leaveReview}
            </a>
          </div>
        </div>

        {testimonials.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((tm, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: tm.note }).map((_, s) => (
                    <Star key={s} className="size-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{tm.texte}</p>
                <p className="mt-4 text-sm font-semibold">
                  {tm.auteur}
                  {tm.service ? ` · ${tm.service}` : ""}
                </p>
                <p className="text-xs text-white/60">{l.googleReview}</p>
              </div>
            ))}
          </div>
        )}

        {/* Widget Elfsight : avis Google réels, chargés en JS côté client —
            contrairement au reste du site, ce contenu n'est pas prérendu
            donc pas indexable par les moteurs de recherche. */}
        <div className="mt-14">
          <div className={ELFSIGHT_WIDGET_CLASS} data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}
