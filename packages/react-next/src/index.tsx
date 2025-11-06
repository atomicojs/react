import { c, event } from "atomico";

export const MyComponent = c(
  () => {
    return (
      <host shadowDom>
        <slot />
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
