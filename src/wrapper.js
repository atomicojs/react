import { createElement, useLayoutEffect, forwardRef, useRef } from "react";

/**
 * Create a wrapper component to improve the integration of React and Atomico webcomponents
 *
 * @template T
 * @param {string} tagName - Create a webcomponent container to be used within React,
 *                           solving the association of native events
 * @param {T} [base] - Component instantiated of `c` will allow to infer the for typescript
 * @param {ElementDefinitionOptions} [options]
 * @returns {T extends Atomico ? Component<T["Props"],T> : Component<{}, T> }
 */
export const wrapper = (tagName, base, { extends: is } = {}) =>
  forwardRef(({ children, ...props }, ref) => {
    let localRef = useRef();
    ref = ref || localRef;
    const [handlers, nextProps] = Object.entries(props).reduce(
      ([handlers, nextProps], [name, value]) => {
        if (
          (name.startsWith("on") && value == null) ||
          typeof value == "function"
        ) {
          handlers.push([name.slice(2), value]);
        } else {
          nextProps[name] = value;
        }
        return [handlers, nextProps];
      },
      [[], { ref }]
    );

    useLayoutEffect(() => {
      const { current } = ref;
      const unlisteners = handlers
        .filter(([, value]) => value)
        .map(([name, value]) => {
          current.addEventListener(name, value);
          return () => current.removeEventListener(name, value);
        });
      return () => unlisteners.forEach((unlistener) => unlistener());
    });

    if (is) nextProps.is = tagName;

    return createElement(is || tagName, nextProps, children);
  });

/**
 * @typedef {Object<string,any>} Fill
 */

/**
 * @typedef {Object} Atomico
 * @property {Fill} Props
 */

/**
 * @template P, C
 * @typedef {(props:Partial<P> & import("react").DOMAttributes<C> & Fill)=>any} Component
 */
