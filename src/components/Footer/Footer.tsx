import { FC } from 'react';
import s from './Footer.module.scss';
import cn from 'classnames';
import { HTag } from '../ui';
import Copyright from './Copyright/Copyright';

const Footer: FC = () => {
	return (
		<>
			<footer className={cn(s.footer)}>
				<div className={cn(s.footer__inner, 'container')}>
					<div className={s.cols__inner}>
						<div className={s.col}>
							<a href="#" className={s.title}>
								Всі новини
							</a>
							<a href="#" className={s.title}>
								COVID-19
							</a>
							<ul className={s.title}>Війна</ul>
							<ul className={s.title}>
								Політика
								<li>Україна</li>
								<li>Світ</li>
							</ul>
						</div>
						<div className={s.col}>
							<ul className={s.title}>
								Здоров’я
								<li>Дієти</li>
								<li>Краса</li>
								<li>Секс</li>
								<li>Психологія</li>
								<li>Медицина</li>
							</ul>
							<ul className={s.title}>
								Події
								<li>ДТП</li>
								<li>Катастрофи</li>
								<li>Кримінал</li>
							</ul>
						</div>
						<div className={s.col}>
							<ul className={s.title}>
								Лайфстайл
								<li>Історії з життя</li>
								<li>Подорожі</li>
								<li>Кухня</li>
								<li>Мода та стиль</li>
								<li>Зірковий гороскоп</li>
							</ul>
							<ul className={s.title}>
								Суспільство
								<li>Охорона здоров’я</li>
								<li>Безпека</li>
								<li>Екологія</li>
								<li>Релігія</li>
							</ul>
						</div>
						<div className={s.col}>
							<ul className={s.title}>
								Регіони
								<li>Київ</li>
								<li>Одеса</li>
								<li>Харків</li>
								<li>Львів</li>
							</ul>
							<ul className={s.title}>
								Техно
								<li>Наука</li>
								<li>Гаджети</li>
								<li>ІТ</li>
								<li>Космос</li>
							</ul>
						</div>
						<div className={s.col}>
							<ul className={s.title}>
								Економіка
								<li>Фінанси</li>
								<li>Комунальні послуги</li>
								<li>Бізнес</li>
								<li>Львів</li>
							</ul>
							<ul className={s.title}>Спорт</ul>
						</div>
						<div className={cn(s.col, s.links)}>
							<a href="#">Про нас</a>
							<a href="#">Контакти</a>
							<a href="#">Структура власності</a>
							<a href="#">Команда</a>
							<a href="#">Медіакіт</a>
						</div>
					</div>

					<div className={s.social}>
						<HTag tag="h3">Новини у зручному форматі</HTag>
						<div className={s.social__inner}>
							<a href="#" className={s.social__item}>
								<img
									src="/public/icons/social/footer/youtube.png"
									alt="socials"
								/>
								<span>YouTube</span>
							</a>
							<a href="#" className={s.social__item}>
								<img
									src="/public/icons/social/footer/telegram.png"
									alt="socials"
								/>
								<span>Telegram</span>
							</a>
							<a href="#" className={s.social__item}>
								<img
									src="/public/icons/social/footer/instagram.png"
									alt="socials"
								/>
								<span>Instagram</span>
							</a>
							<a href="#" className={s.social__item}>
								<img
									src="/public/icons/social/footer/facebook.png"
									alt="socials"
								/>
								<span>Facebook</span>
							</a>
							<a href="#" className={s.social__item}>
								<img
									src="/public/icons/social/footer/tiktok.png"
									alt="socials"
								/>
								<span>TikTok</span>
							</a>
							<a href="#" className={s.social__item}>
								<img
									src="/public/icons/social/footer/google.png"
									alt="socials"
								/>
								<span>Google news</span>
							</a>
						</div>
					</div>
				</div>
			</footer>

			<Copyright />
		</>
	);
};

export default Footer;
