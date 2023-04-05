const { define } = customElements;

export const registered = new Map<
  CustomElementConstructor,
  [string, ElementDefinitionOptions]
>();

customElements.define = function (tagName, Element, options) {
  define.call(this, tagName, Element, options);
  registered.set(Element, [tagName, options]);
};
