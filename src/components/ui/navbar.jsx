import NavbarList from "@/components/ui/NavbarList";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <a href="/">MyLogo</a>
        </div>

        {/* Navbar List */}
        <div className="flex-1">
          <NavbarList />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
