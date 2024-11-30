import PageNotFound from "@/pages/PageNotFound";
import HomeLayout from "@/components/layouts/HomeLayout";
import LandingPage from "@/pages/LandingPage";
import ShowcasePage from "@/pages/ShowcasePage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import { createBrowserRouter } from "react-router-dom";

export const  MainRoutes  = createBrowserRouter([
    {
        path: "*",
        element: <PageNotFound/>,
    },
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: "",
                element: <LandingPage/>,
            },

            {
                path: "showcase-page",
                element: <ShowcasePage/>,
            },

            {
                path: "services-page",
                element: <ServicesPage/>,
            },

            {
                path: "contact-page",
                element: <ContactPage/>,
            },

        ],
    },
]);