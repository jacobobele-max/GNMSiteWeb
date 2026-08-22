import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_WIDGET_CLASS = "elfsight-app-66c75e7c-e44c-4bdd-b805-baa306cce649";

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
  const { t } = useI18n();
  useElfsightScript();

  return (
    <section className="bg-gradient-hero py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-yellow/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-deep">
            {t("test.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">{t("test.title")}</h2>
        </div>

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
