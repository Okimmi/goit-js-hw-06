const formRef = document.querySelector(".login-form");

const onBtnSubmitClick = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All form fields must be completed.");
  }

  const formFieldValues = {
    email: email.value,
    password: password.value,
  };

  console.log(formFieldValues);
  formRef.reset();
};

formRef.addEventListener("submit", onBtnSubmitClick);
