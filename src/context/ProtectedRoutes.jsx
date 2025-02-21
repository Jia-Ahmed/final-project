import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;





