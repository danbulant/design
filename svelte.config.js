import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import remarkTwemoji from 'remark-twemoji';
import remarkGfm from 'remark-gfm';
import remarkExtendedTable from 'remark-extended-table';
import rehypeKatexSvelte from "rehype-katex-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			precompress: true
		}),
		vite: {
			clearScreen: false
		}
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
			},
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
				rehypeKatexSvelte
			],
			remarkPlugins: [
				remarkGfm,
				remarkMath,
				remarkTwemoji,
				remarkExtendedTable
			]
		})
	]
};

export default config;
