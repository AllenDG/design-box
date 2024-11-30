import Navbar from "@/components/ui/navbar"
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  );
};
