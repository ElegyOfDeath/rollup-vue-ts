import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
import nodeResolve from "rollup-plugin-node-resolve";
import vue from "rollup-plugin-vue";
import filesize from "rollup-plugin-filesize";
import buble from "rollup-plugin-buble";
import replace from "rollup-plugin-replace";

// 入口
const input = "src/index.ts";
// 插件
const plugins = [
  json(),
  nodeResolve(),
  commonjs(),
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
  vue(),
  typescript({
    objectHashIgnoreUnknownHack: true,
  }),
  buble(),
  terser(),
  filesize(),
];

// 外链 - 外部依赖的名称
const external = ["vue"];

export default [
  {
    input,
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      name: "rollup-vue-ts",
      sourcemap: false,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: false,
    },
    plugins,
    external,
  },
];
