import { MessageCircle, ClipboardCheck, FileText, Users2, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { DEVIS_URL } from "@/lib/constants";

const steps = {
  fr: [
    {
      icon: MessageCircle,
      title: "Demande",
      desc: "Vous nous contactez par WhatsApp, téléphone ou formulaire.",
    },
    {
      icon: ClipboardCheck,
      title: "Visite gratuite",
      desc: "Un responsable évalue vos locaux et vos besoins sur place.",
    },
    {
      icon: FileText,
      title: "Devis sous 48h",
      desc: "Proposition claire, adaptée à votre budget, sans engagement.",
    },
    {
      icon: Users2,
      title: "Intervention et suivi",
      desc: "Équipe formée, contrôles qualité réguliers, un interlocuteur unique.",
    },
  ],
  en: [
    {
      icon: MessageCircle,
      title: "Request",
      desc: "You contact us via WhatsApp, phone or our online form.",
    },
    {
      icon: ClipboardCheck,
      title: "Free site visit",
      desc: "A manager assesses your premises and needs on site.",
    },
    {
      icon: FileText,
      title: "Quote within 48h",
      desc: "A clear proposal, adapted to your budget, with no obligation.",
    },
    {
      icon: Users2,
      title: "Service and follow-up",
      desc: "Trained team, regular quality checks, a single point of contact.",
    },
  ],
} as const;

const eyebrow = { fr: "Notre processus", en: "Our process" };
const title = { fr: "Comment ça marche", en: "How it works" };
const ctaLabel = { fr: "Demander un devis", en: "Request a quote" };

export function HowItWorks() {
  const { lang } = useI18n();
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-yellow/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-deep">
            {eyebrow[lang]}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            {title[lang]}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps[lang].map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-brand"
            >
              <span className="font-display text-5xl font-bold text-brand-blue/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="-mt-8 mb-3 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <s.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={DEVIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 font-semibold text-brand-blue-deep shadow-brand transition-all hover:scale-[1.02]"
          >
            {ctaLabel[lang]} <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
