import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
    html,
    body {
	background: linear-gradient(180deg, rgba(238,237,240,1),rgba(246,238,228,1),rgba(225,215,220,1));
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
	color: #515051;
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
h1 {
    font-size: 1.8rem;
    font-weight: 500
}
h2 {
    font-size: 1.4rem;
    font-weight: 500
}
h3 {
    font-size: 1.2rem;
}
p {
    font-size: 1rem;
}
li {
    font-size: 1rem;
}
@media (max-width: 768px) {
    h1 {
    font-size: 1.6rem;
    }
    h2 {
    font-size: 1.2rem;
    }
    h3 {
    font-size: 1rem;
    }
    p {
    font-size: 0.9rem;
    }
    li {
    font-size: 0.9rem;
}
}
    `;

export default GlobalStyles;
