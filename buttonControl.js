import lettersControl from "./lettersControl";

export default function onCtrlPress(evt, spanId) {
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
