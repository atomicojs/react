import { createElement, useLayoutEffect, forwardRef, useRef } from 'react';
import { createAuto } from './core/create-auto.js';
import { createWrapper } from './core/create-wrapper.js';
import './proxy.js';
import 'atomico';

const wrapper = createWrapper({
  createElement,
  useLayoutEffect,
  forwardRef,
  useRef
});
const auto = createAuto(wrapper);

export { auto, wrapper };
