import { wrapper } from "./wrapper.js";

const { define } = window.customElements;

let id = 0;

/**
 * @type {Map<Element,[string,ElementDefinitionOptions]>}
 */
export const registered = new Map();

window.customElements.define = function (tagName, Element, options) {
  define.call(window.customElements, tagName, Element, options);
  registered.set(Element, [tagName, options]);
};

/**
 * @template {Element} T
 * @param {T} Element
 * @returns {import("./wrapper").Component<T>}
 */
export function auto(Element) {
  const [tagName, options] = registered.get(Element) || [
    `c-${Date.now()}-${id++}`,
  ];
  return wrapper(tagName, Element, options);
}
