// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// //import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { Menu, Bell, Search } from "lucide-react";




// const Navbar = () => {
//    const { logout } = useContext(AuthContext);
  
//     return (
      
         
//       <div className="w-full bg-white shadow-md p-4 flex justify-between bg-cover">
//        <h2 className="text-lg font-semibold">Dashboard</h2>
//            <button  onClick={logout} className="px-4 py-2 bg-blue-500  hover:bg-blue-800 text-white rounded">Logout</button>   
//        </div>
     
//     );
//   };
  
//   export default Navbar;


import { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, Bell, User, Sun, Moon  } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Add animations
import SearchBar from "./Searchbar";
import DarkModeToggle from "./DarkModeToggle";






const Navbar = ({ toggleSidebar }) => {
   const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "notifications" | "profile" | null
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New user registered", read: false },
    { id: 2, message: "New booking received", read: false }
]);
const dropdownRef = useRef(null); // Ref for handling clicks outside


// Function to toggle dropdowns
const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown? null : dropdown);
};
 // Close dropdown when clicking outside
 useEffect(() => {
  const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpenDropdown(null);
      }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
      document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
 // Mark all notifications as read
 const markAllAsRead = () => {
  setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
};
 // Mark a single notification as read
 const markAsRead = (id) => {
  setNotifications((prev) =>
    prev.map((n) => (n.id === id ? { ...n, read: true } : n))
  );
};
  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
     <nav className="flex items-center justify-between bg-white dark:bg-gray-900 px-5 py-3  shadow-md top-0 w-full z-50">
   
    {/* Left Side  */}
      <div className="flex items-center ">
        <button onClick={toggleSidebar} className="text-gray-600 dark:text-white hover:text-blue-500 focus:outline-none">
          <Menu size={20} />
        </button>
       
      </div>

{/* Center - Search Bar */}
    <SearchBar className="absolute left-3  text-gray-500 dark:text-white cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)} />

{/* Right Side - Icons */}
 <div className="flex items-center space-x-5"> 
 
{/* Notification Bell */}
        
<div className="relative" ref={dropdownRef}>
<button onClick={() => toggleDropdown("notifications")} className="relative">
          <Bell size={24} className="text-gray-600 dark:text-white  hover:text-blue-500 cursor-pointer" />
           {/* Red Badge for Unread Notifications */}
            {notifications.some(n => !n.read) && (
            <span className="absolute top-0 right-0 bg-red-500 text-white  dark:bg-gray-400 border  dark:border-gray-700 text-xs px-1 rounded-full">
              {notifications.filter(n => !n.read).length}
            </span>
)}
</button>
           
{/* Notifications Dropdown (Animated) */}
<AnimatePresence>
                      {openDropdown === "notifications" && (
                        <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800  shadow-lg rounded-md overflow-hidden" >
                     {/* "Mark all as read" Button */}
                     {notifications.length > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="block w-full text-center p-2 text-sm text-blue-500 hover:bg-gray-200 dark:hover:bg-gray-700">
                    Mark all as read
                  </button>
                )}
                      {notifications.length > 0 ? (
                                    notifications.map((n) => (
                                      
                                        <div key={n.id} className={`p-3 cursor-pointer ${
                                          n.read
                                            ? "text-gray-500 dark:text-gray-400"
                                            : "font-semibold text-black dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700"
                                        } transition`}
                                        onClick={() => markAsRead(n.id)}>
                                            {n.message}
                                        </div>
                                    ))
                                ) : (
                                    <p className="p-3 text-center dark:text-gray-500">No notifications</p>
                                )}
                        </motion.div>
                    )}
</AnimatePresence>  
      
</div>

        {/* Profile Icon */}
        <div className="relative z-50"ref={dropdownRef}>
        <button onClick={() => toggleDropdown("profile")}>
        <User size={28} className="text-gray-600 dark:text-white hover:text-blue-500 cursor-pointer" />
        </button>
          {/* Profile Dropdown (Animated)*/}
<AnimatePresence>
          {openDropdown === "profile" && (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white  dark:bg-gray-800 border dark:border-gray-700  shadow-lg rounded-md" >
        {/* Profile Link */}
            <Link
              to="/admin/profile"
              className="block px-4 py-2 w-full text-left hover:bg-blue-400 dark:text-white dark:hover:bg-gray-700 transition">
              Profile
            </Link>
            <Link to="/admin/Settings" className="block px-4 py-2 w-full text-left hover:bg-blue-400 dark:text-white dark:hover:bg-gray-700 transition">
              Settings
            </Link>

            {/* <button className="block px-4 py-2 w-full text-left hover:bg-blue-400 dark:text-white dark:hover:bg-gray-700 transition">Profile</button>
            <button className="block px-4 py-2 w-full text-left hover:bg-blue-400   dark:text-white dark:hover:bg-gray-700 transition">Settings</button> */}
            {/* <button className="block px-4 py-2 w-full text-left text-red-500" onClick={handleLogout}>Logout</button> */}
        </motion.div>
    )} 
</AnimatePresence> 
      </div>
     <DarkModeToggle/>
     
       </div>
     
    </nav>
  );
};

export default Navbar;



//<button onClick={() => setIsProfileOpen(!isProfileOpen)}>
//<div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md">
///<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
/////{/* {notifications.length > 0 ? (
//   notifications.map((n) => <div key={n.id} className="p-2 border-b">{n.message}</div>)
// ) : (
//     <p className="p-2 text-center">No notifications</p>
// )} */}