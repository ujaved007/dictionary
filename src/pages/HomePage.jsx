import React from "react";

import Navbar from "../components/Navbar";
import Search from "../components/Search";
import DefinitionBody from "../components/DefinitionBody";

import { MainWrapper } from "../styles/MainStyles.styles";

const HomePage = () => {
	return (
		<MainWrapper>
			<Navbar />
			<Search />
			<DefinitionBody />
		</MainWrapper>
	);
};

export default HomePage;
