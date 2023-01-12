import React from "react";
import { render } from "@testing-library/react";
import { patchable } from "./patchable";

describe("patchable", () => {
  const Foo = () => <div>Foo</div>;
  let PatchableFoo;

  beforeEach(() => {
    PatchableFoo = patchable(Foo);
  });

  it("should return a component", () => {
    const { container } = render(<PatchableFoo />);

    expect(container.firstChild).toBeTruthy();
  });

  it("should return the same component", () => {
    const { container } = render(<PatchableFoo />);
    const { container: expected } = render(<Foo />);

    expect(container.firstChild).toStrictEqual(expected.firstChild);
  });

  describe("when override is provided", () => {
    const Bar = () => <div>Bar</div>;

    it("should return the override component", () => {
      const PatchableFoo = patchable(Foo);
      // @ts-expect-error override is hidden
      PatchableFoo.override = Bar;
      const { container } = render(<PatchableFoo />);

      expect(container.textContent).toBe("Bar");
    });
  });
});
