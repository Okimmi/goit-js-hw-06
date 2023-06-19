const btnRef = document.querySelector(".change-color");
const colorNameRef = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onBtnChangeColorClick = () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorNameRef.textContent = randomColor;
};

btnRef.addEventListener("click", onBtnChangeColorClick);
