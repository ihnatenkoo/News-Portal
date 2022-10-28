import { FC } from 'react';
import cn from 'classnames';
import s from './BottomBar.module.scss';

const BottomBar: FC = () => {
	return (
		<nav className={cn(s.nav, 'container')}>
			<div className={s.nav__articles}>
				<img src="/icons/fair.svg" alt="fair" className={s.nav__articles_hot} />

				<div className={s.nav__articles_links}>
					<a className={s.active} href="#">
						війна
					</a>
					<a href="#">новини</a>
					<a href="#">політика</a>
					<a href="#">економіка</a>
					<a href="#">суспільство</a>
					<a href="#">погляди</a>
					<a href="#">світ</a>
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
