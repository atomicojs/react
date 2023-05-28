const { define } = customElements;
const registered = /* @__PURE__ */ new Map();
customElements.define = function(tagName, Element, options) {
  define.call(this, tagName, Element, options);
  registered.set(Element, [tagName, options]);
};

export { registered };
