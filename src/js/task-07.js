const inputElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

inputElem.addEventListener("input", (event) => {
  const currentValue = event.target.value + "px";
  textElem.style.fontSize = currentValue;
});
