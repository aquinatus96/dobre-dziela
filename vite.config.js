import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, '/src')
            }
        ]
    }
})
