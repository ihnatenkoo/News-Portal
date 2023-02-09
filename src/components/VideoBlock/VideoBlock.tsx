import { FC } from 'react';
import { HTag, Date } from '../ui';
import s from './VideoBlock.module.scss';

const videosData = [
	{
		id: '1',
		title: 'Ватажок "ДНР" підтвердив підготовку самосуду над полоненим...',
		thumb: '/images/videos/2.jpg',
	},
	{
		id: '2',
		title: '"Спекотні літні канікули": Міноборони України попередило...',
		thumb: '/images/videos/3.jpg',
	},
	{
		id: '3',
		title: 'Під москвою палала військова частина, де проходять службу...',
		thumb: '/images/videos/4.jpg',
	},
	{
		id: '4',
		title:
			'СБУ затримала в Києві "військового експерта", який працював на росію...',
		thumb: '/images/videos/5.jpg',
	},
];

const VideoBlock: FC = () => {
	return (
		<section className={s.section}>
			<div className={s.section__head}>
				<HTag tag="h2" className={s.section__head_title}>
					Вiдео
				</HTag>
				<button>
					<a className={s.link}>
						<HTag tag="h5" className={s.link__title}>
							Більше новин
						</HTag>
						<img
							src="/icons/arrow-right-white.svg"
							alt="more news"
							className={s.link__img}
						/>
					</a>
				</button>
			</div>

			<div className={s.section__inner}>
				<div className={s.main_card}>
					<img src="/images/videos/1.jpg" alt="video" />
					<Date className={s.main_card_date}>05 серпня 11:00</Date>
					<HTag tag="h2" className={s.main_card_title}>
						"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником
					</HTag>
				</div>

				<div className={s.cards}>
					{videosData.map((video) => (
						<div className={s.cards__item} key={video.id}>
							<img src={video.thumb} alt="video" />
							<Date className={s.cards__item_date}>05 серпня 11:00</Date>
							<HTag tag="h4" className={s.cards__item_title}>
								{video.title}
							</HTag>
						</div>
					))}
				</div>

				<button className={s.button}>Більше</button>
			</div>
		</section>
	);
};

export default VideoBlock;
