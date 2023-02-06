import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: { port: 8080 },
	serviceWorker: {
		register: false,
	}
};

export default config;
