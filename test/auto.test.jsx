//@ts-check
import { expect } from "@esm-bundle/chai";
import React from "react";
import ReactDom from "react-dom";
import { ReactComponent, Atomico } from "./demo/auto";

describe("wrapper", () => {
  it("handlers", () =>
    new Promise(async (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const ref = React.createRef();

      ReactDom.render(
        <ReactComponent
          count={100}
          onMyCustomEvent={done}
          ref={ref}
          reference={new Image()}
        />,
        div
      );

      const { current } = ref;

      await current.updated;

      expect(current.count).to.equal(100);

      current.count = 1;

      expect(current.reference).to.instanceOf(Image);

      expect(ref.current).to.instanceOf(Atomico);
    }));
});
