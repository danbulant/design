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
    <meta property="og:article:tag" content={categories && categories.join(" ") || ""} />
    {#if bigThumbnail}
        <meta property="og:image" content={bigThumbnail} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
    {/if}
    {#if thumbnail}
        <meta property="og:image" content={thumbnail} />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
    {/if}
</svelte:head>

<main class:dark={$darkmode} class="post-layout">
    <span><a href="/posts">Posts</a> /</span>
    <h1>{title}</h1>
    <span>Written {dt.toRelativeCalendar()} ({dt.toLocaleString(DateTime.DATE_FULL)})</span>
    <slot />
    <noscript>Although the page mostly works without Javascript, you won't be able to comment. Also, I acknowledge the privacy flaws, but Javascript is a fundamental part of modern web, and shouldn't be disabled. Maybe use an adblock instead of disabling it for everything?</noscript>
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
    Daniel Bulant - Blog posts CC-BY-SA (unless otherwise specified)
</footer>

<style>
    :global(body .post-layout a) {
        color: rgb(4, 192, 192);
    }
    :global(body .post-layout a:hover) {
        color: rgb(2, 218, 218);
    }
    :global(body .post-layout table) {
        border-spacing: 0;
    }
    :global(body .post-layout table thead tr th:first-child) {
        border-top-left-radius: 5px;
    }
    :global(body .post-layout table thead tr th:last-child) {
        border-top-right-radius: 5px;
    }
    :global(body .post-layout table th) {
        border: 2px solid rgb(0, 0, 0);
        background-color: rgb(211, 211, 211);
        padding: 6px;
    }
    :global(.dark .post-layout table th) {
        border: 2px solid white;
        background-color: rgb(39, 39, 39);
    }
    :global(body .post-layout table td) {
        border: 1px solid rgb(0, 0, 0);
        padding: 4px;
    }
    :global(.dark .post-layout table td) {
        border: 1px solid white;
        padding: 4px;
    }
    :global(body .post-layout table tr:hover) {
        background: rgb(196, 196, 196);
    }
    :global(.dark .post-layout table tr:hover) {
        background: rgb(54, 54, 54);
    }
    :global(body .post-layout table tr:last-child td:first-child) {
        border-bottom-left-radius: 5px;
    }
    :global(body .post-layout table tr:last-child td:last-child) {
        border-bottom-right-radius: 5px;
    }
    :global(body .post-layout blockquote) {
        position: relative;
        margin-inline-start: 40px;
        font-style: italic;
    }
    :global(body .post-layout blockquote::before) {
        left: -40px;
        position: absolute;
        height: 100%;
        width: 5px;
        border-radius: 5px;
        background: rgb(51,51,51);
        content: "";
    }
	main {
        margin: 0 auto;
        max-width: 800px;
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