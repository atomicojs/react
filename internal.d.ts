export type GetProps<Base extends CustomElementConstructor> = Base extends {
  Props: infer Props;
}
  ? Props
  : Base extends { new (props: infer Props): any; "##props": any }
  ? Props
  : InstanceType<Base>;

export type Component<Base extends CustomElementConstructor> = (
  props: GetProps<Base> &
    import("react").DOMAttributes<Base> & {
      [index: string]: any;
    }
) => any;
