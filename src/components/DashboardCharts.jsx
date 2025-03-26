import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,Legend } from "recharts";
import { useEffect, useState } from "react";
const DashboardCharts = () => {
  const bookingData = [
    { month: "Jan", bookings: 120 },
    { month: "Feb", bookings: 200 },
    { month: "Mar", bookings: 170 },
    { month: "Apr", bookings: 250 },
    { month: "May", bookings: 300 },
  ];

  const destinationData = [
    { name: "Rohtas Fort", visitors: 400, color: "#0088FE" },
    { name: "Khewra Salt Mine", visitors: 350, color: "#00C49F" },
    { name: "Nandana Fort", visitors: 200, color: "#FFBB28" },
  ];
  // Detect dark mode globally
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className={`p-3 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
        >
          <p className="font-semibold">{payload[0].payload.month}</p> {/* Corrected key */}
          <p className="text-sm">Bookings: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg">
        <h2 className="text-lg text-gray-800 dark:text-gray-100 font-semibold mb-3">Booking Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bookingData}>
            <XAxis dataKey="month" stroke={isDarkMode ? "#ffffff" : "#000000"} /> {/* Adjust axis color */}
            <YAxis  stroke={isDarkMode ? "#ffffff" : "#000000"}/>
            <Tooltip  content={<CustomTooltip />}/>
            <Bar dataKey="bookings" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg">
        <h2 className="text-lg text-gray-800 dark:text-gray-100 font-semibold mb-3">Most Visited Destinations</h2>
        <PieChart width={350} height={300}>
        <Pie
          data={destinationData}
          dataKey="visitors"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {destinationData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      </div>
    </div>
  );
};

export default DashboardCharts;
