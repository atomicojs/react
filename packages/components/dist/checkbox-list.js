import { jsx as _jsx, jsxs as _jsxs } from "atomico/jsx-runtime";
import { c, useEvent } from "atomico";
function checkboxList() {
    const dispatch = useEvent("ChangeCheckboxList", {
        bubbles: true,
        composed: true,
    });
    return (_jsx("host", { shadowDom: true, children: _jsx("slot", { onChangeCheckbox: (event) => {
                console.info({ event: "onChangeCheckbox" });
                dispatch(event.detail);
            } }) }));
}
function checkbox({ value, checked }) {
    const dispatch = useEvent("ChangeCheckbox", {
        bubbles: true,
        composed: true,
    });
    return (_jsx("host", { shadowDom: true, children: _jsxs("button", { onclick: () => {
                console.info({ event: "onclick" });
                dispatch(value);
            }, children: ["toggle:", (!!checked).toString()] }) }));
}
checkbox.props = {
    value: String,
    label: String,
    checked: Boolean,
};
export const CheckboxList = c(checkboxList);
export const Checkbox = c(checkbox);
