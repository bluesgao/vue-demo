import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //导入node的path模块

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') //设置路径别名
    }
  }
})


