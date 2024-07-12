import onCtrlPress from "./buttonControl";
import onSelectedRange from "./selectedRange";

export default function onSpanClick(evt, textArrayLength, spanId) {
  if (evt.ctrlKey && evt.target.nodeName === "SPAN" && evt.detail < 2) {
    onCtrlPress(evt, spanId);
  } else if (
    !evt.ctrlKey &&
    evt.target.nodeName === "SPAN" &&
    window.getSelection().type === "Range" &&
    evt.detail < 2
  ) {
    onSelectedRange(evt, textArrayLength, spanId);
  }
}
