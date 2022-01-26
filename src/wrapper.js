import { createElement, useLayoutEffect, forwardRef, useRef } from "react";

/**
 * Create a wrapper component to improve the integration of React and Atomico webcomponents
 *
 * @template {CustomElementConstructor} Base
 * @param {string} tagName - Create a webcomponent container to be used within React,
 *                           solving the association of native events
 * @param {Base} [base] - Component instantiated of `c` will allow to infer the for typescript
 * @param {ElementDefinitionOptions} [options]
 * @returns { import("../internal").Component<Base> }
 */
export const wrapper = (tagName, base, { extends: is } = {}) =>
  forwardRef(({ children, ...props }, ref) => {
    let localRef = useRef();
    ref = ref || localRef;

    const [handlers, rawProps, nextProps] = Object.entries(props).reduce(
      ([handlers, rawProps, nextProps], [name, value]) => {
        if (
          (name.startsWith("on") && value == null) ||
          typeof value == "function"
        ) {
          handlers.push([name.slice(2), value]);
        } else if (name in base.prototype) {
          rawProps.push([name, value]);
        } else {
          nextProps[name] = value;
        }
        return [handlers, rawProps, nextProps];
      },
      [[], [], { ref }]
    );

    useLayoutEffect(() => {
      const { current } = ref;
      const unlisteners = handlers
        .filter(([, value]) => value)
        .map(([name, value]) => {
          current.addEventListener(name, value);
          return () => current.removeEventListener(name, value);
        });

      rawProps.forEach(([name, value]) => (current[name] = value));

      return () => unlisteners.forEach((unlistener) => unlistener());
    });

    if (is) nextProps.is = tagName;

    return createElement(is || tagName, nextProps, children);
  });
