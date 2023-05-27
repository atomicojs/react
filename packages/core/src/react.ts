import { createElement, useLayoutEffect, forwardRef, useRef } from "react";
import { createAuto } from "./core/create-auto";
import { createWrapper } from "./core/create-wrapper";
export type { Component } from "./core/create-wrapper";

export const wrapper = createWrapper({
  createElement,
  useLayoutEffect,
  forwardRef,
  useRef,
});

export const auto = createAuto(wrapper);
