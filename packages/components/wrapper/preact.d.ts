import { Checkbox as _Checkbox, CheckboxList as _CheckboxList } from "components";
import { Component } from "@atomico/react/preact";
export const Checkbox: Component<typeof _Checkbox>;
export const CheckboxList: Component<typeof _CheckboxList>;
declare namespace JSX {
   interface IntrinsicElements{
      "c-checkbox": Component<typeof _Checkbox>;,      "c-checkbox-list": Component<typeof _CheckboxList>;
   }
}