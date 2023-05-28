import { Host, c, useProp } from "atomico";
import { auto } from "../../src";
import { auto as autoPreact } from "../../src/preact";

function atomico(): Host<{ onMyCustomEvent: Event }> {
  const [count, setCount] = useProp("count");

  return (
    <host shadowDom>
      <button onclick={() => setCount(count + 1)}>Increment: {count}</button>
    </host>
  );
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

export const PreactComponent = autoPreact(Atomico);
