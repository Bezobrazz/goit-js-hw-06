const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const loginForm = event.target;
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {};

  for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];
    if (input.type !== "submit") {
      formData[input.name] = input.value;
    }
  }
  console.log(formData);
  form.reset();
});
