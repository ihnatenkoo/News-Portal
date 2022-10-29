import { FC } from 'react';
import { AllCategoriesTag, HTag } from '../ui/';
import RegionCard from './RegionCard/RegionCard';
import s from './Regions.module.scss';

const Regions: FC = () => {
	return (
		<section>
			<div className={s.head}>
				<HTag tag="h2">Регіони</HTag>
				<AllCategoriesTag>Всі новини розділу</AllCategoriesTag>
			</div>
			<RegionCard />
		</section>
	);
};
export default Regions;
