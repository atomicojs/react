import { createElement, memo } from "react";
import { getDefinition } from "@atomico/wrapper";
const MemoizedWrapper = memo(({ tagName, ...props }) => {
    console.log("Rendering Wrapper for:", tagName);
    return createElement(tagName, props);
});
export const auto = (Element, tagName = getDefinition(Element, true).at(0)) => (props) => createElement(MemoizedWrapper, {
    ...props,
    tagName,
});
