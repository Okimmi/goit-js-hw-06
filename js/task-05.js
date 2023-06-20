const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const onTextInput = (event) => {
  nameOutputRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener("input", onTextInput);
