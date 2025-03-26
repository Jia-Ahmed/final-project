import { useState, useEffect } from "react";

const ActivityLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setLogs([
        { id: 1, user: "Admin", action: "Added new destination: Rohtas Fort", timestamp: "2025-03-20 10:30 AM" },
        { id: 2, user: "John Doe", action: "Booked a trip to Khewra Salt Mine", timestamp: "2025-03-21 02:15 PM" },
        { id: 3, user: "Jane Smith", action: "Canceled booking for Mangla Dam", timestamp: "2025-03-22 04:00 PM" },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl text-gray-900 dark:text-white font-bold mb-4">Activity Logs</h2>
      <ul className="space-y-2">
        {logs.map((log) => (
          <li key={log.id} className="border-l-4 pl-2 py-2 border-blue-500 dark:border-blue-400">
            <span className="font-bold text-gray-900 dark:text-white">{log.user}</span> 
            <span className="text-gray-700 dark:text-gray-300"> - {log.action}</span>
            <p className="text-sm text-gray-600 dark:text-gray-400">{log.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLogs;
