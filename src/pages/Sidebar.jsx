// import React from 'react'
// import { Home } from "lucide-react";
// import "@fortawesome/fontawesome-free/css/all.css";
// import { MdAttractions } from "react-icons/md";

// import 
// {   BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'
// const Sidebar=({ openSidebarToggle, OpenSidebar })=> {
//   return (
//     <aside className={`bg-blue-300 text-white w-64 min-h-screen fixed top-14 left-0 transform ${openSidebarToggle ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
//        {/* Sidebar Header */}
//         <div className='flex items-center justify-between p-4 border-b border-blue-500'>
//              <div className='flex items-center gap-2'>
            
//              <span className="text-lg font-semibold"> Admin Panel</span>
//              </div>
//              <span className='text-xl cursor-pointer lg:hidden' onClick={OpenSidebar}>✖</span>
//         </div>

//         {/* Sidebar Menu */}
//     <ul className='mt-4 space-y-2'>
//          <li className="px-4 py-3 hover:bg-blue-500 transition cursor-pointer">
//           <a href="./Dashboard" className="flex items-center gap-3">
         
//             <Home className=" mr-2 text-lg text-white" /> <span>Dashboard</span>
//           </a>
//          </li>

//          <li className="px-4 py-3 hover:bg-blue-500 transition cursor-pointer">
//           <a href="./pages/Authentication" className="flex items-center gap-3">
//             {/* <BsFillArchiveFill className="text-lg text-white" /> <span>Authentication</span> */}
//             <i className="fas fa-user-shield"></i>
//             <span>Authentication</span>
//           </a>
//         </li>

//         <li className="px-4 py-3 hover:bg-blue-500 transition cursor-pointer">
//           <a href="../ManageDestination" className="flex items-center gap-3">
//             <MdAttractions  className="text-lg text-white" /> <span>Manage Destinations</span>
//           </a>
//         </li>

//         <li className="px-4 py-3 hover:bg-blue-500 transition cursor-pointer">
//           <a href="../Users" className="flex items-center gap-3">
//             <BsPeopleFill className="text-lg text-white" /> <span>Users </span>
//           </a>
//         </li>

//         <li className="px-4 py-3 hover:bg-blue-500 transition cursor-pointer">
//           <a href="../Bookings" className="flex items-center gap-3">
//             <BsListCheck className="text-lg text-white" /> <span>Bookings</span>
//           </a>
//         </li>

//         <li className="px-4 py-3 hover:bg-blue-500 transition cursor-pointer">
//           <a href="../Reports" className="flex items-center gap-3">
//             <BsMenuButtonWideFill className="text-lg text-white" /> <span>Reports</span>
//           </a>
//         </li>

//         <li className="px-4 py-3 hover:bg-blue-500 transition cursor-pointer">
//           <a href="../Settings" className="flex items-center gap-3">
//             <BsFillGearFill className="text-lg text-white" /> <span>Settings</span>
//           </a>
//         </li>
        
//         </ul>
        
//     </aside>
//   );
// };

// export default Sidebar


/////////2nd code///////
// import { Link } from "react-router-dom";
// import { Home, Users, Settings,FerrisWheel,GlobeLock} from "lucide-react";



// const Sidebar = () => {
//   return (
//     // <div className="w-64 bg-gray-100 text-white h-full p-4">
//      <div className="fixed top-0 left-0 w-[280px] h-full bg-gray-200 z-[2000] font-medium">
//   {/* Sidebar content goes here */}

//       <h2 className="min-w-[60px] flex justify-center text-2xl font-bold text-blue-300 mb-5">Admin Panel</h2>
//       <nav>
//         <ul className="w-full mt-12">
//           <li className="h-12 bg-transparent ml-1.5 rounded-l-[48px] p-1">
//             <Link to="/admin/dashboard" 
//             className="w-full h-full bg-gray-100 flex items-center rounded-[48px] text-base text-gray-900 hover:text-blue-500">
//             <Home className="mr-2 min-w-[calc(60px-((4px+6px)*2))] flex justify-center" /> Dashboard
//             </Link>
//           </li>
           
//           {/* <li className="h-12 bg-transparent ml-1.5 rounded-l-[48px] p-1"> */}
//           <li className="h-12 bg-transparent ml-1.5 rounded-l-[48px] p-1">
//             <Link to="/admin/users" 
//             className="w-full h-full bg-gray-100 flex items-center rounded-[48px] text-base text-gray-900 hover:text-blue-500">
//             <Users className="mr-2 min-w-[calc(60px-((4px+6px)*2))] flex justify-center" /> Users
//             </Link>
//           </li>

//           <li className="h-12 bg-transparent ml-1.5 rounded-l-[48px] p-1">
//              <Link to="/admin/settings" 
//              className="w-full h-full bg-gray-100 flex items-center rounded-[48px] text-base text-gray-900 hover:text-blue-500">
//             <Settings className="mr-2 min-w-[calc(60px-((4px+6px)*2))] flex justify-center" /> Settings
//             </Link>
//           </li>


//           <li className="h-12 bg-transparent ml-1.5 rounded-l-[48px] p-1">
//             <Link to="/admin/manage destination" 
//             className="w-full h-full bg-gray-100 flex items-center rounded-[48px] text-base text-gray-900 hover:text-blue-500">
//             <FerrisWheel  className="mr-2 min-w-[calc(60px-((4px+6px)*2))] flex justify-center" /> Manage Destinations
//             </Link>
//           </li>
          

//           <li className="h-12 bg-transparent ml-1.5 rounded-l-[48px] p-1">
//                <Link to="/admin/authentication"
//               className="w-full h-full bg-gray-100 flex items-center rounded-[48px] text-base text-gray-900 hover:text-blue-500">
//               <GlobeLock className="mr-2 min-w-[calc(60px-((4px+6px)*2))] flex justify-center" />Authentication
//             </Link>
//          </li>


//           {/* <li className="w-full h-full bg-gray-100 flex items-center rounded-[48px] p-1">
//             <Link to="/admin/authentication" className="flex items-center">
//             <GlobeLock   className="mr-2" />Authentication 
//             </Link>
//           </li> */}

//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import { Link, useLocation } from "react-router-dom";
import { Home, Users, Settings, FerrisWheel, GlobeLock, Menu } from "lucide-react";
import logo from "../assets/logo.png";
import { MdDashboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
// import { LogOut } from 'lucide-react';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const { logout } = useContext(AuthContext);
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to check if a menu item is active
  const isActive = (path) => location.pathname === path;

  return (
   
       <div className={`fixed top-0 left-0 h-screen bg-gray-200  font-medium transition-all duration-300 transition-width ${isOpen ? "w-[280px]" : "w-[80px]"}`}> 
     {/* <div className={`h-screen ${isOpen ? "w-60" : "w-20"} bg-gray-100 p-5 transition-all duration-300 shadow-md`}> */}
     {/* Toggle Button */}
       {/* <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-5 right-2 bg-gray-300 p-1 rounded-full hover:bg-gray-400 transition"
        aria-expanded={!isCollapsed}
        aria-label="Toggle Sidebar"
      >
        <Menu size={20} />
      </button> */}
      
      {/* Logo Section */}
      {/* <div className="flex items-center space-x-2 mb-6">
      <img src={logo} className="w-20 h-20" alt="Logo" /> */}
         {/* Sidebar Brand */}
       {/* <h2 className={`text-2xl font-bold text-blue-300 flex items-center justify-center h-14 transition-all ${isCollapsed ? "hidden" : "block"}`}>
        Admin Panel
      </h2> 
      </div> */}
 
<div className="flex items-center gap-4">
        <img src={logo} className="w-20 h-20" alt="Logo" />
         {!isOpen ? null : <h2 className="text-2xl font-bold text-blue-300">Admin Panel</h2>} 
        
      </div>


      {/* Navigation Menu */}
      <nav>
        <ul className="mt-6 space-y-2">
          <SidebarItem to="/admin/dashboard" icon={<MdDashboard size={24}/>} label="Dashboard" isActive={isActive("/admin/dashboard")} isCollapsed={!isOpen} />
          <SidebarItem to="/admin/users" icon={<Users />} label="Users" isActive={isActive("/admin/users")} isCollapsed={!isOpen} />
          <SidebarItem to="/admin/settings" icon={<Settings />} label="Settings" isActive={isActive("/admin/settings")} isCollapsed={!isOpen} />
          <SidebarItem to="/admin/manage-destination" icon={<FerrisWheel />} label="Manage Destinations" isActive={isActive("/admin/manage-destination")} isCollapsed={!isOpen} />
          <SidebarItem to="/admin/authentication" icon={<GlobeLock />} label="Authentication" isActive={isActive("/admin/authentication")} isCollapsed={!isOpen} />
          <SidebarItem to="#" icon={<FaSignOutAlt  className="text-red-500" size={24} />} label="Logout" isActive={false}isCollapsed={!isOpen} onClick={logout} />
       </ul>
      </nav>
     
    </div>
  );
};

// Reusable Sidebar Item Component
const SidebarItem = ({ to, icon, label, isActive, isCollapsed,onClick }) => {
  return (
  //  <li className={`relative h-12 ml-1.5 p-1 rounded-l-[48px] transition-all ${isActive ? "bg-gray-500 text-white" : "bg-transparent"} hover:text-blue-500`}>
     <li className={`relative h-12 ml-1.5 p-1 rounded-2xl transition-all 
      ${isActive ? "bg-blue-100 text-blue-500 shadow-lg" : "bg-transparent"} 
      hover:bg-gray-300 hover:shadow-md hover:text-blue-500`}onClick={onClick}> 
     <Link to={to} className="flex items-center w-full h-full rounded-[48px] text-base">
        <span className="mr-2 flex justify-center min-w-[40px]">{icon}</span>
        {!isCollapsed && <span className="whitespace-nowrap">{label}</span>}
      </Link>
     
    </li>
     
  );
};

 export default Sidebar;



