import { JSXElement } from "atomico";

export type Component<Base extends CustomElementConstructor> = (
  props: JSXElement<Base> &
    import("react").DOMAttributes<Base> & {
      [index: string]: any;
    }
) => any;
