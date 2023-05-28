import { expect, describe, it } from "vitest";
import { createRef } from "react";
import { createRoot } from "react-dom/client";
import { ReactComponent, Atomico } from "../../example/atomico";

describe("core", () => {
  it("handlers", () =>
    new Promise(async (done) => {
      const host = document.createElement("div");

      document.body.append(host);

      const root = createRoot(host);

      const ref = createRef();

      root.render(
        <ReactComponent
          onMyCustomEvent={done}
          ref={async (current) => {
            if (!current) return;
            await current.updated;

            current.count = 100;

            expect(current.localName).to.equal("my-component");

            expect(current).to.instanceOf(Atomico);
          }}
        />
      );
    }));
});
