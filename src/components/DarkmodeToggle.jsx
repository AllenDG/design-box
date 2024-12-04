import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import moon and sun icons

const DarkmodeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.add(savedTheme); // Apply saved theme
    } else {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDarkMode(userPrefersDark);
      document.documentElement.classList.add(
        userPrefersDark ? "dark" : "light",
      );
    }
  }, []);

  // Toggle dark mode and save preference in local storage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = !isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme); // Save theme preference
    document.documentElement.classList.toggle("dark", !isDarkMode); // Toggle theme on root
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-secondary-800 dark:text-secondary-200"
    >
      {isDarkMode ? (
        <FaSun className="text-xl text-white" /> // Sun icon with white color when dark mode is active
      ) : (
        <FaMoon className="text-xl" /> // Moon icon when light mode is active
      )}
    </button>
  );
};

export default DarkmodeToggle;
