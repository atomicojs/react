"use client";
import { Host, c, useProp, html } from "atomico";
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

export const Atomico = c(atomico);

customElements.define("my-component", Atomico);

export const ReactComponent = auto(Atomico);
