import { h, options } from "atomico";
import { useCallback } from "react";
import opts from "../options";
export const createWrapper = ({ createElement, useLayoutEffect, forwardRef, useState }) => (tagName, base, { extends: is } = {}) => forwardRef(({ children, ...props }, parentRef) => {
    const [ctx] = useState({});
    const reactProps = {};
    const domProps = {};
    const handlers = {};
    ctx.reactProps = reactProps;
    ctx.domProps = domProps;
    ctx.handlers = handlers;
    // Categorize props for react, dom and events
    for (let prop in props) {
        const value = props[prop];
        if ((prop.startsWith("on") && value == null) ||
            typeof value == "function") {
            let timeStamp;
            // TODO: if the event is null it generates an error
            const handler = (event) => {
                if (timeStamp != event.timeStamp) {
                    timeStamp = event.timeStamp;
                    value(event);
                }
            };
            handlers[prop.slice(2)] = handler;
            //  All events to react would always write with Capital letter
            if (/^on[A-Z]/.test(prop)) {
                reactProps[prop] = handler;
            }
        }
        else if (prop in base.prototype) {
            domProps[prop] = value;
        }
        else {
            reactProps[prop] = value;
        }
    }
    function sync() {
        if (!ctx.afterEffect)
            return;
        // Remove native events
        if (ctx.unsync) {
            ctx.unsync();
            delete ctx.unsync;
        }
        // Prevent script continuity if component has been unmounted
        if (!ctx.current)
            return;
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
    const ref = useCallback((node) => {
        ctx.current = node;
        sync();
        switch (parentRef && typeof parentRef) {
            case "object":
                return (parentRef.current = node);
            case "function":
                return parentRef(node);
        }
    }, [parentRef]);
    reactProps.ref = ref;
    useLayoutEffect = options.ssr ? () => { } : useLayoutEffect;
    useLayoutEffect(() => {
        ctx.afterEffect = true;
        sync();
    });
    if (is)
        reactProps.is = tagName;
    const isSSR = opts.ssr && options.ssr;
    if (isSSR) {
        //@ts-ignore
        const { innerHTML } = h(base).render();
        let __html = innerHTML;
        __html = __html.replace(/^<template [^>]+>/, "");
        if (innerHTML !== __html) {
            __html = __html.replace(/<\/template>/, "");
        }
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
    reactProps["data-hydrate"] = isSSR ? "" : null;
    return createElement(is || tagName, reactProps);
});
