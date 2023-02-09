import { FC, useState } from 'react';
import {
	HTag,
	AllCategoriesTag,
	Date,
	MoreNews,
	WithPhoto,
	HotNews,
	OnlineLabel,
	Exclusive,
	Tabs,
} from '../ui';
import { ICategoryNewsData } from '../CategoriesBlock/categoriesNewsData';
import s from './NewsSection.module.scss';
import cn from 'classnames';

const tabsData = [
	{ id: 1, name: 'Статті' },
	{ id: 2, name: 'Новини' },
];

interface INewsSection {
	newsData: ICategoryNewsData;
	category: string;
}

const NewsSection: FC<INewsSection> = ({ category, newsData }) => {
	const [activeCategory, setActiveCategory] = useState<string>('Статті');

	return (
		<section className={s.news}>
			<div className={s.news__head}>
				<HTag tag="h2">{category}</HTag>
				<AllCategoriesTag>Всі колонки</AllCategoriesTag>
			</div>

			<div className={s.news__inner}>
				<Tabs
					tabsData={tabsData}
					className={s.aside__tabs}
					onChangeCategory={setActiveCategory}
				/>

				<div
					className={cn(s.cards, { [s.visible]: activeCategory === 'Статті' })}
				>
					<div className={cn(s.card, s.main)}>
						<img src={newsData.mainCard.img} alt="news" />
						<Date className={s.card_date}>05 серпня 11:00</Date>
						<HTag tag="h3" className={s.card_title}>
							{newsData.mainCard.title}
						</HTag>
					</div>

					<div className={s.cards__bottom}>
						{newsData.cards.map((card) => (
							<div className={s.card} key={card.id}>
								<img src={card.img} alt="news card" />
								<Date className={s.card_date}>05 серпня 11:00</Date>
								<HTag tag="h4">{card.title}</HTag>
							</div>
						))}
					</div>
				</div>

				<aside
					className={cn(s.aside, { [s.visible]: activeCategory === 'Новини' })}
				>
					<HTag tag="h5" className={s.aside__title}>
						Новини розділу
					</HTag>

					<div className={s.aside__inner}>
						{newsData.news.map((news) => (
							<article className={s.article} key={news.id}>
								{news.isWithPhoto && <WithPhoto />}
								{news.isHot && <HotNews />}
								{news.isOnline && <OnlineLabel />}
								{news.isExclusive && <Exclusive />}
								<HTag
									tag="h5"
									className={cn(s.article__title, {
										[s.bold]: news.isHot || news.isOnline || news.isExclusive,
									})}
								>
									<Date type="time">14:59</Date>
									{news.title}
								</HTag>
							</article>
						))}
					</div>

					<MoreNews>Більше</MoreNews>
				</aside>
			</div>
		</section>
	);
};

export default NewsSection;
