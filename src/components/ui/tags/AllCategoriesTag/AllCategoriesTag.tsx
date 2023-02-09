import { FC, PropsWithChildren } from 'react';
import s from './AllCategoriesTag.module.scss';

export const AllCategoriesTag: FC<PropsWithChildren> = ({ children }) => {
	return <a className={s.tag}>{children}</a>;
};
