import React from "react";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// Sample data for District Jhelum's tourism
const travelData = [
  { name: "Rohtas Fort", bookings: 450 },
  { name: "Tilla Jogian", bookings: 320 },
  { name: "Lehri Nature Park", bookings: 280 },
  { name: "City Town", bookings: 200 },
  { name: "Jhelum River", bookings: 500 },
];
const CustomTooltip = ({ active, payload }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  if (active && payload && payload.length) {
    return (
      <div
        className={`p-3 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <p className="font-semibold">{payload[0].payload.name}</p>
        <p className="text-sm">Bookings: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const TravelStatsChart = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full min-w-[650px]">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4 text-center">
        Popular Destinations - Jhelum
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={travelData} margin={{ top: 10, right: 30, left: 0, bottom: 50 }}>
           {/* Lighter Grid Lines */}
           <CartesianGrid strokeDasharray="3 3"stroke="#ddd" />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis 
            dataKey="name" 
            angle={0}
            dy={10}  
            textAnchor="end"
            height={50} 
            tick={{ fontSize: 12 }}   
            // interval={0}  
            // height={100} 
            // tick={{ fontSize: 12, wordWrap: "break-word" }} 
          />
           {/* Y-Axis with lighter color */}
          <YAxis tick={{ fontSize: 14 }} />
          {/* <Tooltip 
            contentStyle={{ backgroundColor: "#f9fafb", color: "#111827", borderRadius: "8px" }} 
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} 
          /> */}
          <Tooltip content={<CustomTooltip />} />
         
          <Bar 
            dataKey="bookings" 
            fill="#3182ce"
            radius={[5, 5, 0, 0]} 
            barCategoryGap={20}
            onMouseOver={(e) => (e.target.style.fill = "#2563eb")}
            onMouseOut={(e) => (e.target.style.fill = "#3182ce")}
            onClick={(data) => alert(`You clicked on ${data.name} with ${data.bookings} bookings`)} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TravelStatsChart;
