import { FC } from 'react';
import s from './LoadMoreBtn.module.scss';
import cn from 'classnames';

interface IButton {
	className?: string;
}

export const LoadMoreBtn: FC<IButton> = ({ className }) => {
	return (
		<button className={cn(s.btn, className)}>
			<img src="/icons/load-more.svg" alt="load more" />
			<span>Завантажити ще</span>
		</button>
	);
};
