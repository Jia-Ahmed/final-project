import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
 import Navbar from "../components/Navbar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen bg-gray-100">
    
      {/* <Sidebar /> */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
       
      


      {/* <div className=" flex-1 flex flex-col"> */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "pl-[240px]" : "pl-[30px]"}`}>
          {/* <Navbar /> */}
           <Navbar  toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /> 
      
         <div className=" p-6 h-full">
        {/* <h2 className="text-2xl font-semibold">Welcome to the Dashboard!</h2> */}
          <Outlet /> 
          </div>
        </div>
      {/* </div> */}
    </div>
    
  );
};

export default AdminLayout;
