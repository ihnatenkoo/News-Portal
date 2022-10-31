import { FC, useState } from 'react';
import s from './TopBar.module.scss';
import cn from 'classnames';

const languages = [
	{ id: 1, name: 'UA' },
	{ id: 2, name: 'RU' },
];

const TopBar: FC = () => {
	const [activeLanguage, setActiveLanguage] = useState('UA');
	const [isInputVisible, setIsInputVisible] = useState(false);

	const onChangeLanguage = (value: string): void => {
		setActiveLanguage(value);
	};

	const onToggleInputVisible = (): void => {
		setIsInputVisible((prev) => !prev);
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
				<form className={cn(s.form, { [s.visible]: isInputVisible })}>
					<input type="text" name="search" placeholder="пошук новин" />
					<img
						src="/icons/search.svg"
						alt="search"
						onClick={onToggleInputVisible}
					/>
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
							onClick={() => onChangeLanguage(l.name)}
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
