import styled from "styled-components";

export const MainWrapper = styled.section`
	padding: 0 2.5em 0 2.5em;
	@media (max-width: 768px) {
		padding: 0 1em 0 1em;
	}
	@media (max-width: 425px) {
		padding: 0 0.2em 0 0.2em;
	}
`;

export const WrapperCenter = styled(MainWrapper)`
	display: flex;
	height: 100vh;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const CardMd = styled.div`
	width: 25em;
	height: 20em;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 30px;
	padding: 0 10px 0 10px;
	.card-md-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: inherit;
		text-align: center;
	}
`;

export const NavbarWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		margin-bottom: 10px;
	}
`;

export const Logo = styled.h1`
	font-size: 1.8rem;
	font-weight: 400;
	@media (max-width: 768px) {
		font-size: 1.6rem;
	}
	@media (max-width: 425px) {
		font-size: 1.4rem;
	}
`;
