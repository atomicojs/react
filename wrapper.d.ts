export function wrapper<T>(tagName: string, base?: T): T extends Atomico ? Component<T["Props"]> : Component<any>;
export type Atomico = {
    Props: {
        [x: string]: any;
    };
};
export type Component<P> = (props: P) => any;
