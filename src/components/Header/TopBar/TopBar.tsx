import { FC, useState } from 'react';
import s from './TopBar.module.scss';
import cn from 'classnames';

const languages = [
	{ id: 1, name: 'RU' },
	{ id: 2, name: 'UA' },
];

const TopBar: FC = () => {
	const [activeLanguage, setActiveLanguage] = useState('UA');

	const changeLanguage = (value: string): void => {
		setActiveLanguage(value);
	};

	return (
		<nav className={cn(s.nav, 'container')}>
			<div className={s.nav__leftBar}>
				<menu className={s.menu}>
					<img src="icons/menu-icon.svg" alt="menu" className={s.menu__img} />
					<span className={s.menu__title}>Меню</span>
				</menu>

				<div className={s.cities}>
					<a href="#">Київ</a>
					<a href="#">Одеса</a>
					<a href="#">Харків</a>
				</div>
			</div>

			<div className={s.nav__rightBar}>
				<form className={s.form}>
					<input type="text" name="search" placeholder="пошук новин" />
					<img src="/icons/search.svg" alt="search" />
				</form>

				<div className={s.social}>
					<img src="/icons/social/telegram.svg" alt="telegram" />
					<img src="icons/social/facebook.svg" alt="facebook" />
					<img src="/icons/social/instagram.svg" alt="instagram" />
					<img src="/icons/social/youtube.svg" alt="youtube" />
				</div>

				<div className={s.divider}></div>

				<div className={s.languages}>
					{languages.map((l) => (
						<span
							key={l.id}
							className={cn({ [s.active]: activeLanguage === l.name })}
							onClick={() => changeLanguage(l.name)}
						>
							{l.name}
						</span>
					))}
				</div>
			</div>
		</nav>
	);
};

export default TopBar;
