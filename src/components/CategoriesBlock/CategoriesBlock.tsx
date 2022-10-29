import { FC } from 'react';
import LayoutWithAside from '../../layouts/LayoutWithAside';
import Columns from '../asides/Columns/Columns';
import s from './CategoriesBlock.module.scss';

const CategoriesBlock: FC = () => {
	return (
		<LayoutWithAside className={s.section}>
			<Columns />
			<div className={s.content}>
				<span>content</span>
				<span>content</span>
				<span>content</span>
			</div>
		</LayoutWithAside>
	);
};

export default CategoriesBlock;
