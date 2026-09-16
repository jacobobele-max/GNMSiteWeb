type Point = { icon: React.ComponentType<{ size?: number }>; title: string; desc: string };

export function IconPointsSection({
  id,
  eyebrow,
  title,
  desc,
  image,
  points,
  accent,
  reverse,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  points: readonly Point[];
  accent: "green" | "blue";
  reverse?: boolean;
}) {
  const accentText = accent === "green" ? "text-brand-green" : "text-brand-blue";
  const accentBg = accent === "green" ? "bg-brand-green/10" : "bg-brand-blue/10";

  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
        >
          <div>
            <div className="overflow-hidden rounded-2xl shadow-brand">
              <img src={image} alt={title} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
          <div>
            <p className={`mb-3 text-sm font-bold uppercase tracking-widest ${accentText}`}>
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-blue-deep md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{desc}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-brand"
                  >
                    <div
                      className={`mb-3 inline-flex size-11 items-center justify-center rounded-full ${accentBg} ${accentText}`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-blue-deep">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
