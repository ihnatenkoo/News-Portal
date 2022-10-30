import { FC, PropsWithChildren } from 'react';
import { HTag } from '../../HTag/HTag';
import s from './MoreNews.module.scss';

export const MoreNews: FC<PropsWithChildren> = ({ children }) => {
	return (
		<button>
			<a href="#" className={s.link}>
				<HTag tag="h5" className={s.link__title}>
					{children}
				</HTag>
				<img
					src="/icons/arrow-right.svg"
					alt="more news"
					className={s.link__img}
				/>
			</a>
		</button>
	);
};
