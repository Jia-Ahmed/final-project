import { useState, useEffect } from "react";

const PopularDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDestinations([
        { name: "Rohtas Fort", visitors: 320 },
        { name: "Khewra Salt Mine", visitors: 290 },
        { name: "Tilla Jogian", visitors: 180 },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold">Most Visited Destinations</h2>
      <ul className="mt-2">
        {destinations.map((dest, index) => (
          <li key={index} className="flex justify-between border-b py-2">
            <span>{dest.name}</span>
            <span className="font-bold">{dest.visitors} visits</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularDestinations;
