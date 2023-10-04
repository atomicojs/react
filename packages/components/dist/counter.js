import { jsxs as _jsxs, jsx as _jsx } from "atomico/jsx-runtime";
import { c, useProp } from "atomico";
function counter() {
    const [count, setCount] = useProp("count");
    return (_jsx("host", { shadowDom: true, children: _jsxs("button", { onclick: () => setCount(count + 1), children: ["Increment: ", count] }) }));
}
counter.props = {
    count: {
        type: Number,
        event: {
            type: "MyCustomEvent",
        },
        value: 0,
    },
};
export const Counter = c(counter);
