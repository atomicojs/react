export function wrapper<T>(
  tagName: string,
  base?: T,
  { extends: is }?: ElementDefinitionOptions
): T extends Atomico ? Component<Partial<T["Props"]>, T> : any;
export type Atomico = {
  Props: {
    [x: string]: any;
  };
};
export type Component<P, C> = (
  props: P & import("react").DOMAttributes<C>
) => any;
