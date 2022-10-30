import { FC } from 'react';
import LayoutWithAside from '../../layouts/LayoutWithAside';
import ColumnsAside from '../asides/Columns/Columns';
import NewsSection from '../NewsSection/NewsSection';
import Promo from '../Promo/Promo';
import s from './CategoriesBlock.module.scss';
import {
	economicsData,
	lifestyleData,
	politicsData,
} from './categoriesNewsData';

const CategoriesBlock: FC = () => {
	return (
		<LayoutWithAside className={s.section}>
			<ColumnsAside />
			<div className={s.content}>
				<NewsSection category="Політика" newsData={politicsData} />
				<Promo />
				<NewsSection category="Економіка" newsData={economicsData} />
				<NewsSection category="Лайфстайл" newsData={lifestyleData} />
			</div>
		</LayoutWithAside>
	);
};

export default CategoriesBlock;
