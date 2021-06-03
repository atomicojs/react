export function wrapper<T>(
  tagName: string,
  base?: T,
  { extends: is }?: ElementDefinitionOptions
): Component<T>;

export type Fill = {
  [x: string]: any;
};
export type Atomico = {
  Props: Fill;
};
export type Component<C> = C extends Atomico
  ? (
      props: Partial<C["Props"]> & import("react").DOMAttributes<C> & Fill
    ) => any
  : (props: import("react").DOMAttributes<C> & Fill) => any;
