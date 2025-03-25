import { Link, useLocation } from "react-router-dom";
import { Home, Users, Settings, FerrisWheel, GlobeLock, Menu } from "lucide-react";
import logo from "../assets/logo.png";
import { MdDashboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";



const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const { logout } = useContext(AuthContext);
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to check if a menu item is active
  const isActive = (path) => location.pathname === path;
  const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") === "dark" ? true : false
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
   
       <div className={`fixed top-0 left-0 h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white font-medium transition-all duration-300 transition-width ${isOpen ? "w-[280px]" : "w-[80px]"}`}> 
    
     {/* Backdrop for mobile view */}
     {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={toggleSidebar}></div>
      )}
       {/* Sidebar with Animation */}
       <motion.div
         initial={{ opacity: 0, scale: 0.95, y: -10 }}
         animate={{ opacity: 1, scale: 1, y: 0 }}
         exit={{ opacity: 0, scale: 0.95, y: -10 }}
         transition={{ duration: 0.2 }}
        className={`fixed top-0 left-0 h-screen bg-gray-200  dark:bg-gray-900 border-r border-gray-300 dark:border-gray-600 shadow-md font-medium transition-all w-[${
          isOpen ? "280px" : "80px"
        }] z-50`}
      >
         {/* Close Button */}
         {/* <button className="absolute top-4 right-4 text-gray-600" onClick={toggleSidebar}>
          <X size={24} />
        </button> */}

 
<div className="flex items-center gap-4">
        <img src={logo} className="w-20 h-20" alt="Logo" />
         {!isOpen ? null : <h2 className="text-2xl font-bold text-blue-300  dark:text-white">Admin Panel</h2>} 
        
      </div>


      {/* Navigation Menu */}
      <nav>
        <ul className="mt-6 space-y-2">
          <SidebarItem to="/admin/dashboard" icon={<MdDashboard size={24}/>} label="Dashboard" isActive={isActive("/admin/dashboard")} isCollapsed={!isOpen} />
          <SidebarItem to="/admin/users" icon={<Users />} label="Users" isActive={isActive("/admin/users")} isCollapsed={!isOpen} />
          <SidebarItem to="/admin/settings" icon={<Settings />} label="Settings" isActive={isActive("/admin/settings")} isCollapsed={!isOpen} />
          <SidebarItem to="/admin/manage-destination" icon={<FerrisWheel />} label="Manage Destinations" isActive={isActive("/admin/manage-destination")} isCollapsed={!isOpen} />
          <SidebarItem to="/admin/authentication" icon={<GlobeLock />} label="Authentication" isActive={isActive("/admin/authentication")} isCollapsed={!isOpen} />
          <SidebarItem to="#" icon={<FaSignOutAlt  className="text-red-500 dark:text-red-400 dark:hover:bg-gray-700" size={24} />} label="Logout" isActive={false}isCollapsed={!isOpen} onClick={logout} />
       </ul>
      </nav>
     </motion.div>
    </div>
  );
};

// Reusable Sidebar Item Component
const SidebarItem = ({ to, icon, label, isActive, isCollapsed,onClick }) => {
  return (
  //  <li className={`relative h-12 ml-1.5 p-1 rounded-l-[48px] transition-all ${isActive ? "bg-gray-500 text-white" : "bg-transparent"} hover:text-blue-500`}>
     <li className={`relative h-12 ml-1.5 p-1 rounded-2xl transition-all 
      ${isActive ? "bg-blue-100 text-blue-500 shadow-lg" : "bg-transparent"} 
      hover:bg-gray-300 hover:shadow-md hover:text-blue-500 dark:hover:bg-gray-700`}onClick={onClick}> 
     <Link to={to} className="flex items-center w-full h-full rounded-[48px] text-base">
        <span className="mr-2 flex justify-center min-w-[40px]">{icon}</span>
        {!isCollapsed && <span className="whitespace-nowrap">{label}</span>}
      </Link>
     
    </li>
    
  );
};

 export default Sidebar;



//  initial={{ x: "-100%" }}
//  animate={{ x: isOpen ? 0 : "-100%" }}
//  transition={{ duration: 0.3, ease: "easeInOut" }}


// import { Link, useLocation } from "react-router-dom";
// import { Home, Users, Settings, FerrisWheel, GlobeLock, Menu, X } from "lucide-react";
// import logo from "../assets/logo.png";
// import { MdDashboard } from "react-icons/md";
// import { FaSignOutAlt } from "react-icons/fa";
// import { AuthContext } from "../context/AuthContext";
// import { useContext, useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Sidebar = () => {
//   const location = useLocation();
//   const { logout } = useContext(AuthContext);

//   // Sidebar should be open by default on large screens (>= md)
//   const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

//   // Listen for screen resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsOpen(window.innerWidth >= 768); // Keep open if screen is large
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* Sidebar Toggle Button (Mobile Only) */}
//       <button
//         className="fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg shadow-md md:hidden"
//         onClick={toggleSidebar}
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Backdrop for Mobile View */}
//       {isOpen && window.innerWidth < 768 && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <motion.div
//         initial={{ x: -250 }}
//         animate={{ x: isOpen ? 0 : -250 }}
//         transition={{ duration: 0.3 }}
//         className={`fixed top-0 left-0 h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white font-medium shadow-lg border-r border-gray-300 dark:border-gray-600 transition-all z-50 md:w-[280px] ${isOpen ? "w-[280px]" : "w-[80px]"} md:block`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center gap-4 p-4">
//           <img src={logo} className="w-12 h-12" alt="Logo" />
//           {isOpen && <h2 className="text-xl font-bold text-blue-500">Admin Panel</h2>}
//         </div>

//         {/* Navigation Menu */}
//         <nav>
//           <ul className="mt-4 space-y-2">
//             <SidebarItem to="/admin/dashboard" icon={<MdDashboard size={24} />} label="Dashboard" isActive={isActive("/admin/dashboard")} isCollapsed={!isOpen} />
//             <SidebarItem to="/admin/users" icon={<Users />} label="Users" isActive={isActive("/admin/users")} isCollapsed={!isOpen} />
//             <SidebarItem to="/admin/settings" icon={<Settings />} label="Settings" isActive={isActive("/admin/settings")} isCollapsed={!isOpen} />
//             <SidebarItem to="/admin/manage-destination" icon={<FerrisWheel />} label="Manage Destinations" isActive={isActive("/admin/manage-destination")} isCollapsed={!isOpen} />
//             <SidebarItem to="/admin/authentication" icon={<GlobeLock />} label="Authentication" isActive={isActive("/admin/authentication")} isCollapsed={!isOpen} />
//             <SidebarItem to="#" icon={<FaSignOutAlt className="text-red-500 dark:text-red-400" size={24} />} label="Logout" isActive={false} isCollapsed={!isOpen} onClick={logout} />
//           </ul>
//         </nav>
//       </motion.div>
//     </>
//   );
// };

// // Sidebar Item Component
// const SidebarItem = ({ to, icon, label, isActive, isCollapsed, onClick }) => {
//   return (
//     <li 
//       className={`relative h-12 ml-1.5 p-1 rounded-2xl transition-all 
//       ${isActive ? "bg-blue-100 text-blue-500 shadow-lg" : "bg-transparent"} 
//       hover:bg-gray-300 hover:shadow-md hover:text-blue-500 dark:hover:bg-gray-700`} 
//       onClick={onClick}
//     >
//       <Link to={to} className="flex items-center w-full h-full rounded-[48px] text-base">
//         <span className="mr-2 flex justify-center min-w-[40px]">{icon}</span>
//         {!isCollapsed && <span className="whitespace-nowrap">{label}</span>}
//       </Link>
//     </li>
//   );
// };

// export default Sidebar;
