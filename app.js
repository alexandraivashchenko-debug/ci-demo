function sayHello() {
  alert("Привіт! CI працює!");
}

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", sayHello);
}