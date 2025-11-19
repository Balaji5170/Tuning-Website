import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("loggedIn"); // check login state
  if (isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;