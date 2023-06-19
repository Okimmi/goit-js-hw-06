const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const currentValue = document.querySelector("#value");

let counterValue = 0;

const onBtnIncrementClick = () => {
  counterValue += 1;
  currentValue.textContent = counterValue;
};

const onBtnDecrementClick = () => {
  counterValue -= 1;
  currentValue.textContent = counterValue;
};

btnIncrement.addEventListener("click", onBtnIncrementClick);
btnDecrement.addEventListener("click", onBtnDecrementClick);
