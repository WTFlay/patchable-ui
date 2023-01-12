import React from "react";
import { patchable } from "../patch/patchable";

export interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

const Button = (props: ButtonProps) => (
  <button className={props.className} type={props.type} onClick={props.onClick}>
    {props.label}
  </button>
);

export default patchable(Button);
