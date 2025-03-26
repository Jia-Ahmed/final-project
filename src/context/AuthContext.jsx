import React from "react";
import { createContext, useState,useContext,useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
!!localStorage.getItem("authToken") // Check if token exists in localStorage
const navigate = useNavigate();

  const login = () => {
 localStorage.setItem("authToken", "your-secret-token"); // Store token
    setIsAuthenticated(true);
   navigate("/admin/");
  
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/admin/login");
  
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
