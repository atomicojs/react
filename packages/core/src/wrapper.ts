import { createElement, memo } from "react";
import { Component, AtomicoELement } from "./types";
import { getDefinition } from "@atomico/wrapper";

const MemoizedWrapper = memo(({ tagName, ...props }: Record<string, any>) => {
  console.log("Rendering Wrapper for:", tagName);
  return createElement(tagName, props);
});

export const auto =
  <El extends AtomicoELement>(
    Element: El,
    tagName = getDefinition(Element, true).at(0)
  ): Component<El> =>
  (props) =>
    createElement(MemoizedWrapper, {
      ...props,
      tagName,
    });
