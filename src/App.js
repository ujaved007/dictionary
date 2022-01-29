import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./pages/PrivateRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AuthWrapper from "./pages/AuthWrapper";

function App() {
	return (
		<AuthWrapper>
			<BrowserRouter>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path="/" element={<HomePage />} />
					</Route>
					<Route path="login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</AuthWrapper>
	);
}

export default App;
