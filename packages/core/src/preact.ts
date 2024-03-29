import { createElement, options } from "preact";
import { useLayoutEffect, useState } from "preact/hooks";
import { createAuto } from "./core/create-auto";
import { createWrapper } from "./core/create-wrapper";
export type { Component } from "./core/create-wrapper";

const { vnode } = options;

options.vnode = (node) => {
  if (typeof node.type === "function") {
    //@ts-ignore
    node.props.ref = node.ref;
    node.ref = null;
  }
  if (vnode) vnode(node);
};

const forwardRef =
  (callback: (...args: any[]) => any) =>
  ({ ref, ...props }: any) =>
    callback(props, ref);

export const wrapper = createWrapper({
  createElement,
  useLayoutEffect,
  forwardRef,
  useState,
});

export const auto = createAuto(wrapper);
