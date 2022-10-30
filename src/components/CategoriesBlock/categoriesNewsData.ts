export const politicsData = {
	mainCard: {
		title:
			'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
		img: '/images/redaction-choice/main.jpg',
	},
	cards: [
		{
			id: 1,
			title:
				'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
			img: '/images/redaction-choice/main.jpg',
		},
		{
			id: 2,
			title:
				'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
			img: '/images/redaction-choice/main.jpg',
		},
	],
	news: [
		{
			id: 1,
			title:
				'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
			isHot: true,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 2,
			title:
				'Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 3,
			title:
				'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
			isHot: false,
			isWithPhoto: true,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 4,
			title:
				'"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 5,
			title:
				'"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
	],
};

export const economicsData = {
	mainCard: {
		title:
			'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
		img: '/images/redaction-choice/main.jpg',
	},
	cards: [
		{
			id: 1,
			title:
				'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
			img: '/images/redaction-choice/main.jpg',
		},
		{
			id: 2,
			title:
				'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
			img: '/images/redaction-choice/main.jpg',
		},
	],
	news: [
		{
			id: 1,
			title:
				'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 2,
			title:
				'Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф',
			isHot: false,
			isWithPhoto: true,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 3,
			title:
				'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 4,
			title:
				'"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 5,
			title:
				'"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
	],
};

export const lifestyleData = {
	mainCard: {
		title:
			'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі',
		img: '/images/redaction-choice/second.jpg',
	},
	cards: [
		{
			id: 1,
			title:
				'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
			img: '/images/redaction-choice/main.jpg',
		},
		{
			id: 2,
			title:
				'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи',
			img: '/images/redaction-choice/main.jpg',
		},
	],
	news: [
		{
			id: 1,
			title: 'Що подивитися ввечері: топ-5 українських фільмів',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 2,
			title:
				'Яке свято відзначають 9 серпня: прикмети, традиції та заборони цього дня',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: true,
		},
		{
			id: 3,
			title:
				'Вакарчук виклав неймовірне відео виконання гімну України в Іспанії',
			isHot: false,
			isWithPhoto: true,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 4,
			title: 'Топ-7 повсякденних речей, які не мінялися протягом століть',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
		{
			id: 5,
			title:
				'Арестович розповів про шалений заробіток, трьох дружин і дітей. Відео',
			isHot: false,
			isWithPhoto: false,
			isOnline: false,
			isExclusive: false,
		},
	],
};

export interface ICategoryNewsData {
	mainCard: {
		title: string;
		img: string;
	};

	cards: Array<ICard>;
	news: Array<INews>;
}

interface ICard {
	id: number;
	title: string;
	img: string;
}

interface INews {
	id: number;
	title: string;
	isHot: boolean;
	isWithPhoto: boolean;
	isOnline: boolean;
	isExclusive: boolean;
}
