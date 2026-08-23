import { useI18n } from "@/lib/i18n";
import w1 from "@/assets/work-1.webp";
import w2 from "@/assets/work-2.webp";
import w3 from "@/assets/work-3.webp";
import w4 from "@/assets/work-4.webp";
import w5 from "@/assets/work-5.webp";
import w6 from "@/assets/work-6.webp";
import w7 from "@/assets/work-7.webp";
import w8 from "@/assets/work-8.webp";
import w9 from "@/assets/work-9.webp";
import w10 from "@/assets/work-10.webp";

const items = [
  { img: w1, label: "Grand nettoyage de sols", span: "md:col-span-2 md:row-span-1" },
  { img: w2, label: "Nettoyage extérieur", span: "md:row-span-2" },
  { img: w3, label: "Désinfection de bureaux", span: "md:col-span-2" },
  { img: w4, label: "Entretien espaces verts", span: "" },
  { img: w5, label: "Nettoyage résidentiel", span: "" },
  { img: w6, label: "Nettoyage mobilier extérieur", span: "md:col-span-2" },
  { img: w7, label: "Entretien piscine et terrasse", span: "md:col-span-2" },
  { img: w8, label: "Entretien espaces verts", span: "md:row-span-2" },
  { img: w9, label: "Équipe et matériel sur site", span: "" },
  { img: w10, label: "Désinfection professionnelle", span: "" },
];

export function Gallery() {
  const { t } = useI18n();
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-green/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green-deep">
            {t("gallery.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            {t("gallery.title.a")}{" "}
            <span className="text-gradient-brand">{t("gallery.title.b")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("gallery.subtitle")}</p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/85 via-brand-blue-deep/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-wider text-brand-yellow">Réalisation</p>
                <p className="mt-0.5 font-semibold">{it.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
