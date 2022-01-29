import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { WrapperCenter } from "../styles/MainStyles.styles";

const AuthWrapper = ({ children }) => {
	const { isLoading, error } = useAuth0();

	if (isLoading) {
		return (
			<WrapperCenter>
				<h1>Loading...</h1>
			</WrapperCenter>
		);
	}
	if (error) {
		return (
			<WrapperCenter>
				<h1>{error.message}</h1>
			</WrapperCenter>
		);
	}
	return <>{children}</>;
};

export default AuthWrapper;
