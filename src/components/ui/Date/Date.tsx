import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import s from './Date.module.scss';

interface IDate extends PropsWithChildren {
	type?: 'full-date' | 'time' | 'accent';
	className?: string;
}

export const Date: FC<IDate> = ({
	children,
	type = 'full-date',
	className,
}) => {
	return (
		<span
			className={cn(s.date, className, {
				[s.accent]: type === 'accent',
				[s.only_time]: type === 'time',
			})}
		>
			{children}
		</span>
	);
};
