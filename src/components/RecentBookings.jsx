import { useState, useEffect } from "react";

const RecentBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setBookings([
        { id: 1, name: "John Doe", destination: "Rohtas Fort", date: "2025-03-20", status: "Confirmed" },
        { id: 2, name: "Jane Smith", destination: "Khewra Salt Mine", date: "2025-03-21", status: "Pending" },
        { id: 3, name: "Ali Khan", destination: "Mangla Dam", date: "2025-03-22", status: "Canceled" },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="bg-gray-100  dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-4">Recent Bookings</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <th className="p-2">Customer</th>
            <th className="p-2">Destination</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-t  text-gray-800 dark:text-gray-300">
              <td className="p-2">{booking.name}</td>
              <td className="p-2">{booking.destination}</td>
              <td className="p-2">{booking.date}</td>
              <td className={`p-2 font-bold ${booking.status === "Confirmed" ? "text-green-600 dark:text-green-400" : booking.status === "Pending" ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400"}`}>
                {booking.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBookings;
