import { wrapper } from "../../src/react";
import { wrapper as wrapperPreact } from "../../src/preact";
import { Host, c, html, useProp } from "atomico";

function atomico(): Host<{ onMyCustomEvent: Event }> {
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

customElements.define("my-component", Atomico);

export const ReactComponent = wrapper("my-component", Atomico);

export const PreactComponent = wrapperPreact("my-component", Atomico);
