import { FC } from 'react';
import s from './WithPhoto.module.scss';

export const WithPhoto: FC = () => {
	return (
		<div className={s.label}>
			<img src="/icons/labels/with-photo.svg" alt="news with photo" />
			<span>Новина з фото</span>
		</div>
	);
};
