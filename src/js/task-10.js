function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputElem = document.querySelector("#controls > input");
// const createButton = document.querySelector(`[data-create]`);
// const destroyButton = document.querySelector(`[data-destroy]`);
// const boxesElem = document.querySelector("#boxes");

// function createBoxes(amount) {
//   inputElem.addEventListener("change", (event) => {
//     const numberOFBoxes = event.target.value;
//     createButton.addEventListener("click", () => {
//       const result = +numberOFBoxes;
//       console.log(result);
//     });
//   });
// }
// createBoxes();
