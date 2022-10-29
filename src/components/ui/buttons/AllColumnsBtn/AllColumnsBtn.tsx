import { FC } from 'react';
import s from './AllColumnsBtn.module.scss';

export const AllColumnsBtn: FC = () => {
	return (
		<button className={s.btn}>
			<span>Всі колонки</span>
		</button>
	);
};
