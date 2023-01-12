import React from "react";
import { patchComponent } from "./patch-component";

describe("patchComponent", () => {
  const Foo = () => <div>Foo</div>;
  const Bar = () => <div>Bar</div>;

  it("should set override attribute with component passed", () => {
    patchComponent(Foo, Bar);

    // @ts-expect-error override is hidden attribute
    expect(Foo.override).toBe(Bar);
  });
});
