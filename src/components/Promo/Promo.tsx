import { FC } from 'react';
import { Date, HTag } from '../ui';
import { AllCategoriesTag } from '../ui/tags/';
import { PromoLabel } from '../ui/labels/';
import s from './Promo.module.scss';

const Promo: FC = () => {
	return (
		<section className={s.promo}>
			<div className={s.promo__head}>
				<HTag tag="h2">Промо</HTag>
				<AllCategoriesTag>Всі матеріали</AllCategoriesTag>
			</div>

			<div className={s.promo__inner}>
				<img src="/images/promo/promo.jpg" alt="promo" />
				<div className={s.promo__inner_info}>
					<p>
						<Date>05 серпня 11:00</Date>
						<PromoLabel />
					</p>

					<HTag tag="h2">
						Акція! Телевізори Samsung з вигодою та в оплату частинами до 12
						платежів
					</HTag>
				</div>
			</div>

			<div className={s.promo__cards}>
				<div className={s.promo__cards_item}>
					<Date>05 серпня 11:00</Date>
					<HTag tag="h5">
						Замовте нові флагмани Samsung Galaxy Fold4|Flip4 i отримуйте...
					</HTag>
				</div>
				<div className={s.promo__cards_item}>
					<Date>05 серпня 11:00</Date>
					<HTag tag="h5">
						Зустрічай нову серію смартфонів та навушників від Samsung
					</HTag>
				</div>
				<div className={s.promo__cards_item}>
					<Date>05 серпня 11:00</Date>
					<HTag tag="h5">Мобільний телефон Xiaomi Redmi 9C 3/64GB</HTag>
				</div>
			</div>
		</section>
	);
};

export default Promo;
