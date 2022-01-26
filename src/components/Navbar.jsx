import React from "react";

import { NavbarWrapper, Logo } from "../styles/MainStyles.styles";
import { BtnMd } from "../styles/Buttons.styles";

const Navbar = () => {
	return (
		<NavbarWrapper>
			<Logo>Dictionary</Logo>
			<BtnMd>Logout</BtnMd>
		</NavbarWrapper>
	);
};

export default Navbar;
