import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { WrapperCenter, CardMd } from "../styles/MainStyles.styles";
import { BtnMd } from "../styles/Buttons.styles";

const LoginPage = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<WrapperCenter>
			<CardMd>
				<div className="card-md-center">
					<h2>Please Sign in or Sign up to use the dictionary</h2>
					<BtnMd onClick={loginWithRedirect}>Sign in / Sign up</BtnMd>
				</div>
			</CardMd>
		</WrapperCenter>
	);
};

export default LoginPage;
