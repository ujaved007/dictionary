import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getDefinition } from "../features/definitionSlice";

import { SearchWrapper, SearchField } from "../styles/Dictionary.styles";
import { BtnMd } from "../styles/Buttons.styles";

const Search = () => {
	const dispatch = useDispatch();

	const isMounted = useRef(false);
	const [value, setValue] = useState("");
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSearchClick = () => {
		setSearch(value);
	};

	useEffect(() => {
		//using isMounted to prevent running useEffect on mount
		if (isMounted.current) {
			dispatch(getDefinition(search));
		} else {
			isMounted.current = true;
		}
	}, [search]);

	return (
		<SearchWrapper>
			<SearchField placeholder="Search the dictionary...." onChange={handleChange} />
			<BtnMd onClick={handleSearchClick}>Search</BtnMd>
		</SearchWrapper>
	);
};

export default Search;
