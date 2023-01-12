import React from "react";
import { ButtonProps } from "@patchable-ui/base";
import "bootstrap/dist/css/bootstrap.min.css";

export const BootstrapButton = (props: ButtonProps) => {
  return (
    <button className="btn btn-primary" {...props}>
      {props.label}
    </button>
  );
};
