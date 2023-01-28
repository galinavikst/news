"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputSearch = void 0;
function inputSearch() {
    const input = document.querySelector('input');
    const buttonsArr = document.querySelectorAll('.source__item-name');
    input.addEventListener('input', (e) => {
        let inputValue = e.target.value.toLowerCase();
        buttonsArr.forEach((el) => {
            const itemName = el.innerHTML.toLowerCase();
            const sourcesButton = el.parentElement;
            if (!itemName.includes(inputValue)) {
                sourcesButton.style.display = 'none';
            }
            else if (itemName.includes(inputValue) && sourcesButton.style.display === 'none') {
                sourcesButton.style.display = 'block';
            }
        });
    });
}
exports.inputSearch = inputSearch;
