import { Button, patchComponent } from "@patchable-ui/base";
import { BootstrapButton } from "./Button";

export function patchWithBootstrap() {
  patchComponent(Button, BootstrapButton);
}

export { BootstrapButton } from "./Button";
