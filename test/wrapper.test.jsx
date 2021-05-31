import React from "react";
import ReactDom from "react-dom";
import { Component } from "./demo/react.jsx";

describe("wrapper", () => {
  it("handlers", () =>
    new Promise(async (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const ref = React.createRef();

      ReactDom.render(<Component onMyCustomEvent={done} ref={ref} />, div);

      const { current } = ref;

      await current.updated;

      current.count = 100;
    }));
});
