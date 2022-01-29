import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { NavbarWrapper, Logo } from "../styles/MainStyles.styles";
import { BtnMd } from "../styles/Buttons.styles";

const Navbar = () => {
	const { logout } = useAuth0();
	return (
		<NavbarWrapper>
			<Logo>Dictionary</Logo>
			<BtnMd onClick={() => logout({ returnTo: "http://localhost:3000/login" })}>Logout</BtnMd>
		</NavbarWrapper>
	);
};

export default Navbar;
