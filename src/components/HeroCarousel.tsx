import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { DEVIS_URL } from "@/lib/constants";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { image: hero1, keys: { eyebrow: "hero.eyebrow.1", title: "hero.title.1", subtitle: "hero.sub.1" } },
  { image: hero2, keys: { eyebrow: "hero.eyebrow.2", title: "hero.title.2", subtitle: "hero.sub.2" } },
  { image: hero3, keys: { eyebrow: "hero.eyebrow.3", title: "hero.title.3", subtitle: "hero.sub.3" } },
];

export function HeroCarousel() {
  const { t } = useI18n();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="accueil" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative h-full w-full flex-[0_0_100%]"
            >
              <img
                src={s.image}
                alt={t(s.keys.title)}
                className="absolute inset-0 h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-overlay)" }}
              />
              <div className="absolute inset-0 bg-brand-blue-deep/30" />
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12">
                <div className="max-w-2xl text-white animate-fade-up">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-deep">
                    <span className="size-1.5 rounded-full bg-brand-green-deep" />
                    {t(s.keys.eyebrow)}
                  </span>
                  {i === 0 ? (
                    <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                      {t(s.keys.title)}
                    </h1>
                  ) : (
                    <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                      {t(s.keys.title)}
                    </h2>
                  )}
                  <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
                    {t(s.keys.subtitle)}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-brand text-primary-foreground shadow-brand hover:opacity-95"
                    >
                      <a href={DEVIS_URL} target="_blank" rel="noopener noreferrer">
                        {t("cta.quote")} <ArrowRight className="ml-2" size={18} />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white/70 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-brand-blue-deep"
                    >
                      <a href="#services">{t("hero.viewServices")}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur-md transition hover:bg-white hover:text-brand-blue-deep md:block"
        aria-label="Précédent"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur-md transition hover:bg-white hover:text-brand-blue-deep md:block"
        aria-label="Suivant"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              selected === i ? "w-10 bg-brand-yellow" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
