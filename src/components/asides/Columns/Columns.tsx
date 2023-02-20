import { FC } from 'react';
import { AllCategoriesTag, AllColumnsBtn, Date, HTag } from '../../ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { useMatchMedia } from '../../../hooks/useMatchMedia';
import s from './Columns.module.scss';

const columnsData = [
	{
		id: 1,
		author: 'Юлія Стахівська',
		role: 'письменниця',
		title: 'Жінок в часи небезпеки приваблюють сильні чоловіки',
		photo: '/images/column/1.png',
		date: '04 серпня 15:15',
	},
	{
		id: 2,
		author: 'Юрій Андрухович',
		role: 'письменник',
		title: 'Штайнмаєр - людина-формула',
		photo: '/images/column/2.png',
		date: '04 серпня 15:15',
	},
	{
		id: 3,
		author: 'Анна Прокопенко',
		role: 'журналістка',
		title: "Щоденник війни. П'ятий тиждень довгого лютого",
		photo: '/images/column/3.png',
		date: '04 серпня 15:15',
	},
	{
		id: 4,
		author: 'Ірена Карпа',
		role: 'журналістка',
		title: 'Не пощастило з географією. Небезпечний сусід',
		photo: '/images/column/4.png',
		date: '04 серпня 15:15',
	},
];

const Columns: FC = () => {
	const { isLoopAsideColumns } = useMatchMedia();

	return (
		<aside className={s.aside}>
			<header className={s.aside__header}>
				<HTag tag="h3">Колонки</HTag>
				<AllCategoriesTag>Всі колонки</AllCategoriesTag>
			</header>

			<Swiper
				slidesPerView={'auto'}
				spaceBetween={20}
				modules={[Autoplay]}
				loop={isLoopAsideColumns}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
				speed={5000}
				breakpoints={{
					320: { direction: 'horizontal' },
					992: { direction: 'vertical', autoplay: false },
				}}
			>
				{columnsData.map((post) => (
					<SwiperSlide key={post.id} className={s.article}>
						<div className={s.article__author}>
							<img src={post.photo} alt="author photo" />
							<div className={s.article__author_info}>
								<HTag tag="h5">{post.author}</HTag>
								<span>{post.role}</span>
							</div>
						</div>

						<HTag tag="h4" className={s.article__title}>
							{post.title}
						</HTag>
						<Date>{post.date}</Date>
					</SwiperSlide>
				))}
			</Swiper>

			<AllColumnsBtn />
		</aside>
	);
};

export default Columns;
