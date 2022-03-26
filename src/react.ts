import { createElement, useLayoutEffect, forwardRef, useRef } from "react";
import { createAuto } from "./create-auto";
import { createWrapper } from "./create-wrapper";

export const wrapper = createWrapper({
  createElement,
  useLayoutEffect,
  forwardRef,
  useRef,
});

export const auto = createAuto(wrapper);
