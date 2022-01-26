import React from "react";
import ReactDOM from "react-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import GlobalStyles from "../src/styles/GlobalStyles.styles";
import Theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);
