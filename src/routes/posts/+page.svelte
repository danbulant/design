<script>
    import HeroPost from "$lib/components/heroPost.svelte";
    import Post from "$lib/components/post.svelte";
    import darkmode from "$lib/stores/darkmode";
	import { flip } from 'svelte/animate';

    var currentHover = null;
    export var data;
    var posts = data.posts;
    $: posts = data.posts;

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


<div class="parent md:flex max-w-screen" class:dark={$darkmode}>
    <h1 class="md:hidden">Posts</h1>

    {#if tags}
        <div class="tags md:flex-col">
            {#each tags as tag}
                <div class="tag" class:selected={selectedTags.includes(tag)} on:click={() => toggle(tag)}>
                    {tag}
                </div>
            {/each}
            <a href="/posts/rss.xml" class="rss hidden flex items-center w-full md:block">
                <img src="/rss-icon.svg" alt="RSS icon" class="w-6 h-6 inline" />
                RSS
            </a>
        </div>
    {/if}
    
    <div class="posts">
        <h1 class="hidden md:block">Posts</h1>
    
        {#if !selectedTags.length || selectedTags.find(tag => posts[0].categories.includes(tag))}
            <HeroPost {...posts[0]} />
    
            <hr>
        {/if}
    
    
        {#each filteredPosts as post (post.title)}
            <div animate:flip={{ duration: 250 }}>
                <Post {...post} bind:currentHover />
            </div>
        {/each}
    
        <small class="md:hidden block">There's also RSS feed available <a href="/posts/rss.xml">here</a>.</small>
    </div>
</div>

<style>
    .parent {
        @apply pt-10 w-max m-auto px-5 gap-5;
    }
    .posts {
        @apply max-w-2xl;
    }
    @media (min-width: 42rem) {
        .posts {
            @apply w-2xl;
        }
    }
    .tags {
        @apply flex flex-wrap gap-2 mt-2 mb-3;
    }
    .dark .tag {
        background: rgb(77, 77, 77);
    }
    .tag {
        @apply rounded-full cursor-pointer select-none px-4 py-2;
        background: rgb(173, 173, 173);
        text-transform: capitalize;
    }
    .dark .tag.selected {
        background: rgb(0, 108, 170);
    }
    .tag.selected {
        background: rgb(0, 162, 255);
    }
    h1 {
        @apply m-0 mb-1 p-0 font-bold text-3xl;
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
        text-align: center;
        width: 100%;
        margin: 30px 0;
    }
    small a, .rss {
        color: rgb(4, 192, 192)
    }
    .rss {
        @apply pl-4;
    }
</style>