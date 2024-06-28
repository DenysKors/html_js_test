import "./style.css";

const appRef = document.querySelector("#app");
const btnRef = document.querySelector("form");

btnRef.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { text } = evt.currentTarget.elements;

  if (text.value === "" || text.value.trim() === "")
    return alert("Enter your text please");

  const markup = `<p>${text.value}</p>`;

  appRef.insertAdjacentHTML("beforeend", markup);

  evt.currentTarget.reset();
}
