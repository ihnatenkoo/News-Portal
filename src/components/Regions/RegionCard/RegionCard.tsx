import { FC } from 'react';
import { Date, HTag } from '../../ui';
import { IAllNews } from '../types';
import s from './RegionCard.module.scss';
interface IRegionCard {
	newsData: IAllNews;
}

const RegionCard: FC<IRegionCard> = ({ newsData }) => {
	return (
		<div className={s.card}>
			<HTag tag="h3" className={s.card__title}>
				{newsData.city}
			</HTag>
			<div className={s.card__inner}>
				{newsData.news.map((day) => (
					<div className={s.card__inner_day} key={day.id}>
						<Date type="accent">{day.date}</Date>
						{day.articles.map((a) => (
							<article className={s.article} key={a.id}>
								<HTag tag="h5" className={s.article__title}>
									<Date type="time">{a.time}</Date>
									{a.title}
								</HTag>
							</article>
						))}
					</div>
				))}
			</div>

			<a href="#" className={s.card__footer}>
				<HTag tag="h5" className={s.card__footer_title}>
					Більше новин
				</HTag>
				<img
					src="/icons/arrow-right.svg"
					alt="more news"
					className={s.card__footer_img}
				/>
			</a>
		</div>
	);
};

export default RegionCard;
