import { useEffect } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ServicesPage } from "./pages/ServicesPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { ContactPage } from "./pages/ContactPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { WebDevelopmentPage } from "./pages/services/WebDevelopmentPage";
import { MobileDevelopmentPage } from "./pages/services/MobileDevelopmentPage";
import { SoftwareDevelopmentPage } from "./pages/services/SoftwareDevelopmentPage";
import { AIMLPage } from "./pages/services/AIMLPage";
import { DataAnnotationPage } from "./pages/services/DataAnnotationPage";
import { DigitalMarketingPage } from "./pages/services/DigitalMarketingPage";
import { EcommercePage } from "./pages/services/EcommercePage";
import { UIUXPage } from "./pages/services/UIUXPage";
import { CloudDevOpsPage } from "./pages/services/CloudDevOpsPage";
import { IndustryDetailPage } from "./pages/industries/IndustryDetailPage";
import { BlogPage } from "./pages/BlogPage";
import { PricingPage } from "./pages/PricingPage";
import { CareersPage } from "./pages/CareersPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { NotFound } from "./components/NotFound";

// Wrapper component jo scroll ko smooth banayega
const SmoothScrollWrapper = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Ye line jhatka khatam karegi
    });
  }, [pathname]);

  return <Outlet />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SmoothScrollWrapper />, // ScrollRestoration ki jagah ye wrapper use kiya
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/services/web-development",
        element: <WebDevelopmentPage />,
      },
      {
        path: "/services/mobile-development",
        element: <MobileDevelopmentPage />,
      },
      {
        path: "/services/software-development",
        element: <SoftwareDevelopmentPage />,
      },
      {
        path: "/services/ai-ml",
        element: <AIMLPage />,
      },
      {
        path: "/services/data-annotation",
        element: <DataAnnotationPage />,
      },
      {
        path: "/services/digital-marketing",
        element: <DigitalMarketingPage />,
      },
      {
        path: "/services/ecommerce",
        element: <EcommercePage />,
      },
      {
        path: "/services/ui-ux",
        element: <UIUXPage />,
      },
      {
        path: "/services/cloud-devops",
        element: <CloudDevOpsPage />,
      },
      {
        path: "/solutions",
        element: <SolutionsPage />,
      },
      {
        path: "/industries",
        element: <IndustriesPage />,
      },
      {
        path: "/industries/:industryId",
        element: <IndustryDetailPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/case-studies",
        element: <CaseStudiesPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/careers",
        element: <CareersPage />,
      },
      {
        path: "/terms",
        element: <TermsPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
      {
        path: "/thank-you",
        element: <ThankYouPage />,
      },

      {
  path: "*",
  element: <NotFound />, 
},
    ],
  },
]);