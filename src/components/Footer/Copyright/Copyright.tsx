import { FC } from 'react';
import s from './Copyright.module.scss';

const Copyright: FC = () => {
	return (
		<div className={s.copy}>
			<h6 className={s.copy__title}>© 2020-2022, ТОВ «Медіа Мережі»</h6>
			<div className={s.copy__inner}>
				<a href="#">Політика користувача</a>
				<a href="#">Політика конфіденційності</a>
				<a href="#">Політика Cookie-файлів</a>
			</div>
		</div>
	);
};

export default Copyright;
