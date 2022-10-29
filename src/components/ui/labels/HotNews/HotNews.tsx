import { FC } from 'react';
import s from './HotNews.module.scss';

export const HotNews: FC = () => {
	return (
		<div className={s.label}>
			<img src="/icons/labels/hot.svg" alt="news with photo" />
			<span>Термінова новина</span>
		</div>
	);
};
