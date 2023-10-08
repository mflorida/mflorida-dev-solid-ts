import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  base: './',
  css: {
    transformer: 'postcss',
    modules: {
      scopeBehaviour: 'local'
    },
    postcss: {
      map: true
    }
  }
});
