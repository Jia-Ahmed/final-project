import React, { useState } from 'react';

function ManageDestination() {
  // Sample static data for now, later replace with backend API data
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Rohtas Fort', location: 'Jhelum', description: 'Historical site' },
    { id: 2, name: 'Mangla Dam', location: 'Jhelum', description: 'Beautiful dam and resort' },
    { id: 3, name: 'Lehri Nature Park', location: 'Jhelum', description: 'Beautiful Park' },
    { id: 4, name: 'Rasul Barrage', location: 'Jhelum', description: 'Beautiful dam and resort' },
  ]);
  // State to control Modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
  });
   // Handle form input changes
   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDestination = {
      id: destinations.length + 1, // Auto increment ID
      ...formData,
    };
    setDestinations([...destinations, newDestination]); // Add new destination to list
    setFormData({ name: '', location: '', description: '' }); // Clear form
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Manage Destinations</h1>
        {/* Add Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Destination
      </button>

      </div>

      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Location</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination) => (
            <tr key={destination.id} className="text-center border-t">
              <td className="py-2 px-4">{destination.name}</td>
              <td className="py-2 px-4">{destination.location}</td>
              <td className="py-2 px-4">{destination.description}</td>
              <td className="py-2 px-4 space-x-2">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* Modal for Adding Destination */}
       {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Destination</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageDestination;
