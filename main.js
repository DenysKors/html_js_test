import "./style.css";

const appRef = document.querySelector("#app");
const btnRef = document.querySelector("form");

btnRef.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { text } = evt.currentTarget.elements;
  const userText = text.value;

  if (userText === "" || userText.trim() === "")
    return alert("Enter your text please");

  const textArray = userText.split("");

  const markup = textArray
    .map(
      (letter, idx) =>
        `
    <span
      data-span=${idx}
      >
      ${letter}
    </span>`
    )
    .join("");

  const divRef = document.querySelector("#text");
  if (divRef) divRef.remove();

  appRef.insertAdjacentHTML("beforeend", `<div id="text">${markup}</div>`);

  evt.currentTarget.reset();
}
