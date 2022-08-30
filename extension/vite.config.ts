import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest';

// https://vitejs.dev/config/
export default defineConfig({
	/*resolve: {
		alias: {
			'react/jsx-runtime': 'react/jsx-runtime.js'
		}
	},*/
	optimizeDeps: {
		include: ['react/jsx-runtime'],
	},
	plugins: [
		react({ jsxRuntime: 'classic' }),
		crx({ manifest }),
	],
	server: {
		watch: {
			usePolling: true,
			useFsEvents: true,
		},
		host: true,
	}
});
