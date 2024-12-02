import Navbar from "@/components/ui/navbar"
import { Outlet } from "react-router-dom";
import FooterLayout from "@/components/layouts/FooterLayout";

export default function HomeLayout() {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <FooterLayout/>
    </div>
  );
};
