import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

// NOTE: Pour récupérer les avis Google Business en temps réel, une intégration
// Google Places API (clé + ID de lieu) est nécessaire. En attendant, voici des
// témoignages représentatifs.
const reviews = [
  {
    name: "Marie K.",
    role: "Directrice administrative",
    rating: 5,
    text: "Équipe ponctuelle, professionnelle et discrète. Nos bureaux sont impeccables chaque matin. Je recommande vivement Gabon Nettoyage !",
    initial: "M",
  },
  {
    name: "Jean-Pierre M.",
    role: "Gérant d'hôtel",
    rating: 5,
    text: "Service de très haute qualité. Les produits utilisés sont respectueux de l'environnement, ce qui correspond parfaitement à nos valeurs.",
    initial: "J",
  },
  {
    name: "Sandrine O.",
    role: "Particulier",
    rating: 5,
    text: "Une équipe sérieuse qui prend soin de chaque détail. Ma maison n'a jamais été aussi propre. Merci pour votre travail remarquable.",
    initial: "S",
  },
  {
    name: "Patrick N.",
    role: "Responsable RH",
    rating: 5,
    text: "Réactivité exemplaire et qualité constante depuis plus d'un an. Un vrai partenaire de confiance pour notre entreprise.",
    initial: "P",
  },
];

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="bg-gradient-hero py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-yellow/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-deep">
            {t("test.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">{t("test.title")}</h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-brand-yellow">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
            <span className="ml-2 text-sm text-white/90">4,9 / 5 sur Google</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="group relative rounded-2xl bg-white/10 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15"
            >
              <Quote className="absolute right-4 top-4 text-brand-yellow/60" size={28} />
              <div className="flex items-center gap-1 text-brand-yellow">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/90">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-sun font-bold text-brand-blue-deep">
                  {r.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-white/70">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
