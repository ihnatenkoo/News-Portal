import { FC, useState } from 'react';
import s from './Tabs.module.scss';
import cn from 'classnames';

interface ITabs {
	tabsData: Array<{
		id: number;
		name: string;
	}>;
	className?: string;
}

export const Tabs: FC<ITabs> = ({ tabsData, className }) => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const onTabChange = (index: number): void => {
		setActiveTab(index);
	};

	return (
		<ul className={cn(s.tabs, className)}>
			{tabsData.map((tab) => (
				<li
					className={cn({ [s.active]: activeTab === tab.id })}
					key={tab.id}
					onClick={() => onTabChange(tab.id)}
				>
					{tab.name}
				</li>
			))}
		</ul>
	);
};
