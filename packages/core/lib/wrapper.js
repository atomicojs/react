import { createElement, memo } from "react";
const MemoizedWrapper = memo(({ tagName, ...props }) => {
    return createElement(tagName, props);
});
const CACHE_GET_NAME = new Map();
const getName = (El) => {
    if ("getName" in customElements) {
        return customElements.getName(El);
    }
    if (CACHE_GET_NAME.has(El)) {
        return CACHE_GET_NAME.get(El);
    }
    const { localName } = new El();
    CACHE_GET_NAME.set(El, localName);
    return localName;
};
export const auto = (Element, tagName = getName(Element)) => (props) => createElement(MemoizedWrapper, {
    ...props,
    tagName,
});
