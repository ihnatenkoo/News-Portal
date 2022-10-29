import { FC } from 'react';
import { HTag, Date } from '../ui';
import s from './RedactionChoice.module.scss';

const newsData = [
	{
		id: 1,
		title:
			'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
		date: '05 серпня 11:00',
		img: '/images/redaction-choice/main.jpg',
	},
	{
		id: 2,
		title:
			'Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.',
		date: '05 серпня 11:00',
		img: '/images/redaction-choice/main.jpg',
	},
	{
		id: 3,
		title:
			'Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.',
		date: '05 серпня 11:00',
		img: '/images/redaction-choice/main.jpg',
	},
	{
		id: 4,
		title:
			'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
		date: '05 серпня 11:00',
		img: '/images/redaction-choice/main.jpg',
	},
	{
		id: 5,
		title:
			'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи.',
		date: '05 серпня 11:00',
		img: '/images/redaction-choice/main.jpg',
	},
	{
		id: 6,
		title:
			'Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо.',
		date: '05 серпня 11:00',
		img: '/images/redaction-choice/main.jpg',
	},
];

const RedactionChoice: FC = () => {
	return (
		<section>
			<HTag className={s.section_title} tag="h2">
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
		</section>
	);
};

export default RedactionChoice;
