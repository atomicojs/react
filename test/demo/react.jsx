import { Atomico } from "./atomico.js";
import { wrapper } from "../../src/wrapper.js";

customElements.define("my-component", Atomico);

export const Component = wrapper("my-component", Atomico);
