
let counter = 0;
const counterDisplay = document.getElementById('counter');


function updateCounter() {
    counterDisplay.textContent = counter;
    if (counter > 0) {
        counterDisplay.style.color = 'green';
    } else if (counter === 0) {
        counterDisplay.style.color = 'grey';
    } else {
        counterDisplay.style.color = 'red';
    }
}


plus.addEventListener('click', function increase() {
    counter++;
    updateCounter();
});

cbros.addEventListener('click', function reset() {
    counter = 0;
    updateCounter();
});

minus.addEventListener('click', function decrease() {
    counter--;
    updateCounter();
});

updateCounter();