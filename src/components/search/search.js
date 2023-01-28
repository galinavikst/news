"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
function input() {
    const input = document.querySelector('input');
    const buttonsArr = document.querySelectorAll('.source__item-name');
    input.addEventListener('input', (e) => {
        const inputElement = e.target;
        let inputValue = inputElement.value.toLowerCase();
        buttonsArr.forEach((el) => {
            const span = el;
            const itemName = span.innerHTML.toLowerCase();
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
exports.input = input;
