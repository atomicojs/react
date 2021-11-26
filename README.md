# @atomico/react

Create a wrapper to run a webcomponent.

## Example wrapper

```jsx
import { wrapper } from "@atomico/react";
import { HTMLMyComponent } from "./my-component.js";

const tagName = "my-component";

customElements.define(tagName, HTMLMyComponent);

export const MyComponent = wrapper(tagName, HTMLMyComponent);
```

The second parameter for `wrapper` is optional, but will allow react to infer Atomico types, improving the Autocomplete and Typescript experience.

## Example auto

Auto captures the parameters associated with the use of customElements.define to retrieve the tagName or generate an id as tagName, to instantiate the webcomponent.

```js
import { auto } from "@atomico/react/auto";
import { Component as ElementComponent } from "./my-component";

export const Component = auto(ElementComponent);
```
