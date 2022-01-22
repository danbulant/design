<script>
    import HeroPost from "./heroPost.svelte";
    import Post from "./post.svelte";

    var heroPost = {
        title: "Test hero post",
        author: "Daniel Bulant",
        authorIcon: "/logo.png",
        thumbnail: "https://picsum.photos/800/400?random=1",
        categories: ["test"],
        description: "Test description",
        date: "16-01-2021"
    };

    var posts = [{
        title: "Test post 1",
        author: "Daniel Bulant",
        authorIcon: "/logo.png",
        thumbnail: "https://picsum.photos/150?random=1",
        categories: ["test"],
        date: "16-01-2021"
    }, {
        title: "Test post 2",
        author: "Daniel Bulant",
        authorIcon: "/logo.png",
        thumbnail: "https://picsum.photos/150?random=2",
        categories: ["test"],
        date: "16-01-2021"
    }, {
        title: "Test post 3",
        author: "Daniel Bulant",
        authorIcon: "/logo.png",
        thumbnail: "https://picsum.photos/150?random=3",
        categories: ["test"],
        date: "16-01-2021"
    }, {
        title: "Test post 4",
        author: "Daniel Bulant",
        authorIcon: "/logo.png",
        thumbnail: "https://picsum.photos/150?random=4",
        categories: ["test"],
        date: "16-01-2021"
    }];

    var currentHover = null;
</script>

<h2>Posts</h2>
<div class="main">
    <div class="hero">
        <HeroPost {...heroPost} />
    </div>
    <div class="posts">
        {#each posts as post (post.title)}
            <Post {...post} bind:currentHover />
        {/each}
    </div>
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
        font-weight: 500;
        max-width: 1360px;
        margin: auto;
        margin-top: 50px;
    }
    .hero {
        width: calc(60% - 5px);
        margin-right: 5px;
        min-width: 620px;
        flex-shrink: 0;
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
        }
        h2 {
            width: calc(100% - min(120px, 10%));
            margin: 0 min(60px, 5%);
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
            width: auto;
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