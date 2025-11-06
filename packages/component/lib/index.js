import { jsxs as _jsxs, jsx as _jsx } from "atomico/jsx-runtime";
import { c, event, useProp } from "atomico";
export const MyComponent = c(({ increment, message }) => {
    const [count = 0, setCount] = useProp("count");
    return (_jsxs("host", { shadowDom: true, children: [_jsxs("button", { onclick: () => {
                    setCount(count + 1);
                    increment();
                }, children: ["Increment (", count, ")"] }), _jsx("slot", {}), _jsx("p", { children: message })] }));
}, {
    props: {
        message: String,
        count: Number,
        increment: event(),
    },
});
customElements.define("my-component", MyComponent);
