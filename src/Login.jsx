import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export const Login = () => {
  // State to store email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload
    const validationErrors = validate(email, password); // Validate input fields
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://127.0.0.1:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        alert(data.message); // Show success or failure message
      } catch (error) {
        console.error("Error:", error);
        alert("Login failed! Please try again.");
      }
    }
  };

  // Function to validate email and password
  const validate = (email, password) => {
    const error = {};
    
    // Email validation
    if (!email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email is invalid";
    }

    // Password validation
    if (!password) {
      error.password = "Password is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      error.password = "Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character";
    }
    
    return error;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      {/* Form Container */}
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      <img src="/src/assets/citytown.jpg"/>
      </div>
      <div className="bg-aqua-200 text-black border border-gray-300 rounded-xl p-8 shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-30 relative max-w-md w-full">
        
        {/* Login Page Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">Welcome Back!</h1>
        <p className="text-white text-center font-medium mb-4">Please Enter Your Details</p>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative my-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-2 px-3 text-white bg-transparent border-2 border-white rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 placeholder-white"
              placeholder="Your Email"
            />
            <MdEmail className="absolute top-3 right-3 text-white" />
            {errors.email && <div className="text-red-700 text-sm mt-1">{errors.email}</div>}
          </div>
          
          {/* Password Input */}
          <div className="relative my-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-2 px-3 text-white bg-transparent border-2 border-white rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300 placeholder-white"
              placeholder="Your Password"
            />
            <RiLockPasswordFill className="absolute top-3 right-3 text-white" />
            {errors.password && <div className="text-red-700 text-sm mt-1">{errors.password}</div>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-white mb-4">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            {/* <Link to="" className="text-blue-500 hover:text-blue-800">Forget Password?</Link> */}
            <Link to="/forgot-password" className="text-blue-500 hover:text-blue-800">Forgot Password?</Link>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full text-[18px] rounded-md bg-blue-600 py-2 px-4 text-white font-semibold hover:bg-blue-900 transition-colors duration-300"
          >
            Login
          </button>

          {/* Register Redirect */}
          <p className="text-white text-center mt-4">
            New Here? <Link className="text-blue-500 hover:text-blue-800" to="/Register">Create an Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;