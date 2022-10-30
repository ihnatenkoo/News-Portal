import { FC } from 'react';
import CategoriesBlock from './components/CategoriesBlock/CategoriesBlock';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import IntroBlock from './components/IntroBlock/IntroBlock';
import MainBlock from './components/MainBlock/MainBlock';
import VideoBlock from './components/VideoBlock/VideoBlock';
import WarStatistic from './components/WarStatistic/WarStatistic';

const App: FC = () => {
	return (
		<main>
			{/* <Header />
			<WarStatistic />
			<IntroBlock />
			<MainBlock />
			<VideoBlock />
			<CategoriesBlock /> */}
			<Footer />
		</main>
	);
};

export default App;
