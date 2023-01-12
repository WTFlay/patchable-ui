import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [typescript({ useTsconfigDeclarationDir: true })],
  external: [...Object.keys(pkg.peerDependencies || {})],
};
