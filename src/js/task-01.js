const categoriesEl = document.querySelector("#categories");
const categoriesArray = [...categoriesEl.children];
console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach((element) => {
  console.log("");
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
