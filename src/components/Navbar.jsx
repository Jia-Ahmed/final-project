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
import { Menu, Bell, User, Search } from "lucide-react";
// import DarkModeToggle from "./DarkModeToggle";


const Navbar = ({ toggleSidebar }) => {
  
  

  const [isSearchOpen, setIsSearchOpen] = useState(false);
 
  


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
     <nav className="flex items-center justify-between bg-white  px-5 py-3  shadow-md top-0 w-full z-50">
   
    {/* Left Side  */}
      <div className="flex items-center ">
        <button onClick={toggleSidebar} className="text-gray-600  hover:text-blue-500 focus:outline-none">
          <Menu size={20} />
        </button>
       
      </div>

      {/* Center - Search Bar */}
      <div className="relative  flex-grow max-w-md mx-auto">
      <div className="relative flex items-center">
      <Search className="absolute left-3  text-gray-500  cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)} />
        <input
          type="text"
          placeholder="Search..."
          className={`w-full pl-10 pr-4 py-2 bg-gray-100    rounded-full transition-all duration-300 ease-in-out ${isSearchOpen ? "block" : "hidden md:block"}`}
        />
        </div>
      </div>

      {/* Right Side - Icons */}
        <div className="flex items-center space-x-5">  
      

        {/* Notification Bell */}
        
<div className="relative">
<button onClick={() => toggleDropdown("notifications")} className="relative">
          <Bell size={24} className="text-gray-600   hover:text-blue-500 cursor-pointer" />
           {/* Red Badge for Unread Notifications */}
           {/* {notifications.some((n) => !n.read) && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 rounded-full">
            {notifications.filter((n) => !n.read).length}
            </span>
        )} */}
      </button>
           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 py-0.5">
           8
           </span>
           
</div>

        {/* Profile Icon */}
        <div className="relative z-50">
        <button onClick={() => toggleDropdown("profile")}>
        <User size={28} className="text-gray-600 dark:text-white hover:text-blue-500 cursor-pointer" />
        </button>
      </div>
      
       </div>
    </nav>
  );
};

export default Navbar;






