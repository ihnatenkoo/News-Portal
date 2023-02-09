import { FC } from 'react';
import s from './BottomBar.module.scss';

const BottomBar: FC = () => {
	return (
		<nav className={s.nav}>
			<div className={s.nav__articles}>
				<img src="/icons/fair.svg" alt="fair" className={s.nav__articles_hot} />

				<div className={s.nav__articles_links}>
					<a className={s.active}>війна</a>
					<a>новини</a>
					<a>політика</a>
					<a>економіка</a>
					<a>суспільство</a>
					<a>погляди</a>
					<a>світ</a>
				</div>
			</div>

			<div className={s.nav__live}>
				<img src="/icons/live-dot.svg" alt="" />
				<span>LIVE</span>
			</div>
		</nav>
	);
};

export default BottomBar;
