<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ error, status }) {
		let response;
        try {
            response = await fetch("/api/posts.json");
        } catch(e) {}
        return {
            props: {
                status,
                error,
				posts: response && response.ok && (await response.json())
            },
        };
    }
</script>

<script>
    import Button from "$lib/components/button.svelte";
    import HeroPost from "$lib/components/heroPost.svelte";
    import Post from "$lib/components/post.svelte";

    export let status;
    export let error;
    export let posts;
    let currentHover;

    console.error(error);
</script>

<h1 class="text-center">
    {#if status == 404}
        404 - Page Not Found
    {:else}
        {status} - {error.message}
    {/if}
</h1>

<!-- HTML Entity encoded email -->
<p class="text-center">I'm sorry for that. If this is a repeated problem, try contacting me (&#x64;&#x61;&#x6E;&#x62;&#x75;&#x6C;&#x61;&#x6E;&#x74;&#x40;&#x64;&#x61;&#x6E;&#x62;&#x75;&#x6C;&#x61;&#x6E;&#x74;&#x2E;&#x65;&#x75;)</p>

<div class="flex justify-center">
    <Button href="/">Go to my home page</Button>
</div>

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
