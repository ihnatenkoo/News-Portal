import { FC } from 'react';
import s from './Exclusive.module.scss';

export const Exclusive: FC = () => {
	return (
		<span className={s.exclusive}>
			<img src="/icons/labels/exclusive.svg" alt="exclusive" />
			<span className={s.exclusive__text}>Ексклюзив</span>
		</span>
	);
};
