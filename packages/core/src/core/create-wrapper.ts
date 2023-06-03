import { JSXElement, options, h } from "atomico";
import { DOMAttributes, useCallback } from "react";

interface Props {
  [prop: string]: any;
}

type Entries = [string, any][];

export interface Component<Base extends CustomElementConstructor> {
  (props: Partial<JSXElement<Base> & DOMAttributes<JSXElement<Base>>>): any;
}

export interface Wrapper {
  <Base extends CustomElementConstructor>(
    tagName: string,
    base: Base,
    options?: ElementDefinitionOptions
  ): Component<Base>;
}

export const createWrapper =
  ({ createElement, useLayoutEffect, forwardRef, useRef, useState }) =>
  <Base extends CustomElementConstructor>(
    tagName: string,
    base: Base,
    { extends: is }: ElementDefinitionOptions = {}
  ) =>
    forwardRef(
      (
        { children, ...props }: JSXElement<Base> & { children?: any },
        parentRef
      ) => {
        const ctx = useState({});

        const reactProps: Record<string, any> = {};
        const domProps = {};
        const handlers = {};

        ctx.reactProps = reactProps;
        ctx.domProps = domProps;
        ctx.handlers = handlers;

        // Categorize props for react, dom and events
        for (let prop in props) {
          const value = props[prop];
          if (
            (prop.startsWith("on") && value == null) ||
            typeof value == "function"
          ) {
            let timeStamp: number;
            // TODO: if the event is null it generates an error
            const handler = (event: Event) => {
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
          if (!ctx.afterEffect) return;
          // Remove native events
          if (ctx.unsync) {
            ctx.unsync();
            delete ctx.unsync;
          }

          // Prevent script continuity if component has been unmounted
          if (!ctx.current) return;

          const { domProps, handlers, current } = ctx;

          const unlisteners = [];

          for (let prop in handlers) {
            const value = handlers[prop];
            current.addEventListener(prop, value);
            unlisteners.push(() => current.removeEventListener(prop, value));
          }

          for (let prop in domProps) {
            current[prop] = domProps[prop];
          }

          ctx.unsync = () => {
            unlisteners.forEach((unlistener) => unlistener());
          };
        }

        const ref = useCallback(
          (node: HTMLElement | null) => {
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

        useLayoutEffect(() => {
          ctx.afterEffect = true;
          sync();
        });

        if (is) reactProps.is = tagName;

        if (options.ssr) {
          //@ts-ignore
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
        if (children != undefined) {
          reactProps.children = children;
        }

        return createElement(is || tagName, reactProps);
      }
    ) as Component<Base>;
