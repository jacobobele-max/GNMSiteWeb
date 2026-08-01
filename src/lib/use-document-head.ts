import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "@/lib/constants";

type MetaTag = { name?: string; property?: string; content: string };
type HeadConfig = { title: string; meta?: MetaTag[] };

// Client-side stand-in for TanStack Start's route `head()` — this app has no
// SSR, so tags are only ever present after the first render (no SEO benefit,
// just correct <title>/meta while navigating client-side).
export function useDocumentHead({ title, meta = [] }: HeadConfig) {
  const { pathname } = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const created: HTMLElement[] = [];
    for (const tag of meta) {
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (tag.name) el.setAttribute("name", tag.name);
        if (tag.property) el.setAttribute("property", tag.property);
        document.head.appendChild(el);
        created.push(el);
      }
      el.setAttribute("content", tag.content);
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    let createdCanonical = false;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
      createdCanonical = true;
    }
    canonical.setAttribute("href", `${SITE_URL}${pathname}`);
    if (createdCanonical) created.push(canonical);

    return () => {
      document.title = previousTitle;
      created.forEach((el) => el.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, JSON.stringify(meta), pathname]);
}
