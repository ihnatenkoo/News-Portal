import { FC } from 'react';
import s from './WithPhoto.module.scss';

const WithPhoto: FC = () => {
	return (
		<div className={s.label}>
			<img src="/icons/labels/with-photo.svg" alt="news with photo" />
			<span>Новина з фото</span>
		</div>
	);
};
export default WithPhoto;
