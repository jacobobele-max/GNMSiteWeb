import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundaryPage } from "./routes/ErrorBoundaryPage";
import { NotFoundPage } from "./routes/NotFoundPage";
import { ROUTE_PATHS } from "./routes.config";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.home,
    lazy: () => import("./routes/index").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.services,
    lazy: () => import("./routes/services").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.notreExpertise,
    lazy: () => import("./routes/notre-expertise").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.aPropos,
    lazy: () => import("./routes/a-propos").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.actualites,
    lazy: () => import("./routes/actualites.index").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.actualiteDetail,
    lazy: () => import("./routes/actualites.$slug").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.serviceDetail,
    lazy: () => import("./routes/services.$slug").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.villeDetail,
    lazy: () => import("./routes/nettoyage.$ville").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.contact,
    lazy: () => import("./routes/contact").then((m) => ({ Component: m.default })),
    errorElement: <ErrorBoundaryPage />,
  },
  { path: "*", element: <NotFoundPage /> },
]);
