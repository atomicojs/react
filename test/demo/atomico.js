import { c, html, useProp } from "atomico";

function atomico() {
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
