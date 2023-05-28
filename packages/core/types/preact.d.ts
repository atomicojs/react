export type { Component } from "./core/create-wrapper";
export declare const wrapper: <Base extends CustomElementConstructor>(tagName: string, base: Base, { extends: is }?: ElementDefinitionOptions) => import("./core/create-wrapper").Component<Base>;
export declare const auto: <Base extends CustomElementConstructor>(base: Base) => import("./core/create-wrapper").Component<Base>;
