// import { useState } from "react";

// export default function SettingsPage() {
//   const [settings, setSettings] = useState({
//     twoFactorAuth: true,
//     emailNotifications: true,
//     smsNotifications: true,
//     autoBackup: true,
//     clearCache: false,
//   });

//   const handleToggle = (key) => {
//     setSettings({ ...settings, [key]: !settings[key] });
//   };

//   return (
    
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg"> 
//         <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
//           Settings
//         </h2>

//         {/* Security Section */}
//        <div className="mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Security</h3>

//           <div className="flex items-center justify-between mb-3">
//             <span className="text-gray-700 dark:text-gray-300">Enable Two-Factor Authentication</span>
//             <input
//               type="checkbox"
//               checked={settings.twoFactorAuth}
//               onChange={() => handleToggle("twoFactorAuth")}
//               className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
//             />
//           </div>

//           <div className="py-2">
//             <label className="block text-gray-700 dark:text-gray-300">Change Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
//               placeholder="••••••••"
//             />
//           </div>
//         </div> 
       

//         {/* Notifications Section */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Notifications</h3>

//           <div className="flex items-center justify-between mb-3">
//             <span className="text-gray-700 dark:text-gray-300">Receive Email Notifications</span>
//             <input
//               type="checkbox"
//               checked={settings.emailNotifications}
//               onChange={() => handleToggle("emailNotifications")}
//               className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center justify-between mb-3">
//             <span className="text-gray-700 dark:text-gray-300">Receive SMS Notifications</span>
//             <input
//               type="checkbox"
//               checked={settings.smsNotifications}
//               onChange={() => handleToggle("smsNotifications")}
//               className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Data & Backup Section */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Data & Backup</h3>

//           <div className="flex items-center justify-between mb-3">
//             <span className="text-gray-700 dark:text-gray-300">Enable Automatic Backup</span>
//             <input
//               type="checkbox"
//               checked={settings.autoBackup}
//               onChange={() => handleToggle("autoBackup")}
//               className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center justify-between mb-3">
//             <span className="text-gray-700 dark:text-gray-300">Clear Cache</span>
//             <input
//               type="checkbox"
//               checked={settings.clearCache}
//               onChange={() => handleToggle("clearCache")}
//               className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Save Button */}
//         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-4">
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import TwoFactorAuth from "./TwoFactorAuth";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    emailNotifications: true,
    smsNotifications: true,
    autoBackup: true,
    clearCache: false,
    password: "",
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handlePasswordChange = (e) => {
    setSettings({ ...settings, password: e.target.value });
  };

  const handleSaveChanges = () => {
    if (settings.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Simulating API call
    setTimeout(() => {
      setIsUpdated(true);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Settings
        </h2>

        {/* Security Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Security</h3>

          {/* <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 dark:text-gray-300">Enable Two-Factor Authentication</span>
            <input
              type="checkbox"
              checked={settings.twoFactorAuth}
              onChange={() => handleToggle("twoFactorAuth")}
              className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
            />
          </div> */}
          <TwoFactorAuth/>

          <div className="py-2">
            <label className="block font-semibold text-gray-700 dark:text-gray-300">Change Password</label>
            <input
              type="password"
              value={settings.password}
              onChange={handlePasswordChange}
              className="mt-2 border p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Notifications Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Notifications</h3>

          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 dark:text-gray-300">Receive Email Notifications</span>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={() => handleToggle("emailNotifications")}
              className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 dark:text-gray-300">Receive SMS Notifications</span>
            <input
              type="checkbox"
              checked={settings.smsNotifications}
              onChange={() => handleToggle("smsNotifications")}
              className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Data & Backup Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Data & Backup</h3>

          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 dark:text-gray-300">Enable Automatic Backup</span>
            <input
              type="checkbox"
              checked={settings.autoBackup}
              onChange={() => handleToggle("autoBackup")}
              className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 dark:text-gray-300">Clear Cache</span>
            <input
              type="checkbox"
              checked={settings.clearCache}
              onChange={() => handleToggle("clearCache")}
              className="w-5 h-5 accent-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSaveChanges}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-4 disabled:bg-gray-400"
          disabled={settings.password.length < 6}
        >
          Save Changes
        </button>

        {isUpdated && (
          <p className="text-green-600 text-center mt-4">Settings Updated Successfully!</p>
        )}
      </div>
    </div>
  );
}
