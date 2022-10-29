import { PropsWithChildren } from 'react';
import s from './htag.module.scss';
import cn from 'classnames';

interface HTagProps extends PropsWithChildren {
	tag: 'h2' | 'h3' | 'h4' | 'h5';
	className?: string;
}

export const HTag = ({ tag, children, className }: HTagProps): JSX.Element => {
	switch (tag) {
		case 'h2':
			return <h2 className={cn(s.h2, className)}>{children}</h2>;
		case 'h3':
			return <h3 className={cn(s.h3, className)}>{children}</h3>;
		case 'h4':
			return <h4 className={cn(s.h4, className)}>{children}</h4>;
		case 'h5':
			return <h5 className={cn(s.h5, className)}>{children}</h5>;
		default:
			return <></>;
	}
};
