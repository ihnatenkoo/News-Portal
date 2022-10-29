import { FC } from 'react';
import LayoutWithAside from '../../layouts/LayoutWithAside';
import AllNews from '../asides/AllNews/AllNews';
import RedactionChoice from '../RedactionChoice/RedactionChoice';
import Regions from '../Regions/Regions';
import s from './MainBlock.module.scss';

const MainBlock: FC = () => {
	return (
		<LayoutWithAside className={s.section}>
			<AllNews />
			<div className={s.content}>
				<RedactionChoice />
				<Regions />
			</div>
		</LayoutWithAside>
	);
};
export default MainBlock;
