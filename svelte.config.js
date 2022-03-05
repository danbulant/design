import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			precompress: true
		})
	},
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				_: "./src/lib/layouts/post.svelte"
			},
			smartypants: {
				quotes: false,
				backticks: "all"
			}
		})
	]
};

export default config;
