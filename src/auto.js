import { wrapper } from "./wrapper.js";

let id = 0;

const { define } = customElements;

const getId = () => `c-${Date.now()}-${id++}`;

/**
 * @type {Map<Element,[string,ElementDefinitionOptions]>}
 */
export const registered = new Map();

customElements.define = function (tagName, Element, options) {
  define.call(customElements, tagName, Element, options);
  registered.set(Element, [tagName, options]);
};

/**
 * @template {Element} T
 * @param {T} Element
 * @returns {import("./wrapper").Component<T>}
 */
export function auto(Element) {
  if (!registered.has(Element)) customElements.define(getId(), Element);

  const [tagName, options] = registered.get(Element);

  return wrapper(tagName, Element, options);
}
