import { FC } from 'react';
import { AllCategoriesTag, HTag, Tabs } from '../ui/';
import RegionCard from './RegionCard/RegionCard';
import { IAllNews } from './types';
import s from './Regions.module.scss';

const tabsData = [
	{ id: 1, name: 'Київ' },
	{ id: 2, name: 'Харків' },
	{ id: 3, name: 'Одеса' },
];

const regionsNewsData: Array<IAllNews> = [
	{
		city: 'Київ',
		news: [
			{
				id: '1',
				date: '05 серпня',
				articles: [
					{
						id: '1',
						time: '14:59',
						title:
							'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
					},
					{
						id: '2',
						time: '14:59',
						title:
							'На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети',
					},
				],
			},
			{
				id: '2',
				date: '04 серпня',
				articles: [
					{
						id: '1',
						time: '14:59',
						title:
							'КМДА контролюватиме якість підготовки до опалювального сезону',
					},
					{
						id: '2',
						time: '14:59',
						title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
					},
					{
						id: '3',
						time: '14:59',
						title:
							'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
					},
				],
			},
		],
	},
	{
		city: 'Одеса',
		news: [
			{
				id: '1',
				date: '05 серпня',
				articles: [
					{
						id: '1',
						time: '14:59',
						title:
							'Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад...',
					},
					{
						id: '2',
						time: '14:59',
						title:
							'На Одещині рибалки незаконно наловили раків на 8 млн гривень',
					},
					{
						id: '3',
						time: '14:59',
						title:
							'Екіпаж турецького судна вперше з початку війни повернувся з Одеси додому',
					},
					{
						id: '4',
						time: '14:59',
						title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
					},
					{
						id: '5',
						time: '14:59',
						title:
							'Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40 млн гривень',
					},
				],
			},
		],
	},
	{
		city: 'Харків',
		news: [
			{
				id: '1',
				date: '05 серпня',
				articles: [
					{
						id: '1',
						time: '14:59',
						title:
							'Обстріл Павлова Поля у Харкові: уламки прилетіли до квартир, троє людей поранено',
					},
					{
						id: '2',
						time: '14:59',
						title: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
					},
					{
						id: '3',
						time: '14:59',
						title:
							'Обстріл Павлова Поля у Харкові: уламки прилетіли до квартир, троє людей поранено',
					},
					{
						id: '4',
						time: '14:59',
						title:
							'ЗСУ пересунули лінію фронту на Харківщині: окупанти тікали, кидаючи техніку',
					},
					{
						id: '5',
						time: '14:59',
						title:
							'На Харківщині, попри щоденні обстріли, тривають жнива: скільки врожаю зібрали',
					},
				],
			},
		],
	},
];

const Regions: FC = () => {
	return (
		<section className={s.regions}>
			<div className={s.regions__head}>
				<HTag tag="h2">Регіони</HTag>
				<AllCategoriesTag>Всі новини розділу</AllCategoriesTag>
			</div>

			<Tabs tabsData={tabsData} className={s.regions__tabs} />

			<div className={s.regions__cards}>
				{regionsNewsData.map((region) => (
					<RegionCard newsData={region} key={region.city} />
				))}
			</div>
		</section>
	);
};

export default Regions;
