import React from "react";
import GlobalStyles from "../src/styles/GlobalStyles.styles";
import Theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

import HomePage from "./pages/HomePage";

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
