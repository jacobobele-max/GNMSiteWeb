import { Link } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { Home, MapPin, Phone, Mail, Clock, User, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialFloat } from "@/components/SocialFloat";
import { QuoteChatbot } from "@/components/QuoteChatbot";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useI18n } from "@/lib/i18n";
import { useDocumentHead } from "@/lib/use-document-head";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(5, "Message trop court").max(1500),
});

export default function ContactPage() {
  const { t } = useI18n();

  useDocumentHead({
    title: "Contact — Gabon Nettoyage & Multiservices",
    meta: [
      {
        name: "description",
        content:
          "Contactez Gabon Nettoyage & Multiservices à Libreville. Adresse, téléphone, horaires et formulaire de contact.",
      },
      { property: "og:title", content: "Contact — Gabon Nettoyage & Multiservices" },
      {
        property: "og:description",
        content: "Nous contacter à Libreville (Cité Damas) — devis et renseignements.",
      },
    ],
  });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Formulaire invalide");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Merci ! Nous vous recontactons sous 24h.");
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  const infos = [
    {
      icon: MapPin,
      title: "Adresse",
      value: "Cité Damas, Rue Dr Julien Mezu, Libreville, Gabon",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "(+241) 62 42 77 78 · (+241) 77 17 69 29",
    },
    {
      icon: Mail,
      title: "Boîte postale",
      value: "BP 8652, Libreville",
    },
    {
      icon: Clock,
      title: "Horaires d'ouverture",
      value: "Lun – Ven : 9h00 – 17h00\nSam : 9h00 – 14h00",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent={false} />
      <SocialFloat />

      {/* Breadcrumb + title */}
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1.5 hover:text-brand-green">
              <Home size={14} /> Accueil
            </Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-foreground">Contact</span>
          </nav>
          <h1 className="mt-6 font-display text-5xl font-bold text-foreground md:text-6xl">
            Nous contacter
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Une question, un devis, une intervention urgente ? Notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="mt-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-border">
            <iframe
              title="Gabon Nettoyage & Multiservices — Localisation"
              src="https://www.google.com/maps?q=Cit%C3%A9+Damas%2C+Rue+Dr+Julien+Mezu%2C+Libreville%2C+Gabon&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            Informations
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {infos.map((info) => (
              <div
                key={info.title}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-brand"
              >
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand">
                  <info.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                  <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message form */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            Laissez-nous un message
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Nous revenons vers vous sous 24h ouvrées.
          </p>

          <form onSubmit={onSubmit} className="mt-10 space-y-4">
            <div className="relative">
              <User
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nom complet"
                maxLength={100}
                className="w-full rounded-xl border border-border bg-card py-4 pl-12 pr-4 text-sm text-foreground outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              />
            </div>
            <div className="relative">
              <Mail
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                maxLength={255}
                className="w-full rounded-xl border border-border bg-card py-4 pl-12 pr-4 text-sm text-foreground outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              />
            </div>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Votre message…"
              rows={6}
              maxLength={1500}
              className="w-full rounded-xl border border-border bg-card p-4 text-sm text-foreground outline-none transition-colors focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            />

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-3 font-semibold text-brand-blue-deep shadow-brand transition-all hover:scale-[1.02] hover:brightness-105 disabled:opacity-60"
              >
                {submitting ? "Envoi…" : "Envoyer"}
                <ChevronRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
      <QuoteChatbot />
      <WhatsAppFloat />
    </main>
  );
}
