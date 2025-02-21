

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
//import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login validation (add your actual validation here)
    if (credentials.username === "admin" && credentials.password === "password") {
      login(); // Update AuthContext
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="h-screen w-full bg-cover bg-center">
    <div className="h-full flex justify-center items-center bg-gray-100">
      <form
        className="bg-white  rounded  shadow-lg w-full max-w-md p-8"
        onSubmit={handleLogin}
      >
         <h2 className="text-2x1 font-semibold mb-5">Admin Login</h2> 
        {/* <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Admin Login</h1> */}
        <p className="text-sm text-red-600 text-center mb-4">
          Note: Please use your admin credentials to log in. For password assistance, contact support.
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="border rounded w-full p-2"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default AdminLogin;



