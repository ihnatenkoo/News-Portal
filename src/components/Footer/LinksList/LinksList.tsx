import { FC, useState } from 'react';
import s from './LinksList.module.scss';
import cn from 'classnames';

interface ILink {
	id: number;
	link: string;
}
interface ILinksList {
	title: string;
	linksData: Array<ILink>;
}

const LinksList: FC<ILinksList> = ({ title, linksData }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const onToggleIsOpen = (): void => {
		if (linksData.length) setIsOpen((prev) => !prev);
	};

	return (
		<ul className={cn(s.list, { [s.open]: isOpen === true })}>
			<span onClick={onToggleIsOpen}>
				{title}
				{!!linksData.length && (
					<img
						src={isOpen ? '/icons/arrow-up.svg' : '/icons/arrow-down.svg'}
						alt="arrow"
						className={s.img}
					/>
				)}
			</span>

			{linksData.map((l) => (
				<li key={l.id}>
					<a href="#">{l.link}</a>
				</li>
			))}
		</ul>
	);
};

export default LinksList;
