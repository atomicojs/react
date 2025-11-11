import { createElement, memo } from "react";
import { Component, AtomicoELement } from "./types";

const MemoizedWrapper = memo(({ tagName, ...props }: Record<string, any>) => {
  return createElement(tagName, props);
});

const CACHE_GET_NAME = new Map<CustomElementConstructor, string>();

const getName = (El: CustomElementConstructor) => {
  if ("getName" in customElements) {
    return customElements.getName(El);
  }

  if (CACHE_GET_NAME.has(El)) {
    return CACHE_GET_NAME.get(El);
  }

  const { localName } = new El();
  CACHE_GET_NAME.set(El, localName);

  return localName;
};

export const auto =
  <El extends AtomicoELement>(
    Element: El,
    tagName = getName(Element)
  ): Component<El> =>
  (props) =>
    createElement(MemoizedWrapper, {
      ...props,
      tagName,
    });
