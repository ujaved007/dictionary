import React from "react";
import { Outlet } from "react-router";
import LoginPage from "./LoginPage";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = () => {
	const { isAuthenticated, user } = useAuth0();
	const isUser = isAuthenticated && user;
	return isUser ? <Outlet /> : <LoginPage />;
};

export default PrivateRoute;
