import { FC, useState } from 'react';
import s from './TopBar.module.scss';
import cn from 'classnames';

const languages = [
	{ id: 1, name: 'UA' },
	{ id: 2, name: 'RU' },
];

const TopBar: FC = () => {
	const [activeLanguage, setActiveLanguage] = useState<string>('UA');
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
	const [isLangOpen, setIsLangOpen] = useState<boolean>(false);

	const onToggleInputVisible = (): void => {
		setIsInputVisible((prev) => !prev);
	};

	const onChangeLanguage = (value: string): void => {
		setActiveLanguage(value);
		setIsLangOpen(false);
	};

	const onToggleLangVisible = (): void => {
		setIsLangOpen((prev) => !prev);
	};

	return (
		<nav className={s.nav}>
			<div className={s.nav__leftBar}>
				<menu className={s.menu}>
					<img src="icons/menu-icon.svg" alt="menu" className={s.menu__img} />
					<span className={s.menu__title}>Меню</span>
				</menu>

				<div className={s.cities}>
					<a>Київ</a>
					<a>Одеса</a>
					<a>Харків</a>
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

				<div className={cn(s.languages, { [s.open]: isLangOpen })}>
					<p className={s.languages__title} onClick={onToggleLangVisible}>
						{activeLanguage}
						<img src="/icons/lang-arrow.svg" alt="arrow" />
					</p>
					<ul className={s.languages__list}>
						{languages.map((lang) => (
							<li
								key={lang.id}
								className={cn({ [s.active]: activeLanguage === lang.name })}
								onClick={() => onChangeLanguage(lang.name)}
							>
								{lang.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TopBar;
