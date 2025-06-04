// form.js
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", () => {
  if (nameInput.value.length < 3) {
    nameInput.setCustomValidity("Mínimo 3 caracteres.");
  } else {
    nameInput.setCustomValidity("");
  }
});