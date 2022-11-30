import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libCss()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      name: 'VueAntdLayout',
      fileName: (format) => `vue-antd-layout.${format}.js`
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue', 'ant-design-vue'],
      output: {
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'antd',
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 6066,
    open: true,
  }
});
