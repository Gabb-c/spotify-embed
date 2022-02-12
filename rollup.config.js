import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import banner2 from 'rollup-plugin-banner2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import analyzer from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';
import isCI from 'is-ci';

import { terser } from 'rollup-plugin-terser';
import { myBanner } from './banner';

import * as PACKAGE from './package.json';

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: 'src/index.ts',
    output: [
      // commonjs
      {
        file: PACKAGE.main,
        format: 'cjs',
        sourcemap: true,
      },
      // esmodule
      {
        file: PACKAGE.module,
        format: 'esm',
        sourcemap: true,
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
      isCI ? banner2(() => myBanner) : null,
    ],
  },
  // typings
  {
    input: 'lib/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts(), del({ targets: 'dist/types', hook: 'buildEnd' }), banner2(() => myBanner)], // roll-up .d.ts files and delete the types dir
  },
];

export default config;
