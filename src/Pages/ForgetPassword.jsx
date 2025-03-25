import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Enter email → Step 2: Enter OTP → Step 3: Reset password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // 🔹 Step 1: Send OTP to Email
  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://127.0.0.1:5000/forgot-password", { email });
        setMessage(response.data.message);
        setError("");  // Clear previous errors
        setStep(2);  // Move to next step (OTP verification)
    } catch (error) {
        setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
};


  // 🔹 Step 2: Verify OTP and Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/reset-password", {
        email,
        otp,
        new_password: newPassword,
      });
      setMessage(response.data.message);
      setError("");
      setStep(3); // Move to success message
    } catch (error) {
      setError("Invalid OTP or password reset failed.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Forgot Password
        </h2>

        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {step === 1 && (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter New Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Reset Password
            </button>
          </form>
        )}

        {step === 3 && (
          <p className="text-center text-gray-700">
            Password reset successfully! You can now <a href="/login" className="text-blue-500">login</a> with your new password.
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
