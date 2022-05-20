<script context="module">
	/** @type {import('./index').Load} */
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
    import darkmode from "$lib/stores/darkmode";
	import { flip } from 'svelte/animate';

    var currentHover = null;
    export var posts;

    var tags = posts && posts.map(t => t.categories).flat().filter((t, i, a) => a.indexOf(t) == i).sort();

    var selectedTags = [];

    function toggle(tag) {
        if(selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t != tag);
        } else {
            selectedTags.push(tag);
            selectedTags = selectedTags;
        }
    }

    var filteredPosts = selectedTags ? posts.slice(1).filter(post => !selectedTags.length || selectedTags.find(tag => post.categories.includes(tag))) : posts.slice(1);
    $: filteredPosts = selectedTags ? posts.slice(1).filter(post => !selectedTags.length || selectedTags.find(tag => post.categories.includes(tag))) : posts.slice(1);
</script>

<svelte:head>
	<title>Blog - Daniel Bulant</title>
	<link href="/posts/rss.xml" type="application/rss+xml" rel="alternate" title="Blog posts - RSS" />
	<meta name="description" content="My personal blog about work, programming and fun stuff.">
    <meta property="og:site_name" content="Daniel Bulant"/>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="profile" />
    <meta property="og:profile:first_name" content="Daniel" />
    <meta property="og:profile:last_name" content="Bulant" />
    <meta property="og:profile:username" content="danbulant" />
    <meta property="og:profile:gender" content="male" />
</svelte:head>

<div class="posts" class:dark={$darkmode}>
    <h1>Posts</h1>

    {#if tags}
        <div class="tags">
            {#each tags as tag}
                <div class="tag" class:selected={selectedTags.includes(tag)} on:click={() => toggle(tag)}>
                    {tag}
                </div>
            {/each}
        </div>
    {/if}

    <hr>

    {#if !selectedTags.length || selectedTags.find(tag => posts[0].categories.includes(tag))}
        <HeroPost {...posts[0]} />

        <hr>
    {/if}


    {#each filteredPosts as post (post.title)}
        <div animate:flip={{ duration: 250 }}>
            <Post {...post} bind:currentHover />
        </div>
    {/each}

    <small>There's also RSS feed available <a href="/posts/rss.xml">here</a>.</small>
</div>

<style>
    .posts {
        margin: auto;
        max-width: 700px;
        padding: 0 20px;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    .dark .tag {
        background: rgb(77, 77, 77);
    }
    .tag {
        background:rgb(173, 173, 173);
        padding: 5px 10px;
        border-radius: 99px;
        cursor: pointer;
        user-select: none;
    }
    .dark .tag.selected {
        background: rgb(0, 108, 170);
    }
    .tag.selected {
        background: rgb(0, 162, 255);
    }
    h1 {
        margin: 0;
        padding: 0;
    }
    hr {
        height: 1px;
        border: none;
        background: black;
    }
    .dark hr {
        background: white;
    }
    small {
        display: block;
        text-align: center;
        width: 100%;
        margin: 30px 0;
    }
    small a {
        color: rgb(4, 192, 192)
    }
</style>