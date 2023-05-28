import { options, h } from "atomico";
import { useCallback } from "react";

const createWrapper =
  ({ createElement, useLayoutEffect, forwardRef, useRef }) =>
  (tagName, base, { extends: is } = {}) =>
    forwardRef(({ children, ...props }, parentRef) => {
      const ctx = useRef();
      const reactProps = {};
      const domProps = {};
      const handlers = {};
      ctx.reactProps = reactProps;
      ctx.domProps = domProps;
      ctx.handlers = handlers;
      for (let prop in props) {
        const value = props[prop];
        if (
          (prop.startsWith("on") && value == null) ||
          typeof value == "function"
        ) {
          let timeStamp;
          const handler = (event) => {
            if (timeStamp != event.timeStamp) {
              timeStamp = event.timeStamp;
              value(event);
            }
          };
          handlers[prop.slice(2)] = handler;
          if (/^on[A-Z]/.test(prop)) {
            reactProps[prop] = handler;
          }
        } else if (prop in base.prototype) {
          domProps[prop] = value;
        } else {
          reactProps[prop] = value;
        }
      }
      function sync() {
        if (ctx.unsync) {
          ctx.unsync();
          delete ctx.unsync;
        }
        if (!ctx.current) return;
        const { domProps: domProps2, handlers: handlers2, current } = ctx;
        delete ctx.domProps;
        delete ctx.handlers;
        const unlisteners = [];
        for (let prop in handlers2) {
          const value = handlers2[prop];
          current.addEventListener(prop, value);
          unlisteners.push(() => current.removeEventListener(prop, value));
        }
        for (let prop in domProps2) {
          current[prop] = domProps2[prop];
        }
        ctx.unsync = () => {
          unlisteners.forEach((unlistener) => unlistener());
        };
      }
      const ref = useCallback(
        (node) => {
          ctx.current = node;
          sync();
          switch (parentRef && typeof parentRef) {
            case "object":
              return (parentRef.current = node);
            case "function":
              return parentRef(node);
          }
        },
        [parentRef]
      );
      reactProps.ref = ref;
      useLayoutEffect = options.ssr ? () => {} : useLayoutEffect;
      useLayoutEffect(sync);
      if (is) reactProps.is = tagName;
      if (options.ssr) {
        const { innerHTML } = h(base).render();
        let __html = innerHTML;
        __html = __html.replace(/^<template [^>]+>/, "");
        if (innerHTML !== __html) {
          __html = __html.replace(/<\/template>/, "");
        }
        reactProps["data-hydrate"] = "";
        children = [
          createElement("template", {
            shadowroot: "open",
            dangerouslySetInnerHTML: {
              __html,
            },
          }),
          children,
        ];
      }
      if (children != void 0) {
        reactProps.children = children;
      }
      return createElement(is || tagName, { ...reactProps });
    });

export { createWrapper };
