import { Props, c } from "atomico";

function checkboxList() {
  return <host shadowDom></host>;
}

checkboxList.props = {
  options: {
    type: Object,
    value: (): { value: string; label: string; checked: boolean }[] => [],
  },
};

function checkbox() {
  return <host shadowDom></host>;
}

checkbox.props = {
  value: String,
  label: String,
  checked: Boolean,
};

export const CheckboxList = c(checkboxList);
export const Checkbox = c(checkbox);
