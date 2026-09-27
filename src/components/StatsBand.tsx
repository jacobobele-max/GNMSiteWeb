import { useI18n } from "@/lib/i18n";

const stats = [
  { value: { fr: "2020", en: "2020" }, key: "stats.since" },
  { value: { fr: "4", en: "4" }, key: "stats.cities" },
  { value: { fr: "30+", en: "30+" }, key: "stats.agents" },
  { value: { fr: "24h/24, 7j/7", en: "24/7" }, key: "stats.hours" },
] as const;

export function StatsBand() {
  const { t, lang } = useI18n();
  return (
    <section className="bg-brand-blue-deep py-10 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-4 md:px-12">
        {stats.map((s) => (
          <div key={s.key}>
            <p className="font-display text-3xl font-bold text-brand-yellow md:text-4xl">
              {s.value[lang]}
            </p>
            <p className="mt-1 text-sm uppercase tracking-wider text-white/85">{t(s.key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
