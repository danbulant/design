<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const response = await fetch("/api/posts.json");
	
		return {
			props: {
				posts: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
    import HeroPost from "$lib/components/heroPost.svelte";
import Post from "$lib/components/post.svelte";

    var currentHover = null;
    export var posts;
</script>

<svelte:head>
	<title>Blog - Daniel Bulant</title>
	<meta name="description" content="My personal blog about work, programming and fun stuff.">
</svelte:head>

<div class="posts">
    <h1>Posts</h1>

    <HeroPost {...posts[0]} />

    {#each posts.slice(1) as post (post.title)}
        <Post {...post} bind:currentHover />
    {/each}
</div>

<style>
    .posts {
        margin: auto;
        max-width: 700px;
        padding: 0 20px;
    }
    h1 {
        margin: 0;
        padding: 0;
    }
</style>