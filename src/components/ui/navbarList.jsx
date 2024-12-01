import { navBarRoutes } from "@/routes/navbarRoutes";
import { useLocation } from "react-router-dom";

const NavbarList = () => {
  const location = useLocation();

  return (
    <ul className="flex justify-center space-x-6">
      {navBarRoutes.map((route, index) => (
        <li key={index} className="group">
          <a
            href={route.path}
            className={`relative rounded px-4 py-2 text-lg font-medium transition duration-300 ${location.pathname === route.path ? "text-secondary-400" : "text-secondary-800"} hover:text-secondary-300`}
          >
            {route.label}
            {/* Active/Underline Effect */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                location.pathname === route.path
                  ? "bg-secondary-400 w-full"
                  : "bg-secondary-400 w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
