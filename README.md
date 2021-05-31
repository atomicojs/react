# @atomico/react

Create a wrapper to run a webcomponent.

## Example

```jsx
import { wrapper } from "@atomico/react";
import { HTMLMyComponent } from "./my-component.js";

const tagName = "my-component";

customElements.define(tagName, HTMLMyComponent);

export const MyComponent = wrapper(tagName, HTMLMyComponent);
```

The second parameter for `wrapper` is optional, but will allow react to infer Atomico types, improving the Autocomplete and Typescript experience.
