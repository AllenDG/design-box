import { NavLink } from "react-router-dom";

// Define routes inline
export const navBarRoutes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/showcase-page",
    label: "Showcase",
  },
  {
    path: "/services-page",
    label: "Services",
  },
  {
    path: "/contact-page",
    label: "Contact",
  },
];

export default function NavbarList() {
  return (
    <div className="flex items-center space-x-8">
      {navBarRoutes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) =>
            `transform text-gray-900 transition duration-200 hover:scale-110 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 ${
              isActive
                ? "border-b-2 border-gray-400 font-semibold text-gray-400"
                : ""
            }`
          }
        >
          {route.label}
        </NavLink>
      ))}
    </div>
  );
}
