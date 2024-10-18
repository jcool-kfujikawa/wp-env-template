import { defineConfig } from 'vite';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sassGlobImports from 'vite-plugin-sass-glob-import';

const jsFiles = Object.fromEntries(
  globSync('src/assets/**/*.js', { ignore: ['node_modules/**', '**/modules/**', '**/dist/**'] }).map(file => [
    path.relative(
      'src/assets',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const scssFiles = Object.fromEntries(
  globSync('src/assets/scss/**/*.scss', { ignore: ['src/assets/scss/**/_*.scss', 'src/assets/scss/**/index.scss'] }).map(file => [
    path.relative(
      'src/assets',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const inputObject = { ...scssFiles, ...jsFiles };

export default defineConfig({
  root: './src',
  publicDir: './public',
  build: {
    outDir: '../dist',
    emptyOutDir: false,
    rollupOptions: {
      input: inputObject,
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/style.css';
          }
          return 'assets/[name].[ext]';
        }
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  plugins: [
    sassGlobImports(),
    VitePluginBrowserSync({
      buildWatch: {
        enable: true,
        bs: {
          port: 4869,
          proxy: 'http://localhost:59650',
          open: false,
          watch: true,
          files: ['dist/**/*']
        }
      }
    }),
  ],
  server: {
    usePolling: true
  }
});