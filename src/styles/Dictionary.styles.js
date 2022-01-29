import styled from "styled-components";

export const SearchWrapper = styled.div`
	display: flex;
`;

export const SearchField = styled.input`
	background-color: white;
	width: 60%;
	font-size: 1.2rem;
	padding: 15px 20px 15px 20px;
	border: none;
	border-radius: 20px;
	color: ${(props) => props.theme.colors.black};
	margin-right: 30px;
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
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: -30px;
`;

export const AudioWrapper = styled.div`
	margin-left: 20px;
	& > audio {
		width: 12rem;
		display: flex;
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
