import React from "react";
import { useSelector } from "react-redux";

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
	console.log(data);
	return (
		<>
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
															<BtnSm className="sm-marg-right" key={index}>
																{synonym}
															</BtnSm>
														);
													})}
												</LinksWrapper>
												{definitions.antonyms.length !== 0 && <DictionaryHeadingSm>antonyms:</DictionaryHeadingSm>}
												<LinksWrapper>
													{definitions.antonyms.map((antonym, index) => {
														return (
															<BtnSm className="sm-marg-right" key={index}>
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
		</>
	);
};

export default DefinitionBody;
