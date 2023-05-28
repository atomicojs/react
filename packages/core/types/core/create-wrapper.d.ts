import { JSXElement } from "atomico";
import { DOMAttributes } from "react";
export interface Component<Base extends CustomElementConstructor> {
    (props: Partial<JSXElement<Base> & DOMAttributes<JSXElement<Base>>>): any;
}
export interface Wrapper {
    <Base extends CustomElementConstructor>(tagName: string, base: Base, options?: ElementDefinitionOptions): Component<Base>;
}
export declare const createWrapper: ({ createElement, useLayoutEffect, forwardRef, useRef }: {
    createElement: any;
    useLayoutEffect: any;
    forwardRef: any;
    useRef: any;
}) => <Base extends CustomElementConstructor>(tagName: string, base: Base, { extends: is }?: ElementDefinitionOptions) => Component<Base>;
