import styled from "styled-components";

export const SearchWrapper = styled.div`
	display: flex;
	@media (max-width: 425px) {
		flex-direction: column;
		align-items: flex-start;
		& > button {
			margin-top: 10px;
		}
	}
`;

export const SearchField = styled.input`
	background-color: white;
	width: 35em;
	font-size: 1.2rem;
	padding: 0.8em 1.5em 0.8em 1.5em;
	border: none;
	border-radius: 1rem;
	color: ${(props) => props.theme.colors.black};
	margin-right: 1.2em;
	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 0.8em 1.4em 0.8em 1.4em;
		width: 88%;
	}
`;

export const DictionaryWrapper = styled.section`
	width: inherit;
	padding: 5px 20px 30px 20px;
	margin-top: 40px;
	background-color: white;
	border-radius: 20px;
`;

export const DictionaryHeader = styled.div`
	margin-bottom: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	@media (max-width: 425px) {
		align-items: flex-start;
		flex-direction: column;
	}
`;

export const TitleWrapper = styled.div`
	& > h1 {
		margin-bottom: -10px;
	}
`;

export const AudioWrapper = styled.div`
	margin-left: 20px;
	& > audio {
		width: 12rem;
		display: flex;
	}
	@media (max-width: 425px) {
		margin-left: 0px;
	}
`;

export const DictionaryHeadingMd = styled.h1`
	font-size: 1.2rem;
	font-weight: 500;
	color: ${(props) => props.theme.colors.blue}; ;
`;

export const DictionaryDefintion = styled.ul`
	line-height: 1.6rem;
	.italics {
		font-style: italic;
		opacity: 80%;
	}
`;

export const DictionaryHeadingSm = styled.h2`
	font-size: 1rem;
	font-weight: 500;
	color: ${(props) => props.theme.colors.green};
`;

export const LinksWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: -5px;
	& > button:not(:last-child) {
		margin-right: 8px;
	}
	& > button {
		margin-bottom: 10px;
	}
`;
