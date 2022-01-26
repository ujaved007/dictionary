import styled from "styled-components";

export const BtnMd = styled.button`
	font-size: 1.2rem;
	padding: 10px 20px 10px 20px;
	border-radius: 20px;
	border-width: 0px;
	background-color: ${(props) => props.theme.colors.lightGrey};
	color: ${(props) => props.theme.colors.black};
	&:hover {
		background: ${(props) => props.theme.colors.darkGrey};
		cursor: pointer;
	}
`;

export const BtnSm = styled(BtnMd)`
	font-size: 1rem;
	font-weight: 400;
	padding: 5px 10px 5px 10px;
	border-radius: 5px;
	border-style: none;
	.sm-marg-right {
		color: red;
	}
`;

export const AudioBtn = styled.button`
	audio {
		width: inherit;
		height: inherit;
	}
`;
