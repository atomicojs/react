import { expect } from "@esm-bundle/chai";
import React from "react";
import ReactDom from "react-dom";
import { Component, Atomico } from "./demo/wrapper";

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

      expect(ref.current.localName).to.equal("my-component");

      expect(ref.current).to.instanceOf(Atomico);
    }));
});
