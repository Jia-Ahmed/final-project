
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TravelStatsChart from "../components/TravelStatsChart";
const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
//     <div>
//       <h1 className="text-2xl font-bold">Welcome to Jhelum Tourism</h1>
//       <p className="mt-2 text-gray-600">Manage your users, bookings, and more.</p>
//        {/* <button
//         className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
//         onClick={logout}
//       >
//         Logout
//       </button>  */}

// {/* <div className="grid grid-cols-2 gap-6">
//      <div className="bg-white p-4 shadow rounded-lg">
//          <h2 className="text-xl font-semibold">Total Bookings</h2>
//          <p className="text-3xl">100</p>
//        </div>
//        <div className="bg-white p-4 shadow rounded-lg">
//          <h2 className="text-xl font-semibold">Total Destinations</h2>
//          <p className="text-3xl">120</p>
//        </div>
//        <div className="bg-white p-4 shadow rounded-lg">
//          <h2 className="text-xl font-semibold">New Users</h2>
//          <p className="text-3xl">50</p>
//        </div>
       
      
//      </div> */}
//     </div>
<div className="p-6 w-full">
<h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
  Dashboard
</h1>
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

