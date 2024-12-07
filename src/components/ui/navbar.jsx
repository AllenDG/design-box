import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarList from "@/components/ui/navbarList";
import DarkModeToggle from "@/components/DarkmodeToggle";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="relative border-b bg-primary-100 text-secondary-800 dark:border-secondary-600 dark:bg-secondary-500 dark:text-primary-100">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-3 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link
            to="/"
            className="transition duration-300 hover:text-secondary-500 dark:hover:text-primary-400"
          >
            DesignBox
          </Link>
        </div>

        {/* Desktop Navbar List */}
        <div className="hidden space-x-6 md:flex">
          <NavbarList />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Login and Signup Buttons */}
          <Link
            to="/login"
            className="text-sm font-medium transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-lg border border-secondary-800 px-4 py-2 text-sm font-medium transition duration-300 hover:bg-secondary-600 dark:border-primary-100 dark:hover:bg-primary-300"
          >
            Signup
          </Link>

          {/* Mobile Drawer Toggle */}
          <button
            className="block text-secondary-800 focus:outline-none dark:text-primary-100 md:hidden"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="absolute left-0 top-16 z-50 w-full bg-primary-100 shadow-md dark:bg-secondary-600">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li>
              <Link
                to="/"
                className="block rounded-lg px-4 py-2 text-lg font-medium transition duration-300 hover:bg-primary-300 dark:hover:bg-secondary-500"
                onClick={toggleDrawer}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/showcase-page"
                className="block rounded-lg px-4 py-2 text-lg font-medium transition duration-300 hover:bg-primary-300 dark:hover:bg-secondary-500"
                onClick={toggleDrawer}
              >
                Showcase
              </Link>
            </li>
            <li>
              <Link
                to="/services-page"
                className="block rounded-lg px-4 py-2 text-lg font-medium transition duration-300 hover:bg-primary-300 dark:hover:bg-secondary-500"
                onClick={toggleDrawer}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact-page"
                className="block rounded-lg px-4 py-2 text-lg font-medium transition duration-300 hover:bg-primary-300 dark:hover:bg-secondary-500"
                onClick={toggleDrawer}
              >
                Contact
              </Link>
            </li>
            {/* Mobile Login and Signup Links */}
            <li>
              <Link
                to="/login"
                className="block px-4 py-2 text-lg font-medium text-secondary-800 transition duration-300 hover:bg-primary-300 dark:hover:bg-secondary-500"
                onClick={toggleDrawer}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="rounded-lg bg-secondary-800 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-secondary-600 dark:bg-primary-400 dark:text-black dark:hover:bg-primary-300"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
