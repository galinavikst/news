import './sources.css';
import { ISorce } from '../news/news';

class Sources {
    draw(data: ISorce[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const source = document.querySelector('.sources') as HTMLElement;
        source.append(fragment);
    }
}

export default Sources;
