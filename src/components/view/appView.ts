import News, { INews } from './news/news';
import Sources from './sources/sources';

export interface IDrawNews {
    status: string;
    totalResults: number;
    articles: INews[];
}

export interface IDrawSources {
    status: string;
    sources: DrawSourcesType<string>[];
}

export type DrawSourcesType<T> = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: IDrawNews): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: IDrawSources): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
