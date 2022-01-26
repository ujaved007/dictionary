import { configureStore } from "@reduxjs/toolkit";
import definitionReducer from "../features/definitionSlice";

export const store = configureStore({
	reducer: {
		definition: definitionReducer,
	},
});
