<script>
    import HeroPost from "./heroPost.svelte";
    import Post from "./post.svelte";

    export var posts;

    var heroPost = posts[0];

    var currentHover = null;
</script>

<h2><a href="/posts">Posts</a></h2>
<div class="main">
    <div class="hero">
        <HeroPost {...heroPost} />
    </div>
    {#if posts.length > 1}
        <div class="posts">
            {#each posts.slice(1, 6) as post (post.title)}
                <Post {...post} bind:currentHover />
            {/each}
        </div>
    {/if}
</div>

<style>
    .main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1360px;
        margin: auto;
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        max-width: 1360px;
        margin: 50px auto 30px;
    }
    .hero {
        width: calc(60% - 5px);
        margin-right: 5px;
        min-width: 620px;
        flex-shrink: 0;
        margin-bottom: 15px;
    }
    .posts {
        width: calc(40% - 5px);
        margin-left: 5px;
        margin-top: -10px;
    }
    @media (max-width: 1160px) {
        .hero {
            width: calc(100% - min(120px, 10%));
            margin: 0 min(60px, 5%);
            min-width: initial;
            margin-bottom: 15px;
        }
        h2 {
            width: calc(100% - min(120px, 10%));
            margin: 10px min(60px, 5%) 20px;
        }
        .posts {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: calc(100% - min(120px, 10%));
            margin: 0 min(60px, 5%);
            margin-top: 10px;
        }
        :global(main .main > .posts > .post) {
            padding-left: 10px;
            padding-right: 10px;
        }
    }
    @media (max-width: 1020px) {
        :global(main .main > .posts > .post) {
            padding-left: 0px;
            padding-right: 0px;
        }
    }
</style>