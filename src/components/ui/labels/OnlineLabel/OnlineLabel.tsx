import { FC } from 'react';
import s from './OnlineLabel.module.scss';

export const OnlineLabel: FC = () => {
	return (
		<span className={s.online}>
			<img src="/icons/labels/online.svg" alt="online" />
			<span className={s.online__text}>Онлайн</span>
		</span>
	);
};
