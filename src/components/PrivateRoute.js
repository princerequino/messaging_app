import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Outlet, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    user ? <Outlet  /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;