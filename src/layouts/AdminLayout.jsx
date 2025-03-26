import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
 import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import DashboardCharts from "../components/DashboardCharts";
import ActivityLogs from "../components/ActivityLogs";
import RecentBookings from "../components/RecentBookings";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  
  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex min-h-screen bg-gray-100  dark:bg-gray-900 dark:text-white">
    
      {/* <Sidebar /> */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* <div className=" flex-1 flex flex-col"> */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "pl-[240px]" : "pl-[30px]"}`}>
          {/* <Navbar /> */}
           <Navbar  toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /> 
      
         <div className=" p-6 h-full">
        {/* <h2 className="text-2xl font-semibold">Welcome to the Dashboard!</h2> */}
          <DashboardStats/>
          <DashboardCharts/>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Recent Bookings */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md">
      <RecentBookings/>
      </div>
          {/* Right Column - Activity Logs */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md">
      <ActivityLogs/>
      </div>
      </div>
          <Outlet /> 
          </div>
        </div>
      {/* </div> */}
    </div>
    
  );
};

export default AdminLayout;
