export function wrapper<T>(
  tagName: string,
  base?: T,
  { extends: is }?: ElementDefinitionOptions
): T extends Atomico ? Component<Partial<T["Props"]>, T> : Component<{}, T>;
export type Fill = {
  [x: string]: any;
};
export type Atomico = {
  Props: Fill;
};
export type Component<P, C> = (
  props: P & import("react").DOMAttributes<C>
) => any & Fill;
