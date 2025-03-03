import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";  // Import navigation

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const navigate = useNavigate();  // Initialize navigate function

  // Sample search data (replace this with actual API calls)
//   const data = ["Dashboard", "Users", "Settings", "Manage Destinations", "Authentication", "Logout"];
// Define the search options with routes
const searchOptions = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Users", path: "/admin/users" },
    { name: "Settings", path: "/admin/settings" },
    { name: "Manage Destinations", path: "/admin/destinations" },
    { name: "Authentication", path: "/admin/auth" },
    { name: "Logout", path: "/logout" },
  ];
  // Handle search logic
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    if (value.trim().length > 0) {
      setSuggestions(
        searchOptions.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };
    
  //   if (value.length > 0) {
  //     const filteredSuggestions = searchOptions.filter((item) =>
  //       item.name.toLowerCase().includes(value.toLowerCase())
  //     );
  //     setSuggestions(filteredSuggestions);
  //   } else {
  //     setSuggestions([]);
  //   }
  // };
  // Handle navigation on selection
  const handleSelect = (path) => {
    navigate(path);   // Navigate to the selected page
    setQuery("");     // Clear input
    setSuggestions([]); // Hide suggestions
  };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (suggestions.length > 0) {
        if (e.key === "ArrowDown") {
          setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
        } else if (e.key === "ArrowUp") {
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
        } else if (e.key === "Enter" && selectedIndex >= 0) {
          handleSelect(suggestions[selectedIndex].path);
        }
      }
    };
    // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-grow max-w-md mx-auto"ref={searchRef}>
      <div className="relative flex items-center">
        <Search
          className="absolute left-3 text-gray-500 cursor-pointer"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className={`w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-full transition-all duration-300 ease-in-out ${
            isSearchOpen ? "block" : "hidden md:block"
          }`}
        />
      </div>

      {/* Autocomplete Suggestions */}
      {suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute mt-2 w-full bg-white  dark:bg-gray-800 dark:text-white shadow-md rounded-lg z-50 overflow-hidden"
        >
          {suggestions.map((item, index) => (
              <div
              key={index}
              className={`p-3 cursor-pointer transition-all duration-200 ease-in-out  rounded-md ${
                selectedIndex === index
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
              }`}
              onClick={() => handleSelect(item.path)}
            >
              {item.name}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;



