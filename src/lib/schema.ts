import { SITE_URL } from "@/lib/constants";

export function buildBreadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildLocalBusiness(overrides: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gabon Nettoyage & Multiservices",
    alternateName: "GN&M",
    url: SITE_URL,
    telephone: "+24162427778",
    email: "contact@gabonnettoyage.net",
    ...overrides,
  };
}
