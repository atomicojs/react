import { createElement } from "preact";
import { useLayoutEffect, useRef } from "preact/hooks";
import { createAuto } from "./core/create-auto";
import { createWrapper } from "./core/create-wrapper";

const forwardRef =
  (component: (props: any, ref: any) => any) =>
  ({ ref, ...props }: any) =>
    component(props, ref);

export const wrapper = createWrapper({
  createElement,
  useLayoutEffect,
  forwardRef,
  useRef,
});

export const auto = createAuto(wrapper);
