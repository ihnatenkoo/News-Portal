import { FC } from 'react';
import { Header } from './components/Header/Header';
import WarStatistic from './components/WarStatistic/WarStatistic';

const App: FC = () => {
	return (
		<main>
			<Header />
			<WarStatistic />
		</main>
	);
};

export default App;
