const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulElement = document.getElementById("ingredients");

const liElements = ingredients.map((ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  return liElement;
});

ulElement.append(...liElements);

// Цей варіант вважаю більш доцільним та швидшим
// const container = document.querySelector("#ingredients");
// const newElement = ingredients
//   .map((el) => `<li class="item">${el}</li>`)
//   .join("");

// container.insertAdjacentHTML("afterbegin", newElement);
