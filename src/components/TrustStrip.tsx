type TrustItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

export function TrustStrip({ items }: { items: readonly TrustItem[] }) {
  return (
    <section className="bg-gradient-hero py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2 md:px-12 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex flex-col items-center text-center">
              <Icon size={32} className="mb-3 text-brand-yellow" />
              <p className="font-display font-bold">{item.title}</p>
              <p className="mt-1 text-sm text-white/85">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
