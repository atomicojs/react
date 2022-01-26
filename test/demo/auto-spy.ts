//@ts-check
import { auto } from "../../src/auto.js";
import { c, html, useProp, Meta, DOMEvent } from "atomico";

function atomico(): Meta<DOMEvent<"MyCustomEvent">> {
  const [count, setCount] = useProp("count");
  return html`<host shadowDom>
    <button onclick=${() => setCount(count + 1)}>Increment: ${count}</button>
  </host>`;
}

atomico.props = {
  count: {
    type: Number,
    event: {
      type: "MyCustomEvent",
    },
    value: 0,
  },
};

export const Atomico = c(atomico);

customElements.define("auto-spy", Atomico);

export const Component = auto(Atomico);
