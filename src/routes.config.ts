// Source unique des chemins de routes, partagée par le routeur (src/router.tsx)
// et le script de pré-rendu (prerender.js), pour que les deux ne puissent
// jamais diverger.
export const ROUTE_PATHS = {
  home: "/",
  services: "/services",
  notreExpertise: "/notre-expertise",
  aPropos: "/a-propos",
  actualites: "/actualites",
  actualiteDetail: "/actualites/:slug",
  villeDetail: "/nettoyage/:ville",
  contact: "/contact",
} as const;
