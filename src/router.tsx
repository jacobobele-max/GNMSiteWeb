import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundaryPage } from "./routes/ErrorBoundaryPage";
import { NotFoundPage } from "./routes/NotFoundPage";
import Home from "./routes/index";
import Services from "./routes/services";
import NotreExpertise from "./routes/notre-expertise";
import APropos from "./routes/a-propos";
import ActualitesIndex from "./routes/actualites.index";
import ActualiteDetail from "./routes/actualites.$slug";
import NettoyageVille from "./routes/nettoyage.$ville";
import Contact from "./routes/contact";
import { ROUTE_PATHS } from "./routes.config";

export const router = createBrowserRouter([
  { path: ROUTE_PATHS.home, element: <Home />, errorElement: <ErrorBoundaryPage /> },
  { path: ROUTE_PATHS.services, element: <Services />, errorElement: <ErrorBoundaryPage /> },
  {
    path: ROUTE_PATHS.notreExpertise,
    element: <NotreExpertise />,
    errorElement: <ErrorBoundaryPage />,
  },
  { path: ROUTE_PATHS.aPropos, element: <APropos />, errorElement: <ErrorBoundaryPage /> },
  {
    path: ROUTE_PATHS.actualites,
    element: <ActualitesIndex />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.actualiteDetail,
    element: <ActualiteDetail />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: ROUTE_PATHS.villeDetail,
    element: <NettoyageVille />,
    errorElement: <ErrorBoundaryPage />,
  },
  { path: ROUTE_PATHS.contact, element: <Contact />, errorElement: <ErrorBoundaryPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
