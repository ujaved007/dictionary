import React from "react";
import { WrapperCenter, CardMd } from "../styles/MainStyles.styles";
import { BtnMd } from "../styles/Buttons.styles";

const LoginPage = () => {
	return (
		<WrapperCenter>
			<CardMd>
				<div className="card-md-center">
					<h2>Please Sign in or Sign up to use the dictionary</h2>
					<BtnMd>Sign in / Sign up</BtnMd>
				</div>
			</CardMd>
		</WrapperCenter>
	);
};

export default LoginPage;
