import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useGoogleLogin } from '@react-oauth/google';


export const Register = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: () => alert("Google login failed"),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://127.0.0.1:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: email.split("@")[0],
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error("Registration failed. Please try again.");
        }

        const data = await response.json();
        alert(data.message || "Registration Successful!");
      } catch (error) {
        console.error("Error:", error.message);
        alert(error.message || "Something went wrong. Please try again.");
      }
    }
  };

  const validate = () => {
    const error = {};
    if (!email) error.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) error.email = "Email is invalid";

    if (!password) error.password = "Password is required";
    else if (!passwordRegex.test(password)) {

    error.password = " Password must be at least 8 characters long and include an upercase letter,lowercase letter,number,and special character";
  }

    if (password !== confirmPassword) error.confirmPassword = "Passwords do not match";

    return error;
  };

  return (
   
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      {/* Background Video 
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src={jhlmVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      Form Container */}
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
        <img src="/src/assets/citytown.jpg"/>
      </div>
      <div className="bg-aqua-200 text-black border border-gray-300 rounded-xl p-8 shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-30 relative max-w-md w-full">
        
        {/* Form Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">Register</h1>

        <form onSubmit={handleSubmit}>
          {/* Email Input Field */}
          <div className="relative my-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-2 px-3 text-white bg-transparent border-2 border-white rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 placeholder-white"
              placeholder="Your Email"
              aria-label="Email"
              autoComplete="email"
            />
            <MdEmail className="absolute top-3 right-3 text-white" />
            {errors.email && <div className="text-red-700 text-sm mt-1">{errors.email}</div>}
          </div>

          {/* Password Input Field */}
          <div className="relative my-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-2 px-3 text-white bg-transparent border-2 border-white rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 placeholder-white"
              placeholder="Your Password"
              aria-label="Password"
              autoComplete="new-password"
            />
            <RiLockPasswordFill className="absolute top-3 right-3 text-white" />
            {errors.password && <div className="text-red-700 text-sm mt-1">{errors.password}</div>}
          </div>

          {/* Confirm Password Input Field */}
          <div className="relative my-4">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full py-2 px-3 text-white bg-transparent border-2 border-white rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 placeholder-white"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              autoComplete="new-password"
            />
            <RiLockPasswordFill className="absolute top-3 right-3 text-white" />
            {errors.confirmPassword && <div className="text-red-300 text-sm mt-1">{errors.confirmPassword}</div>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full text-[18px] mt-4 rounded-md bg-blue-600 py-2 px-4 text-white font-semibold hover:bg-blue-900 transition-colors duration-300"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="text-white text-center mt-4">OR</div>

        {/* Google Login Button - Now same as Register button */}
        <button
          className="w-full text-[18px] mt-4 rounded-md bg-blue-600 py-2 px-4 text-white font-semibold hover:bg-blue-900 transition-colors duration-300 gap-3"
          onClick={() => login()}
        >
          Sign in with Google
        </button>

        {/* Redirect to Login Page */}
        <p className="text-white text-center mt-4">
          Already have an account? <Link className="text-blue-800 hover:text-blue-500" to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
