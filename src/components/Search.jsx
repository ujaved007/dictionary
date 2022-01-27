import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDefinition } from "../features/definitionSlice";

import { SearchWrapper, SearchField } from "../styles/Dictionary.styles";
import { BtnMd } from "../styles/Buttons.styles";

const Search = () => {
	const dispatch = useDispatch();

	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSearchClick = () => {
		dispatch(getDefinition(value));
	};

	return (
		<SearchWrapper>
			<SearchField placeholder="Search the dictionary...." onChange={handleChange} />
			<BtnMd onClick={handleSearchClick}>Search</BtnMd>
		</SearchWrapper>
	);
};

export default Search;
