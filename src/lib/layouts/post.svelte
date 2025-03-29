<script context="module">
    // module context is used for when something else imports this file.
    // Here, it's used to have custom components for certain elements in blog posts.
    import span from "../components/posts/span.svelte";
    import code from "../components/posts/code.svelte";
    import a from "../components/posts/a.svelte";
    export { span, code, a };
</script>

<script>
    import darkmode from "$lib/stores/darkmode";
    import { DateTime } from "luxon";

    export let title;
    export let date;
    export let dateUpdated;
    export let description;
    export let categories;
    export let bigThumbnail;
    export let thumbnail;

    let dt = DateTime.fromISO(date);
    $: dt = DateTime.fromISO(date);

    let dtu = dateUpdated && DateTime.fromISO(dateUpdated);
    $: dtu = dateUpdated && DateTime.fromISO(dateUpdated);
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

<main class="post-layout">
    <span><a href="/posts">Posts</a> /</span>
    <h1>{title}</h1>
    <div class="flex justify-between flex-wrap">
        <span>Written {dt.toRelativeCalendar()} ({dt.toLocaleString(DateTime.DATE_FULL)})</span>
        {#if dtu}
            <span>Updated {dtu.toRelativeCalendar()} ({dtu.toLocaleString(DateTime.DATE_FULL)})</span>
        {/if}
        <!-- <span>{categories.join(", ")}</span> -->
    </div>
    <slot />
    <noscript><hr>Although the page mostly works without Javascript, you won't be able to comment. Also, I acknowledge the privacy flaws, but Javascript is a fundamental part of modern web, and shouldn't be disabled. Maybe use an adblock instead of disabling it for everything?</noscript>
    <script src="https://utteranc.es/client.js"
        repo="danbulant/design"
        issue-term="pathname"
        label="comment"
        theme="github-{$darkmode ? "dark" : "light"}"
        crossorigin="anonymous"
        async>
    </script>
</main>

<hr>

<footer>
    Daniel Bulant - Blog&nbsp;posts CC-BY-SA (unless&nbsp;otherwise&nbsp;specified)
</footer>

<style lang="postcss">
    :global(body .post-layout a) {
        color: rgb(4, 192, 192);
    }
    :global(body .post-layout a:hover) {
        color: rgb(2, 218, 218);
    }
    :global(body .post-layout table) {
        border-spacing: 0;
    }
    :global(body .post-layout table, body .post-layout table thead, body .post-layout table thead tr) {
        @apply rounded;
    }
    :global(body .post-layout table thead tr th:first-child) {
        border-top-left-radius: 5px;
    }
    :global(body .post-layout table thead tr th:last-child) {
        border-top-right-radius: 5px;
    }
    :global(body .post-layout table th) {
        border: 1px solid rgb(0, 0, 0);
        background-color: rgb(211, 211, 211);
        padding: 6px;
    }
    :global(.dark .post-layout table th) {
        border: 1px solid rgb(163, 163, 163);
        background-color: rgb(39, 39, 39);
    }
    :global(body .post-layout table td) {
        border: 1px solid rgb(0, 0, 0);
        padding: 4px;
    }
    :global(.dark .post-layout table td) {
        border: 1px solid rgb(146, 146, 146);
    }
    :global(body .post-layout table tr:hover) {
        background: rgb(196, 196, 196);
    }
    :global(.dark .post-layout table tr:hover) {
        background: rgb(48, 48, 48);
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
    :global(body .post-layout details summary) {
        user-select: none;
    }
    :global(body .post-layout h2) {
        @apply text-3xl font-bold my-0.8em;
    }
    :global(body .post-layout h3) {
        @apply text-2xl font-bold my-0.6em;
    }
    :global(body .post-layout h4) {
        @apply text-xl font-bold my-0.4em;
    }
    :global(body .post-layout p) {
        @apply my-1em;
    }
    :global(body .post-layout p img) {
        @apply inline;
    }
    :global(body .post-layout pre) {
        @apply rounded-lg bg-dark-400 p-4 my-4 max-w-full overflow-auto;
    }
    :global(.dark .post-layout code) {
        @apply rounded-lg bg-dark-400 p-1;
    }
    :global(body .post-layout code) {
        @apply rounded-lg bg-dark-400/03 p-1 transition-colors duration-300;
    }
    :global(body .post-layout ul) {
        @apply list-disc list-inside;
    }
    :global(body .post-layout ul li) {
        @apply my-0.5;
    }
	main {
        @apply m-auto max-w-3xl p-4 py-6;
	}
    h1 {
        @apply text-4xl font-bold p-0 pb-0.25;
    }
    span {
        color: gray;
    }
    footer {
        width: 100%;
        text-align: center;
        padding: 20px 0 40px;
    }
    :global(.dark) hr {
        border-color: #999;
    }
</style>