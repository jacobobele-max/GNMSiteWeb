import { Leaf, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import hero2 from "@/assets/hero-2.webp";

const pillars = [
  {
    icon: Leaf,
    title: "Éco-responsable",
    desc: "Produits biodégradables, gestion raisonnée de l'eau et réduction systématique des emballages.",
  },
  {
    icon: ShieldCheck,
    title: "Produits bio certifiés",
    desc: "Des solutions standards bio, sûres pour vos enfants, vos animaux et nos équipes.",
  },
  {
    icon: HeartHandshake,
    title: "Engagement humain",
    desc: "Une équipe formée, déclarée, valorisée — parce que la qualité commence par le respect.",
  },
  {
    icon: Award,
    title: "Exigence du détail",
    desc: "Des protocoles précis, des contrôles qualité et une transparence totale sur nos interventions.",
  },
];

export function Philosophy() {
  const { t } = useI18n();
  return (
    <section id="apropos" className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -left-6 -top-6 size-40 rounded-full bg-gradient-sun opacity-30 blur-3xl" />
          <div className="absolute -bottom-6 -right-6 size-48 rounded-full bg-brand-blue/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-brand">
            <img
              src={hero2}
              alt="Produits écologiques utilisés par Gabon Nettoyage"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-deep/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white/95 p-4 backdrop-blur-md shadow-card">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Leaf size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">100% éco-conscient</p>
                <p className="text-xs text-muted-foreground">
                  Produits bio standards utilisés sur chaque intervention
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-brand-yellow/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-deep">
            {t("philo.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            {t("philo.title.a")} <br />
            <span className="text-gradient-brand">{t("philo.title.b")}</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Chez Gabon Nettoyage & Multiservices, nous croyons qu'un environnement
            propre commence par des choix responsables. Nous privilégions des
            produits biologiques et des méthodes durables pour des espaces sains,
            sans compromis sur l'efficacité.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-brand-green hover:shadow-card"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green-deep">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
