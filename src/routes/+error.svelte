<script>
    import { page } from '$app/stores';
    import { dev } from '$app/environment';
    import Button from "$lib/components/button.svelte";
    import HeroPost from "$lib/components/heroPost.svelte";
    import Post from "$lib/components/post.svelte";

    let currentHover;

    console.error($page.error);

    function loadPosts() {
        let posts = fetch("/api/posts.json").then(t => t.json()).catch(t => []);
        return posts;
    }
</script>

<h1 class="text-center">
    {#if $page.status == 404}
        404 - Page Not Found
    {:else}
        {$page.status} - {$page.error.message}
        {#if dev}
            <pre><code>{$page.error.stack}</code></pre>
        {/if}
    {/if}
</h1>

<!-- HTML Entity encoded email -->
<p class="text-center">I'm sorry for that. If this is a repeated problem, try contacting me (me@danbulant.eu)</p>

<div class="flex justify-center">
    <Button href="/">Go to my home page</Button>
</div>

{#await loadPosts() then posts}
{#if posts && posts.length > 0}
    <div class="my-4 separator text-big">OR</div>

    <main>    
        <h2 class="text-center">
            Read one of the blog posts
        </h2>

        <HeroPost {...posts[0]} />
    
        <hr>
        {#each posts.slice(1, 6) as post (post.title)}
            <Post {...post} bind:currentHover />
        {/each}
    </main>
{/if}
{:catch error}
<!-- Couldn't load -->
{/await}

<style>
    .flex {
        display: flex;
    }
    .justify-center {
        justify-content: center;
    }
    .text-center {
        text-align: center;
    }
    .text-big {
        font-size: 1.5em;
    }
    .my-4 {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    main {
        max-width: 700px;
        margin: auto;
        padding: 0 20px;
    }

    .separator {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .separator::before,
    .separator::after {
        content: "";
        flex: 1;
        max-width: 100px;
        border-bottom: 1px solid #000;
    }
    :global(.dark .separator::before, .dark .separator::after) {
        border-bottom-color: white;
    }

    .separator:not(:empty)::before {
        margin-right: 0.25em;
    }

    .separator:not(:empty)::after {
        margin-left: 0.25em;
    }
</style>
