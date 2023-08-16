const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countDisplay = document.getElementById('count');

let count = 0;

decrementButton.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});

incrementButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});
