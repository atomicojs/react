import { registered } from '../proxy.js';

let id = 0;
const getId = () => `c-${Date.now()}-${id++}`;
const createAuto = (wrapper) => (base) => {
  if (!registered.has(base))
    customElements.define(getId(), base);
  const [tagName, options] = registered.get(base);
  return wrapper(tagName, base, options);
};

export { createAuto, getId };
