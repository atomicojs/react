import { Wrapper } from "./create-wrapper";
export declare const createAuto: (wrapper: Wrapper) => <Base extends CustomElementConstructor>(base: Base) => import("./create-wrapper").Component<Base>;
