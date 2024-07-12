import lettersControl from "./lettersControl";

export default function onSelectedRange(evt, textArrayLength, spanId) {
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
