"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./sources.css");
const search_1 = require("../../search/search");
class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const source = document.querySelector('.sources');
        source.append(fragment);
        (0, search_1.input)();
    }
}
exports.default = Sources;
