import { FC } from 'react';
import s from './WarStatistic.module.scss';

const daysOfWar = '247';

const statisticData = [
	{
		id: 1,
		name: 'особовий склад',
		count: '~69700',
		icon: '/icons/statistic/helmet.svg',
	},
	{ id: 2, name: 'танки', count: '2640', icon: '/icons/statistic/tank.svg' },
	{
		id: 3,
		name: 'артсистеми',
		count: '4578',
		icon: '/icons/statistic/art.svg',
	},
	{ id: 4, name: 'лiтаки', count: '272', icon: '/icons/statistic/fly.svg' },
	{ id: 5, name: 'РЗСВ', count: '379', icon: '/icons/statistic/missile.svg' },
	{
		id: 6,
		name: 'гелiкоптери',
		count: '251',
		icon: '/icons/statistic/helicopter.svg',
	},
	{ id: 7, name: 'ББМ', count: '5378', icon: '/icons/statistic/bbm.svg' },
];

const WarStatistic: FC = () => {
	return (
		<section className={s.stats}>
			<div className={s.stats__days}>{daysOfWar} день вiйни:</div>
			<div className={s.stats__count}>
				{statisticData.map((stat) => (
					<div key={stat.id} className={s.stats__count_item}>
						<img src={stat.icon} alt={stat.name} />
						<p>
							{stat.name} <span>{stat.count}</span>
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WarStatistic;
