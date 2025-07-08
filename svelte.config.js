import adapter from '@sveltejs/adapter-static';
import { mdsvexrs } from 'mdsvexrs'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			precompress: true
		}),
        prerender: {
            origin: "https://danbulant.eu",
            handleMissingId: "warn"
        }
	},
	extensions: ['.svelte', '.md'],

	preprocess: [
        mdsvexrs({ layout: "$lib/layouts/post.svelte", customTags: ['a'] })
	]
};

export default config;
