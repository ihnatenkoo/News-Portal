import { FC, PropsWithChildren } from 'react';
import s from './LayoutWithAside.module.scss';
import cn from 'classnames';

interface ILayoutWithAside extends PropsWithChildren {
	className: string;
}

const LayoutWithAside: FC<ILayoutWithAside> = ({ children, className }) => {
	return <section className={cn(s.layout, className)}>{children}</section>;
};
export default LayoutWithAside;
