# Routes

This app uses **react-router-dom** with routes registered explicitly in
`src/router.tsx` (a `createBrowserRouter` route array) — not file-based
routing. Files in this directory are just plain page components; adding a
`.tsx` file here does nothing on its own. Register new pages in
`src/router.tsx`.

`ErrorBoundaryPage.tsx` and `NotFoundPage.tsx` are used as `errorElement` /
catch-all route in the router, replacing what TanStack Start's `__root.tsx`
used to provide.

Per-page `<title>`/meta tags are set client-side via the `useDocumentHead`
hook (`src/lib/use-document-head.ts`) inside each page component — this is a
client-side-only SPA with no SSR, so there is no server-rendered `<head>`.
