import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // Icons for show/hide secret key

const TwoFactorAuth = () => {
    const [is2FAEnabled, setIs2FAEnabled] = useState(false);
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [showSecret, setShowSecret] = useState(false);

    // Mock QR code data
    const mockSecret = "JBSWY3DPEHPK3PXP";
    const mockQRCode = `otpauth://totp/AdminDashboard?secret=${mockSecret}&issuer=JhelumTravel`;

    // Toggle 2FA state
    const toggle2FA = () => {
        setIs2FAEnabled(!is2FAEnabled);
        setMessage("");
    };

    // Simulate OTP verification
    const verifyOtp = () => {
        setIsLoading(true);
        setTimeout(() => {
            if (otp === "123456") {
                setMessage("✅ OTP Verified Successfully!");
            } else {
                setMessage("❌ Invalid OTP. Try again.");
            }
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Two-Factor Authentication</h2>

            {/* Toggle 2FA */}
            <div className="mt-4 flex items-center">
                <input 
                    type="checkbox" 
                    checked={is2FAEnabled} 
                    onChange={toggle2FA} 
                    className="w-5 h-5 accent-blue-500 text-blue-500"
                />
                <label className="ml-2 text-gray-700 dark:text-gray-300">Enable 2FA</label>
            </div>

            {/* Show QR Code when 2FA is enabled */}
            {is2FAEnabled && (
                <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300">Scan this QR code in Google Authenticator:</p>
                    <QRCodeCanvas value={mockQRCode} className="mt-2" />
                    
                    {/* Secret Key with Show/Hide Option */}
                    <div className="mt-2 flex items-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Secret Key: {showSecret ? mockSecret : "••••••••••"}</p>
                        <button onClick={() => setShowSecret(!showSecret)} className="ml-2">
                            {showSecret ? <EyeOffIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <EyeIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                        </button>
                    </div>
                </div>
            )}

            {/* OTP Verification Field */}
            {is2FAEnabled && (
                <div className="mt-4">
                    <label className="block text-gray-700 dark:text-gray-300 font-medium">Enter 6-digit OTP:</label>
                    <input 
                        type="text" 
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                        maxLength="6"
                        inputMode="numeric"
                        className="mt-2 border p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter OTP"
                    />

                    {/* Verify Button */}
                    <button 
                        onClick={verifyOtp} 
                        disabled={isLoading}
                        className={`mt-4 px-4 py-2 rounded text-white transition ${
                            isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>
                </div>
            )}

            {/* Display Message (Success/Error) */}
            {message && (
                <p className="mt-3 text-lg font-medium text-center text-gray-900 dark:text-white">
                    {message}
                </p>
            )}
        </div>
    );
};

export default TwoFactorAuth;
