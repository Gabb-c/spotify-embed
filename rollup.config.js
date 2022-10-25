import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import banner2 from 'rollup-plugin-banner2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import analyzer from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
import isCI from 'is-ci';
import { terser } from 'rollup-plugin-terser';
// @ts-check

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: 'src/index.ts',
    output: [
      // commonjs
      {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: !isCI,
      },
      // esmodule
      {
        file: 'lib/index.esm.js',
        format: 'esm',
        sourcemap: !isCI,
      },
    ],
    plugins: [
      peerDepsExternal(), // automatically externalize peerDependencies in a rollup bundle
      resolve(), // locates modules using the Node resolution algorithm
      commonjs(), // convert CommonJS modules to ES6
      typescript({ tsconfig: './tsconfig.json', useTsconfigDeclarationDir: true }), // integration between rollup and typescript
      terser(), // minify generated es bundle (uses terser under the hood)
      isCI ? null : analyzer(),
      isCI ? null : visualizer(),
    ],
  },
  // typings
  {
    input: 'lib/types/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts(), del({ targets: 'lib/types', hook: 'buildEnd' })], // roll-up .d.ts files and delete the types dir
  },
];

export default config;
