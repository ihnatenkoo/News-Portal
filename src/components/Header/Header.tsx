import { FC } from 'react';
import BottomBar from './BottomBar/BottomBar';
import TopBar from './TopBar/TopBar';

export const Header: FC = () => {
	return (
		<header>
			<TopBar />
			<BottomBar />
		</header>
	);
};
