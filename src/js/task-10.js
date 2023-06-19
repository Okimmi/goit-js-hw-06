const boxesRef = document.querySelector("#boxes");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const numberRef = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onBtnCreateClick = (event) => {
  createBoxes(numberRef.value);
};

const createBoxes = (amount) => {
  let markup = "";
  let divSize = 30;

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()}"></div>`;

    divSize += 10;
  }

  boxesRef.innerHTML = markup;
};

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
};

btnCreateRef.addEventListener("click", onBtnCreateClick);
btnDestroyRef.addEventListener("click", destroyBoxes);
