import { useI18n } from "@/lib/i18n";

const stats = [
  { value: "2020", key: "stats.since" },
  { value: "4", key: "stats.cities" },
  { value: "30+", key: "stats.agents" },
] as const;

export function StatsBand() {
  const { t } = useI18n();
  return (
    <section className="bg-brand-blue-deep py-10 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-3 md:px-12">
        {stats.map((s) => (
          <div key={s.key}>
            <p className="font-display text-4xl font-bold text-brand-yellow md:text-5xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm uppercase tracking-wider text-white/85">{t(s.key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
