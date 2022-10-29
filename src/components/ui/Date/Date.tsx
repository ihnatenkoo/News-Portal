import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import s from './Date.module.scss';

interface IDate extends PropsWithChildren {
	type?: 'full-date' | 'time' | 'accent';
}

export const Date: FC<IDate> = ({ children, type = 'full-date' }) => {
	return (
		<span
			className={cn(s.date, {
				[s.accent]: type === 'accent',
				[s.only_time]: type === 'time',
			})}
		>
			{children}
		</span>
	);
};
