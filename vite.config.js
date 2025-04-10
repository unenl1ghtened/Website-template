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
  base: '/Website-template/',
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
    minify: false, // Отключаем минификацию JS и CSS
    rollupOptions: {
      input: {
        main: './src/index.html',
      },
      output: {
        entryFileNames: 'assets/js/[name].js', // Размещение JS в папке assets/js/
        chunkFileNames: 'assets/js/[name].js', // Размещение чанков в папке assets/js/
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpg|jpeg|gif|svg)$/i.test(assetInfo.name)) {
            return 'assets/images/[name][extname]'; // Изображения в assets/images/
          }
          if (/\.(woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name][extname]'; // Шрифты в assets/fonts/
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return 'assets/css/[name][extname]'; // CSS в assets/css/
          }
          return 'assets/[name][extname]'; // Для остальных файлов
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Все сторонние модули будут в папке vendor
          }
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
