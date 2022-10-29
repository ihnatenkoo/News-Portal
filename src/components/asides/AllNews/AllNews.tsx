import { FC, useState } from 'react';
import { HTag, Date } from '../../ui';
import s from './AllNews.module.scss';
import cn from 'classnames';
import { WithPhoto } from '../../ui/labels/WithPhoto/WithPhoto';
import { HotNews } from '../../ui/labels/HotNews/HotNews';

const tabs = [
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
	},
	{
		id: 2,
		title:
			'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
		isHot: false,
		isWithPhoto: true,
	},
	{
		id: 3,
		title:
			"Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене",
		isHot: false,
		isWithPhoto: false,
	},
	{
		id: 4,
		title:
			'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
		isHot: true,
		isWithPhoto: false,
	},
	{
		id: 5,
		title: 'Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф',
		isHot: false,
		isWithPhoto: false,
	},
	{
		id: 6,
		title:
			'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
		isHot: false,
		isWithPhoto: false,
	},
	{
		id: 7,
		title:
			'"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
		isHot: false,
		isWithPhoto: false,
	},
	{
		id: 8,
		title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
		isHot: false,
		isWithPhoto: false,
	},
	{
		id: 9,
		title:
			'"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
		isHot: false,
		isWithPhoto: false,
	},
	{
		id: 10,
		title: 'Жданов назвав три питання, які обговорять путін і Ердоган',
		isHot: false,
		isWithPhoto: false,
	},
];

const AllNews: FC = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const onTabChange = (index: number): void => {
		setActiveTab(index);
	};

	return (
		<aside className={s.aside}>
			<header className={s.aside__header}>
				<HTag tag="h3">Всі новини</HTag>
				<a href="#" className={s.aside__header_archive}>
					Архiв
				</a>
			</header>

			<ul className={s.aside__tabs}>
				{tabs.map((tab) => (
					<li
						className={cn({ [s.active]: activeTab === tab.id })}
						key={tab.id}
						onClick={() => onTabChange(tab.id)}
					>
						{tab.name}
					</li>
				))}
			</ul>

			<div className={s.aside__content}>
				{articles.map((a) => (
					<article className={s.article} key={a.id}>
						<HTag tag="h5" className={s.article__title}>
							{a.isWithPhoto && <WithPhoto />}
							{a.isHot && <HotNews />}
							<Date type="time">14:59</Date>
							{a.title}
						</HTag>
					</article>
				))}
			</div>
		</aside>
	);
};

export default AllNews;
