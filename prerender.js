// Script de pré-rendu SEO pour GN&M — Gabon Nettoyage & Multiservices
//
// Ce script :
// 1. Charge la liste des routes directement depuis src/routes.config.ts (source
//    unique partagée avec src/router.tsx) et la liste des articles depuis
//    src/lib/articles.ts, via le loader SSR de Vite — rien n'est deviné/dupliqué.
// 2. Démarre un serveur local qui sert le site déjà construit (dist/, généré
//    au préalable par `vite build`).
// 3. Ouvre chaque page importante avec un navigateur headless (Puppeteer).
// 4. Attend que React ait fini d'afficher le contenu.
// 5. Sauvegarde le HTML final (avec tout le contenu visible) dans dist/<route>/index.html.
// 6. Vérifie que chaque page produite dépasse un seuil de taille raisonnable,
//    signe que le contenu réel (et pas juste la coquille React) a bien été capturé.
// 7. Génère dist/sitemap.xml à partir de cette même liste de routes, pour
//    qu'il ne puisse jamais être en décalage avec les pages réellement pré-rendues.
//
// Résultat : quand Google (ou tout autre robot) visite une page, il reçoit
// le contenu déjà affiché, au lieu d'une coquille vide en attendant le JavaScript.

import puppeteer from "puppeteer";
import { createServer, preview } from "vite";
import fs from "node:fs";
import path from "node:path";

const MIN_SIZE_BYTES = 10 * 1024;
const SITE_URL = "https://gabonnettoyage.net";

async function loadRouteData() {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  try {
    const { ROUTE_PATHS } = await server.ssrLoadModule("/src/routes.config.ts");
    const { articles } = await server.ssrLoadModule("/src/lib/articles.ts");
    const { cities } = await server.ssrLoadModule("/src/lib/cities.ts");
    return { ROUTE_PATHS, articles, cities };
  } finally {
    await server.close();
  }
}

function buildRouteList(ROUTE_PATHS, articles, cities) {
  const staticRoutes = Object.values(ROUTE_PATHS).filter((p) => !p.includes(":"));
  const articleRoutes = articles.map((a) => ROUTE_PATHS.actualiteDetail.replace(":slug", a.slug));
  const cityRoutes = cities.map((c) => ROUTE_PATHS.villeDetail.replace(":ville", c.slug));
  return [...staticRoutes, ...articleRoutes, ...cityRoutes];
}

async function main() {
  console.log(
    "→ Lecture des routes (src/routes.config.ts), des articles (src/lib/articles.ts) et des villes (src/lib/cities.ts)...",
  );
  const { ROUTE_PATHS, articles, cities } = await loadRouteData();
  const ROUTES = buildRouteList(ROUTE_PATHS, articles, cities);
  console.log(`  · ${ROUTES.length} routes à pré-rendre :\n    ${ROUTES.join("\n    ")}`);

  console.log("\n→ Démarrage du serveur local de prévisualisation...");
  const server = await preview({ preview: { port: 4173, host: "127.0.0.1" } });
  const baseUrl = `http://127.0.0.1:4173`;

  console.log("→ Lancement du navigateur headless...");
  const browser = await puppeteer.launch({ headless: true });

  const results = [];

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = baseUrl + route;
    console.log(`  · Rendu de ${route} ...`);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Laisse le temps à React de terminer l'affichage (sécurité supplémentaire)
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.content();
    await page.close();

    // Détermine le chemin de sortie : "/" -> dist/index.html
    //                                  "/services" -> dist/services/index.html
    const outDir = route === "/" ? "dist" : path.join("dist", route.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, "index.html");
    fs.writeFileSync(outFile, html, "utf-8");

    results.push({ route, outFile, sizeBytes: Buffer.byteLength(html, "utf-8") });
  }

  // Page 404 dédiée : rendue depuis une route inexistante (tombe sur le
  // catch-all "*" du routeur), servie ensuite par l'hébergeur via
  // ErrorDocument 404 /404.html (voir public/.htaccess).
  console.log("  · Rendu de la page 404 ...");
  const notFoundPage = await browser.newPage();
  await notFoundPage.goto(`${baseUrl}/404-introuvable`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 500));
  const notFoundHtml = await notFoundPage.content();
  await notFoundPage.close();
  fs.writeFileSync(path.join("dist", "404.html"), notFoundHtml, "utf-8");
  results.push({
    route: "/404.html",
    outFile: "dist/404.html",
    sizeBytes: Buffer.byteLength(notFoundHtml, "utf-8"),
  });

  await browser.close();
  server.httpServer.close();

  console.log("\n→ Vérification des tailles générées (seuil : 10 Ko) :");
  let hasWarning = false;
  for (const { route, outFile, sizeBytes } of results) {
    const ko = (sizeBytes / 1024).toFixed(1);
    // La page 404 est volontairement minimale : elle n'est pas soumise au seuil.
    const ok = route === "/404.html" || sizeBytes >= MIN_SIZE_BYTES;
    if (!ok) hasWarning = true;
    console.log(`  ${ok ? "✔" : "⚠"} ${route.padEnd(40)} ${outFile} (${ko} Ko)`);
  }

  if (hasWarning) {
    console.warn(
      "\n⚠ Certaines pages sont sous 10 Ko : le JS n'a peut-être pas eu le temps de s'afficher, ou la route est en erreur (404, etc.).",
    );
  }

  console.log("\n→ Génération du sitemap...");
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...ROUTES.map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`),
    "</urlset>",
    "",
  ].join("\n");
  fs.writeFileSync(path.join("dist", "sitemap.xml"), sitemap, "utf-8");
  console.log(`  ✔ dist/sitemap.xml (${ROUTES.length} URLs)`);

  console.log("\n✔ Pré-rendu terminé. Le dossier dist/ est prêt à être envoyé sur Hostinger.");
}

main().catch((err) => {
  console.error("Erreur pendant le pré-rendu :", err);
  process.exit(1);
});
