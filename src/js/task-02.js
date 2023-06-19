const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newLiArray = ingredients.map((ingridient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingridient;
  newLi.classList.add("item");
  return newLi;
});

const ingridientsList = document.querySelector("#ingredients");
ingridientsList.append(...newLiArray);
