import { navBarRoutes } from "@/routes/navbarRoutes";
import { useLocation, Link } from "react-router-dom";

const NavbarList = () => {
  const location = useLocation();

  return (
    <ul className="flex justify-center space-x-6">
      {navBarRoutes.map((route) => {
        const isActive = location.pathname === route.path;
        return (
          <li key={route.path} className="group">
            {/* Use Link for internal navigation */}
            <Link
              to={route.path}
              className={`relative rounded px-4 py-2 text-sm font-medium transition duration-300 ${
                isActive ? "text-secondary-400" : "text-secondary-800"
              } hover:text-secondary-300`}
            >
              {route.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                  isActive
                    ? "bg-secondary-400 w-full"
                    : "bg-secondary-400 w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarList;
