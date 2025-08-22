import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import autpImport from 'unplugin-auto-import/vite'

export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		autpImport({
			imports: ['vue', 'vue-router'],
			dirs: ['./src'],
			dts: './src/auto-imports.d.ts',
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
})
