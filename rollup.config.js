import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from 'rollup-plugin-terser'

import packageJson from "./package.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: "index.tsx",
    // dest: './dist/bundle.js',

    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            exports: 'auto'
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true, exports: 'auto'

        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript(),
        postcss(),
        terser()
    ],
    external: ['react'],
};
