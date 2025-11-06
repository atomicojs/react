import { Atomico } from "atomico/types/dom";
import { InferEvents, InferProps, KeyofPropsWithEvents, SchemaComponentConfig } from "atomico/types/schema";
import { HTMLAttributes, CSSProperties, Ref, Key } from "react";
export type AtomicoELement = Atomico<SchemaComponentConfig>;
export type CreateCurrentTarget<Events, Element extends Atomico<any>> = {
    [I in keyof Events]?: Events[I] extends (event: CustomEvent<infer Detail>) => any ? (event: CustomEvent<Detail> & {
        currentTarget: InstanceType<Element>;
    }) => any : never;
};
export type CreateWrapper<Element extends AtomicoELement> = HTMLAttributes<HTMLElement> & {
    style?: CSSProperties & {
        [key: `--${string}`]: string;
    };
    ref?: Ref<HTMLElement>;
    key?: Key;
} & (Element extends Atomico<infer Config> ? Partial<Omit<InferProps<Config["props"]>, KeyofPropsWithEvents<Config["props"]>>> & CreateCurrentTarget<InferEvents<Config["props"]>, Element> : {});
