<script>
    import darkmode from "$lib/stores/darkmode";
    import { DateTime } from "luxon";

    export let title;
    export let date;
    export let description;
    export let categories;
    export let bigThumbnail;
    export let thumbnail;

    let dt = DateTime.fromISO(date);
    $: dt = DateTime.fromISO(date);
</script>

<svelte:head>
	<title>{title} - Daniel Bulant</title>
	<meta name="description" content={description}>
    <meta property="og:title" content={title}/>
    <meta property="og:site_name" content="Daniel Bulant"/>
    <meta property="og:locale" content="en_US" />
	<meta name="og:description" content={description}>
    <meta property="og:type" content="article" />
    <meta property="og:article:published_time" content={date} />
    <meta property="og:article:author" content="Daniel Bulant" />
    <meta property="og:article:tag" content={categories.join(" ")} />
    <meta property="og:image" content={bigThumbnail} />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="400" />
    <meta property="og:image" content={thumbnail} />
    <meta property="og:image:width" content="256" />
    <meta property="og:image:height" content="256" />
</svelte:head>

<main class:dark={$darkmode} class="post-layout">
    <span><a href="/posts">Posts</a> /</span>
    <h1>{title}</h1>
    <span>Written {dt.toRelativeCalendar()} ({dt.toLocaleString(DateTime.DATE_FULL)})</span>
    <slot />
    <script src="https://utteranc.es/client.js"
        repo="danbulant/design"
        issue-term="pathname"
        label="comment"
        theme="github-{$darkmode ? "dark" : "light"}"
        crossorigin="anonymous"
        async>
    </script>
</main>

<hr class:dark={$darkmode}>

<footer>
    Daniel Bulant - Blog posts CC-BY-SA 
</footer>

<style>
    :global(body .post-layout a) {
        color: rgb(4, 192, 192);
    }
    :global(body .post-layout a:hover) {
        color: rgb(2, 218, 218);
    }
	main {
        margin: 0 auto;
        max-width: 700px;
        padding: 0 20px 20px;
	}
    h1 {
        padding: 0 0 15px;
    }
    span {
        color: gray;
    }
    footer {
        width: 100%;
        text-align: center;
        padding: 20px 0 40px;
    }
    hr.dark {
        border-color: #999;
    }
</style>