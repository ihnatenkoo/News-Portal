import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './BottomBar.module.scss';

const categories = [
	'війна',
	'новини',
	'політика',
	'економіка',
	'суспільство',
	'погляди',
	'світ',
];

const BottomBar: FC = () => {
	return (
		<nav className={s.nav}>
			<Swiper
				slidesPerView={'auto'}
				breakpoints={{
					320: { spaceBetween: 25 },
					1024: {
						spaceBetween: 50,
					},
					1300: {
						spaceBetween: 100,
					},
				}}
				style={{ width: '100%' }}
			>
				{categories.map((m) => (
					<SwiperSlide key={m} className={s.nav__links}>
						{m === 'війна' && <img src="/icons/fair.svg" alt="fair" />}
						<a>{m}</a>
					</SwiperSlide>
				))}
			</Swiper>

			<div className={s.nav__live}>
				<img src="/icons/live-dot.svg" alt="live" />
				<span>LIVE</span>
			</div>
		</nav>
	);
};

export default BottomBar;
