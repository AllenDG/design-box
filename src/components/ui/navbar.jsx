import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarList from "@/components/ui/NavbarList";
import DarkModeToggle from "@/components/DarkModeToggle";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-3 lg:px-8">
        {" "}
        {/* Adjust width using max-w-7xl */}
        {/* Logo */}
        <div className="text-secondary-800 dark:text-secondary-200 text-2xl font-extrabold tracking-wide">
          <a href="/" className="transition duration-300">
            Design Box
          </a>
        </div>
        {/* Navbar List for Desktop */}
        <div className="hidden flex-1 justify-center md:flex mr-40">
          <NavbarList />
        </div>
        {/* Dark Mode Toggle for Desktop and Drawer for Mobile */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Dark Mode Toggle for Desktop */}
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>

          {/* Drawer Menu Button (Mobile) */}
          <div className="relative z-50 md:hidden">
            <button
              className="hover:text-secondary-800 text-secondary-800 transition focus:outline-none"
              onClick={toggleDrawer}
            >
              {/* Render Hamburger or X Icon based on drawer state */}
              {isDrawerOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer (Mobile) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Drawer panel on the right with slide-in animation */}
          <div className="bg-primary-600 z-40 h-full w-full max-w-xs translate-x-full transform shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0">
            <ul className="text-secondary-800 space-y-4 p-6 text-center">
              <li>
                <Link
                  to="/"
                  className="hover:bg-secondary-200 block rounded-lg px-4 py-2 text-lg font-medium transition"
                  onClick={toggleDrawer} // Close drawer on link click
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/showcase-page"
                  className="hover:bg-secondary-200 block rounded-lg px-4 py-2 text-lg font-medium transition"
                  onClick={toggleDrawer} // Close drawer on link click
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  to="/services-page"
                  className="hover:bg-secondary-200 block rounded-lg px-4 py-2 text-lg font-medium transition"
                  onClick={toggleDrawer} // Close drawer on link click
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-page"
                  className="hover:bg-secondary-200 block rounded-lg px-4 py-2 text-lg font-medium transition"
                  onClick={toggleDrawer} // Close drawer on link click
                >
                  Contact
                </Link>
              </li>
              {/* Dark Mode Toggle inside Drawer for Mobile */}
              <li>
                <div className="py-4">
                  <DarkModeToggle />
                </div>
              </li>
            </ul>
          </div>

          {/* Overlay */}
          <div
            className="h-full w-full bg-black bg-opacity-50"
            onClick={toggleDrawer} // Close drawer when clicking on the overlay
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
