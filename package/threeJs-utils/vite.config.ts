import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

const pkg = require('./package.json');

const version = pkg.version;

const banner:string =
    `/*!
 * ${pkg.name} ${version}
 * Copyright 2023-${(new Date).getFullYear()}. All Rights Reserved
 */
`;

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true,
    outDir: "lib",
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => {
        return `index.${format}.js`
      }
    },
    rollupOptions: {
      external: [
        "moment",
        "cesium",
        "three",
        "three-loader-3dtiles"
      ],
      output: {
        banner
      }
    }
  }
})
