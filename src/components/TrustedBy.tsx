import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

// Références réelles (voir /references) — à ne pas remplacer par des noms
// non confirmés, même à titre d'exemple.
const partners = [
  "COMILOG",
  "SOGARA",
  "Nouvelle Gabon Mining",
  "GSEZ",
  "Ecobank",
  "Gendarmerie Nationale",
  "ONDSC",
  "SGEPP",
];

export function TrustedBy() {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Link
          to="/references"
          className="block text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand-green"
        >
          {t("trusted.title")}
        </Link>
        <div className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center font-display text-lg font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-brand-blue"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
