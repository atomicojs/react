import { Host, Props, c, useEvent } from "atomico";

function checkboxList(): Host<{ onChangeCheckboxList: CustomEvent<string> }> {
  const dispatch = useEvent("ChangeCheckboxList", {
    bubbles: true,
    composed: true,
  });
  return (
    <host shadowDom>
      <slot
        onChangeCheckbox={(event: CustomEvent<string>) => {
          console.info({ event: "onChangeCheckbox" });
          dispatch(event.detail);
        }}
      />
    </host>
  );
}

function checkbox({ value, checked }: Props<typeof checkbox>) {
  const dispatch = useEvent("ChangeCheckbox", {
    bubbles: true,
    composed: true,
  });
  return (
    <host shadowDom>
      <button
        onclick={() => {
          console.info({ event: "onclick" });
          dispatch(value);
        }}
      >
        toggle:{(!!checked).toString()}
      </button>
    </host>
  );
}

checkbox.props = {
  value: String,
  label: String,
  checked: Boolean,
};

export const CheckboxList = c(checkboxList);
export const Checkbox = c(checkbox);
