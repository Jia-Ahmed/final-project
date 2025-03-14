import React from "react";
import { createContext, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
   navigate("/admin");
  
  };

  const logout = () => {
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
