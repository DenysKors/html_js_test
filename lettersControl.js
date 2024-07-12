export default function lettersControl(spanId) {
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
      spanId.length = 0;
      document.removeEventListener("mousemove", addLocation);
      this.removeEventListener("dblclick", stopControl);
    }
  });
}
