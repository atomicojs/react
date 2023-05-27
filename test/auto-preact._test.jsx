//@ts-check
import { expect, describe, it } from "vitest";
import { render, h, createRef } from "preact";
import { PreactComponent, Atomico } from "./demo/auto";

describe("wrapper", () => {
  it("handlers", () =>
    new Promise(async (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);

      const ref = createRef();

      render(
        h(PreactComponent, {
          count: 100,
          onMyCustomEvent: done,
          ref,
        }),
        div
      );

      const { current } = ref;

      await current.updated;

      expect(current.count).to.equal(100);

      current.count = 1;

      expect(current).to.instanceOf(Atomico);
    }));
});
