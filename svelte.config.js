import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import remarkTwemoji from 'remark-twemoji';
import remarkGfm from 'remark-gfm';
import remarkExtendedTable from 'remark-extended-table';
import rehypeKatexSvelte from "rehype-katex-svelte";
import { prettyCode } from './remark/code.js';
import { rehypeEscapeHighlight, remarkEscapeInlineCode, remarkUnescapeHighlight } from './remark/unescapehighlight.js';

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
		mdsvex({
			extensions: ['.md'],
			layout: {
				_: "./src/lib/layouts/post.svelte"
			},
			smartypants: {
				quotes: false,
				backticks: "all"
			},
            highlight: false,
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
				rehypeKatexSvelte,
                rehypeEscapeHighlight
			],
			remarkPlugins: [
				remarkGfm,
				remarkMath,
				remarkTwemoji,
				remarkExtendedTable,
                remarkUnescapeHighlight,
                prettyCode,
                remarkEscapeInlineCode
			]
		})
	]
};

export default config;
