import { jsx as _jsx } from "atomico/jsx-runtime";
import { c } from "atomico";
function checkboxList() {
    return _jsx("host", { shadowDom: true });
}
checkboxList.props = {
    options: {
        type: Object,
        value: () => [],
    },
};
function checkbox() {
    return _jsx("host", { shadowDom: true });
}
checkbox.props = {
    value: String,
    label: String,
    checked: Boolean,
};
export const CheckboxList = c(checkboxList);
export const Checkbox = c(checkbox);
