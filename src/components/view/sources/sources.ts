import './sources.css';
import { ISorce } from '../news/news';
import { inputSearch } from '../../search/search';

class Sources {
    public draw(data: ISorce<string>[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const source = document.querySelector('.sources') as HTMLElement;
        source.append(fragment);

        inputSearch();
    }
}

export default Sources;
