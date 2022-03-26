import "../../src/proxy.js";
import { auto } from "../../src/react";
import { auto as autoPreact } from "../../src/preact";
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

export const ReactComponent = auto(Atomico);

export const PreactComponent = autoPreact(Atomico);
