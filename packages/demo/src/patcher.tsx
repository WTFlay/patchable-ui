import { Button, ButtonProps, patchComponent } from "@patchable-ui/base";

const style = {
  border: "1px solid #000",
  borderRadius: "8px",
  margin: 16,
};

export const CustomButton = (props: ButtonProps) => (
  <button style={style} {...props}>
    {props.label}
  </button>
);

export function patchUi() {
  patchComponent(Button, CustomButton);
}
