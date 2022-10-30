import { FC } from 'react';
import { HTag, AllCategoriesTag, Date, MoreNews } from '../ui';
import s from './NewsSection.module.scss';
import cn from 'classnames';

const NewsSection: FC = () => {
	return (
		<section className={s.news}>
			<div className={s.news__head}>
				<HTag tag="h2">Політика</HTag>
				<AllCategoriesTag>Всі колонки</AllCategoriesTag>
			</div>

			<div className={s.news__inner}>
				<div className={s.cards}>
					<div className={cn(s.card, s.main)}>
						<img src="/images/redaction-choice/main.jpg" alt="news" />
						<Date className={s.card_date}>05 серпня 11:00</Date>
						<HTag tag="h3">
							У "Слузі" пояснили, чому в росії знову заговорили про переговори з
							Україною.
						</HTag>
					</div>

					<div className={s.cards__bottom}>
						<div className={s.card}>
							<img src="/images/redaction-choice/main.jpg" alt="news" />
							<Date className={s.card_date}>05 серпня 11:00</Date>
							<HTag tag="h4">
								У "Слузі" пояснили, чому в росії знову заговорили про переговори
								з Україною.
							</HTag>
						</div>
						<div className={s.card}>
							<img src="/images/redaction-choice/main.jpg" alt="news" />
							<Date className={s.card_date}>05 серпня 11:00</Date>
							<HTag tag="h4">
								У "Слузі" пояснили, чому в росії знову заговорили про переговори
								з Україною.
							</HTag>
						</div>
					</div>
				</div>

				<aside className={s.aside}>
					<HTag tag="h5" className={s.aside__title}>
						Новини розділу
					</HTag>
					<div className={s.aside__inner}>
						<article className={s.article}>
							<HTag tag="h5" className={s.article__title}>
								<Date type="time">14:59</Date>У "Слузі" пояснили, чому в росії
								знову заговорили про переговори з Україною.
							</HTag>
						</article>
						<article className={s.article}>
							<HTag tag="h5" className={s.article__title}>
								<Date type="time">14:59</Date>У "Слузі" пояснили, чому в росії
								знову заговорили про переговори з Україною.
							</HTag>
						</article>
						<article className={s.article}>
							<HTag tag="h5" className={s.article__title}>
								<Date type="time">14:59</Date>У "Слузі" пояснили, чому в росії
								знову заговорили про переговори з Україною.
							</HTag>
						</article>
						<article className={s.article}>
							<HTag tag="h5" className={s.article__title}>
								<Date type="time">14:59</Date>У "Слузі" пояснили, чому в росії
								знову заговорили про переговори з Україною.
							</HTag>
						</article>
					</div>

					<MoreNews>Більше</MoreNews>
				</aside>
			</div>
		</section>
	);
};

export default NewsSection;
