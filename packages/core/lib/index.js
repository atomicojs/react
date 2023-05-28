import { createElement, useLayoutEffect, forwardRef, useRef, useState } from 'react';
import { createAuto } from './core/create-auto.js';
import { createWrapper } from './core/create-wrapper.js';
import './proxy.js';
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
