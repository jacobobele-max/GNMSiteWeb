import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.13a8.31 8.31 0 0 0 4.86 1.55v-3.4a4.85 4.85 0 0 1-1.93-.59z" />
  </svg>
);

const links = [
  { href: "https://ga.linkedin.com/in/gabon-nettoyage-et-multiservices-313309406", label: "LinkedIn", Icon: Linkedin, color: "hover:bg-[#0a66c2]" },
  { href: "https://www.facebook.com/Gabonnettoyage/", label: "Facebook", Icon: Facebook, color: "hover:bg-[#1877f2]" },
  { href: "https://www.instagram.com/gabonnettoyage", label: "Instagram", Icon: Instagram, color: "hover:bg-[#e1306c]" },
  { href: "https://www.youtube.com/@GabonNettoyageEtMultiservices", label: "YouTube", Icon: Youtube, color: "hover:bg-[#ff0000]" },
  { href: "https://www.tiktok.com/@gabonnettoyageetm", label: "TikTok", Icon: TikTokIcon, color: "hover:bg-black" },
];

export function SocialFloat() {
  return (
    <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 rounded-full border border-border bg-card/90 p-2 shadow-brand backdrop-blur-md md:flex">
      {links.map(({ href, label, Icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex size-10 items-center justify-center rounded-full bg-muted text-foreground transition-all duration-300 hover:scale-110 hover:text-white ${color}`}
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}
