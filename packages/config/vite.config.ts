import { defineConfig } from 'vite';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  build: {
    target: 'esnext',
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['path', 'fs'], //!打包时要排除node的内置模块，不然报错
      output: {
        entryFileNames: '[name].js',
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'static/*',
              dest: 'dist/',
            },
          ],
        }),
      ],
    },
  },
});
