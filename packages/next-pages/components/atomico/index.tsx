import { c, useProp, html, css } from "atomico";
import type { Host, Props } from "atomico";
import { auto } from "@atomico/react";

function atomico({
  show,
}: Props<typeof atomico>): Host<{ onMyCustomEvent: Event }> {
  const [count, setCount] = useProp("count");

  return html`<host shadowDom>
    <button onclick=${() => setCount(count + 1)}>Increment: ${count}</button>
    <h1>${show ? "true" : "false"}</h1>
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
  show: Boolean,
};

atomico.styles = css`
  button {
    border: 2px solid black;
    padding: 0.5rem 1.5rem;
    border-radius: 100px;
    background: transparent;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Atomico = c(atomico);

customElements.define("my-component", Atomico);

export const ReactComponent = auto(Atomico);
