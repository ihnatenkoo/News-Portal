import { FC } from 'react';
import { HTag } from '../ui';
import Copyright from './Copyright/Copyright';
import LinksList from './LinksList/LinksList';
import {
	actionsLinks,
	economicLinks,
	healthLinks,
	lifestyleLinks,
	politicLinks,
	regionsLinks,
	socialLinks,
	technoLinks,
} from './linksData';
import s from './Footer.module.scss';
import cn from 'classnames';

const Footer: FC = () => {
	return (
		<>
			<footer className={cn(s.footer)}>
				<div className={cn(s.footer__inner)}>
					<div className={s.cols__inner}>
						<div className={s.col}>
							<a className={s.title}>Всі новини</a>
							<a className={s.title}>COVID-19</a>

							<LinksList title="Війна" linksData={[]} />
							<LinksList title="Політика" linksData={politicLinks} />
						</div>

						<div className={s.col}>
							<LinksList title="Здоров’я" linksData={healthLinks} />
							<LinksList title="Події" linksData={actionsLinks} />
						</div>

						<div className={s.col}>
							<LinksList title="Лайфстайл" linksData={lifestyleLinks} />
							<LinksList title="Суспільство" linksData={socialLinks} />
						</div>

						<div className={s.col}>
							<LinksList title="Регіони" linksData={regionsLinks} />
							<LinksList title="Техно" linksData={technoLinks} />
						</div>

						<div className={s.col}>
							<LinksList title="Економіка" linksData={economicLinks} />
							<LinksList title="Спорт" linksData={[]} />
						</div>

						<div className={cn(s.col, s.links)}>
							<a>Про нас</a>
							<a>Контакти</a>
							<a>Структура власності</a>
							<a>Команда</a>
							<a>Медіакіт</a>
						</div>
					</div>

					<div className={s.social}>
						<HTag tag="h3">Новини у зручному форматі</HTag>
						<div className={s.social__inner}>
							<a className={s.social__item}>
								<img src="/icons/social/footer/youtube.png" alt="socials" />
								<span>YouTube</span>
							</a>
							<a className={s.social__item}>
								<img src="/icons/social/footer/telegram.png" alt="socials" />
								<span>Telegram</span>
							</a>
							<a className={s.social__item}>
								<img src="/icons/social/footer/instagram.png" alt="socials" />
								<span>Instagram</span>
							</a>
							<a className={s.social__item}>
								<img src="/icons/social/footer/facebook.png" alt="socials" />
								<span>Facebook</span>
							</a>
							<a className={s.social__item}>
								<img src="/icons/social/footer/tiktok.png" alt="socials" />
								<span>TikTok</span>
							</a>
							<a className={s.social__item}>
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
