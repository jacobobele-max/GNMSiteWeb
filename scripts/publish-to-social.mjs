// Publie sur Facebook (et Instagram si configuré) les articles de
// src/lib/articles.ts qui n'ont pas encore été publiés, en se basant sur
// scripts/.social-published.json comme registre d'état (idempotent : on
// peut relancer le script sans reposter les mêmes articles).
//
// Prérequis : avoir déjà exécuté `npm run build:seo` ET déployé dist/ en
// prod — le script lit dist/actualites/<slug>/index.html pour récupérer
// l'URL absolue de l'image de couverture (og:image), nécessaire à
// l'API Instagram et utile pour la miniature du lien Facebook. Si l'image
// n'est pas encore en ligne sur gabonnettoyage.net, Instagram ne pourra
// pas la récupérer.
//
// Variables d'environnement requises :
//   FB_PAGE_ID            ID numérique de la Page Facebook
//   FB_PAGE_ACCESS_TOKEN  Token d'accès Page longue durée
//                         (permissions pages_manage_posts, pages_read_engagement)
//   IG_USER_ID            (optionnel) ID du compte Instagram Business lié à
//                         la Page — si absent, Instagram est simplement ignoré.

import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import { SITE_URL } from "../src/lib/constants.ts";

const GRAPH_API = "https://graph.facebook.com/v21.0";
const STATE_FILE = path.join(import.meta.dirname, ".social-published.json");

async function loadArticles() {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  try {
    const { articles } = await server.ssrLoadModule("/src/lib/articles.ts");
    return articles;
  } finally {
    await server.close();
  }
}

function loadState() {
  if (!fs.existsSync(STATE_FILE)) return {};
  return JSON.parse(fs.readFileSync(STATE_FILE, "utf-8"));
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n", "utf-8");
}

function getCoverImageUrl(slug) {
  const htmlPath = path.join("dist", "actualites", slug, "index.html");
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`${htmlPath} introuvable — as-tu lancé npm run build:seo avant ce script ?`);
  }
  const html = fs.readFileSync(htmlPath, "utf-8");
  const match = html.match(/<meta property="og:image" content="([^"]+)"/);
  if (!match) throw new Error(`Pas de og:image trouvé dans ${htmlPath}`);
  return match[1];
}

async function graphPost(pathSegment, body) {
  const res = await fetch(`${GRAPH_API}/${pathSegment}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`Graph API error: ${JSON.stringify(json)}`);
  return json;
}

async function publishToFacebook(article, articleUrl) {
  const pageId = process.env.FB_PAGE_ID;
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  if (!pageId || !token) throw new Error("FB_PAGE_ID / FB_PAGE_ACCESS_TOKEN manquants");

  return graphPost(`${pageId}/feed`, {
    message: `${article.title.fr}\n\n${article.excerpt.fr}`,
    link: articleUrl,
    access_token: token,
  });
}

async function publishToInstagram(article, articleUrl, coverImageUrl) {
  const igUserId = process.env.IG_USER_ID;
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  if (!igUserId || !token) return null; // Instagram non configuré, on l'ignore silencieusement

  const caption = `${article.title.fr}\n\n${article.excerpt.fr}\n\n${articleUrl}`;
  const { id: creationId } = await graphPost(`${igUserId}/media`, {
    image_url: coverImageUrl,
    caption,
    access_token: token,
  });
  return graphPost(`${igUserId}/media_publish`, {
    creation_id: creationId,
    access_token: token,
  });
}

async function main() {
  const articles = await loadArticles();
  const state = loadState();
  let published = 0;

  for (const article of articles) {
    const entry = state[article.slug] ?? {};
    const articleUrl = `${SITE_URL}/actualites/${article.slug}`;
    const needsFacebook = !entry.facebook;
    const needsInstagram = !entry.instagram && process.env.IG_USER_ID;

    if (!needsFacebook && !needsInstagram) continue;

    console.log(`→ ${article.slug}`);
    const coverImageUrl = needsInstagram ? getCoverImageUrl(article.slug) : null;

    if (needsFacebook) {
      await publishToFacebook(article, articleUrl);
      entry.facebook = true;
      state[article.slug] = entry;
      saveState(state); // écrit tout de suite : un échec plus loin ne doit pas reposter celui-ci
      console.log("  ✔ Facebook");
    }
    if (needsInstagram) {
      await publishToInstagram(article, articleUrl, coverImageUrl);
      entry.instagram = true;
      state[article.slug] = entry;
      saveState(state);
      console.log("  ✔ Instagram");
    }

    published++;
  }

  console.log(
    published > 0
      ? `\n✔ ${published} article(s) publié(s)/mis à jour.`
      : "\n· Rien à publier, tout est déjà à jour.",
  );
}

main().catch((err) => {
  console.error("Erreur:", err.message);
  process.exitCode = 1;
});
