import { expect } from "@esm-bundle/chai";
import React from "react";
import ReactDom from "react-dom";
import { ReactComponent, Atomico } from "./demo/auto-spy";

describe("wrapper", () => {
  it("handlers", () =>
    new Promise(async (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const ref = React.createRef();

      ReactDom.render(<ReactComponent onMyCustomEvent={done} ref={ref} />, div);

      const { current } = ref;

      await current.updated;

      current.count = 100;

      expect(current.localName).to.equal("auto-spy");

      expect(current).to.instanceOf(Atomico);
    }));
});
