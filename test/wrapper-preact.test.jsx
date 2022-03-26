import { expect } from "@esm-bundle/chai";
import { render, h, createRef } from "preact";
import { PreactComponent, Atomico } from "./demo/wrapper";

describe("wrapper", () => {
  it("handlers", () =>
    new Promise(async (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);

      const ref = createRef();

      render(
        h(PreactComponent, {
          onMyCustomEvent: done,
          ref,
        }),
        div
      );

      const { current } = ref;

      await current.updated;

      current.count = 100;

      expect(current.localName).to.equal("my-component");

      expect(current).to.instanceOf(Atomico);
    }));
});
