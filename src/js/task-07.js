const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const onFontSizeControlChange = (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
};

inputRef.addEventListener("input", onFontSizeControlChange);
