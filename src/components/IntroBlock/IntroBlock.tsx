import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import s from './IntroBlock.module.scss';
import cn from 'classnames';

const sliderPubsData = [
	{
		id: 1,
		text: 'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, якi б...',
		fullText:
			'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»',
		thumb: '/images/intro/miniatures/1.jpg',
		img: '/images/intro/1.jpg',
	},
	{
		id: 2,
		text: 'Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місц...',
		fullText:
			'Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження»',
		thumb: '/images/intro/miniatures/2.jpg',
		img: '/images/intro/2.jpg',
	},
	{
		id: 3,
		text: 'Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини...',
		fullText:
			'Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини подій',
		thumb: '/images/intro/miniatures/3.jpg',
		img: '/images/intro/3.jpg',
	},
	{
		id: 4,
		text: 'Сейм Латвії визнав рф країною-спонсором тероризму...',
		fullText: 'Сейм Латвії визнав рф країною-спонсором тероризму!',
		thumb: '/images/intro/miniatures/4.jpg',
		img: '/images/intro/4.jpg',
	},
];

const IntroBlock: FC = () => {
	const [activePub, setActivePub] = useState<number>(1);
	const { isLoopIntroSlider } = useMatchMedia();

	useEffect(() => {
		const interval = setInterval(() => onChangePub(activePub + 1), 3000);
		return () => clearInterval(interval);
	}, [activePub]);

	const onChangePub = (index: number): void => {
		if (index > sliderPubsData.length) {
			setActivePub(1);
		} else if (index < 1) {
			setActivePub(sliderPubsData.length);
		} else {
			setActivePub(index);
		}
	};

	return (
		<section className={cn(s.intro)}>
			<img
				className={s.intro__bg}
				src={sliderPubsData[activePub - 1].img}
				alt="news poster"
			/>

			<div className={s.slider}>
				<h1 className={s.slider__title}>
					{sliderPubsData[activePub - 1].fullText}
				</h1>
				<nav className={s.slider__nav}>
					<div
						className={s.slider__nav_left}
						onClick={() => onChangePub(activePub - 1)}
					></div>
					<div className={s.slider__nav_counter}>
						<span>{activePub}</span>
						<span>/</span>
						<span className={s.last}>{sliderPubsData.length}</span>
					</div>
					<div
						className={cn(s.slider__nav_right, s.active)}
						onClick={() => onChangePub(activePub + 1)}
					></div>
				</nav>

				<Swiper
					modules={[Autoplay]}
					spaceBetween={16}
					slidesPerView={'auto'}
					loop={isLoopIntroSlider}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					speed={500}
					style={{ width: '100%', transitionTimingFunction: 'linear' }}
				>
					{sliderPubsData.map((pub, index) => (
						<SwiperSlide key={pub.id}>
							<div
								className={cn(s.slider__item, {
									[s.active]: activePub === index + 1,
								})}
								onClick={() => onChangePub(index + 1)}
							>
								<img src={pub.thumb} alt="news" />
								<h2>{pub.text}</h2>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default IntroBlock;
