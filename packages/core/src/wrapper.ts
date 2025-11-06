import { createElement, memo } from "react";
import { CreateWrapper, AtomicoELement } from "./types";

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

export const createWrapper =
  <El extends AtomicoELement>(
    Element: El,
    tagName = getName(Element)
  ): ((props: CreateWrapper<El>) => any) =>
  (props) =>
    createElement(MemoizedWrapper, {
      ...props,
      tagName,
    });
