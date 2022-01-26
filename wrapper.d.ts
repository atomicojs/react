import { Component } from "./internal";
/**
 *
 */
export function wrapper<Base extends CustomElementConstructor>(
  tagName: string,
  base?: Base,
  { extends: is }?: ElementDefinitionOptions
): Component<Base>;
