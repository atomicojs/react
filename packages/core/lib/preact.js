import { options, createElement } from 'preact';
import { useLayoutEffect, useState } from 'preact/hooks';
import { createAuto } from './core/create-auto.js';
import { createWrapper } from './core/create-wrapper.js';
import '@atomico/wrapper';
import 'atomico';
import 'react';

const { vnode } = options;
options.vnode = (node) => {
  if (typeof node.type === "function") {
    node.props.ref = node.ref;
    node.ref = null;
  }
  if (vnode)
    vnode(node);
};
const forwardRef = (callback) => ({ ref, ...props }) => callback(props, ref);
const wrapper = createWrapper({
  createElement,
  useLayoutEffect,
  forwardRef,
  useState
});
const auto = createAuto(wrapper);

export { auto, wrapper };
