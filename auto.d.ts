import { Component } from "./internal";

export function auto<Base extends CustomElementConstructor>(
  Element: Base
): Component<Base>;

export const registered: Map<Element, [string, ElementDefinitionOptions]>;
