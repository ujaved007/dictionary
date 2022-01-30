import styled from "styled-components";

export const BtnMd = styled.button`
	font-size: 1.2rem;
	padding: 0.8rem 1.6rem 0.8rem 1.6rem;
	border-radius: 1.2rem;
	border-width: 0px;
	background-color: ${(props) => props.theme.colors.lightGrey};
	color: ${(props) => props.theme.colors.black};
	&:hover {
		background: ${(props) => props.theme.colors.darkGrey};
		cursor: pointer;
	}
	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 0.8rem 1.2rem 0.8rem 1.2rem;
	}
	@media (max-width: 425px) {
		font-size: 0.9rem;
		padding: 0.6rem 1rem 0.6rem 1rem;
	}
`;

export const BtnSm = styled(BtnMd)`
	font-size: 1rem;
	font-weight: 400;
	padding: 5px 10px 5px 10px;
	border-radius: 5px;
	border-style: none;
	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const AudioBtn = styled.button`
	audio {
		width: inherit;
		height: inherit;
	}
`;
