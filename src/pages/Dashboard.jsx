import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TravelStatsChart from "../components/TravelStatsChart";
import DashboardStats from "../components/DashboardStats";
import ActivityLogs from "../components/ActivityLogs";
import RecentBookings from "../components/RecentBookings";
const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
<div className="p-6 w-full bg-gray-100 dark:bg-gray-900 min-h-screen">
{/* <h1 className="text-3xl font-bold text-gray-800  dark:text-black text-center mb-6">
  Dashboard
</h1> */}
<div className="p-6">
      <DashboardStats />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Recent Bookings */}
      <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl shadow-md">
      <RecentBookings/>
      </div>
          {/* Right Column - Activity Logs */}
      <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl shadow-md">
      <ActivityLogs/>
      </div>
      </div>
    </div>
<div className="flex justify-center">
  {/* Travel Stats Chart */}
  <div className="w-full md:w-3/4 lg:w-1/2">
    <TravelStatsChart />
  </div>
</div>
</div>
  );
};

export default Dashboard;

