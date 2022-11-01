import { Dispatch, FC, useState } from 'react';
import s from './Tabs.module.scss';
import cn from 'classnames';

interface ITabs {
	tabsData: Array<{
		id: number;
		name: string;
	}>;
	className?: string;
	onChangeCategory?: Dispatch<React.SetStateAction<string>>;
}

export const Tabs: FC<ITabs> = ({ tabsData, className, onChangeCategory }) => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const onTabChange = (index: number): void => {
		setActiveTab(index);
		if (onChangeCategory) onChangeCategory(tabsData[index - 1].name);
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
