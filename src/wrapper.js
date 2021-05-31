import { createElement, useLayoutEffect, forwardRef, useRef } from "react";

/**
 * Create a wrapper component to improve the integration of React and Atomico webcomponents
 *
 * @template T
 * @param {string} tagName - Create a webcomponent container to be used within React,
 *                           solving the association of native events
 * @param {T} [base] - Component instantiated of `c` will allow to infer the for typescript
 * @returns {T extends Atomico ? Component<T["Props"]> : Component<any> }
 */
export const wrapper = (tagName, base) =>
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
    }, handlers.flat());

    return createElement(tagName, nextProps, children);
  });

/**
 * @typedef {Object} Atomico
 * @property {Object<string,any>} Props
 */

/**
 * @template P
 * @typedef {(props:P)=>any} Component
 */
