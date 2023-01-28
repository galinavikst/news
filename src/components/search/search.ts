export function input(): void {
    const input = document.querySelector('input') as HTMLInputElement;
    const buttonsArr = document.querySelectorAll('.source__item-name') as NodeList;

    input.addEventListener('input', (e: Event) => {
        const inputElement = e.target as HTMLInputElement;
        let inputValue: string = inputElement.value.toLowerCase();

        buttonsArr.forEach((el) => {
            const span = el as HTMLElement;
            const itemName = span.innerHTML.toLowerCase();
            const sourcesButton = el.parentElement as HTMLElement;

            if (!itemName.includes(inputValue)) {
                sourcesButton.style.display = 'none';
            } else if (itemName.includes(inputValue) && sourcesButton.style.display === 'none') {
                sourcesButton.style.display = 'block';
            }
        });
    });
}
