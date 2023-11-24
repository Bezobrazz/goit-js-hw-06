let counterValue = 0;
let counterValueElem = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

function increaseCounter() {
  counterValue += 1;
  counterValueElem.textContent = counterValue;
}
function decreaseCounter() {
  counterValue -= 1;
  counterValueElem.textContent = counterValue;
}
incrementButton.addEventListener("click", increaseCounter);
decrementButton.addEventListener("click", decreaseCounter);
