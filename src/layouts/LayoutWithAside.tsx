import { FC, PropsWithChildren } from 'react';
import s from './LayoutWithAside.module.scss';
import cn from 'classnames';

const LayoutWithAside: FC<PropsWithChildren> = ({ children }) => {
	return <div className={cn(s.layout, 'container')}>{children}</div>;
};
export default LayoutWithAside;
