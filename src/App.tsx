import { FC } from 'react';
import { Header } from './components/Header/Header';
import IntroBlock from './components/IntroBlock/IntroBlock';
import MainBlock from './components/MainBlock/MainBlock';
import VideoBlock from './components/VideoBlock/VideoBlock';
import WarStatistic from './components/WarStatistic/WarStatistic';

const App: FC = () => {
	return (
		<main>
			<Header />
			<WarStatistic />
			<IntroBlock />
			<MainBlock />
			<VideoBlock />
		</main>
	);
};

export default App;
