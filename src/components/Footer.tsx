import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { cities } from "@/lib/cities";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.13a8.31 8.31 0 0 0 4.86 1.55v-3.4a4.85 4.85 0 0 1-1.93-.59z" />
  </svg>
);

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-brand-blue-deep text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_oklch(0.88_0.18_92_/_0.15),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="size-14 rounded-full ring-2 ring-brand-yellow/60"
              />
              <div>
                <p className="font-display font-bold">Gabon Nettoyage</p>
                <p className="text-xs text-white/70">& Multiservices</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              Votre partenaire de confiance pour la propreté, l'hygiène et les services généraux au
              Gabon. Une équipe locale, des standards internationaux.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/Gabonnettoyage/" },
                { Icon: Linkedin, href: "https://ga.linkedin.com/in/gabon-nettoyage-et-multiservices-313309406" },
                { Icon: Instagram, href: "https://www.instagram.com/gabonnettoyage" },
                { Icon: Youtube, href: "https://www.youtube.com/@GabonNettoyageEtMultiservices" },
                { Icon: TikTokIcon, href: "https://www.tiktok.com/@gabonnettoyageetm" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-yellow hover:text-brand-blue-deep"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {[
                { label: "Accueil", href: "/" },
                { label: "Nos services", href: "/services" },
                { label: "À propos", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="transition-colors hover:text-brand-yellow">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {[
                "Nettoyage bureaux",
                "Désinfection",
                "Espaces verts",
                "Dératisation",
                "Manutention",
              ].map((l) => (
                <li key={l}>
                  <Link to="/services" className="transition-colors hover:text-brand-yellow">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
              Zones d'intervention
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/nettoyage/${c.slug}`}
                    className="transition-colors hover:text-brand-yellow"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-green" />
                Libreville, Gabon
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-green" />
                <a href="tel:+24162427778" className="hover:text-brand-yellow">
                  +241 62 42 77 78
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-green" />
                <a href="mailto:contact@gabon-nettoyage.com" className="hover:text-brand-yellow">
                  contact@gabon-nettoyage.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-green" />
                Lun – Sam : 7h00 – 19h00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Gabon Nettoyage & Multiservices. Tous droits réservés.</p>
          <p>
            Conçu avec soin —{" "}
            <span className="text-brand-yellow">éco-responsable par engagement</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
