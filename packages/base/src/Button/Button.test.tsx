import React from "react";
import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render label", () => {
    render(<Button label="Click on me" />);

    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Click on me");
  });

  it("should call onClick when click on button", () => {
    const onClick = jest.fn();
    render(<Button label="" onClick={onClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalled();
  });

  it('should pass "type" attribute', () => {
    render(<Button label="Click on me" type="submit" />);

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it('should pass "className" attribute', () => {
    render(<Button label="Click on me" className="btn-style" />);

    expect(screen.getByRole("button")).toHaveAttribute("class", "btn-style");
  });
});
