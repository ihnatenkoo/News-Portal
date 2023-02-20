import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import s from './WarStatistic.module.scss';

const daysOfWar = '401';

const statisticData = [
	{
		id: 1,
		name: 'солдати',
		count: '~200710',
		icon: '/icons/statistic/helmet.svg',
	},
	{ id: 2, name: 'танки', count: '4140', icon: '/icons/statistic/tank.svg' },
	{
		id: 3,
		name: 'артсистеми',
		count: '4578',
		icon: '/icons/statistic/art.svg',
	},
	{ id: 4, name: 'лiтаки', count: '372', icon: '/icons/statistic/fly.svg' },
	{ id: 5, name: 'РЗСВ', count: '479', icon: '/icons/statistic/missile.svg' },
	{
		id: 6,
		name: 'гелiкоптери',
		count: '351',
		icon: '/icons/statistic/helicopter.svg',
	},
	{ id: 7, name: 'ББМ', count: '7378', icon: '/icons/statistic/bbm.svg' },
];

const WarStatistic: FC = () => {
	return (
		<section className={s.stats}>
			<div className={s.stats__days}>{daysOfWar} день вiйни:</div>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={0}
				slidesPerView={7}
				loop={true}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
				speed={2000}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					380: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 5,
					},
					1400: {
						slidesPerView: 7,
					},
				}}
				className={s.stats__count}
			>
				{statisticData.map((stat) => (
					<SwiperSlide key={stat.id}>
						<div className={s.stats__count_item}>
							<img src={stat.icon} alt={stat.name} />
							<p>
								{stat.name} <span>{stat.count}</span>
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default WarStatistic;
