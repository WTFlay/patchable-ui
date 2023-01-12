import { Button, ButtonProps, patchComponent } from "@patchable-ui/base";

const CustomButton = (props: ButtonProps) => (
  <div>
    <label style={{ marginRight: 8 }}>{props.label}</label>
    <button {...props}>🚀</button>
  </div>
);

export function patchUi() {
  patchComponent(Button, CustomButton);
}
