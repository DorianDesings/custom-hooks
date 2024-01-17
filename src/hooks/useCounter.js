import { useState } from 'react';

export const useCounter = () => {
	const [counter, setCounter] = useState({
		value: 0,
		clicks: 0
	});

	const increment = () => {
		setCounter({ value: counter.value + 1, clicks: counter.clicks + 1 });
	};

	const decrement = () => {
		setCounter({ value: counter.value - 1, clicks: counter.clicks + 1 });
	};

	const reset = () => {
		setCounter({ value: 0, clicks: 0 });
	};

	return { counter, increment, decrement, reset };
};
