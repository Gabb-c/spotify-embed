import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import swc from '@rollup/plugin-swc';
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from "./package.json" assert { type: 'json' };

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: false,
			},
			{
				file: pkg.module,
				format: "esm",
				sourcemap: false,
			}
		],
		plugins: [
			typescript({ tsconfig: "./tsconfig.json" }),
			swc(),
			resolve(),
			peerDepsExternal(),
			terser(),
      del({ targets: 'lib' })
		]
	},
	{
		input: "lib/dist/index.d.ts",
		output: [{ file: pkg.types, format: "esm" }],
		plugins: [dts(), del({ targets: '**/**/dist', hook: "buildEnd" })],
	},
];
