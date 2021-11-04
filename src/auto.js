import { wrapper } from "./wrapper.js";

const { define } = window.customElements;

let id = 0;

export const registered = new Map();

window.customElements.define = function (tagName, Element, options) {
  define.call(window.customElements, tagName, Element, options);
  registered.set(Element, [tagName, options]);
};

export function auto(Element) {
  const [tagName, options] = registered.get(Element) || [
    `c-${Date.now()}-${id++}`,
  ];
  return wrapper(tagName, Element, options);
}
