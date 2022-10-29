import { FC } from 'react';
import { Date, HTag } from '../../ui';
import s from './RegionCard.module.scss';

const RegionCard: FC = () => {
	return (
		<div className={s.card}>
			<HTag tag="h3" className={s.card__title}>
				Київ
			</HTag>
			<div className={s.card__inner}>
				<div className={s.article}>
					<Date type="accent">05 серпня</Date>
					<HTag tag="h5" className={s.article__title}>
						<Date type="time">14:59</Date>
						Ремонт зруйнованого російськими ракетами будинку у Сергіївці
						коштуватиме понад 40 млн гривень
					</HTag>
				</div>
				<div className={s.article}>
					<HTag tag="h5" className={s.article__title}>
						<Date type="time">14:59</Date>
						Ремонт зруйнованого російськими ракетами будинку у Сергіївці
						коштуватиме понад 40 млн гривень
					</HTag>
				</div>
				<div className={s.article}>
					<HTag tag="h5" className={s.article__title}>
						<Date type="time">14:59</Date>
						Ремонт зруйнованого російськими ракетами будинку у Сергіївці
						коштуватиме понад 40 млн гривень
					</HTag>
				</div>
			</div>

			<a href="#" className={s.card__footer}>
				<HTag tag="h5" className={s.card__footer_title}>
					Більше новин
				</HTag>
				<img
					src="/icons/arrow-right.svg"
					alt="more news"
					className={s.card__footer_img}
				/>
			</a>
		</div>
	);
};

export default RegionCard;
