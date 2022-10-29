import { FC } from 'react';
import { Date } from '../../ui';
import s from './AllNews.module.scss';

const AllNews: FC = () => {
	return (
		<aside className={s.aside}>
			<Date type="time"> 14-55</Date>
		</aside>
	);
};
export default AllNews;
