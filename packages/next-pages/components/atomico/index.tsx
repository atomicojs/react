import { Host, c, useProp, html, css } from "atomico";
import { auto } from "@atomico/react";

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
