import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// Sample data for District Jhelum's tourism
const travelData = [
  { name: "Rohtas Fort", bookings: 450 },
  { name: "Tilla Jogian", bookings: 320 },
  { name: "Lehri Nature Park", bookings: 280 },
  { name: "Rasul Barrage", bookings: 200 },
  { name: "Mangla Dam", bookings: 500 },
];

const TravelStatsChart = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white  mb-4 text-center">Popular Destinations - Jhelum</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={travelData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" 
          />  */}
          <XAxis 
            dataKey="name" 
            angle={-10}  
            textAnchor="middle"  
            interval={0}  
            height={100} 
            tick={{ fontSize: 12, wordWrap: "break-word" }} />
          <YAxis />
          <Tooltip  contentStyle={{ backgroundColor: "#f9fafb", color: "#111827", borderRadius: "8px" }} 
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}  />
          <Bar dataKey="bookings" fill="#3182ce"
          onClick={(data) => alert(`You clicked on ${data.name} with ${data.bookings} bookings`)} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TravelStatsChart;
// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// // Sample data for District Jhelum's tourism
// const travelData = [
//   { name: "Rohtas Fort", bookings: 450 },
//   { name: "Tilla Jogian", bookings: 320 },
//   { name: "Lehri Nature Park", bookings: 280 },
//   { name: "Rasul Barrage", bookings: 200 },
//   { name: "Mangla Dam", bookings: 500 },
// ];

// const TravelStatsChart = () => {
//   return (
//     <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full min-w-[650px]">
//       <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4 text-center">
//         Popular Destinations - Jhelum
//       </h2>
//       <ResponsiveContainer width="100%" height={400}>
//         <BarChart data={travelData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis 
//             dataKey="name" 
//             angle={-10}  
//             textAnchor="middle"  
//             interval={0}  
//             height={100} 
//             tick={{ fontSize: 12, wordWrap: "break-word" }} 
//           />
//           <YAxis />
//           <Tooltip 
//             contentStyle={{ backgroundColor: "#f9fafb", color: "#111827", borderRadius: "8px" }} 
//             cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} 
//           />
//           <Bar 
//             dataKey="bookings" 
//             fill="#3182ce"
//             radius={[5, 5, 0, 0]} 
//             onMouseOver={(e) => (e.target.style.fill = "#2563eb")}
//             onMouseOut={(e) => (e.target.style.fill = "#3182ce")}
//             onClick={(data) => alert(`You clicked on ${data.name} with ${data.bookings} bookings`)} 
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default TravelStatsChart;
