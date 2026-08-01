import { useI18n } from "@/lib/i18n";

const partners = [
  "TotalEnergies",
  "BGFI Bank",
  "Setrag",
  "Comilog",
  "Olam Gabon",
  "Airtel",
  "Sobraga",
  "Gabon Telecom",
];

export function TrustedBy() {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t("trusted.title")}
        </p>
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
