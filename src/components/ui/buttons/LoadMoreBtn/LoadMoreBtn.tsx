import { FC } from 'react';
import s from './LoadMoreBtn.module.scss';

export const LoadMoreBtn: FC = () => {
	return (
		<button className={s.btn}>
			<img src="/icons/load-more.svg" alt="load more" />
			<span>Завантажити ще</span>
		</button>
	);
};
