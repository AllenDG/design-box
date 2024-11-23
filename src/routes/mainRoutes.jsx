import HomeLayout from "@/components/layouts/HomeLayout";
import PageNotFound from "@/components/ui/PageNotFound";
import ContactPage from "@/pages/ContactPage";
import LandingPage from "@/pages/LandingPage";
import PricingPage from "@/pages/PricingPage";
import ShowcasePage from "@/pages/ShowcasePage";

export const mainRoutes = [
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "showcase-page",
        element: <ShowcasePage />,
      },
      {
        path: "pricing-page",
        element: <PricingPage />,
      },
      {
        path: "contact-page",
        element: <ContactPage />,
      },
    ],
  },
];
