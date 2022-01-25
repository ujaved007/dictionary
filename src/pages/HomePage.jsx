import React from "react";
import { useState, useEffect } from "react";

import { MainWrapper, Navbar, Logo } from "../styles/MainStyles.styles";
import { BtnMd, BtnSm } from "../styles/Buttons.styles";
import {
	SearchWrapper,
	SearchField,
	DictionaryWrapper,
	DictionaryHeader,
	TitleWrapper,
	DictionaryHeadingMd,
	DictionaryDefintion,
	DictionaryHeadingSm,
	LinksWrapper,
} from "../styles/Dictionary.styles";

const HomePage = () => {
	const [data, setData] = useState([]);

	return (
		<MainWrapper>
			<Navbar>
				<Logo>Dictionary</Logo>
				<BtnMd>Logout</BtnMd>
			</Navbar>
			<SearchWrapper>
				<SearchField placeholder="Search the dictionary...." />
				<BtnMd>Search</BtnMd>
			</SearchWrapper>
			<DictionaryWrapper>
				<DictionaryHeader>
					<TitleWrapper>
						<h1>syntax</h1>
					</TitleWrapper>
					<p>/ˈsɪntaks/</p>
				</DictionaryHeader>
				<div>
					<DictionaryHeadingMd>adjective:</DictionaryHeadingMd>
					<DictionaryDefintion>
						<li>
							(of a place) situated far from the main centres of population; distant.
							<br />
							<span className="italics">“the valley is remote from the usual tourist routes”</span>
						</li>
					</DictionaryDefintion>
					<DictionaryHeadingSm>Synonyms:</DictionaryHeadingSm>
					<LinksWrapper>
						<BtnSm className="sm-marg-right">faraway</BtnSm>
						<BtnSm className="sm-marg-right">faraway</BtnSm>
					</LinksWrapper>
				</div>
			</DictionaryWrapper>
		</MainWrapper>
	);
};

export default HomePage;
