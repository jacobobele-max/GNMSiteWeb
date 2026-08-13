import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Languages, Check, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { categories } from "@/lib/services-catalog";

type NavItem = {
  key: string;
  href: string;
  simple?: { key: string; href: string }[];
  megaCategories?: boolean;
};

const navItems: NavItem[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.services", href: "/services", megaCategories: true },
  {
    key: "nav.commitments",
    href: "/notre-expertise",
    simple: [
      { key: "nav.commit.expertise", href: "/notre-expertise#expertise" },
      { key: "nav.commit.innovations", href: "/notre-expertise#innovation" },
      { key: "nav.commit.eco", href: "/notre-expertise#eco" },
    ],
  },
  { key: "nav.about", href: "/a-propos" },
  { key: "nav.news", href: "/actualites" },

  { key: "nav.contact", href: "/contact" },
];

type NavbarProps = {
  /** Pages without a dark hero image behind the navbar should pass `false`
   * so the menu stays legible before the user scrolls. */
  transparent?: boolean;
};

export function Navbar({ transparent = true }: NavbarProps) {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const activeItem = navItems.find((i) => i.key === openMenu);

  const [scrolledState, setScrolledState] = useState(false);
  const scrolled = !transparent || scrolledState;

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolledState(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const navText = scrolled ? "text-foreground" : "text-white";
  const navHover = scrolled ? "hover:text-brand-green" : "hover:text-brand-yellow";
  const navOpen = scrolled ? "text-brand-green" : "text-brand-yellow";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-t-[3px] border-brand-red transition-colors duration-300 ${
        scrolled ? "bg-background/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt="Gabon Nettoyage & Multiservices"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white/30"
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span
              className={`font-display text-sm font-bold transition-colors ${scrolled ? "text-brand-blue-deep" : "text-white"}`}
            >
              Gabon Nettoyage
            </span>
            <span
              className={`text-[11px] transition-colors ${scrolled ? "text-brand-green-deep" : "text-white/90"}`}
            >
              & Multiservices
            </span>
          </div>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navItems.map((item) => {
            const hasChildren = !!(item.megaCategories || item.simple);
            const isOpen = openMenu === item.key;
            return (
              <li
                key={item.key}
                className="relative"
                onMouseEnter={() => setOpenMenu(hasChildren ? item.key : null)}
              >
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-1 py-2 text-[15px] font-medium transition-colors ${
                    isOpen ? navOpen : `${navText} ${navHover}`
                  }`}
                >
                  {t(item.key)}
                  {hasChildren && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Simple dropdown */}
                {item.simple && isOpen && (
                  <div className="absolute left-1/2 top-full min-w-[240px] -translate-x-1/2 pt-2">
                    <div className="overflow-hidden rounded-md bg-brand-green shadow-brand">
                      {item.simple.map((c) => (
                        <a
                          key={c.key}
                          href={c.href}
                          className="block px-6 py-4 text-[15px] font-medium text-white transition-colors hover:bg-brand-green-deep"
                        >
                          {t(c.key)}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label={t("nav.search")}
            className={`hidden size-10 items-center justify-center rounded-full border transition-colors md:inline-flex ${
              scrolled
                ? "border-border text-foreground hover:border-brand-green hover:text-brand-green"
                : "border-white/40 text-white hover:border-white hover:text-brand-yellow"
            }`}
          >
            <Search size={18} />
          </button>

          <Button
            asChild
            className="hidden rounded-full bg-brand-green px-5 text-primary-foreground shadow-brand hover:bg-brand-green-deep md:inline-flex"
          >
            <Link to="/contact">{t("cta.client")}</Link>
          </Button>

          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label="Toggle language"
            className={`relative inline-flex size-10 items-center justify-center rounded-full transition-colors ${
              scrolled
                ? "text-foreground hover:text-brand-green"
                : "text-white hover:text-brand-yellow"
            }`}
          >
            <Languages size={20} />
            <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-brand-blue px-1 text-[9px] font-bold uppercase leading-tight text-white">
              {lang}
            </span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`rounded-md p-2 lg:hidden transition-colors ${navText} ${navHover}`}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full-width mega menu (categories) */}
      {activeItem?.megaCategories && (
        <div className="absolute inset-x-0 top-full hidden lg:block">
          <div className="bg-brand-green text-white shadow-brand">
            <MegaCategoriesPanel />
          </div>
        </div>
      )}

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-8">
            <Search size={18} className="text-muted-foreground" />
            <input
              ref={searchRef}
              placeholder={t("nav.search")}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close search"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => {
              const hasChildren = !!(item.megaCategories || item.simple);
              const sub = mobileSub === item.key;
              return (
                <li key={item.key} className="border-b border-border/60 last:border-0">
                  {hasChildren ? (
                    <button
                      className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-foreground"
                      onClick={() => setMobileSub(sub ? null : item.key)}
                    >
                      {t(item.key)}
                      <ChevronDown size={16} className={sub ? "rotate-180" : ""} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {t(item.key)}
                    </Link>
                  )}
                  {hasChildren && sub && (
                    <div className="mb-3 ml-3 flex flex-col gap-3 border-l border-border/60 pl-3">
                      {item.simple?.map((c) => (
                        <a
                          key={c.key}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-muted-foreground"
                        >
                          {t(c.key)}
                        </a>
                      ))}
                      {item.megaCategories &&
                        categories.map((cat) => (
                          <div key={cat.slug}>
                            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-green-deep">
                              {cat.name[lang]}
                            </p>
                            <div className="flex flex-col gap-2">
                              {cat.services.map((s) => (
                                <Link
                                  key={s.slug}
                                  to="/services"
                                  onClick={() => setOpen(false)}
                                  className="text-sm text-muted-foreground"
                                >
                                  {s.name[lang]}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </li>
              );
            })}
            <Button
              asChild
              className="my-3 rounded-full bg-brand-green text-primary-foreground hover:bg-brand-green-deep"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                {t("cta.client")}
              </Link>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
}

function MegaCategoriesPanel() {
  const { t, lang } = useI18n();
  const [hovered, setHovered] = useState(categories[0].slug);
  const active = categories.find((c) => c.slug === hovered) ?? categories[0];

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-8 py-8 lg:grid-cols-[1.4fr_1fr]">
      {/* Category grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {categories.map((cat) => {
          const isActive = cat.slug === hovered;
          return (
            <Link
              key={cat.slug}
              to="/services"
              onMouseEnter={() => setHovered(cat.slug)}
              className={`group rounded-xl border p-4 transition-all ${
                isActive
                  ? "border-white bg-white/15"
                  : "border-white/20 hover:border-white/60 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="inline-flex size-9 items-center justify-center rounded-lg bg-white/20 text-white">
                  <cat.icon size={18} />
                </div>
                <p className="text-sm font-bold leading-tight">{cat.name[lang]}</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {cat.services.slice(0, 3).map((s) => (
                  <li key={s.slug} className="flex items-start gap-1.5 text-xs text-white/85">
                    <Check size={12} className="mt-0.5 shrink-0 text-brand-yellow" />
                    <span className="truncate">{s.name[lang]}</span>
                  </li>
                ))}
              </ul>
            </Link>
          );
        })}
      </div>

      {/* Right dynamic panel */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${active.image})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/95 via-brand-green-deep/70 to-brand-green-deep/40" />
        <div className="relative flex h-full flex-col justify-end p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
            {active.name[lang]}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold leading-tight">
            {t("svc.mega.headline")}
          </h3>
          <p className="mt-2 text-sm text-white/90">{active.tagline[lang]}</p>
          <ul className="mt-3 grid grid-cols-2 gap-1.5 text-xs text-white/90">
            {(["svc.mega.b1", "svc.mega.b2", "svc.mega.b3", "svc.mega.b4"] as const).map((k) => (
              <li key={k} className="flex items-center gap-1.5">
                <Check size={12} className="text-brand-yellow" />
                {t(k)}
              </li>
            ))}
          </ul>
          <Link
            to="/services"
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-2 text-xs font-bold text-brand-green-deep hover:bg-white"
          >
            {t("svc.mega.viewAll")} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
