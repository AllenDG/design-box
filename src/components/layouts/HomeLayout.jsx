import { Outlet } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";

export default function HomeLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-[80vh] flex-grow overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
}
