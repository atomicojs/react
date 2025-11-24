import { MyComponent as _MyComponent } from "component";
import { Component } from "@atomico/react";
export const MyComponent: Component<typeof _MyComponent>;
declare namespace JSX {
    interface IntrinsicElements{
      "my-component": Component<typeof _MyComponent>;
    }
}