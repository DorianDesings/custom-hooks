import { useState } from 'react';

export const useTabs = (initialState = 0) => {
	const [tabActive, setTabActive] = useState(initialState);

	const handleTabActive = tabIndex => {
		setTabActive(tabIndex);
	};

	return { tabActive, handleTabActive };
};
