const inputElem = document.getElementById("validation-input");

inputElem.addEventListener("blur", () => {
  const textLength = inputElem.value.length;
  const targetLength = +inputElem.dataset.length;

  inputElem.classList.remove("valid", "invalid");

  if (textLength === targetLength) {
    inputElem.classList.add("valid");
  } else if (textLength < targetLength && textLength > 0) {
    inputElem.classList.add("invalid");
  } else {
    inputElem.style.borderColor = "";
  }
});
