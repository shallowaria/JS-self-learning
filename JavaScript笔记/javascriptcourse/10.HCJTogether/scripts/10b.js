function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (button.classList.contains('is-toggled')) {
        return;
    }

    turnOffPreviousButton();

    button.classList.add('is-toggled');
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}

document.querySelector('.js-button1').addEventListener('click', () => {
    toggleButton('.js-button1');
});
document.querySelector('.js-button2').addEventListener('click', () => {
    toggleButton('.js-button2');
});
document.querySelector('.js-button3').addEventListener('click', () => {
    toggleButton('.js-button3');
});