import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
     onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-white">
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
////////onClick={() => setDarkMode(!darkMode)}
      // className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white"
      // >