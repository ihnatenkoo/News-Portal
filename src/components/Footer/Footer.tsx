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
								<li>
									<a href="#">Дієти</a>
								</li>
								<li>
									<a href="#">Краса</a>
								</li>
								<li>
									<a href="#">Секс</a>
								</li>
								<li>
									<a href="#">Психологія</a>
								</li>
								<li>
									<a href="#">Медицина</a>
								</li>
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
								<li>
									<a href="#">Історії з життя</a>
								</li>
								<li>
									<a href="#">Подорожі</a>
								</li>
								<li>
									<a href="#">Кухня</a>
								</li>
								<li>
									<a href="#">Мода та стиль</a>
								</li>
								<li>
									<a href="#">Зірковий гороскоп</a>
								</li>
							</ul>
							<ul className={s.title}>
								Суспільство
								<li>
									<a href="#">Охорона здоров’я</a>
								</li>
								<li>
									<a href="#">Безпека</a>
								</li>
								<li>
									<a href="#">Екологія</a>
								</li>
								<li>
									<a href="#">Релігія</a>
								</li>
							</ul>
						</div>
						<div className={s.col}>
							<ul className={s.title}>
								Регіони
								<li>
									<a href="#">Київ</a>
								</li>
								<li>
									<a href="#">Одеса</a>
								</li>
								<li>
									<a href="#">Харків</a>
								</li>
								<li>
									<a href="#">Львів</a>
								</li>
							</ul>
							<ul className={s.title}>
								Техно
								<li>
									<a href="#">Наука</a>
								</li>
								<li>
									<a href="#">Гаджети</a>
								</li>
								<li>
									<a href="#">ІТ</a>
								</li>
								<li>
									<a href="#">Космос</a>
								</li>
							</ul>
						</div>
						<div className={s.col}>
							<ul className={s.title}>
								Економіка
								<li>
									<a href="#">Фінанси</a>
								</li>
								<li>
									<a href="#">Комунальні послуги</a>
								</li>
								<li>
									<a href="#">Бізнес</a>
								</li>
								<li>
									<a href="#">Львів</a>
								</li>
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
								<img src="/icons/social/footer/youtube.png" alt="socials" />
								<span>YouTube</span>
							</a>
							<a href="#" className={s.social__item}>
								<img src="/icons/social/footer/telegram.png" alt="socials" />
								<span>Telegram</span>
							</a>
							<a href="#" className={s.social__item}>
								<img src="/icons/social/footer/instagram.png" alt="socials" />
								<span>Instagram</span>
							</a>
							<a href="#" className={s.social__item}>
								<img src="/icons/social/footer/facebook.png" alt="socials" />
								<span>Facebook</span>
							</a>
							<a href="#" className={s.social__item}>
								<img src="/icons/social/footer/tiktok.png" alt="socials" />
								<span>TikTok</span>
							</a>
							<a href="#" className={s.social__item}>
								<img src="/icons/social/footer/google.png" alt="socials" />
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
