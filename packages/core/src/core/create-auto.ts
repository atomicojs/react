import { getDefinition } from "@atomico/wrapper";
import { Wrapper } from "./create-wrapper";

export const createAuto =
  (wrapper: Wrapper) =>
  <Base extends CustomElementConstructor>(base: Base) => {
    const [tagName, options] = getDefinition(base, true);
    return wrapper<Base>(tagName, base, options);
  };
