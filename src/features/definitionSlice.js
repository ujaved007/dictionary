import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDefinition = createAsyncThunk("definition/getDefinition", async (search) => {
	return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`).then((res) => res.json());
});

const definitionSlice = createSlice({
	name: "definition",
	initialState: {
		data: [],
		status: null,
	},
	extraReducers: {
		[getDefinition.pending]: (state, action) => {
			state.status = "loading";
		},
		[getDefinition.fulfilled]: (state, { payload }) => {
			state.data = payload;
			state.status = "success";
		},
		[getDefinition.rejected]: (state, action) => {
			state.status = "failed";
		},
	},
});

export default definitionSlice.reducer;
