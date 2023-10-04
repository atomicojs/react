import { Checkbox as _Checkbox, CheckboxList as _CheckboxList, Counter as _Counter } from "components";
import { Component } from "@atomico/react";
export const Checkbox: Component<typeof _Checkbox>;
export const CheckboxList: Component<typeof _CheckboxList>;
export const Counter: Component<typeof _Counter>;
declare namespace JSX {
   interface IntrinsicElements{
      "c-checkbox": Component<typeof _Checkbox>;,      "c-checkbox-list": Component<typeof _CheckboxList>;,      "c-counter": Component<typeof _Counter>;
   }
}