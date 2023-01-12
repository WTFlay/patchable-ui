import React from "react";
import { render } from "@testing-library/react";
import * as patch from "./index";

describe("patch functions", () => {
  const Foo = () => <div>Foo</div>;
  const Bar = () => <div>Bar</div>;

  describe("when patchable() Foo", () => {
    let FooPatchable: typeof Foo;

    beforeEach(() => {
      FooPatchable = patch.patchable(Foo);
    });

    describe("when patchComponent()", () => {
      beforeEach(() => {
        patch.patchComponent(FooPatchable, Bar);
      });

      it("should render the component patched", () => {
        const { container } = render(<FooPatchable />);

        expect(container.textContent).toBe("Bar");
      });
    });
  });
});
