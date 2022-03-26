import { registered } from "./proxy";
import { Wrapper } from "./create-wrapper";

let id = 0;

export const getId = () => `c-${Date.now()}-${id++}`;

export const createAuto =
  (wrapper: Wrapper) =>
  <Base extends CustomElementConstructor>(base: Base) => {
    if (!registered.has(base)) customElements.define(getId(), base);

    const [tagName, options] = registered.get(base);
    return wrapper<Base>(tagName, base, options);
  };
