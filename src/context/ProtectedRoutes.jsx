import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //const { isAuthenticated } = useContext(AuthContext);
  const isAuthenticated = !!localStorage.getItem("authToken"); // Ensure token is checked

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;





