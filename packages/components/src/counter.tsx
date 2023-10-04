import { Host, c, useProp } from "atomico";

function counter(): Host<{ onMyCustomEvent: Event }> {
  const [count, setCount] = useProp("count");

  return (
    <host shadowDom>
      <button onclick={() => setCount(count + 1)}>Increment: {count}</button>
    </host>
  );
}

counter.props = {
  count: {
    type: Number,
    event: {
      type: "MyCustomEvent",
    },
    value: 0,
  },
};

export const Counter = c(counter);
