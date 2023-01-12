import baseConfig from "../../rollup.config.mjs";
import pkg from "./package.json" assert { type: "json" };

export default {
  ...baseConfig(pkg),
};
