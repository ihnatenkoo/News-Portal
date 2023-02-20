import cn from 'classnames';
import { Dispatch, FC, useEffect, useState } from 'react';
import s from './Tabs.module.scss';

interface ITabs {
	tabsData: Array<{
		id: number;
		name: string;
	}>;
	className?: string;
	currentTab?: number;
	onChangeCategory?: Dispatch<React.SetStateAction<string>>;
	onChangeCity?: Dispatch<React.SetStateAction<number>>;
}

export const Tabs: FC<ITabs> = ({
	tabsData,
	className,
	onChangeCategory,
	onChangeCity,
	currentTab = 1,
}) => {
	const [activeTab, setActiveTab] = useState<number>(1);

	useEffect(() => {
		setActiveTab(currentTab);
	}, [currentTab]);

	const onTabChange = (index: number): void => {
		setActiveTab(index);
		if (onChangeCategory) onChangeCategory(tabsData[index - 1].name);
		if (onChangeCity) onChangeCity(index - 1);
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
