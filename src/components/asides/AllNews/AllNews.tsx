import { FC, useState } from 'react';
import { HTag, Date, Tabs } from '../../ui';
import { WithPhoto, HotNews } from '../../ui/labels/';
import { LoadMoreBtn } from '../../ui/buttons/';
import s from './AllNews.module.scss';
import cn from 'classnames';

const tabsData = [
	{ id: 1, name: 'Всi' },
	{ id: 2, name: 'Новини' },
	{ id: 3, name: 'Статi' },
];

const articles = [
	{
		id: 1,
		title:
			'"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
		isHot: false,
		isWithPhoto: false,
		categories: ['Всi', 'Статi'],
	},
	{
		id: 2,
		title:
			'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
		isHot: false,
		isWithPhoto: true,
		categories: ['Всi', 'Новини'],
	},
	{
		id: 3,
		title:
			"Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене",
		isHot: false,
		isWithPhoto: false,
		categories: ['Всi', 'Статi'],
	},
	{
		id: 4,
		title:
			'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
		isHot: true,
		isWithPhoto: false,
		categories: ['Всi', 'Новини'],
	},
	{
		id: 5,
		title: 'Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф',
		isHot: false,
		isWithPhoto: false,
		categories: ['Всi', 'Статi'],
	},
	{
		id: 6,
		title:
			'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
		isHot: false,
		isWithPhoto: false,
		categories: ['Всi', 'Статi'],
	},
	{
		id: 7,
		title:
			'"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
		isHot: false,
		isWithPhoto: false,
		categories: ['Всi', 'Статi'],
	},
	{
		id: 8,
		title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
		isHot: false,
		isWithPhoto: false,
		categories: ['Всi', 'Статi'],
	},
	{
		id: 9,
		title:
			'"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
		isHot: false,
		isWithPhoto: false,
		categories: ['Всi', 'Статi'],
	},
	{
		id: 10,
		title: 'Жданов назвав три питання, які обговорять путін і Ердоган',
		isHot: false,
		isWithPhoto: false,
		categories: ['Всi', 'Статi'],
	},
];

const AllNews: FC = () => {
	const [activeCategory, setActiveCategory] = useState<string>('Всi');

	return (
		<aside className={s.aside}>
			<header className={s.aside__header}>
				<HTag tag="h3">Всі новини</HTag>
				<a href="#" className={s.aside__header_archive}>
					Архiв
				</a>
			</header>

			<Tabs tabsData={tabsData} onChangeCategory={setActiveCategory} />

			<div className={s.aside__content}>
				{articles.map((news) => {
					if (news.categories?.includes(activeCategory)) {
						return (
							<article className={s.article} key={news.id}>
								<HTag
									tag="h5"
									className={cn(s.article__title, {
										[s.bold]: news.isHot,
									})}
								>
									{news.isWithPhoto && <WithPhoto />}
									{news.isHot && <HotNews />}
									<Date type="time">14:59</Date>
									{news.title}
								</HTag>
							</article>
						);
					}
				})}
			</div>

			<LoadMoreBtn />
		</aside>
	);
};

export default AllNews;
