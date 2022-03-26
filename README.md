# @atomico/react

automatically create containers for React and Preact.

## Example auto

```jsx
import "@atomico/react/proxy"; // stores all customElements.define definitions before import
import { auto } from "@atomico/react";
import WebComponent from "./my-webcomponent";

export const ReactWebComponent = auto(WebComponent);
```

## Example wrapper

```jsx
import { wrapper } from "@atomico/react";
import WebComponent from "./my-webcomponent";

customElements.defined("web-component", WebComponent);

export const ReactWebComponent = wrapper("my-web-component", WebComponent);
```
