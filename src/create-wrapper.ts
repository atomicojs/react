import { JSXElement } from "atomico";

interface Props {
  [prop: string]: any;
}

type Entries = [string, any][];

export interface Component<Base extends CustomElementConstructor> {
  (props: Partial<JSXElement<Base>>): any;
}

export interface Wrapper {
  <Base extends CustomElementConstructor>(
    tagName: string,
    base: Base,
    options?: ElementDefinitionOptions
  ): Component<Base>;
}

export const createWrapper =
  ({ createElement, useLayoutEffect, forwardRef, useRef }) =>
  <Base extends CustomElementConstructor>(
    tagName: string,
    base: Base,
    { extends: is }: ElementDefinitionOptions = {}
  ) =>
    forwardRef(
      ({ children, ...props }: JSXElement<Base> & { children?: any }, ref) => {
        let localRef = useRef();

        ref = ref || localRef;

        const [handlers, rawProps, nextProps] = Object.entries(props).reduce<
          [Entries, Entries, Props]
        >(
          ([handlers, rawProps, nextProps], [name, value]) => {
            if (
              (name.startsWith("on") && value == null) ||
              typeof value == "function"
            ) {
              handlers.push([name.slice(2), value]);
            } else if (name in base.prototype) {
              rawProps.push([name, value]);
            } else {
              nextProps[name] = value;
            }
            return [handlers, rawProps, nextProps];
          },
          [[], [], { ref }]
        );

        useLayoutEffect(() => {
          const { current } = ref;
          const unlisteners = handlers
            .filter(([, value]) => value)
            .map(([name, value]) => {
              current.addEventListener(name, value);
              return () => current.removeEventListener(name, value);
            });

          rawProps.forEach(([name, value]) => (current[name] = value));

          return () => unlisteners.forEach((unlistener) => unlistener());
        });

        if (is) nextProps.is = tagName;

        return createElement(is || tagName, nextProps, children);
      }
    ) as Component<Base>;
