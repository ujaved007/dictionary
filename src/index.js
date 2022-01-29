import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

import GlobalStyles from "../src/styles/GlobalStyles.styles";
import Theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
	<Provider store={store}>
		<Auth0Provider
			domain="dev-92p01f9z.us.auth0.com"
			clientId="9H7IH14cIt2dJ6JialSNuWTAJqaQpvXM"
			redirectUri={window.location.origin}
		>
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</Auth0Provider>
	</Provider>,
	document.getElementById("root")
);
