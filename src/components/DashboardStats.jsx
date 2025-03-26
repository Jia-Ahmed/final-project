import { useState, useEffect } from "react";
import { FaUsers, FaPlane, FaMapMarkerAlt, FaChartBar } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const DashboardStats = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalDestinations: 0,
    newUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setStats({
        totalBookings: 1200,
        totalDestinations: 800,
        newUsers: 50,
        totalRevenue: 25000,
      });
    }, 1000);
  }, []);

  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl  dark:text-white font-bold mb-6">Dashboard</h1>
      </div>
      {/* Stat Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Bookings */}
        <div className="bg-blue-100 p-4 shadow-md rounded-lg flex items-center cursor-pointer hover:shadow-lg transition"
      onClick={() => navigate("/admin/bookings")}>
          <FaPlane className="text-3xl text-blue-600 mr-4" />
          <div>
            <h2 className="text-md font-semibold text-gray-700">Total Bookings</h2>
            <p className="text-2xl  dark:text-black font-bold">{stats.totalBookings}</p>
            
          </div>
        </div>

        {/* Total Destinations */}
        <div className="bg-yellow-100 p-4 shadow-md rounded-lg flex items-center">
          <FaMapMarkerAlt className="text-3xl text-yellow-600 mr-4" />
          <div>
            <h2 className="text-md font-semibold text-gray-700">Total Destinations</h2>
            <p className="text-2xl  dark:text-black font-bold">{stats.totalDestinations}</p>
          </div>
        </div>

        {/* New Users */}
        <div className="bg-green-100 p-4 shadow-md rounded-lg flex items-center">
          <FaUsers className="text-3xl text-green-600 mr-4" />
          <div>
            <h2 className="text-md font-semibold text-gray-700">New Users</h2>
            <p className="text-2xl dark:text-black font-bold">{stats.newUsers}</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-red-100 p-4 shadow-md rounded-lg flex items-center">
          <MdAttachMoney className="text-3xl text-red-600 mr-4" />
          <div>
            <h2 className="text-md font-semibold text-gray-700">Total Revenue</h2>
            <p className="text-2xl dark:text-black font-bold">${stats.totalRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardStats;
