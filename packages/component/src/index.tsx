import { c, event, useProp } from "atomico";

export const MyComponent = c(
  ({ increment, message }) => {
    const [count = 0, setCount] = useProp<number>("count");
    return (
      <host shadowDom>
        <button
          onclick={() => {
            setCount(count + 1);
            increment();
          }}
        >
          Increment ({count})
        </button>
        <slot />
        <p>{message}</p>
      </host>
    );
  },
  {
    props: {
      message: String,
      count: Number,
      increment: event(),
    },
  }
);

customElements.define("my-component", MyComponent);
