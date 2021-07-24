// import styles from "rollup-plugin-styles";
// const autoprefixer = require('autoprefixer');
// import { terser } from 'rollup-plugin-terser'
// import babel from '@rollup/plugin-babel';
// import typescript from '@rollup/plugin-typescript';
// // the entry point for the library
// const input = 'index.tsx'

// // 
// var MODE = [
//     {
//         fomart: 'cjs'
//     },
//     {
//         fomart: 'esm'
//     },
//     {
//         fomart: 'umd'
//     }
// ]




// var config = []


// MODE.map((m) => {
//     var conf = {
//         input: input,
//         output: {
//             // then name of your package
//             name: "react-awesome-buttons",
//             file: `dist/index.${m.fomart}.js`,
//             format: m.fomart,
//             exports: "auto"
//         },
//         // this externelizes react to prevent rollup from compiling it
//         external: ["react", /@babel\/runtime/],
//         plugins: [
//             // these are babel comfigurations
//             babel({
//                 exclude: 'node_modules/**',
//                 plugins: ['@babel/transform-runtime'],
//                 babelHelpers: 'runtime'
//             }),
//             // this adds sourcemaps
//             // sourcemaps(),
//             typescript(),
//             terser(),
//             // this adds support for styles
//             styles({
//                 postcss: {
//                     plugins: [
//                         autoprefixer()
//                     ]
//                 }
//             })
//         ]
//     }
//     config.push(conf)
// })

// export default [
//     ...config,
// ]



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
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript(),
        postcss(),
        terser()
    ]
};
