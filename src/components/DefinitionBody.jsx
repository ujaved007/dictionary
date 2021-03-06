import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDefinition } from "../features/definitionSlice";

import { BtnSm } from "../styles/Buttons.styles";
import {
	DictionaryWrapper,
	DictionaryHeader,
	TitleWrapper,
	DictionaryHeadingMd,
	DictionaryDefintion,
	DictionaryHeadingSm,
	LinksWrapper,
	AudioWrapper,
} from "../styles/Dictionary.styles";

const DefinitionBody = () => {
	const data = useSelector((state) => state.definition.data);
	const status = useSelector((state) => state.definition.status);

	const dispatch = useDispatch();
	const handleClick = (link) => {
		dispatch(getDefinition(link));
	};
	//displays error message if definition not found
	if (data.title) {
		return (
			<DictionaryWrapper>
				<DictionaryHeader className="center">
					<h1>{data.title}</h1> <br />
					<p>
						{data.message} {data.resolution}
					</p>
				</DictionaryHeader>
			</DictionaryWrapper>
		);
	}
	//displays loading message
	if (status === "loading") {
		return (
			<DictionaryWrapper>
				<DictionaryHeader>
					<h1>Loading...</h1>
				</DictionaryHeader>
			</DictionaryWrapper>
		);
	}
	console.log(data);

	return (
		<>
			{data.map((item, index) => {
				return (
					<DictionaryWrapper key={index}>
						<DictionaryHeader>
							<TitleWrapper>
								<h1>{item.word}</h1>
								{item.phonetic && <p>/{item.phonetic}/</p>}
							</TitleWrapper>
							<AudioWrapper>
								{item.phonetics.map((audio, index) => {
									return audio.audio && <audio key={index} controls src={audio.audio} type="audio/mp3" />;
								})}
							</AudioWrapper>
						</DictionaryHeader>
						{item.meanings.map((meaning, index) => {
							return (
								<div key={index}>
									{meaning.partOfSpeech && <DictionaryHeadingMd>{meaning.partOfSpeech}:</DictionaryHeadingMd>}
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
												{definitions.synonyms && (
													<>
														<DictionaryHeadingSm>synonyms:</DictionaryHeadingSm>
														<LinksWrapper>
															{definitions.synonyms.map((synonym, index) => {
																return (
																	<BtnSm key={index} onClick={() => handleClick(synonym)}>
																		{synonym}
																	</BtnSm>
																);
															})}
														</LinksWrapper>
													</>
												)}
												{definitions.antonyms && (
													<>
														<DictionaryHeadingSm>antonyms:</DictionaryHeadingSm>
														<LinksWrapper>
															{definitions.antonyms.map((antonym, index) => {
																return (
																	<BtnSm key={index} onClick={() => handleClick(antonym)}>
																		{antonym}
																	</BtnSm>
																);
															})}
														</LinksWrapper>
													</>
												)}
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
		</>
	);
};

export default DefinitionBody;
