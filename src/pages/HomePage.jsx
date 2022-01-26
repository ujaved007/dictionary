import React from "react";
import { useState, useEffect, useRef } from "react";

import Navbar from "../components/Navbar";

import { MainWrapper } from "../styles/MainStyles.styles";
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
	AudioWrapper,
} from "../styles/Dictionary.styles";

const HomePage = () => {
	const isMounted = useRef(false);
	const [data, setData] = useState([]);
	const [value, setValue] = useState("");
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	//for searching dictionary
	const handleSearchClick = () => {
		setSearch(value);
	};
	//for linkclicks
	const handleLinkClick = (link) => {
		setSearch(link);
	};
	useEffect(() => {
		//using isMounted to prevent running useEffect on mount
		if (isMounted.current) {
			fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
				.then((res) => res.json())
				.then((result) => setData(result));
		} else {
			isMounted.current = true;
		}
	}, [search]);
	console.log(data);

	return (
		<MainWrapper>
			<Navbar />
			<SearchWrapper>
				<SearchField placeholder="Search the dictionary...." onChange={handleChange} />
				<BtnMd onClick={handleSearchClick}>Search</BtnMd>
			</SearchWrapper>
			{data.map((item, index) => {
				return (
					<DictionaryWrapper key={index}>
						<DictionaryHeader>
							<TitleWrapper>
								<h1>{item.word}</h1>
								{item.phonetics.map((audio, index) => {
									return (
										<AudioWrapper key={index}>
											<audio controls>
												<source src={audio.audio} type="audio/ogg" />
												<source src={audio.audio} type="audio/mpeg" />
												<source src={audio.audio} type="audio/mp3" />
											</audio>
										</AudioWrapper>
									);
								})}
							</TitleWrapper>
							<p>/{item.phonetic}/</p>
						</DictionaryHeader>
						{item.meanings.map((meaning, index) => {
							return (
								<div key={index}>
									<DictionaryHeadingMd>{meaning.partOfSpeech}:</DictionaryHeadingMd>
									{meaning.definitions.map((definitions, index) => {
										return (
											<div key={index}>
												<DictionaryDefintion>
													<li>
														{definitions.definition}
														<br />
														{definitions.example && <span className="italics">{definitions.example}</span>}
													</li>
												</DictionaryDefintion>
												{definitions.synonyms.length !== 0 && <DictionaryHeadingSm>synonyms:</DictionaryHeadingSm>}
												<LinksWrapper>
													{definitions.synonyms.map((synonym, index) => {
														return (
															<BtnSm className="sm-marg-right" key={index} onClick={() => handleLinkClick(synonym)}>
																{synonym}
															</BtnSm>
														);
													})}
												</LinksWrapper>
												{definitions.antonyms.length !== 0 && <DictionaryHeadingSm>antonyms:</DictionaryHeadingSm>}
												<LinksWrapper>
													{definitions.antonyms.map((antonym, index) => {
														return (
															<BtnSm className="sm-marg-right" key={index} onClick={() => handleLinkClick(antonym)}>
																{antonym}
															</BtnSm>
														);
													})}
												</LinksWrapper>
											</div>
										);
									})}
								</div>
							);
						})}
						<>
							{item.origin && <DictionaryHeadingMd>origin:</DictionaryHeadingMd>}
							<p>{item.origin}</p>
						</>
					</DictionaryWrapper>
				);
			})}
		</MainWrapper>
	);
};

export default HomePage;
