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
    id=span${idx}
      >
      ${letter}
    </span>`
    )
    .join("");

  const divRef = document.querySelector("#text");
  if (divRef) divRef.remove();

  appRef.insertAdjacentHTML("beforeend", `<div id="text">${markup}</div>`);

  const letterRef = document.querySelector("#span0");
  const divTextRef = document.querySelector("#text");

  divTextRef.addEventListener("dragstart", onDrag);
  evt.currentTarget.reset();
}

function onDrag(evt) {
  const selObj = window.getSelection();
  let lettersId = [];

  const firstRangeObj = selObj.getRangeAt(0);

  // First element id selected by user
  // console.log(selObj.getRangeAt(0).startContainer.parentElement.id);

  // Second element id selected by user
  // console.log(
  //   selObj.getRangeAt(0).startContainer.parentElement.nextElementSibling.id
  // );
  // and so on

  // Count amount of user selected letters
  const amountOfLetters = selObj.toString().trim().split(" ").length;
  console.log(amountOfLetters);

  const firstContainer = firstRangeObj.startContainer.parentElement;
  let id = firstContainer.id;
  let nextContainer = firstContainer;

  for (let i = 1; i <= amountOfLetters; i += 1) {
    lettersId.push(id);
    if (i === amountOfLetters) break;
    nextContainer = nextContainer.nextElementSibling;
    id = nextContainer.id;
  }
  console.log(lettersId);
}
