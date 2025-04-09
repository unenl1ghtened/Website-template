/* eslint-disable prettier/prettier */
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  root: './src',
  base: './',
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  publicDir: './src/assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './src/index.html',
        pricing: './src/pricing.html',
        contact: './src/contact.html',
        services: './src/services.html',
        collaborate: './src/collaborate.html',
        blog: './src/blog.html',
      },
      output: {
        entryFileNames: 'js/[name].js', // JS в dist/js/
        chunkFileNames: 'js/[name].js', // Остальные JS в dist/js/
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpg|jpeg|gif|svg)$/i.test(assetInfo.name)) {
            return 'images/[name][extname]'; // Картинки в dist/images/
          }
          if (/\.(woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
            return 'fonts/[name][extname]'; // Шрифты в dist/fonts/
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return 'css/[name][extname]'; // CSS в dist/css/
          }
          return 'assets/[name][extname]'; // Остальное в dist/assets/
        },
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
