import { useState, useLayoutEffect } from 'react';

interface IMediaResult {
	isLoopIntroSlider?: boolean;
	isLoopAsideColumns?: boolean;
}

const queries = ['(max-width: 1300px)', '(max-width: 991px)'];

export const useMatchMedia = (): IMediaResult => {
	const mediaQueryLists = queries.map((query) => matchMedia(query));

	const getValues = () => mediaQueryLists.map((list) => list.matches);

	const [values, setValues] = useState(getValues);

	useLayoutEffect(() => {
		const handler = () => setValues(getValues);

		mediaQueryLists.forEach((list) => list.addEventListener('change', handler));

		return () =>
			mediaQueryLists.forEach((list) =>
				list.removeEventListener('change', handler)
			);
	}, []);

	return ['isLoopIntroSlider', 'isLoopAsideColumns'].reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: values[index],
		}),
		{}
	);
};
