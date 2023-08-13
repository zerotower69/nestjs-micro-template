import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
export default {
  input: './src/index.ts',
  external: ['path', 'fs', 'lodash-es'],
  output: {
    // dir: 'dist',
    format: 'cjs',
    file: 'dist/index.js',
    sourcemap: false,
  },
  watch:{
    include:'src/**'
  },
  plugins: [
    typescript({}),
    // nodeResolve(),
    copy({
      targets: [
        {
          src: 'static/*',
          dest: 'dist/',
        },
      ],
    }),
  ],
};
