import { FC } from 'react';
import s from './PromoLabel.module.scss';

export const PromoLabel: FC = () => {
	return (
		<span className={s.promo}>
			<img src="/icons/labels/promo.svg" alt="promo" />
			<span className={s.promo__text}>Промо</span>
		</span>
	);
};
