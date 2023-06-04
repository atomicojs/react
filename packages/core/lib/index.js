import { createElement, useLayoutEffect, forwardRef, useRef, useState } from 'react';
import { createAuto } from './core/create-auto.js';
import { createWrapper } from './core/create-wrapper.js';
import '@atomico/wrapper';
import 'atomico';

const wrapper = createWrapper({
  createElement,
  useLayoutEffect,
  forwardRef,
  useRef,
  useState
});
const auto = createAuto(wrapper);

export { auto, wrapper };
