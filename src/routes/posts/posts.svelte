<script>
    import HeroPost from "$lib/components/heroPost.svelte";
    import Post from "$lib/components/post.svelte";
	import { flip } from 'svelte/animate';

    var currentHover = null;
    export var posts
    export var notes

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

    export let postsActive = true;

    var filteredPosts = selectedTags ? posts.slice(1).filter(post => !selectedTags.length || selectedTags.find(tag => post.categories.includes(tag))) : posts.slice(1);
    $: filteredPosts = selectedTags ? posts.slice(1).filter(post => !selectedTags.length || selectedTags.find(tag => post.categories.includes(tag))) : posts.slice(1);
</script>

<svelte:head>
	<title>{postsActive ? 'Blog' : 'Notes'} - Daniel Bulant</title>
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


<div class="parent md:w-max w-full md:flex max-w-screen">
    <div class="tabs md:hidden flex">
        <div class="tab" class:active={postsActive} on:click={() => postsActive = true}>Posts</div>
        <div class="tab" class:active={!postsActive}  on:click={() => postsActive = false}>Notes</div>
    </div>
    
    <div class="posts md:block" class:hidden={!postsActive}>
        <h1 class="hidden md:block">
            Posts
            <small>
                <a href="/posts/rss.xml" class="rss">
                    <img src="/rss-icon.svg" alt="RSS icon" />
                    RSS
                </a>
            </small>
        </h1>
    
        {#if !selectedTags.length || selectedTags.find(tag => posts[0].categories.includes(tag))}
            <HeroPost {...posts[0]} />
    
            <hr>
        {/if}
    
    
        {#each filteredPosts as post (post.title)}
            <div animate:flip={{ duration: 250 }}>
                <Post {...post} bind:currentHover />
            </div>
        {/each}
    </div>

    <div class="notes md:block" class:hidden={postsActive}>
        <h2 class="md:text-2xl">Notes</h2>
        <p>Collection of short notes, write-ups and not-yet-posts.</p>

        <ul>
            {#each notes as note}
                <li>
                    <a href={note.path}>
                        {note.title}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style lang="postcss">
    .tabs {
        @apply gap-5;
    }
    .tab {
        @apply text-lg cursor-pointer text-gray-500;
    }
    .tab.active {
        @apply text-white font-bold border-b select-none;
    }
    ul {
        @apply list-disc pl-5 my-4;
    }
    li {
        @apply mb-2;
    }
    .parent {
        @apply pt-10 m-auto px-5 gap-5;
    }
    .posts {
        @apply max-w-2xl;
    }
    h2 {
        @apply m-0 mb-1 p-0 font-bold text-3xl;
    }
    @media (min-width: 42rem) {
        .posts {
            @apply w-2xl;
        }
    }
    h1 {
        @apply m-0 mb-1 p-0 font-bold text-3xl;
    }
    hr {
        @apply mt-1;
        height: 1px;
        border: none;
        background: black;
    }
    :global(.dark) hr {
        background: rgb(136, 136, 136);
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
        @apply pl-4 text-sm;
    }
    .rss img {
        @apply inline mr-1 w-4 h-4;
    }
</style>