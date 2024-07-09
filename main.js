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

  const textArray = userText.trim().split("");
  const textArrayLength = textArray.length;

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

  const divTextRef = document.querySelector("#text");

  let spanId = [];

  divTextRef.addEventListener("click", (evt) =>
    onSpanClick(evt, textArrayLength, spanId)
  );

  evt.currentTarget.reset();
}

function onSpanClick(evt, textArrayLength, spanId) {
  if (evt.ctrlKey && evt.target.nodeName === "SPAN" && evt.detail < 2) {
    onCtrlPress(evt, spanId);
  } else if (
    !evt.ctrlKey ||
    evt.target.nodeName === "SPAN" ||
    window.getSelection().type !== "Caret" ||
    window.getSelection().type !== "None" ||
    evt.detail < 2
  ) {
    onSelectedRange(evt, textArrayLength, spanId);
  }

  // const selObj = window.getSelection();

  // const amountOfLetters = selObj.toString().trim().split(" ").length;

  // Check user select only entered text
  // if (amountOfLetters > textArrayLength)
  //   return alert("Select only entered text");

  // console.log(window.getSelection());
  // let spanId = [];

  // const firstRangeObj = selObj.getRangeAt(0);
  // console.log(firstRangeObj);

  // First element id selected by user
  // console.log(selObj.getRangeAt(0).startContainer.parentElement.id);

  // Second element id selected by user
  // console.log(
  //   selObj.getRangeAt(0).startContainer.parentElement.nextElementSibling.id
  // );
  // and so on

  // Count amount of user's selected letters
  // console.log(amountOfLetters);

  // const firstContainer = firstRangeObj.startContainer.parentElement;
  // let id = firstContainer.id;
  // let nextContainer = firstContainer;

  // for (let i = 1; i <= amountOfLetters; i += 1) {
  //   spanId.push(id);
  //   if (i === amountOfLetters) break;
  //   nextContainer = nextContainer.nextElementSibling;
  //   id = nextContainer.id;
  // }

  // lettersControl(spanId);

  // let offsetLeft = 0;

  // spanId.forEach((span, idx) => {
  //   if (idx === 0) {
  //     offsetLeft = evt.clientX;
  //   } else {
  //     offsetLeft = idx * 10 + evt.clientX + 35 * idx;
  //   }

  //   document.getElementById(span).style.top = `${evt.clientY}px`;
  //   document.getElementById(span).style.left = `${offsetLeft}px`;
  // });
}

function onSelectedRange(evt, textArrayLength, spanId) {
  spanId = [];
  const selObj = window.getSelection();

  const amountOfLetters = selObj.toString().trim().split(" ").length;

  // Check user select only entered text
  if (amountOfLetters > textArrayLength)
    return alert("Select only entered text");

  const firstRangeObj = selObj.getRangeAt(0);

  // First element id selected by user
  // console.log(selObj.getRangeAt(0).startContainer.parentElement.id);

  // Second element id selected by user
  // console.log(
  //   selObj.getRangeAt(0).startContainer.parentElement.nextElementSibling.id
  // );
  // and so on

  // Count amount of user's selected letters
  // console.log(amountOfLetters);

  const firstContainer = firstRangeObj.startContainer.parentElement;
  let id = firstContainer.id;
  let nextContainer = firstContainer;
  console.log(spanId);
  for (let i = 1; i <= amountOfLetters; i += 1) {
    spanId.push(id);
    if (i === amountOfLetters) break;
    nextContainer = nextContainer.nextElementSibling;
    id = nextContainer.id;
  }

  lettersControl(spanId);

  let offsetLeft = 0;

  spanId.forEach((span, idx) => {
    if (idx === 0) {
      offsetLeft = evt.clientX;
    } else {
      offsetLeft = idx * 10 + evt.clientX + 35 * idx;
    }

    document.getElementById(span).style.top = `${evt.clientY}px`;
    document.getElementById(span).style.left = `${offsetLeft}px`;
  });
}

function lettersControl(spanId) {
  spanId.forEach((span) => {
    document.getElementById(span).classList.add("letter_move");
  });

  const addLocation = (evt) => {
    let offsetLeft = 0;

    spanId.forEach((span, idx) => {
      if (idx === 0) {
        offsetLeft = evt.clientX;
      } else {
        offsetLeft = idx * 10 + evt.clientX + 35 * idx;
      }

      document.getElementById(span).style.top = `${evt.clientY}px`;
      document.getElementById(span).style.left = `${offsetLeft}px`;
    });
  };

  document.addEventListener("mousemove", addLocation);

  document.addEventListener("dblclick", function stopControl(evt) {
    if (evt.target.nodeName !== "SPAN" && evt.detail > 1) {
      document.removeEventListener("mousemove", addLocation);
      this.removeEventListener("dblclick", stopControl);
    }
  });
}

function onCtrlPress(evt, spanId) {
  spanId.push(evt.target.id);

  lettersControl(spanId);

  let offsetLeft = 0;

  spanId.forEach((span, idx) => {
    if (idx === 0) {
      offsetLeft = evt.clientX;
    } else {
      offsetLeft = idx * 10 + evt.clientX + 35 * idx;
    }

    document.getElementById(span).style.top = `${evt.clientY}px`;
    document.getElementById(span).style.left = `${offsetLeft}px`;
  });
}
