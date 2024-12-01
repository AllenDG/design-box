import { navBarRoutes } from "@/routes/navbarRoutes";

const NavbarList = () => {
  return (
    <ul className="flex justify-center space-x-8 text-lg text-white">
      {navBarRoutes.map((route, index) => (
        <li key={index}>
          <a
            href={route.path}
            className="rounded px-4 py-2 transition-all hover:bg-blue-500 hover:text-gray-100"
          >
            {route.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
