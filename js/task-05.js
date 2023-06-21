const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const onTextInput = (event) => {
  if (event.currentTarget.value !== "") {
    nameOutputRef.textContent = event.currentTarget.value;
  } else {
    nameOutputRef.textContent = "Anonymous";
  }
};

inputRef.addEventListener("input", onTextInput);
