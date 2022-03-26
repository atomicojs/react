import { createElement } from "preact";
import { forwardRef } from "preact/compat";
import { useLayoutEffect, useRef } from "preact/hooks";
import { createAuto } from "./core/create-auto";
import { createWrapper } from "./core/create-wrapper";

export const wrapper = createWrapper({
  createElement,
  useLayoutEffect,
  forwardRef,
  useRef,
});

export const auto = createAuto(wrapper);
