import './news.css';

export interface ISorce<T> {
    id: string;
    name: string;
}

export interface INews {
    author: string;
    source: ISorce<string>;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

class News {
    public draw(data: INews[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                newsClone.querySelector('.news__item')!.classList.add('alt');
            }
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title')!.textContent = item.title;
            newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
            newsClone.querySelector('.news__description-content')!.textContent = item.description;
            newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsEl = document.querySelector('.news') as HTMLElement;
        newsEl.innerHTML = '';
        newsEl.appendChild(fragment);
    }
}

export default News;
