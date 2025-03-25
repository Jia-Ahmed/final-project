// import { useState } from "react";

// const Profile = () => {
//   const [admin, setAdmin] = useState({
//     name: "Admin Name",
//     email: "admin@example.com",
//     password: "",
//     profilePic: "",
//   });

//   const handleChange = (e) => {
//     setAdmin({ ...admin, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setAdmin({ ...admin, profilePic: imageUrl });
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Admin Profile</h2>

//       {/* Profile Picture Upload */}
//       <div className="flex items-center gap-4 mb-4">
//         <img
//           src={admin.profilePic || "https://via.placeholder.com/100"}
//           alt="Profile"
//           className="w-24 h-24 rounded-full object-cover border"
//         />
//         <input type="file" accept="image/*" onChange={handleImageChange} className="block w-full text-sm text-gray-700 dark:text-gray-300" />
//       </div>

//       {/* Form Fields */}
//       <div className="space-y-4">
//         <div>
//           <label className="text-gray-700 dark:text-gray-300">Name</label>
//           <input type="text" name="name" value={admin.name} onChange={handleChange}
//             className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
//         </div>

//         <div>
//           <label className="text-gray-700 dark:text-gray-300">Email</label>
//           <input type="email" name="email" value={admin.email} onChange={handleChange}
//             className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
//         </div>

//         <div>
//           <label className="text-gray-700 dark:text-gray-300">New Password</label>
//           <input type="password" name="password" value={admin.password} onChange={handleChange}
//             className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
//         </div>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useState, useEffect } from "react";

const Profile = () => {
  // Load saved data from localStorage if available
  const [admin, setAdmin] = useState({
    name: localStorage.getItem("name") || "Admin Name",
    email: localStorage.getItem("email") || "admin@example.com",
    password: "",
    profilePic: localStorage.getItem("profilePic") || "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAdmin({ ...admin, profilePic: imageUrl });
      localStorage.setItem("profilePic", imageUrl); // Save image locally
    }
  };

  // Save name and email to localStorage on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", admin.name);
    localStorage.setItem("email", admin.email);
    alert("Profile updated successfully! (Saved in browser)");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Admin Profile</h2>

      {/* Profile Picture Upload */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={admin.profilePic || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-700 dark:text-gray-300"
        />
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={admin.name}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="text-gray-700 dark:text-gray-300">New Password</label>
          <input
            type="password"
            name="password"
            value={admin.password}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
