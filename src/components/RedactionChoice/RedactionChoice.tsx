import { FC } from 'react';
import { HTag, Date, LoadMoreBtn } from '../ui';
import s from './RedactionChoice.module.scss';

const newsData = [
	{
		id: 1,
		title:
			'Ці фото – це наша з вами історія. Саме ці фото будуть у підручниках з новітньої історії України. ',
		date: '05 серпня 11:00',
		img: '/images/article/3.jpg',
	},
	{
		id: 2,
		title:
			'Велика Британія почне готувати українських пілотів на винищувачах західного зразка.',
		date: '05 серпня 11:00',
		img: '/images/article/1.jpg',
	},
	{
		id: 3,
		title:
			'Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.',
		date: '05 серпня 11:00',
		img: '/images/article/2.jpg',
	},
	{
		id: 4,
		title:
			'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
		date: '05 серпня 11:00',
		img: '/images/article/4.jpg',
	},
	{
		id: 5,
		title:
			'Ласкаво просимо додому, ласкаво просимо до Європейського Союзу, Володимире Зеленський',
		date: '05 серпня 11:00',
		img: '/images/article/5.jpg',
	},
	{
		id: 6,
		title:
			'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
		date: '05 серпня 11:00',
		img: '/images/article/4.jpg',
	},
];

const RedactionChoice: FC = () => {
	return (
		<section className={s.section}>
			<HTag className={s.section__title} tag="h2">
				Вибір редакції
			</HTag>
			<div className={s.news}>
				{newsData.map((news) => (
					<div className={s.news__item} key={news.id}>
						<img
							src={news.img}
							alt="news poster"
							className={s.news__item_img}
						/>
						<Date>{news.date}</Date>
						<HTag tag="h4" className={s.news__item_title}>
							{news.title}
						</HTag>
					</div>
				))}
			</div>

			<LoadMoreBtn className={s.button} />
		</section>
	);
};

export default RedactionChoice;
