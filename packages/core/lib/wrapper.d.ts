import { CreateWrapper, AtomicoELement } from "./types";
export declare const createWrapper: <El extends AtomicoELement>(Element: El, tagName?: string) => ((props: CreateWrapper<El>) => any);
