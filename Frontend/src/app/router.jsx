import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Solutions = lazy(() => import("../pages/Solutions"));
const Industries = lazy(() => import("../pages/Industries"));
const Contact = lazy(() => import("../pages/Contact"));
const Careers = lazy(() => import("../pages/Careers"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "solutions",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Solutions />
          </Suspense>
        ),
      },
      {
        path: "industries",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Industries />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "careers",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Careers />
          </Suspense>
        ),
      },
      {
        path: "portfolio",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "terms-of-service",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <TermsOfService />
          </Suspense>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
