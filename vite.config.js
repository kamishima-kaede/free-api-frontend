import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 8081,
    open: true
  },
  build: {
    cssCodeSplit: false
  },
  // proxy: {
  //   // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
  //   '/foo': 'http://localhost:4567',
  //   // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
  //   '/api': {
  //     target: 'http://jsonplaceholder.typicode.com',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ''),
  //   },
  //   // 正则表达式写法：http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
  //   '^/fallback/.*': {
  //     target: 'http://jsonplaceholder.typicode.com',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/fallback/, ''),
  //   },
  //   // 使用 proxy 实例
  //   '/api': {
  //     target: 'http://jsonplaceholder.typicode.com',
  //     changeOrigin: true,
  //     configure: (proxy, options) => {
  //       // proxy 是 'http-proxy' 的实例
  //     }
  //   },
  //   // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
  //   '/socket.io': {
  //     target: 'ws://localhost:5174',
  //     ws: true,
  //   },
  // },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
