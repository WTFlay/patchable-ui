import React from "react";

export interface ButtonProps {
  className: string;
  label: string;
  onClick: () => void;
  type: "submit" | "button";
}

export const Button = (props: ButtonProps) => (
  <button className={props.className} type={props.type} onClick={props.onClick}>
    {props.label}
  </button>
);
