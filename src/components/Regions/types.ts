export interface IAllNews {
	city: string;
	news: Array<INewsOfSpecificDate>;
}
interface INewsOfSpecificDate {
	id: string;
	date: string;
	articles: Array<IArticle>;
}
interface IArticle {
	id: string;
	time: string;
	title: string;
}
