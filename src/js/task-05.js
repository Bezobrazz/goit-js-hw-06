const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", textFromInput);
function textFromInput(event) {
  if (event.currentTarget.value === "") {
    outputElem.textContent = "Anonymous";
  } else {
    outputElem.textContent = event.currentTarget.value;
  }
}
