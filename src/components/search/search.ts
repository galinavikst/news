export function inputSearch(): void {
    const input = document.querySelector('input') as HTMLInputElement;
    const buttonsArr = document.querySelectorAll('.source__item-name') as NodeList;

    input.addEventListener('input', (e: Event) => {
        let inputValue: string = (e.target as HTMLInputElement).value.toLowerCase();

        buttonsArr.forEach((el) => {
            const itemName = (el as HTMLElement).innerHTML.toLowerCase();
            const sourcesButton = el.parentElement as HTMLElement;

            if (!itemName.includes(inputValue)) {
                sourcesButton.style.display = 'none';
            } else if (itemName.includes(inputValue) && sourcesButton.style.display === 'none') {
                sourcesButton.style.display = 'block';
            }
        });
    });
}
