import { FC, PropsWithChildren } from 'react';
import s from './LayoutWithAside.module.scss';
import cn from 'classnames';

interface ILayoutWithAside extends PropsWithChildren {
	className: string;
}

const LayoutWithAside: FC<ILayoutWithAside> = ({ children, className }) => {
	return <div className={cn(s.layout, className, 'container')}>{children}</div>;
};
export default LayoutWithAside;
